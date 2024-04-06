import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to='/home'>Home</Link>
      <Link to='/Student'>Student</Link>
      <Link to='/Classes'>Classes</Link>
      <Link to='/Disciplines'>Disciplines</Link>
      <Link to='/Teachers'>Teachers</Link>
    </nav>
  );
}