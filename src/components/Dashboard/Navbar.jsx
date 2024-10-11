import Image from "next/image";
// import MenuHideHamburger from "./MenuHideHamburger";

export default function Navbar({ hideMenu }) {
  return (
    <div className="flex flex-row-reverse lg:flex-row bg-gray-100/90 rounded-lg justify-between items-center py-1 px-2 md:px-4 lg:px-6 lg:py-3 xl:px-8">
      {/* LEFT */}
      <button onClick={hideMenu} className="hidden lg:block">
        <Image
          src="/hamburger.svg"
          width={30}
          height={30}
          alt="hamburger icon"
        />
      </button>

      {/* RIGHT */}
      <div className="flex gap-2 md:gap-4 lg:gap-6 xl:gap-8 self-end">
        <button>
          <Image
            src="/bell.svg"
            width={30}
            height={30}
            alt="bell icon"
            className="filter contrast-0 brightness-0 hover:contrast-100 hover:brightness-100"
          />
        </button>
        <button className="bg-[#d2d2d2]/90 rounded-full w-fit py-2 px-[0.7rem] hover:bg-[#a7a7a7]">
          <Image src="/profile.svg" width={30} height={30} alt="profile icon" />
        </button>
      </div>
    </div>
  );
}
