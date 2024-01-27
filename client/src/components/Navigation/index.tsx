import { Link } from 'react-router-dom';
import { paths } from 'src/routes';

export const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to={paths.home}>Home</Link>
        </li>
        <li>
          <Link to={paths.calendar}>Calendar</Link>
        </li>
        <li>
          <Link to={paths.tasks}>Tasks</Link>
        </li>
      </ul>
    </nav>
  );
};
