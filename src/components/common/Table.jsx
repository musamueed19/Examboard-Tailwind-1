"use client";

import Image from "next/image";
import { useState } from "react";
import FormModal from "./FormModal";

export default function Table({ columns, actions , records, table }) {
  let i = 0;

  const [isAllChecked, setIsAllChecked] = useState(false);
  const [checkedRecords, setCheckedRecords] = useState(
    new Array(records.length).fill(false)
  );

  const handleHeaderCheckboxChange = () => {
    const newValue = !isAllChecked;
    setIsAllChecked(newValue);
    setCheckedRecords(new Array(records.length).fill(newValue));
  };

  const handleRowCheckboxChange = (index) => {
    const updatedCheckedRecords = [...checkedRecords];
    updatedCheckedRecords[index] = !updatedCheckedRecords[index];
    setCheckedRecords(updatedCheckedRecords);

    // If all checkboxes are checked, set the header checkbox to true, else false
    setIsAllChecked(updatedCheckedRecords.every((checked) => checked));
  };

  return (
    <table className="w-[90%] mx-auto overflow-hidden shadow-sm mt-2 rounded-md">
      <thead>
        <tr className="bg-slate-300">
          {/* hidden md:inline-flex w-full h-full border-y-2 */}
          <th className="hidden md:table-cell h-full py-2 px-[0.2rem]">
            <div className="flex items-center justify-center">
              <input
                type="checkbox"
                className="cursor-pointer scale-150"
                checked={isAllChecked}
                onChange={handleHeaderCheckboxChange}
              />
            </div>
          </th>
          <th className="border-y-2 pl-2 py-2 rounded-sm text-left">Sr. #</th>
          {columns.map((th) => (
            <th key={th} className="border-y-2 pl-2 py-2 rounded-sm text-left">
              {th}
            </th>
          ))}
          {actions.actions && (
            <th className="border-y-2 pl-2 py-2 rounded-sm">Actions</th>
          )}
        </tr>
      </thead>

      <tbody>
        {records.map((record, index) => (
          <tr
            key={i}
            className="border-y-2 hover:bg-gray-200/80 hover:cursor-pointer odd:bg-[#f2f2f2]"
          >
            {/* hidden md:block */}
            <td className="hidden md:table-cell border-y-2 py-2 px-1 rounded-sm text-center">
              <div className="flex items-center justify-center">
                <input
                  type="checkbox"
                  className="text-center cursor-pointer scale-150"
                  checked={checkedRecords[index]}
                  onChange={() => handleRowCheckboxChange(index)}
                />
              </div>
            </td>
            <td className="border-y-2 pl-2 py-2 rounded-sm">{i++}</td>
            {Object.values(record).map((value, index) => (
              <td
                key={index}
                className="border-y-2 pl-2 py-2 rounded-sm text-ellipsis text-nowrap overflow-hidden text-[0.8rem] lg:text-[0.95rem]"
              >
                {value}
              </td>
            ))}
            {actions.actions && (
              <td className="py-2 flex items-center justify-center rounded-sm">
                <div
                  className={`${
                    actions.all
                      ? "gap-[0.45rem] lg:gap-[0.8rem]"
                      : "gap-[0.7rem] lg:gap-[3rem]"
                  } flex items-center justify-evenly`}
                >
                  {(actions.update || actions.all) && (
                    <FormModal
                      type="update"
                      table={table}
                      id={i}
                      data={record}
                    />
                  )}
                  {(actions.view || actions.all) && (
                    <FormModal type="view" table={table} id={i} data={record} />
                  )}
                  {(actions.delete || actions.all) && (
                    <FormModal
                      type="delete"
                      table={table}
                      id={i}
                      data={record}
                    />
                  )}
                </div>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

{
  /* {record.map((column) => (
              <td key={column}>{column}</td>
            ))} */
}
