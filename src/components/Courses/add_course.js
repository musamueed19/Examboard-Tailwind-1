// import email from "../../public/assets/email.svg";
import classes from "./add_course.module.css";
export default function AddCourse({ closeModal }) {
  return (
    <div className={classes.backdrop}>
      <div className={classes.container}>
        <div className={classes.heading}>
          <h1>Add Course</h1>
        </div>

        <div className={classes.inputFields}>
          <p>
            Corse Code <span>*</span>
          </p>
          <div className={classes.inputandicon}>
            {/* <img src={email.src} /> */}
            <input type="text" required placeholder="CS123"></input>
          </div>

          <p>
            Course Title <span>*</span>{" "}
          </p>
          <div className={classes.inputandicon}>
            {/* <img src={email.src} /> */}
            <input
              type="text"
              required
              validate
              placeholder="Computer Architecture"
            ></input>
          </div>

          <p> Students Enrolled </p>
          <div className={classes.inputandicon}>
            {/* <img src={email.src} /> */}
            <input type="text" placeholder="1234"></input>
          </div>

          <div className={classes.dropdown}>
            <p>
              Course Type <span>*</span>{" "}
            </p>
            <select>
              <option>MidTerm</option>
              <option>FinalTerm</option>
            </select>
          </div>
        </div>

        {/* DROPDOWN CODE */}

        {/* <div className={classes.dropdowns} >
        <div className={classes.dropdownitems} >
          <div className={classes.dropdown} >
            <p>Designation <span>*</span> </p>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            </select>
          </div>
          
          <div className={classes.dropdown} >
            <p>Status <span>*</span> </p>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            </select>
          </div>
          
        </div>
        <div className={classes.dropdownitems} >
          <div className={classes.dropdown} >
            <p>Location <span>*</span> </p>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            </select>
          </div>
          
          <div className={classes.dropdown} >
            <p>Role <span>*</span> </p>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            </select>
          </div>
        </div>

      </div> */}

        <div className={classes.formButton}>
          <button onClick={closeModal} className={classes.cancelButton}>
            Cancel
          </button>
          <button className={classes.activeButton} type="submit">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
