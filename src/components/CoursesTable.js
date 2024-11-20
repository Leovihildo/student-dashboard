import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Courses.module.css";
import RegisteredCourses from "./RegisteredCourses";

function CoursesTable() {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [registeredCourses, setRegisteredCourses] = useState([]);

  useEffect(() => {
    axios
      .get("https://raw.githubusercontent.com/Leovihildo/student-dashboard/refs/heads/main/src/components/coursesDB.json")
      .then((resp) => {
        // console.log("Fetched courses:", resp.data);
        setCourse(resp.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
        setLoading(false);
      });
  }, []);

  // Handle Course Registering
  const handleRegister = (course) =>{
      if (!registeredCourses.some((c) => c.id === course.id)) {
        setRegisteredCourses([...registeredCourses, course]);
      } else {
        alert("You have already registered for this course.");
      }
    };

  if (loading) {
    return <p>Loading courses...</p>;
  }

   // Remove a course from the registeredCourses list
   const handleRemove = (courseId) => {
    setRegisteredCourses(registeredCourses.filter((course) => course.id !== courseId));
  };

  return (
    <div className={styles.courseTable}>
      <h4 className={styles.header}>List of courses</h4>
      <table className={`table table-striped`}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {course.map((course, i) => (
            <tr key={i}>
              <td>{course.id}</td>
              <td>{course.code}</td>
              <td>{course.title}</td>
              <td>
                <button
                  className={`${styles.registerBtn} btn btn-success`}
                  onClick={() => handleRegister(course)}
                >
                  Register
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <RegisteredCourses registeredCourses={registeredCourses} onRemove={handleRemove}/>
    </div>
  );

}

export default CoursesTable;