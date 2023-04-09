import React from 'react'
import styles from "./PricesSection.module.scss"

const PricesSection = () => {
    const links = "here will be links"
  return (
    <section className={`section ${styles.section}`}>
        <h2 className='centered'>Faste priser</h2>
        <p className='centered'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem distinctio laudantium illo officia quos ipsum facere rerum, non, in vitae earum tempora sed molestias. Similique quo esse maxime illo, dolore ratione cupiditate aperiam temporibus impedit quaerat aliquid odit consequuntur voluptatum accusamus neque. Quod deserunt, error a cum sapiente voluptate nisi.</p>
        <ul>
            {links}
        </ul>
    </section>
  )
}

export default PricesSection