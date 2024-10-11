"use client";
import classes from "./add_course.module.css";
export default function DeleteModal({ closeModal }) {
  return (
    <div className={`${classes.backdrop} ${classes.show} `}>
      <div className={`${classes.container} ${classes.show} `}>
        <div className={classes.deleteHeading}>
          <h1>Delete Course</h1>
        </div>

        <div className={classes.centerContent}>
          <p>Are you sure you want to delete this Course?</p>
        </div>

        <div className={classes.buttonDiv}>
          <button onClick={closeModal} className={classes.cancelButton}>
            Cancel
          </button>
          <button className={classes.deleteButton} type="submit">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
