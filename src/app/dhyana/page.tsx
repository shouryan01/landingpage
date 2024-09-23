import ThemeToggle from "@/components/theme-toggle";
import Link from "next/link";

export default function Dhyana() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Link href="/" className="hover:underline">Home</Link>
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<div>
					<div className="text-5xl font-black">dhyāna</div>
					<div className="text-xl">build your mental health</div>
                    <div>(coming soon)</div>
				</div>
			</main>
			
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				<ThemeToggle />
			</footer>
		</div>
	);
}
