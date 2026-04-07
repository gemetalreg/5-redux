import styles from "./Header.module.css";
import Button from "../button/Button";
import type { HeaderProps } from "./Header.props";
import { NavLink } from "react-router";
import { Outlet } from 'react-router'
import { useMyFavorites } from '../hooks/useFavorites';
import cn from "classnames";

function Header({loggedInProfiles, handleLogout}: HeaderProps) {

    const isLoggedIn = loggedInProfiles && loggedInProfiles.length > 0;
    const userName = isLoggedIn ? loggedInProfiles[0].name : null;
    const myFavs = useMyFavorites();
    const count = myFavs.length;


    return  <>
    <h1 className={styles["header"]}>
        <img src="/Bookmark.svg" alt="header-logo" className={styles["header-logo"]} />
        <div className={styles["links"]}>
            <NavLink to="/" className={({isActive}) => cn(styles["link"], {
                    [styles.active]: isActive
                })}>Поиск фильмов</NavLink>
            <NavLink to="/favorites" className={({isActive}) => cn(styles["link"], {
                    [styles.active]: isActive
                })}>Мои фильмы {count ? `(${count})` : ''}</NavLink>
        {isLoggedIn ? (
          <span className={styles["links"]} style={{color: "#646cff"}}>
            {userName}
            <Button onClick={() => {
                if (userName) handleLogout(userName);
              }} text="Выйти" />
          </span>
        ) : (
          <NavLink to="/login" className={({isActive}) => cn(styles["link"], {
                    [styles.active]: isActive
                })}>Войти<img src="/Login.svg" alt="login" /></NavLink>
        )}
        </div>
    </h1>
        <Outlet />
    </>
}

export default Header;