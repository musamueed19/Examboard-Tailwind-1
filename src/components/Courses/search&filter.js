"use client";
import Link from "next/link";
import { useState } from "react";
import search from "@/../public/search.svg";
import plus from "@/../public/plus.svg";
// import classes from "./search&filter.module.css";
import AddModal from "./add_course";
import DeleteModal from "./delete_course";
export default function search_filter() {
  const [activeModal, setActiveModal] = useState("");

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <div className={classes.search_filter}>
        <div className={classes.left_side}>
          <div className={classes.search_bar}>
            <input type="email" required validate placeholder="Courses"></input>
            <buton>
              <img src={search.src} />
            </buton>
          </div>
          {/* <div className={classes.filters} >
                            <select className={classes.user_roles} >
                                <option>User Role</option>
                                <option>Admin</option>
                                <option>Faculty Memeber</option>
                                <option>HOD</option>
                    </select>
                    
                    <select className={classes.user_status} >
                                <option>User Status</option>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                    </div> */}
        </div>
        <div className={classes.right_side}>
          <div>
            <button onClick={() => openModal("delete")}>
              {" "}
              <svg
                width="28"
                height="28"
                viewBox="0 -1 18 18"
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
            <button
              onClick={() => openModal("add")}
              className={classes.add_button}
            >
              {" "}
              <img src={plus.src} /> Add Course
            </button>
          </div>
        </div>
      </div>
      {activeModal === "add" && <AddModal closeModal={closeModal} />}
      {activeModal === "delete" && <DeleteModal closeModal={closeModal} />}
    </>
  );
}
