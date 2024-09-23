import ThemeToggle from "@/components/theme-toggle";
import Link from "next/link";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<div>
					<div className="text-5xl"><span className="font-black">ability</span><span>apps</span></div>
					<div className="text-xl">giving <span className="underline">you</span> the ability to build</div>
				</div>
			
				<ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
					<li><Link href="/weekability" className="hover:underline">financial health</Link></li>
					<li><Link href="/gains" className="hover:underline">physical health</Link></li>
					<li><Link href="/dhyana" className="hover:underline">mental health</Link></li>
					<li><Link href="/applyability" className="hover:underline">resume</Link></li>
					<li><Link href="/divvy" className="hover:underline">bill split</Link></li>
				</ol>
			</main>
			
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				<ThemeToggle />
			</footer>
		</div>
	);
}
