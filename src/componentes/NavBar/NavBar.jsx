import { NavLink, Outlet } from 'react-router-dom'
import SearchBar from './SearchBar'
import "./NavStyle/Navbar.css"
import icon_menu from '../icons/icon_menu.svg'
import Footer from '../Footer/Footer'



function NavBar() {
  return (
    <>
      <header>
        <nav className='nav'>
          <div className='container'>
            <div className='title'>
              <figure className='logo'>
                <NavLink to={'/'}><img src="https://clipground.com/images/videojuegos-png-2.png" alt="logo" /></NavLink>

              </figure>
              <h1><NavLink to={'/'} className='title' >FREEGAMES</NavLink></h1>
            </div>
            <div className='nav-links'>
              <ul >
                <li><NavLink to={'/games'} className='NavLink'>Games</NavLink></li>
                <li><NavLink to={'/favorites'} className='NavLink'>Favorites</NavLink></li>
                <li><NavLink to={'/about'} className='NavLink'>About</NavLink></li>
              </ul>
            </div>

            <div className='search-bar'>
              <SearchBar />
            </div>

            <img src={icon_menu} alt="menu" className='menu' />

          </div>
        </nav>
      </header>
      <section className='contend'>

        <Outlet />


        <section className='footer-nav'>
          <Footer />
        </section>
      </section>

    </>
  )
}

export default NavBar