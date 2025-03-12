import logo from '../assets/img/logo.png'
import switchDark from '../assets/icons/switch-dark.svg'
import switchLight from '../assets/icons/switch-light.svg'
import profilePhoto from '../assets/img/profile-photo.png'

import styles from './Menu.module.scss'

const Menu = () => {
  const lightTheme = true;

  return (
    <div className={styles.menu}>
      <img src={logo} alt="logo" />
      <div>
        <button><img src={lightTheme ? switchDark : switchLight} alt="switch theme icon" /></button>
        <hr />
        <img src={profilePhoto} alt="user account photo" />
      </div>
      
    </div>
  )
}

export default Menu
