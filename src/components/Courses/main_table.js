"use client";
import classes from "./main_table.module.css";
import EditModal from "./edit_course";
import ViewModal from "./view_course";
import DeleteModal from "./delete_course";
import { useState } from "react";
export default function MainTable() {
  const [activeModal, setActiveModal] = useState("");

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal("");
  };

  const TableData = [
    {
      id: 1,
      course: "CS001",
      coursetype: "Regular",
      title: "VU-Computer Proficiency License",
    },
    {
      id: 2,
      course: "CS101",
      coursetype: "Regular",
      title: "Introduction to Computing",
    },
    {
      id: 3,
      course: "CS302",
      coursetype: "Regular",
      title: "Digital Logic Design",
    },
    {
      id: 4,
      course: "CS302P",
      coursetype: "Practical",
      title: "Digital Logic Design (Practical)",
    },
    {
      id: 5,
      course: "CS402",
      coursetype: "Regular",
      title: "Theory of Automata",
    },
  ];

  return (
    <div>
      <table className={classes.table}>
        <thead className={classes.table_head}>
          <tr>
            <th>{/* <input type='checkbox' /> */}</th>
            <th className={classes.column_center}>Sr. #</th>
            <th>Course</th>
            <th>Course Type</th>
            <th>Title</th>
            <th className={classes.column_center}>Actions</th>
          </tr>
        </thead>
        <tbody className={classes.table_body}>
          {TableData.map((table_Data) => (
            <tr>
              <td className={classes.column_center}>
                <input type="checkbox" />
              </td>
              <td className={classes.column_center}> {table_Data.id} </td>
              <td> {table_Data.course} </td>
              <td> {table_Data.coursetype} </td>
              <td> {table_Data.title} </td>
              <td className={classes.action_button}>
                <div className={classes.action_icons}>
                  <li>
                    <button onClick={() => openModal("edit")}>
                      <svg
                        width="28"
                        height="30"
                        viewBox="0 1 28.80 28.80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#000000"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6"
                            stroke="#000000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button onClick={() => openModal("view")}>
                      <svg
                        width="28"
                        height="30"
                        viewBox="0 1 28.80 28.80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                            stroke="#000000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                          <path
                            d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                            stroke="#000000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button onClick={() => openModal("delete")}>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5499 3.59241L11.1605 9.89163C11.0611 11.5011 11.0113 12.3058 10.6079 12.8843C10.4084 13.1703 10.1517 13.4118 9.85385 13.5932C9.25153 13.9601 8.44528 13.9601 6.83279 13.9601C5.21818 13.9601 4.41087 13.9601 3.80813 13.5925C3.51013 13.4107 3.25326 13.1689 3.05388 12.8824C2.6506 12.3029 2.60195 11.4971 2.50466 9.88539L2.12476 3.59241"
                          stroke="#DF0C3D"
                          stroke-width="1.13102"
                          stroke-linecap="round"
                        />
                        <path
                          d="M1.18237 3.5924H12.4926M9.38589 3.5924L8.95693 2.70752C8.67199 2.11972 8.52952 1.82582 8.28376 1.64252C8.22925 1.60186 8.17152 1.5657 8.11116 1.53438C7.83902 1.39319 7.5124 1.39319 6.85918 1.39319C6.18956 1.39319 5.85474 1.39319 5.57808 1.5403C5.51677 1.5729 5.45826 1.61053 5.40316 1.6528C5.15455 1.84352 5.01568 2.14818 4.73794 2.75749L4.35736 3.5924"
                          stroke="#DF0C3D"
                          stroke-width="1.13102"
                          stroke-linecap="round"
                        />
                        <path
                          d="M5.2666 10.5042L5.2666 6.73407"
                          stroke="#DF0C3D"
                          stroke-width="1.13102"
                          stroke-linecap="round"
                        />
                        <path
                          d="M8.4082 10.5041L8.4082 6.73407"
                          stroke="#DF0C3D"
                          stroke-width="1.13102"
                          stroke-linecap="round"
                        />
                      </svg>
                    </button>
                  </li>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {activeModal === "delete" && <DeleteModal closeModal={closeModal} />}
      {activeModal === "edit" && <EditModal closeModal={closeModal} />}
      {activeModal === "view" && <ViewModal closeModal={closeModal} />}
    </div>
  );
}

// import React, { useState } from 'react';
// import { FaEdit, FaTrash, FaEye } from 'react-icons/fa'; // Icons for actions

// export default function CourseManagement() {
//   // Sample data for the courses
//   const [courses, setCourses] = useState([
//     { id: 1, name: 'Mathematics', instructor: 'Dr. Smith', credits: 3 },
//     { id: 2, name: 'Physics', instructor: 'Dr. Brown', credits: 4 },
//     { id: 3, name: 'Chemistry', instructor: 'Dr. White', credits: 3 }
//   ]);

//   // State to track selected rows
//   const [selectedRows, setSelectedRows] = useState([]);

//   // Handle selecting or deselecting all rows
//   const handleSelectAll = (e) => {
//     if (e.target.checked) {
//       setSelectedRows(courses.map(course => course.id));
//     } else {
//       setSelectedRows([]);
//     }
//   };

//   // Handle selecting or deselecting individual rows
//   const handleSelectRow = (id) => {
//     setSelectedRows(prevSelected =>
//       prevSelected.includes(id)
//         ? prevSelected.filter(rowId => rowId !== id)
//         : [...prevSelected, id]
//     );
//   };

//   // Handle Delete Action
//   const handleDelete = (id) => {
//     setCourses(courses.filter(course => course.id !== id));
//   };

//   // Handle View Action (for example purposes, just logs the data)
//   const handleView = (course) => {
//     console.log('Viewing course:', course);
//   };

//   // Handle Edit Action (for example purposes, just logs the data)
//   const handleEdit = (course) => {
//     console.log('Editing course:', course);
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Course Management</h1>
//       <table border="1" cellPadding="10" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
//         <thead>
//           <tr>
//             <th>
//               <input
//                 type="checkbox"
//                 onChange={handleSelectAll}
//                 checked={selectedRows.length === courses.length}
//               />
//             </th>
//             <th>Course ID</th>
//             <th>Course Name</th>
//             <th>Instructor</th>
//             <th>Credits</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {courses.map(course => (
//             <tr key={course.id}>
//               <td>
//                 <input
//                   type="checkbox"
//                   checked={selectedRows.includes(course.id)}
//                   onChange={() => handleSelectRow(course.id)}
//                 />
//               </td>
//               <td>{course.id}</td>
//               <td>{course.name}</td>
//               <td>{course.instructor}</td>
//               <td>{course.credits}</td>
//               <td>
//                 <button onClick={() => handleEdit(course)} style={{ marginRight: '10px' }}>
//                   <FaEdit /> Edit
//                 </button>
//                 <button onClick={() => handleView(course)} style={{ marginRight: '10px' }}>
//                   <FaEye /> View
//                 </button>
//                 <button onClick={() => handleDelete(course.id)}>
//                   <FaTrash /> Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
