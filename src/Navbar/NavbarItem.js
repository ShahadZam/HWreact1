import NavItem from './NavItem';

const NavbarItem = ({ navItems }) => {
  return (
    <ul className='navbar-nav'>
      {navItems.map((item, index) => {
        return <NavItem key={index} item={item} />;
      })}
    </ul>
  );
};

export default NavbarItem;