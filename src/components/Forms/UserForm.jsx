"use client";
import { useState } from "react";
import DeleteDialog from "../common/DeleteDialog";
import TitleHeader from "../common/TitleHeader";

export default function UserForm({ type, data }) {
  // console.log(data, data.name, data.email);
  const [selectedRole, setSelectedRole] = useState(data.role);
  const handleChange = (event) => {
    setSelectedRole(event.target.value);
  };
  return (
    <div className="w-full px-10">
      {type === "update" ? (
        <div className="flex flex-col gap-8 w-full py-6">
          <TitleHeader fontSize="xl" title="Edit Semester" />
          <div className="flex gap-12 justify-center w-full">
            <div className="w-1/2 flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="name">Name *</label>
                <input
                  className="border-2"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="enter your name"
                  value={data.name}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="role">Role *</label>
                <select
                  value={selectedRole}
                  onChange={handleChange}
                  className="border-2"
                >
                  <option value="Associate Professor">
                    Associate Professor
                  </option>
                  <option value="Assistant Professor">
                    Assistant Professor
                  </option>
                  <option value="HoD">HoD</option>
                  <option value="Teacher/Instructor">Teacher/Instructor</option>
                  <option value="Admin">Admin</option>
                  <option value="Faculty Member">Faculty Member</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="role">Status *</label>
                <select name="" id="" className=" border-2">
                  <option value="">Active</option>
                  <option value="">Inactive</option>
                </select>
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="email">Email *</label>
                <input
                  className="border-2"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="enter your email"
                  value={data.email}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="role">Designation *</label>
                <select name="" id="" className=" border-2">
                  <option value="">Lahore</option>
                  <option value="">Karachi I</option>
                  <option value="">Karachi II</option>
                  <option value="">Islamabad</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8 justify-center">
            <button className="border-2 bg-slate-200 px-1">Cancel</button>
            <button className="border-2 bg-slate-200 px-1">Update</button>
          </div>
        </div>
      ) : type === "view" ? (
        <TitleHeader fontSize="xl" title="View Semester" />
      ) : (
        type === "delete" && <DeleteDialog title="User" object={data.name} />
      )}
    </div>
  );
}
