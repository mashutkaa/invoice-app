import icon from "../../../assets/icons/Button1-icon.svg";
import "./Button1.scss";

const Button1 = () => {
    return (
        <button>
            <img src={icon} alt="icon for button" />
            <span>New Invoice</span>
        </button>
    );
};

export default Button1;
