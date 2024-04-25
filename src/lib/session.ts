import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const options: any = {
	password: new TextEncoder().encode(process.env.SECRET_SESSION_PASSWORD),
	cookieOptions: {
		secure: process.env.NODE_ENV === "production" ? true : false,
	},
};

export async function encrypt(payload: any) {
	return await new SignJWT(payload)
		.setProtectedHeader({ alg: "HS256" })
		.setIssuedAt()
		.setExpirationTime("15 minutes from now")
		.sign(options.password);
}

export async function decrypt(input: string): Promise<any> {
	const { payload } = await jwtVerify(input, options.password, {
		algorithms: ["HS256"],
	});
	return payload;
}

interface InitializedOptions {
	disableEncryption?: boolean;
	server?: {
		req: NextRequest;
		res: NextResponse;
	};
}

class Session {
	public client: any = null; // Initialize client to null
	public data: any = {};
	public name?: string;

	constructor(initializedOptions?: InitializedOptions) {
		this.client = {
			...(initializedOptions || {}),
		};
	}

	async init(name: string): Promise<void> {
		const cookieStore = cookies();
		const cookie = cookieStore.get(name);
		if (cookie) {
			if (this.client.disableEncryption) {
				this.data[name] = cookie.value;
			} else {
				try {
					this.data[name] = await decrypt(cookie.value);
				} catch (error) {
					this.data[name] = {};
				}
			}
		} else {
			this.data[name] = {};
		}
	}

	async set(name: string, data: any): Promise<this> {
		if (!this.data[name]) {
			await this.init(name);
		}

		this.data = {
			...(this?.data || {}),
			[name]: data,
		};

		return this;
	}

	async save(
		name: string,
		options?: {
			expires?: number;
			disableEncryption?: boolean;
		}
	): Promise<void | NextResponse> {
		const expires = options?.expires || Date.now() + 1000 * 60 * 15; // 15 minutes
		const data =
			!this.client.disableEncryption && !options?.disableEncryption
				? await encrypt(this.data[name])
				: this.data[name];

		const domain =
			process.env.NODE_ENV === "production"
				? ".getjobsdone.nl"
				: ".getjobsdone.test";

		//Handle server save cookies
		if (this.client?.server) {
			const response = this.client.server.res;

			response.cookies.set(name, data, {
				expires,
				domain,
			});

			this.client.server.res = response;

			return this.client.server.res;
		}

		cookies().set(name, data, {
			expires,
			domain,
			path: "/",
		});
	}

	async get(name: string, key: string): Promise<any> {
		if (!this.data[name]) {
			await this.init(name);
		}
		return this.data[name][key];
	}

	async getAll(name: string): Promise<any> {
		await this.init(name);
		return this?.data[name] || {};
	}

	reset(name: string): void | null | NextResponse {
		//Handle server save cookies
		const request = this.client?.server?.req;
		if (request) {
			const current = request.cookies.get(name);
			if (!current) return null;

			const response = this.client.server.res;

			response.cookies.delete(name);

			this.client.server.res = response;

			this.data[name] = undefined;

			return this.client.server.res;
		}

		cookies().delete(name);
		this.data[name] = {};
	}

	getResponse(): null | NextResponse {
		if (!this.client.server?.res) return null;
		return this.client.server.res;
	}
}

export default Session;
