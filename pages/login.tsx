import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import { Spinner } from "flowbite-react";
import Head from "next/head";

interface LoginProps {
	setStudentInfo: any;
	client: any;
	setClient: (client: any) => void;
	login: (username: string, password: string, save: boolean) => any;
}

export default function Login({
	setClient,
	login,
	setStudentInfo,
	client,
}: LoginProps) {
	const router = useRouter();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [checkbox, setCheckbox] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		await setLoading(true);
		let success = await login(username, password, checkbox);
		await setPassword("");
		if (success) {
			await setUsername("");
		}
		await setLoading(false);
	};

	useEffect(() => {
		if (localStorage.getItem("remember") === "true") {
			setCheckbox(true);
		}
	}, []);

	useEffect(() => {
		if (client) {
			router.push("/schedule");
		}
	}, []);

	return (
		<div>
			<Head>
				<title>Login</title>
			</Head>
			<div className="flex flex-col items-center justify-center pb-6 py-8 px-6 mx-auto md:pt-28 lg:pb-0">
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Sign in to your account
						</h1>
						<form className="space-y-4 md:space-y-6">
							<div>
								<label
									htmlFor="email"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Your ID
								</label>
								<input
									type="text"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="123456"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Password
								</label>
								<input
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									placeholder="????????????????????????"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required
								/>
							</div>
							<div className="flex items-center justify-between">
								<div className="flex items-start">
									<div className="flex items-center h-5">
										<input
											id="remember"
											aria-describedby="remember"
											type="checkbox"
											checked={checkbox}
											onChange={(e) => setCheckbox(e.target.checked)}
											className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
											required
										/>
									</div>

									<div className="ml-3 text-sm">
										<label
											htmlFor="remember"
											className="text-gray-500 dark:text-gray-300"
										>
											Remember me
										</label>
									</div>
								</div>
							</div>

							<button
								onClick={handleSubmit}
								disabled={loading}
								className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
							>
								Sign in
								{loading && (
									<div className="pl-4 inline-block">
										<Spinner color="warning" />
									</div>
								)}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
