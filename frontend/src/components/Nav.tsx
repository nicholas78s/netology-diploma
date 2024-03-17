import { NavLink } from 'react-router-dom';
import { INavItem } from '../models/NavItem';

interface INavProps {
  items: INavItem[];
  className: string;
}

const Nav = ({ items, className }: INavProps) => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    ['nav-link', isActive ? 'active' : ''].join(' ');

  return (
    <ul className={className}>
      {items.map(({ label, link }: INavItem) => (
        <NavLink key={label} className={linkClass} to={link}>
          {label}
        </NavLink>
      ))}
    </ul>
  );
};

export default Nav;
