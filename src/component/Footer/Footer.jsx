import "./footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-inner-wrapper">
          <div className="footer-icons">
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
          <div className="footer-columns">
            <ul>
              <li>
                <a href="#">Audio and Subtitles</a>
              </li>
              <li>
                <a href="#">Media Center</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Audio Description</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Legal Notices</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Cookie Preferences</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Gift Cards</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Corporate Information</a>
              </li>
            </ul>
          </div>
        </div>

        <p className="footer-note">
          &copy; 2025 Netflix Clone. By Serkalem Wase
        </p>
      </footer>
    </>
  );
};

export default Footer;
