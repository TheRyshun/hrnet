import { NavLink } from "react-router-dom";
import "../../sass/style.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="header__box">
        <img src="./src/assets/img/logo.png" alt="" />
        <div className="header__text">
            <NavLink className="header__redirect" to={"/"}>
            Création Employé
            </NavLink>
            <NavLink className="header__redirect" to={"/liste"}>
            Liste
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
