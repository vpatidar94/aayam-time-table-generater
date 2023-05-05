import { ReactComponent as LogoDark } from "../assets/images/logos/aayamlogo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <LogoDark loading="lazy" />
    </Link>
  );
};

export default Logo;
