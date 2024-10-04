import React from "react";
import { Link } from "react-router-dom";

interface Course {
  id: number;
  title: string;
  image: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "React JS",
    image: "https://miro.medium.com/v2/1*K0a7xINk0RM5gfXGSN68cw.png",
  },
  {
    id: 2,
    title: "Svelte",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1619358925225/50e2XssdE.png",
  },
  {
    id: 3,
    title: "Vue",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/640px-Vue.js_Logo_2.svg.png",
  },
  {
    id: 4,
    title: "Angular",
    image:
      "https://miro.medium.com/v2/resize:fit:588/1*15CYVZdpsxir8KLdxEZytg.png",
  },
  {
    id: 5,
    title: "JQuery",
    image: "https://miro.medium.com/v2/resize:fit:860/0*eFomJUFua8tuqe8g.png",
  },
  {
    id: 6,
    title: "Backbone",
    image:
      "https://lh5.googleusercontent.com/proxy/OHJkO9--W5k32NfojBIktnJbQ0H0izVH9dVTK04DmVc6PQWragjBwlPXNzJudzXn417DWeTVqnQ3_xjv",
  },
];

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => (
  <div style={{ width: "300px", margin: "10px" }}>
    <div className="card h-100">
      {/* <Link
        className="text-decoration-none text-dark"
        to={`/Kanbas/Courses/${course.id}/Home`}
      > */}
      <Link
        className="text-decoration-none text-dark"
        to={`/Kanbas/Courses/1234/Home`}
      >
        <img
          src={course.image}
          className="card-img-top"
          alt={course.title}
          style={{ height: "200px", objectFit: "contain", padding: "1rem" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text flex-grow-1">Full Stack software developer</p>
          <button className="btn btn-primary mt-auto">Go</button>
        </div>
      </Link>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div id="wd-dashboard" className="container-fluid">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="d-flex flex-wrap justify-content-start"
        style={{ margin: "-10px" }}
      >
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

// import { Link } from "react-router-dom";

// export default function Dashboard() {
//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//       <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
//       <div id="wd-dashboard-courses" className="row">
//         <div className="row row-cols-1 row-cols-md-5 g-4">
//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/1234/Home"
//               >
//                 <img
//                   src="https://miro.medium.com/v2/1*K0a7xINk0RM5gfXGSN68cw.png"
//                   width={200}
//                 />
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     React JS
//                   </h5>
//                   <p className="card-text">Full Stack software developer</p>
//                   <button className="btn btn-primary"> Go </button>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/1234/Home"
//               >
//                 <img
//                   src="https://cdn.hashnode.com/res/hashnode/image/upload/v1619358925225/50e2XssdE.png"
//                   width={200}
//                 />
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     Svelte
//                   </h5>
//                   <p className="card-text">Full Stack software developer</p>
//                   <button className="btn btn-primary"> Go </button>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/1234/Home"
//               >
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/640px-Vue.js_Logo_2.svg.png"
//                   width={200}
//                 />
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">Vue</h5>
//                   <p className="card-text">Full Stack software developer</p>
//                   <button className="btn btn-primary"> Go </button>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/1234/Home"
//               >
//                 <img
//                   src="https://miro.medium.com/v2/resize:fit:588/1*15CYVZdpsxir8KLdxEZytg.png"
//                   width={200}
//                 />
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     Angular
//                   </h5>
//                   <p className="card-text">Full Stack software developer</p>
//                   <button className="btn btn-primary"> Go </button>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/1234/Home"
//               >
//                 <img
//                   src="https://miro.medium.com/v2/resize:fit:860/0*eFomJUFua8tuqe8g.png"
//                   width={200}
//                 />
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     JQuery
//                   </h5>
//                   <p className="card-text">Full Stack software developer</p>
//                   <button className="btn btn-primary"> Go </button>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/1234/Home"
//               >
//                 <img
//                   src="https://lh5.googleusercontent.com/proxy/OHJkO9--W5k32NfojBIktnJbQ0H0izVH9dVTK04DmVc6PQWragjBwlPXNzJudzXn417DWeTVqnQ3_xjv"
//                   width={200}
//                 />
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     Backbone
//                   </h5>
//                   <p className="card-text">Full Stack software developer</p>
//                   <button className="btn btn-primary"> Go </button>
//                 </div>
//               </Link>
//             </div>
//           </div>

//           {/* <div className="wd-dashboard-course col" style={{ width: "300px" }}>
//             <div className="card">
//               <Link
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//                 to="/Kanbas/Courses/1234/Home"
//               >
//                 <img src="/images/reactjs.jpg" width={200} />
//                 <div className="card-body">
//                   <h5 className="wd-dashboard-course-title card-title">
//                     CS1234 React JS
//                   </h5>
//                   <p className="card-text">Full Stack software developer</p>
//                   <button className="btn btn-primary"> Go </button>
//                 </div>
//               </Link>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }
