import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css'
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}></div>
        <h1>React Meetups</h1>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/newmeetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      
    </header>
  );
}

export default MainNavigation;
