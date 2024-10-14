"use client";

import Image from "next/image";
import AddBtn from "./AddBtn";
import { useState } from "react";
import SemesterForm from "../Forms/SemesterForm";
import UserForm from "../Forms/UserForm";

export default function FormModal({ table, type, data, id, title }) {
  const styles =
    type === "update"
      ? `hover:bg-[#cadffd] p-1 rounded-md`
      : type === "view"
      ? `hover:bg-[#cadffd] p-[0.3rem] rounded-md`
      : `hover:bg-[#ffc5c5] p-1 rounded-md`;

  const forms = {
    semesters: (type, data) => <SemesterForm type={type} data={data} />,
    users: (type, data) => <UserForm type={type} data={data} />,
  };

  const [open, setOpen] = useState(false);
  let btnTitle = table.slice(0, -1);

  function modalHandler({ table, type, id, data, isOpen }) {
    console.log(table, type, isOpen, id, data);
    setOpen(isOpen);
  }

  return (
    <>
      {type !== "create" ? (
        <button
          className={`${styles} other common tailwind classes`}
          onClick={() => modalHandler({ table, type, id, data, isOpen: true })}
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
              onClick={() => setOpen(!open)}
              className="absolute scale-70 bg-red-600 top-3 px-2 right-3 rounded-sm text-white"
            >
              Close
            </button>

            {forms[table](type, data)}

            {/* {type === "delete" && id && (
              <DeleteDialog title={btnTitle} object={data.semester} />
            )} */}
          </div>
        </div>
      )}
    </>
  );
}
