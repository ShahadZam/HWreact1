import NavbarItem from './NavbarItem'

const Navbar = ({ navItems, appName }) => {
    return (
      <nav className='navbar fixed-top navbar-expand-lg bg-dark navbar-dark'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            {appName}
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <NavbarItem navItems={navItems} />
          </div>
        </div>
      </nav>
    );
  };

export default Navbar;