import styles from './index.module.css'
import index from './index'
import About from '../../pages/About'
import OurServices from '../../pages/OurServices'
import ContactUS from '../../pages/ContactUS'
const Navbar = () => {
  return (
    <div>
        <div className={styles.container}>
            <div className={styles.image}>
                <img height='64px' width='192px' src="/images/logo2.png"/>
            </div>
            <div className={styles.links}>
                <span><a href='/index'>HOME</a></span>
                <span><a href='/About'>ABOUT</a></span>
                <span><a href='/OurServices'>OUR SERVICES</a></span>
                <span><a href='/ContactUS'>CONTACT US</a></span>
            </div>
        </div>
    </div>
  )
}

export default Navbar