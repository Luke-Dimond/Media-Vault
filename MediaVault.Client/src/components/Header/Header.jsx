import styles from './Header.module.css'

function Header() {

    return (
        <header className={styles.headerStyle}>
            <h1 className={styles.title}>MediaVault</h1>

            <nav>
                <ul className={styles.navList}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">TV Shows</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header