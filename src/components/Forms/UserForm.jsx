import Btns from "../common/Btns";
import DeleteDialog from "../common/DeleteDialog";
import InputFields from "../common/InputFields";
import TitleHeader from "../common/TitleHeader";

const statusOptions = [
  { value: "Active", name: "Active" },
  { value: "Inactive", name: "Inactive" }
]
const designationOptions = [
  {
    value: "Associate Professor",
    name: "Associate Professor",
  },
  {
    value: "Assistant Professor",
    name: "Assistant Professor",
  },
  {
    value: "Tutor/Instructor",
    name: "Tutor/Instructor",
  },
  {
    value: "Lecturer",
    name: "Lecturer",
  },
];
const roleOptions = [
  {
    value: "Associate Professor",
    name: "Associate Professor",
  },
  {
    value: "Assistant Professor",
    name: "Assistant Professor",
  },
  {
    value: "Teacher/Instructor",
    name: "Tutor/Instructor",
  },
  {
    value: "HoD",
    name: "HoD",
  },
  {
    value: "Admin",
    name: "Admin",
  },
  {
    value: "Faculty Member",
    name: "Faculty Member",
  },
];
export default function UserForm({ type, data }) {
  // console.log(data, data.name, data.email);
  return (
    <div className="w-full px-8 lg:px-16">
      {type === "update" ? (
        <div className="flex flex-col gap-8 w-full py-6">
          <TitleHeader fontSize="xl" title="Edit User" />
          <div className="flex flex-col lg:flex-row lg:gap-12 justify-center w-full">
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <InputFields
                label="Name"
                required={true}
                input="text"
                name="name"
                placeholder="Enter your name"
                value={data.name}
              />
              <InputFields
                label="Role"
                required={true}
                input="dropdown"
                name="role"
                value={data.role}
                options={roleOptions}
              />
              <InputFields
                label="Status"
                required={true}
                input="dropdown"
                name="status"
                value={data.status}
                options={statusOptions}
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <InputFields
                label="Email"
                required={true}
                input="email"
                name="email"
                placeholder="Enter your email"
                value={data.email}
              />
              <InputFields
                label="Designation"
                required={true}
                input="dropdown"
                name="designation"
                value={data.designation}
                options={designationOptions}
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10 justify-center">
            <Btns type="primary" title="Cancel" />
            <Btns type="secondary" title="Update" />
          </div>
        </div>
      ) : type === "view" ? (
        <TitleHeader fontSize="xl" title="View User" />
      ) : (
        type === "delete" && <DeleteDialog title="User" object={data.name} />
      )}
    </div>
  );
}


 {
   /* <div className="flex flex-col">
                <label htmlFor="name">Name *</label>
                <input
                  className="border-2 px-1"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="enter your name"
                  value={data.name}
                />
              </div> */
 }