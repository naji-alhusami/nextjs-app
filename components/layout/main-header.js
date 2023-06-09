import Link from "next/link";

import classes from "./main-header.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Upcoming Matches</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/matches">Browse All Matches</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
