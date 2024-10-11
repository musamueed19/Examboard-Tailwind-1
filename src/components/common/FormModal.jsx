"use client";

import Image from "next/image";
import AddBtn from "./AddBtn";
import { useState } from "react";
import DeleteDialog from "./DeleteDialog";

export default function FormModal({ table, type, data, id, title }) {
  const styles =
    type === "update"
      ? `hover:bg-[#cadffd] p-1 rounded-md`
      : type === "view"
      ? `hover:bg-[#cadffd] p-[0.3rem] rounded-md`
        : `hover:bg-[#ffc5c5] p-1 rounded-md`;
  
  const [open, setOpen] = useState(false);
  let btnTitle = table.slice(0, -1);

  return (
    <>
      {type !== "create" ? (
        <button
          className={`${styles} other common tailwind classes`}
          onClick={() => setOpen(true)}
        >
          <Image
            src={`/${type}.svg`}
            alt={`${type} icon`}
            width={16}
            height={16}
          />
        </button>
      ) : (
        <AddBtn title={title} setOpen={setOpen} />
      )}

      {open && (
        <div className="absolute w-screen h-screen bg-black bg-opacity-60 left-0 top-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-md w-[40%] h-fit flex justify-center items-center relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute scale-70 bg-red-600 top-3 px-2 right-3 rounded-sm text-white"
            >
              Close
            </button>

            {table === "users" && type === "delete" && id ? (
              <DeleteDialog title={btnTitle} object={data.name} />
            ) : (
              <p>Select a valid user</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
