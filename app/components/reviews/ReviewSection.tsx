import React from 'react'
import styles from "./ReviewSection.module.scss"

const ReviewSection = () => {

    const reviewlist = "reviewlist..."
  return (
    <section className={`section ${styles.section}`}>
        <ul>{reviewlist}</ul>
    </section>
  )
}

export default ReviewSection