import React from 'react'
import styles from "./ServiceModal.module.scss"

interface Service {
    title: string;
    text: string;
}

const ServiceModal = (props: Service) => {
    return (
        <div className={styles.modal}>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}

export default ServiceModal