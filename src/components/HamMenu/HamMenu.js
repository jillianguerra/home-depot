import styles from "./HamMenu.module.scss";
import * as usersServiceApi from '../../utilities/users-service';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from "react";

export default function HamMenu({ user, setUser }) {
  const navigate = useNavigate();
  
  const handleLogOut = async () => {
    usersServiceApi.logOut();
    navigate('/home');
    window.location.reload();
    window.localStorage.removeItem('token');
  }

  return (
    <ul className={styles.menuContainer}>
      <li>
        {user && user.isGuest === false ? (
        /* {user ? ( */
          <ul className={styles.userOptions}>
            <li>
              <Link to="/profile" className={styles.auth}>
                MY ACCOUNT
              </Link>
            </li>
            <li>
              <Link to="/wishlist" className={styles.auth}>
                WISHLIST
              </Link>
            </li>
            <li>
              <Link to="/orders" className={styles.auth}>
                ORDER HISTORY
              </Link>
            </li>
            <li onClick={handleLogOut}>LOGOUT</li>
          </ul>
        ) : (
          <Link to="/auth" className={styles.auth}>
            SIGN IN / SIGN UP
          </Link>
        )}
      </li>
      {/* <p>{result}</p> */}
      <li>
        <ul className={styles.info}>
          <li>
            <Link to="/faq" className={styles.faq}>FAQ</Link>
          </li>
          <li>
          <Link to="/aboutus" className={styles.faq}>ABOUT US</Link>
          </li>
        </ul>
      </li>
    </ul>
  );
}