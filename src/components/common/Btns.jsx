export default function Btns({type, title}) {
  return (
    <>
      {type === "secondary" ? (
        <button
          type={type}
          className="scale-50 lg:scale-90 flex items-center justify-center rounded-lg gap-2 text-lg lg:text-xl p-2 lg:px-3 lg:py-[0.7rem] bg-[#226ffe] hover:bg-[#165fe8] text-white font-bold"
        >
          {title}
        </button>
      ) : type === "alert" ? (
        <button
          type={type}
          className="scale-50 lg:scale-90 flex items-center justify-center rounded-lg gap-2 text-lg lg:text-xl p-2 lg:px-3 lg:py-[0.7rem] bg-[#fc5555] hover:bg-[#ec4a4a] text-white font-bold"
        >
          {title}
        </button>
      ) : (
        <button className="scale-50 lg:scale-90 flex items-center justify-center rounded-lg gap-2 text-lg lg:text-xl p-2 lg:px-3 lg:py-[0.7rem] bg-white font-bold text-[#226ffe] border-2 border-[#226ffe] hover:border-3">
          {title}
        </button>
      )}
    </>
  );
}
