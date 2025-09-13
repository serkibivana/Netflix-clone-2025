import "./header.css"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="upper-logo-wrapper">
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix Logo"
            />
          </div>
          <div className="nav-container">
            <ul className="nav-links">
              <li href="#">Home</li>
              <li href="#">TV Shows</li>
              <li href="#">Movies</li>
              <li href="#">Latest</li>
              <li href="#">My List</li>
              <li href="#">Browse by Language</li>
            </ul>
          </div>
        </div>
    

        <div className="logos">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header