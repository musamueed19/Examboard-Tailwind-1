// import AddBtn from "@/components/common/AddBtn";
// import BulkDelete from "@/components/common/BulkDelete";
// import Pagination from "@/components/common/Pagination";
// import Searchbar from "@/components/common/Searchbar";
import AddBtn from "@/components/common/AddBtn";
import BulkDelete from "@/components/common/BulkDelete";
import Pagination from "@/components/common/Pagination";
import Searchbar from "@/components/common/Searchbar";
import Table from "@/components/common/Table";
import TitleHeader from "@/components/common/TitleHeader";

const columns = [
  "Course",
  "Course Type",
  "Title"
]

const records = [
  {
    course: "CS001",
    courseType: "Regular",
    title: "VU-Computer Proficiency License",
  },
  {
    course: "CS101",
    courseType: "Regular",
    title: "Introduction to Computing",
  },
  {
    course: "CS201",
    courseType: "Regular",
    title: "Introduction to Programming",
  },
  {
    course: "CS201P",
    courseType: "Practical",
    title: "Introduction to Programming (Practical)",
  },
  { course: "CS301", courseType: "Regular", title: "Data Structures" },
  {
    course: "CS301P",
    courseType: "Practical",
    title: "Data Structures (Practical)",
  },
  { course: "CS302", courseType: "Regular", title: "Digital Logic Design" },
  {
    course: "CS302P",
    courseType: "Practical",
    title: "Digital Logic Design (Practical)",
  },
  {
    course: "CS304",
    courseType: "Regular",
    title: "Object Oriented Programming",
  },
  {
    course: "CS304P",
    courseType: "Practical",
    title: "Object Oriented Programming (Practical)",
  },
];

const actions = {
  actions: "true",
  all: "true",
};


export default function CoursesManagementPage() {
  return (
    // { children }

    <div className="container">
      <TitleHeader title="Courses Management" />

      <div className="tableTopNav">
        <div className="filtersGroup">
          <Searchbar label="Course" />
        </div>

        <div className="actionsGroup">
          <BulkDelete />
          <AddBtn title="Course" />
        </div>
      </div>

      <Table columns={columns} actions={actions} records={records} />

      <Pagination />
    </div>
  );
}













{
  /* <TableTopNav filter=[{ }] /> */
}
{
  /* <div>
        <Searchbar label="user email/name" />
        <Filter
          label="User Role"
          type="dropdown"
          options={["Admin", "HoD", "Faculty"]}
        />

        <BulkDelete />
        <AddBtn />
          </div>
          
          <Table />
          <Pagination /> */
}