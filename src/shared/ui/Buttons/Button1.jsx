import icon from "../../../assets/icons/Button1-icon.svg";
import styles from "./Button1.module.scss";

const Button1 = () => {
    return (
        <button className={styles.button}>
            <img src={icon} alt="icon for button" />
            <span>New Invoice</span>
        </button>
    );
};

export default Button1;
