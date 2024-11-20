import React from 'react'
import styles from "./Courses.module.css";

function RegisteredCourses({registeredCourses, onRemove}) {
  return (
    <div className={`${styles.registeredCourses}`}>
        <h5>Registered courses</h5>
        {registeredCourses.length > 0 ? (
        <ul className={`${styles.coursesList}`}>
            {registeredCourses.map((course)=>(
                <li key={course.id}>
                    {course.code} - {course.title}
                    <span><button className={`btn btn-outline-danger ${styles.removeBtn}`} onClick={() => onRemove(course.id)}>Remove</button></span>
                </li>
                
            ))}
        </ul>
        ): 
        (
            <p>You are yet to register for a course</p>
        )}
    </div>
  )
}

export default RegisteredCourses