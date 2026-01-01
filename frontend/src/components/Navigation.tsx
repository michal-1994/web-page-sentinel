import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav style={{ width: 200, padding: 16, borderRight: "1px solid #ddd" }}>
      <h3>Web Sentinel</h3>
      <ul>
        <li><Link to="/check">Check URL</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
