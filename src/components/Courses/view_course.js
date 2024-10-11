import classes from "./add_course.module.css";
export default function ViewCourse({ closeModal }) {
  return (
    <div className={classes.backdrop}>
      <div className={classes.container}>
        <div className={classes.heading}>
          <h1>View Course</h1>
        </div>

        <div className={classes.inputFields}>
          <p>Corse Code</p>
          <div className={classes.inputandicon}>
            {/* <img src={email.src} /> */}
            <input type="text" required placeholder="CS123"></input>
          </div>

          <p>Course Title</p>
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
            <p>Course Type</p>
            <p className={classes.dropOptions}>
              <option>FinalTerm</option>
            </p>
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
          {/* <button className={classes.cancelButton}>Cancel</button> */}
          <button
            onClick={closeModal}
            className={classes.closeButton}
            type="submit"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
