import React from 'react'
import styles from "./CourseSection.module.scss"

const CourseSection = () => {
  return (
    <section className={`section ${styles.section} flex`}>
        <div className="left">
            <h2>Hendlex kurs</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quis omnis. Ducimus ratione odio molestias, nulla nihil quod corrupti delectus consectetur soluta natus asperiores rem sed minus in quis, necessitatibus dolore eaque eveniet unde, eligendi minima. Et nostrum, veritatis praesentium dolorem incidunt recusandae odit harum amet vel excepturi itaque repellendus?</p>
            <div>video</div>
        </div>
        <div className="right">
            <div>m3</div>
            <div>ppfvinyl</div>
        </div>
    </section>
  )
}

export default CourseSection