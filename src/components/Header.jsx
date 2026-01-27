import {NavLink} from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
    return(
        <header className={styles.headerStyle}>
            <h1>My App</h1>
            <nav>
                <NavLink to="/" end>Home</NavLink>&nbsp; &nbsp; &nbsp;
                <NavLink to="/signup">회원가입</NavLink>&nbsp; &nbsp; &nbsp; 
                <NavLink to="/login">로그인</NavLink>
            </nav>
        </header>
    );
}