import Header from '../../components/Header/Header.jsx'
import TextCard from '../../components/TextCard/TextCard.jsx'
import styles from './HomePage.module.css'

function HomePage() {

    var welcome = "MediaVault is your central digital library to log and track of all your digital and physical media"

    return (
        <div className={styles.homePageStyle}>
            <Header/>
            <TextCard text={welcome} className={styles.textBoxStyle}/>
        </div>
    )
}

export default HomePage