"use client";
import { useState } from "react";
import SideBar from "../components/SideBar";

const Home = () => {
	const [sideBar, setSideBar] = useState(true);
	const [showSettings, setShowSettings] = useState(false);
	const [prompt, setPrompt] = useState("");
	const handlePrompt = () => {
		alert(`You asked: ${prompt}`);
		setPrompt("");
	}
	return (
		<div className="h-screen w-screen flex">
			<SideBar sideBar={sideBar} setSideBar={setSideBar} showSettings={showSettings} setShowSettings={setShowSettings} />
			{sideBar && <div className='h-full w-full absolute z-5 top-0 bg-[#a5a5a514]' onClick={() => setSideBar(false)}></div>}
			{showSettings &&
				<div className='w-70 bg-[#444444f3] rounded-2xl p-2 bottom-18 left-2.5 z-30 absolute'>
					<p className='p-2 cursor-pointer hover:bg-[#81818146] rounded-xl z-40'>Settings</p>
					<p className='p-2 cursor-pointer hover:bg-[#81818146] rounded-xl z-40'>Log out</p>
				</div>
			}
			{showSettings && <div className='h-full w-full absolute z-10 top-0' onClick={() => setShowSettings(false)}></div>}
			<main className="h-full w-full">
				<div className='flex items-center gap-4 p-2'>
					<img src="menu.svg" alt="menu" className="w-7 invert cursor-pointer box-content p-1 hover:bg-[#81818146] rounded-xl" onClick={() => { setSideBar(!sideBar) }} />
					<span className="text-2xl font-semibold">Cred Saathi</span>
				</div>
				<div className='flex h-9/10 flex-col items-center justify-center'>
					<h1 className='text-4xl p-7'>Hello Jee!</h1>
					<div className='w-2/3 bg-[#303030] flex justify-between items-center rounded-4xl shadow-lg'>
						<input
							type="text"
							placeholder='Ask anything'
							value={prompt}
							onChange={(e) => setPrompt(e.target.value)}
							className='w-1/1 h-1/1 p-4 text-white focus:outline-none'
							onKeyDown={(e) => {
								if (prompt && e.key == "Enter") handlePrompt()
							}}/>
						<img
							src="arrowUp.svg"
							onClick={handlePrompt}
							className='size-10 p-2 bg-green-500 rounded-full mr-3 cursor-pointer invert' />
					</div>
				</div>
			</main>
		</div>
	)
}

export default Home