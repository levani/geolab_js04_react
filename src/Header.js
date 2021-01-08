import { Link, useHistory } from "react-router-dom";

export default function Header() {
  let history = useHistory();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>

      {/* <button onClick={() => {
        history.push("/users/123");
      }}>user 123</button> */}
    </nav>
  )
}