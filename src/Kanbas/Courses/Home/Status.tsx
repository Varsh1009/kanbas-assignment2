import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoNotificationsCircle } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { CiViewTimeline } from "react-icons/ci";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      {/* <button>Unpublish</button>
      <button>Publish</button>
      <button>View Course Notifications</button>
      <button>View Course Notifications</button>
      <button>View Course Settings</button>
      <button>Delete Course</button>
      <button>View Enrollment</button> */}

      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish{" "}
          </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish{" "}
          </button>
        </div>
      </div>
      <br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content{" "}
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons{" "}
      </button>

      {/* course notifications */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <IoNotificationsCircle className="me-2 fs-5" /> View Course
        Notifications{" "}
      </button>

      {/* course settings */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <IoSettings className="me-2 fs-5" /> View Course Settings{" "}
      </button>

      {/* delete course */}
      <button className="btn btn-lg btn-danger w-100 mt-1 text-start">
        <MdDeleteForever className="me-2 fs-5" /> Delete Course{" "}
      </button>

      {/* view enrollment */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <CiViewTimeline className="me-2 fs-5" /> View Enrollment{" "}
      </button>
    </div>
  );
}
