"use client";
import { useRouter, useSearchParams } from "next/navigation";
import "./ScrollBar.css"
import { useState } from "react";

const SideBar = ({ sideBar, setSideBar, showSettings, setShowSettings }) => {
  const router = useRouter();
  const chatId = useSearchParams().get('id');

  const [showChats, setShowChats] = useState(false);
  const currUser = {
    user: "hriddhiman@xyz.com",
    dp: "/logo2.jpg",
    name: "Hriddhiman"
  }
  const myChats = [
    {
      "_id": 1,
      "title": "1. Lorem ipsum dolor sit amet, consectetur adipisicing",
      "chats": ["Hello", "Hi there! How can I assist you today?", "Can you tell me a joke?", "Sure! Why don't scientists trust atoms? Because they make up everything!"]
    },
    {
      "_id": 2,
      "title": "2. Lorem ipsum dolor sit amet, consectetur adipisicing",
      "chats": ["Hello", "Hi there! How can I assist you today?", "Can you tell me a joke?", "Sure! Why don't scientists trust atoms? Because they make up everything!"]
    },
    {
      "_id": 3,
      "title": "3. Lorem ipsum dolor sit amet, consectetur adipisicing",
      "chats": ["Hello", "Hi there! How can I assist you today?", "Can you tell me a joke?", "Sure! Why don't scientists trust atoms? Because they make up everything!"]
    },
    {
      "_id": 4,
      "title": "4. Lorem ipsum dolor sit amet, consectetur adipisicing",
      "chats": ["Hello", "Hi there! How can I assist you today?", "Can you tell me a joke?", "Sure! Why don't scientists trust atoms? Because they make up everything!"]
    },
    {
      "_id": 5,
      "title": "5. Lorem ipsum dolor sit amet, consectetur adipisicing",
      "chats": ["Hello", "Hi there! How can I assist you today?", "Can you tell me a joke?", "Sure! Why don't scientists trust atoms? Because they make up everything!"]
    },
    {
      "_id": 6,
      "title": "6. Lorem ipsum dolor sit amet, consectetur adipisicing",
      "chats": ["Hello", "Hi there! How can I assist you today?", "Can you tell me a joke?", "Sure! Why don't scientists trust atoms? Because they make up everything!"]
    },
    {
      "_id": 7,
      "title": "7. Lorem ipsum dolor sit amet, consectetur adipisicing",
      "chats": ["Hello", "Hi there! How can I assist you today?", "Can you tell me a joke?", "Sure! Why don't scientists trust atoms? Because they make up everything!"]
    },
    {
      "_id": 8,
      "title": "8. Lorem ipsum dolor sit amet, consectetur adipisicing",
      "chats": ["Hello", "Hi there! How can I assist you today?", "Can you tell me a joke?", "Sure! Why don't scientists trust atoms? Because they make up everything!"]
    },
    {
      "_id": 9,
      "title": "9. Lorem ipsum dolor sit amet, consectetur adipisicing",
      "chats": ["Hello", "Hi there! How can I assist you today?", "Can you tell me a joke?", "Sure! Why don't scientists trust atoms? Because they make up everything!"]
    },
    {
      "_id": 10,
      "title": "10. Lorem ipsum dolor sit amet, consectetur adipisicing",
      "chats": ["Hello", "Hi there! How can I assist you today?", "Can you tell me a joke?", "Sure! Why don't scientists trust atoms? Because they make up everything!"]
    },
    {
      "_id": 11,
      "title": "11. Lorem ipsum dolor sit amet, consectetur adipisicing",
      "chats": ["Hello", "Hi there! How can I assist you today?", "Can you tell me a joke?", "Sure! Why don't scientists trust atoms? Because they make up everything!"]
    },
    {
      "_id": 12,
      "title": "12. Lorem ipsum dolor sit amet, consectetur adipisicing",
      "chats": ["Hello", "Hi there! How can I assist you today?", "Can you tell me a joke?", "Sure! Why don't scientists trust atoms? Because they make up everything!"]
    },
  ]
  const Btn = ({ icon, imgWidth = 6, text }) => {
    return (
      <div className="flex gap-2 p-2 cursor-pointer items-center hover:bg-[#81818146] rounded-xl">
        <img src={icon} alt={text} className={`invert w-${imgWidth}`} />
        {text && <p>{text}</p>}
      </div>
    )
  }

  return (
    <div className={`flex flex-col fixed top-0 h-full w-75 bg-[#181818] text-white transform transition-transform duration-300 z-10 overflow-y-auto ${sideBar ? '' : '-translate-x-full'}`}>
      <div className="sticky top-0 flex gap-4 z-20 p-4 py-2 items-center">
        <div className="flex gap-4 w-full items-center">
          <img src='logo2.jpg' className="cursor-pointer size-6 rounded-sm" alt="logo" />
          <div className="text-xl font-bold">Cred Saathi</div>
        </div>
        <img src="sidebar.svg" alt="close" className="w-5 invert cursor-ew-resize box-content p-2 hover:bg-[#81818146] rounded-xl" onClick={() => { setSideBar(!sideBar) }} />
      </div>

      <div className='p-1 h-full flex flex-col justify-between transform transition-transform duration-300 ease-in-out'>
        <div className='h-full overflow-y-auto'>
          <Btn icon={'pencil.svg'} text={'New Chat'} />
          <Btn icon={'search.svg'} imgWidth={5} text={'Search Chats'} />

          <div className='p-1 px-2 flex items-center cursor-pointer gap-2 mt-4 w-full text-[#afafaf]' onClick={() => setShowChats(!showChats)}>
            <p>Your Chats</p>
            <img src="greaterthan.svg" className={`size-4 invert transition-transform ${showChats ? 'rotate-90' : ''}`} />
          </div>

          <div className={`flex flex-col max-h-60 ${showChats ? 'block' : 'hidden'}`}>
            <hr className='border-gray-700 my-2' />
            {myChats ? (
              myChats.map((prompt) => (
                <div
                  key={prompt._id}
                  onClick={() => router.push(`/home?id=${prompt._id}`)}>
                  <p className="truncate p-2 cursor-pointer hover:bg-[#81818146] rounded-xl">{prompt.title}</p>
                </div>
              ))
            ) : (
              <p>Ask Cred Saathi to look up for chats</p>
            )}
          </div>
        </div>
      </div>

      <hr className='border-gray-700 mb-2' />

      <div className='flex items-center cursor-pointer gap-2 p-2 hover:bg-[#81818146] rounded-xl z-40 m-2 mt-0' onClick={() => setShowSettings(!showSettings)}>
        <img src={currUser.dp} alt="dp" className='w-6 rounded-full' />
        <p>{currUser.name}</p>
      </div>
    </div>
  )
}

export default SideBar