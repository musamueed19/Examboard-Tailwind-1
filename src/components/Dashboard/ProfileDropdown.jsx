'use state'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProfileDropdown({setIsLogged}) {
  const [isOpen, setIsOpen] = useState(false);

  
function profilePopupHandler(isOpen) {
  setIsOpen(isOpen);
}

  return (
    <div>
      <button
        onClick={() => {
          profilePopupHandler(!isOpen);
        }}
        className="bg-[#d2d2d2]/90 rounded-full w-fit py-2 px-[0.7rem] hover:bg-[#a7a7a7]"
      >
        <Image src="/profile.svg" width={30} height={30} alt="profile icon" />
      </button>
      {isOpen && (
        <div className="w-fit h-fit flex flex-col absolute top-16 right-3 border-2 border-black/40 rounded-md bg-white">
          <Link href='/user/changepassword' className="p-2 border-b-2 border-gray-800">Change Password</Link>
          <button onClick={() => setIsLogged(false)} className="p-2">Logout</button>
        </div>
      )}
    </div>
  );
}
