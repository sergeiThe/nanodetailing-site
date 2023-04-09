import React from 'react'
import styles from "./Footer.module.scss"

const Footer = () => {
    return (
        <footer className={`footer ${styles.footer}`}>
            <div className="flex">

                <div className="left">

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates adipisci ab dolores inventore libero, quae obcaecati repellat repudiandae nemo ullam dolorem, exercitationem, ducimus nesciunt officiis beatae veniam eligendi laboriosam voluptas eum rerum! Praesentium voluptatibus voluptate esse deserunt omnis placeat, id repellat deleniti quod excepturi reprehenderit error, cum iure ea animi.</p>
                    <button>Kontaktskjema</button>
                    <div>Social links...</div>
                </div>
                <div className="right">
                    <div>logo</div>
                </div>
            </div>
            <div>Designet og utviklet av Sergei Medialics</div>
        </footer>
    )
}

export default Footer