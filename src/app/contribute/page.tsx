import type { Metadata } from "next";
import { ContributeUpload } from "~/components/sections/ContributeUpload";
import { Footer } from "~/components/sections/Footer";
import { Navbar } from "~/components/ui/Navbar";

export const metadata: Metadata = {
	title: "Contribute | Arcterra",
	description:
		"Upload robotics video data to contribute to Arcterra's real-world AI datasets.",
};

export default function ContributePage() {
	return (
		<>
			<Navbar />
			<main className="min-h-screen px-6 py-24 md:px-12">
				<ContributeUpload />
			</main>
			<Footer />
		</>
	);
}
