import React from 'react'
import styles from "./ServiceModal.module.scss"
import Image from 'next/image';
import { ServiceActionType, useServiceContext } from '@/app/store/service-context';

interface Content {
    p1: string;
    p2: string;
    p3: string;
    p4?: string;
    p5?: string;
    p6?: string;

}

interface ServiceContent {
    name: string;
    content: Content;
    image: string;
}

const ServiceModal = (props: ServiceContent) => {


    const serviceCtx = useServiceContext()

    const close = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
        serviceCtx.dispatch({ type: ServiceActionType.CLOSE })
        e.stopPropagation()
    }

    return (
        <div className={styles.modal} onClick={close}>
            <div className={styles.container} onClick={(e) => {
                e.stopPropagation()
            }}>

                <div className={styles.left}>

                    <h2>{props.name}</h2>
                    <p>{props.content.p1}</p>
                    <p>{props.content.p2}</p>
                    <p>{props.content.p3}</p>
                    <p>{props.content.p4}</p>
                    <p>{props.content.p5}</p>
                    <p>{props.content.p6}</p>
                </div>
                <div className={styles.right}>
                    <Image
                        alt='car'
                        fill
                        src={`/images/${props.image}`}
                        style={{ objectFit: "contain" }}
                    />
                </div>
            </div>
            <div className={styles.close} onClick={close}>
                Lukk X
            </div>
        </div>
    )
}

export default ServiceModal