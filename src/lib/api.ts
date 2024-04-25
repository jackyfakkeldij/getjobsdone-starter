import Session from "@/lib/session";
import { PHASE_PRODUCTION_BUILD } from "next/dist/shared/lib/constants";

const IS_BUILDING_STATIC_PAGES =
	process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD;

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const mergeQueryParams = (baseUrl: string, queryParams: any) => {
	// Parse the base URL to check if it already has query parameters
	const urlObject = new URL(baseUrl);

	// Merge additional query parameters with existing ones
	const mergedParams = {
		...Object.fromEntries(urlObject.searchParams),
		...queryParams,
	} as const;

	const params = new URLSearchParams();

	Object.entries(mergedParams).forEach(([key, value]: any) => {
		if (Array.isArray(value)) {
			value.forEach((value, index) =>
				params.append(`${key}[${index}]`, value.toString())
			);
		} else {
			params.append(key, value.toString());
		}
	});

	urlObject.search = params.toString();
	return urlObject.toString();
};

type QueryData = {
	cache?: RequestCache;
	query?: any;
	next?: NextFetchRequestConfig;
};

const api = {
	async getHeaders() {
		let token = null;
		try {
			const session = new Session({ disableEncryption: true });
			token = await session.getAll("token");
		} catch (error) {}
		const headers: any = {
			Accept: "application/json",
			"Content-Type": "application/json",
			_Tenant: "getjobsdone",
			Device: "WEB",
		};

		if (IS_BUILDING_STATIC_PAGES) {
			headers.SitemapKey = process.env.API_SITEMAP_KEY;
		}

		if (token) {
			headers["Authorization"] = `Bearer ${token}`;
		}
		return headers;
	},
	async get(path: string, qd?: QueryData) {
		const headers = await this.getHeaders();
		const url = mergeQueryParams(`${BASE_URL}${path}`, {
			...(qd?.query || {}),
			...(IS_BUILDING_STATIC_PAGES ? { "cache-key": path } : {}),
		});
		const response = await fetch(url, {
			headers,
			cache: !qd?.next?.revalidate ? qd?.cache || "no-store" : undefined,
			next: qd?.next,
		});

		return this.handleResponse(response);
	},
	async post(path: string, data?: any) {
		const headers = await this.getHeaders();
		const response = await fetch(`${BASE_URL}${path}`, {
			method: "POST",
			headers,
			cache: "no-store",
			body: JSON.stringify(data || {}),
		});
		return this.handleResponse(response);
	},
	async patch(path: string, data: any) {
		const headers = await this.getHeaders();

		const response = await fetch(`${BASE_URL}${path}`, {
			method: "PATCH",
			headers,
			cache: "no-store",
			body: JSON.stringify(data),
		});
		return this.handleResponse(response);
	},
	async delete(path: string) {
		const headers = await this.getHeaders();

		const response = await fetch(`${BASE_URL}${path}`, {
			method: "DELETE",
			cache: "no-store",
			headers,
		});
		return this.handleResponse(response);
	},

	async handleResponse(response: Response) {
		if (![200, 201].includes(response.status)) {
			const error = await response.json();
			return {
				error: true,
				...error,
			};
		}
		return await response.json();
	},
};

export default api;
