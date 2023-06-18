import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react'
import Header from './components/Header';
import styles from './styles/homepage.module.scss'

function HomePage() {
    return (
        <div className={styles.wrapper_home}>
            <div className={styles.wrapper_home__header}>
                <Header />
            </div>
        </div>
    )
}

export default HomePage