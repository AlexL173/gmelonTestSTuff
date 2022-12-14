import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		router.push("/login");
	}, []);
	
	return (
		<div>
			<Head>
				<title>
					Grade Melon
				</title>
			</Head>
			<h1 className="font-bold">Grade Melon</h1>
			<form className="flex flex-col gap-4"></form>
		</div>
	);
}
