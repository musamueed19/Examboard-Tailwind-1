import DeleteDialog from "../common/DeleteDialog";
import TitleHeader from "../common/TitleHeader";

export default function SemesterForm({ type, data }) {
  return (
    // {
    //   type === 'update' ?
    //   ()
    //     :
    //     type === 'view' ?
    // ()
    //   :
    //   (<p>Invalid CRUD Type</p>)
    // }
    <div>
      {type === "update" ? (
        <div className="flex flex-col gap-8 w-full py-6">
          <TitleHeader fontSize="xl" title="Edit Semester" />
          <div className="flex gap-16 justify-center w-full">
            <div className="w-1/2 flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="name">Name *</label>
                <input
                  className="border-2"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="enter your name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="role">Role *</label>
                <select name="" id="" className=" border-2">
                  <option value="">Associate Professor</option>
                  <option value="">Assistant Professor</option>
                  <option value="">HoD</option>
                  <option value="">Teacher/Instructor</option>
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
                <label htmlFor="name">Email *</label>
                <input
                  className="border-2"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="enter your email"
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
        type === "delete" && (
          <DeleteDialog title="Semester" object={data.semester} />
        )
      )}
    </div>
  );
}

{
  /* <div className="flex flex-col">
  <label htmlFor="name">Name *</label>
  <input type="text" name="name" id="name" placeholder="enter your name" />
</div>; */
}

// role: "Admin",
//     status: "Active",
//     designation: "Associate Professor",
