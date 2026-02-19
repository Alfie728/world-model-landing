"use client";

import Uppy from "@uppy/core";
import Dashboard from "@uppy/react/dashboard";
import Tus from "@uppy/tus";
import { useEffect, useState } from "react";
import { FadeInView } from "~/components/animations/FadeInView";

import "@uppy/core/css/style.min.css";
import "@uppy/dashboard/css/style.min.css";
import "./contribute-uppy.css";

function createUppy() {
	return new Uppy({
		autoProceed: false,
	}).use(Tus, {
		endpoint: process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT ?? "/api/upload",
		chunkSize: 5 * 1024 * 1024,
		retryDelays: [0, 1000, 3000, 5000, 10000],
		parallelUploads: 3,
	});
}

export function ContributeUpload() {
	const [uppy] = useState(createUppy);

	useEffect(() => {
		const handler = (e: BeforeUnloadEvent) => {
			e.preventDefault();
		};

		const onUploadStart = () => {
			window.addEventListener("beforeunload", handler);
		};

		const onComplete = () => {
			window.removeEventListener("beforeunload", handler);
		};

		uppy.on("upload", onUploadStart);
		uppy.on("complete", onComplete);
		uppy.on("cancel-all", onComplete);

		return () => {
			window.removeEventListener("beforeunload", handler);
			uppy.off("upload", onUploadStart);
			uppy.off("complete", onComplete);
			uppy.off("cancel-all", onComplete);
		};
	}, [uppy]);

	return (
		<section className="mx-auto max-w-4xl">
			<FadeInView>
				<h2 className="text-center">
					Contribute{" "}
					<span className="text-accent-blue">Video Data</span>
				</h2>
				<p className="mx-auto mt-4 max-w-2xl text-center">
					Upload robotics video to help build planet-scale datasets for
					embodied intelligence.
				</p>
			</FadeInView>

			<FadeInView delay={0.15} className="mt-12">
				<Dashboard
					uppy={uppy}
					theme="dark"
					proudlyDisplayPoweredByUppy={false}
					note="Upload robotics video to contribute to Arcterra datasets"
					height={450}
				/>
			</FadeInView>
		</section>
	);
}
