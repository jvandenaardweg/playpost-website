import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

// import Logo from '../../../static/svg/logo.svg'

class Navbar extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <div className="bg-tint">
        <div className="container">
          <div className="navbar navbar-expand-lg">
            <Link
              to="/"
              className="navbar-toggler mr-1"
              data-id="headers-1-sidebar-toggle"
            >
              {/* <Logo /> */}
            </Link>
            <div className="mr-5 d-flex">
              {/* <%= require('./assets/logo.svg') %> */}
            </div>
            <div className="collapse navbar-collapse weight-500">
              <div className="navbar-nav">
                <div
                  className={
                    location.pathname === '/' ? 'nav-item active' : 'nav-item'
                  }
                >
                  <Link className="nav-link text-white" to="/">
                    Home
                  </Link>
                </div>
                <div
                  className={
                    location.pathname === '/about'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link className="nav-link text-white" to="/about">
                    About
                  </Link>
                </div>
                <div
                  className={
                    location.pathname === '/faq'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link className="nav-link text-white" to="/faq">
                    FAQ
                  </Link>
                </div>
                <div
                  className={
                    location.pathname === '/privacy'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link className="nav-link text-white" to="/privacy">
                    Privacy
                  </Link>
                </div>
                <div
                  className={
                    location.pathname === '/contact'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link className="nav-link text-white" to="/contact">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <div className="ml-auto d-lg-none">
              <a href="">
                {/* <%= require('./assets/glyphs/star-primary.svg') %> */}
              </a>
            </div>
            <div className="ml-auto d-none d-lg-block">
              <a className="btn btn-lg btn-white font-weight-semibold" href="">
                Get iPhone App
              </a>
            </div>
          </div>
          <div
            className="navbar-side"
            id="headers-1-sidebar"
            data-id="headers-1-sidebar-close"
          >
            <div className="navbar-side-content d-flex flex-column justify-content-between">
              <div className="weight-700">
                <a
                  className="navbar-side-close mb-4"
                  href=""
                  data-id="headers-1-sidebar-close"
                >
                  {/* <%= require('./assets/glyphs/close.svg') %> */}
                </a>
                <div className="navbar-nav">
                  <div className="nav-item">
                    <a className="nav-link text-dark" href="">
                      First
                    </a>
                  </div>
                  <div className="nav-item">
                    <a className="nav-link text-dark" href="">
                      Second
                    </a>
                  </div>
                  <div className="nav-item">
                    <a className="nav-link text-dark" href="">
                      Third
                    </a>
                  </div>
                  <div className="nav-item dropdown">
                    <a
                      className="nav-link text-dark dropdown-toggle"
                      href=""
                      id="headers-1-dropdown"
                      data-toggle="dropdown"
                    >
                      Fourth
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="headers-1-dropdown"
                    >
                      <a className="dropdown-item" href="">
                        Action 1
                      </a>
                      <a className="dropdown-item" href="">
                        Action 2
                      </a>
                      <a className="dropdown-item" href="">
                        Action 3
                      </a>
                    </div>
                  </div>
                  <div className="nav-item">
                    <a className="nav-link text-dark" href="">
                      Fifth
                    </a>
                  </div>
                  <div className="nav-item">
                    <a className="nav-link text-dark" href="">
                      Sixth
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <p className="mb-3">
                  <a className="transparent-invert-link" href="">
                    {/* <%= require('./assets/glyphs/instagram-small.svg') %> */}
                  </a>
                  <a className="transparent-invert-link ml-2" href="">
                    {/* <%= require('./assets/glyphs/facebook-small.svg') %> */}
                  </a>
                  <a className="transparent-invert-link ml-2" href="">
                    {/* <%= require('./assets/glyphs/twitter-small.svg') %> */}
                  </a>
                  <a className="transparent-invert-link ml-2" href="">
                    {/* <%= require('./assets/glyphs/pinterest-small.svg') %> */}
                  </a>
                  <a className="transparent-invert-link ml-2" href="">
                    {/* <%= require('./assets/glyphs/thumbler-small.svg') %> */}
                  </a>
                </p>
                <p className="small mb-0">
                  <span className="d-block d-xl-inline text-muted mb-1 mb-xl-0 mr-2">
                    &copy; 2019 Playpost. All right reserved.
                  </span>
                  <a className="text-muted mr-2" href="">
                    <span>Privacy Policy</span>
                  </a>
                  <a className="text-muted" href="">
                    <span>Terms of Service</span>
                  </a>
                </p>
              </div>
            </div>
            <div className="navbar-side-content weight-700">
              <a
                className="navbar-side-close mb-4"
                href=""
                data-id="headers-2-sidebar-close"
              >
                {/* <%= require('./assets/glyphs/close.svg') %> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
