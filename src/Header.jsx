import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Landmarks</Link> | {" "}
        <Link to="/about">About</Link> | {" "}
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}