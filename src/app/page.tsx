import Logo from "@/components/logo";

export default function Page() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-8">
			<div className="w-full max-w-md">
				<Logo variant="small" color="foreground" />
				<h1 className="text-2xl font-bold mb-2">Hey topper! 👋🏼</h1>
				<p className="text-md mb-3">
					Leuk dat je interesse hebt om het development team van{" "}
					<a
						target="_blank"
						className="underline"
						href="getjobsdone.nl"
					>
						GetJobsDone
					</a>{" "}
					te joinen. Als het goed is heb je al een mailtje gekregen
					met een test opdracht. Binnen dit project kan je de opdracht
					maken.
				</p>
				<p className="text-md">
					Mocht je nog geen opdracht hebben gehad, neem dan even
					contact op met{" "}
					<a
						className="underline"
						href="mailto:j.fakkeldij@getjobsdone.nl"
					>
						j.fakkeldij@getjobsdone.nl
					</a>
				</p>
			</div>
		</main>
	);
}
