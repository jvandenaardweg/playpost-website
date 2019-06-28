import React from 'react'
import { Link, navigate } from 'gatsby'
import './style.scss'
import Icon from 'components/Icon'

import { scrollIt } from '../../utils/scroll'
import { APPLE_APP_STORE_URL } from '../../constants/urls'
// import Logo from '../../../static/svg/logo.svg'

class Navbar extends React.PureComponent {
  state = {
    isMobileMenuOpen: false,
  }

  handleOnClickFeatures = event => {
    const { location } = this.props
    event.preventDefault()

    if (location.pathname === '/') {
      return scrollIt(document.getElementById('pricing'))
    }

    return navigate('/#features')
  }

  handleOnClickPricing = event => {
    const { location } = this.props
    event.preventDefault()

    if (location.pathname === '/') {
      return scrollIt(document.getElementById('pricing'))
    }

    return navigate('/#pricing')
  }

  handleToggleMobileMenu = event => {
    const { isMobileMenuOpen } = this.state
    event.preventDefault()
    this.setState({ isMobileMenuOpen: !isMobileMenuOpen })
  }

  render() {
    const { location, title } = this.props
    const { isMobileMenuOpen } = this.state

    return (
      <div className="bg-tint">
        <div className="container">
          <div className="navbar navbar-expand-lg">
            <span
              className="navbar-toggler mr-1"
              data-id="headers-1-sidebar-toggle"
              onClick={this.handleToggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </span>
            <div className="mr-5 d-flex">
              <Link to="/">
                <svg
                  width="149"
                  height="34"
                  viewBox="0 0 149 34"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#FFF" fillRule="nonzero">
                    <path d="M3 16H1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm43 0h-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm-7-8c-.552 0-1 .475-1 1.063v14.874c0 .588.448 1.063 1 1.063s1-.475 1-1.063V9.063C40 8.476 39.552 8 39 8zM17 8c-.552 0-1 .475-1 1.063v14.874c0 .588.448 1.063 1 1.063s1-.475 1-1.063V9.063C18 8.476 17.552 8 17 8zm-9 4c-.552 0-1 .503-1 1.125v6.75C7 20.497 7.448 21 8 21s1-.503 1-1.125v-6.75C9 12.503 8.552 12 8 12zm26-7c-.552 0-1 .466-1 1.042v22.916c0 .576.448 1.042 1 1.042s1-.466 1-1.042V6.042C35 5.466 34.552 5 34 5zm-8 0c-.552 0-1 .466-1 1.042v22.916c0 .576.448 1.042 1 1.042s1-.466 1-1.042V6.042C27 5.466 26.552 5 26 5zM12 5c-.552 0-1 .466-1 1.042v22.916c0 .576.448 1.042 1 1.042s1-.466 1-1.042V6.042C13 5.466 12.552 5 12 5zm18-5c-.552 0-1 .475-1 1.063v31.875c0 .587.448 1.062 1 1.062s1-.475 1-1.063V1.064C31 .475 30.552 0 30 0zm-9 0c-.552 0-1 .475-1 1.063v31.875c0 .587.448 1.062 1 1.062s1-.475 1-1.063V1.064C22 .475 21.552 0 21 0zM65.548 23.23c-.75 0-1.373-.123-1.87-.37-.498-.248-.894-.549-1.19-.904a5.564 5.564 0 0 1-.69-1.018h-.128v6.971h-3.085v-18h3.034v2.165h.18c.158-.318.383-.658.673-1.019.29-.36.681-.67 1.176-.929.494-.258 1.125-.387 1.892-.387 1.011 0 1.924.258 2.74.775.815.517 1.463 1.276 1.943 2.276.48 1 .72 2.227.72 3.682 0 1.437-.236 2.659-.707 3.664-.472 1.006-1.114 1.773-1.926 2.302-.813.528-1.733.792-2.762.792zm-.86-2.531c1.017 0 1.79-.4 2.322-1.198.531-.798.794-1.813.788-3.046.006-1.222-.254-2.225-.78-3.009-.525-.784-1.302-1.176-2.33-1.176-.995 0-1.756.38-2.285 1.142-.528.761-.792 1.775-.792 3.043 0 1.272.267 2.298.8 3.076.535.779 1.294 1.168 2.276 1.168zm11.05-15.154V23h-3.084V5.545h3.085zm6.015 17.72c-1.25 0-2.292-.336-3.128-1.006-.835-.67-1.252-1.648-1.252-2.932 0-.983.237-1.746.711-2.289.475-.542 1.091-.937 1.85-1.184a11.827 11.827 0 0 1 2.407-.507l.23-.026c1.074-.114 1.846-.232 2.314-.354.47-.122.7-.399.695-.83-.006-.648-.195-1.15-.567-1.505-.372-.355-.922-.533-1.649-.533-.756 0-1.354.165-1.794.495-.44.33-.737.718-.89 1.167l-2.881-.409c.34-1.193 1.007-2.093 1.998-2.701.992-.608 2.19-.912 3.593-.912.608 0 1.223.073 1.845.221a5.303 5.303 0 0 1 1.709.733c.517.341.933.801 1.248 1.38.316.58.473 1.302.473 2.166V23H85.7v-1.798h-.102c-.278.55-.732 1.032-1.36 1.444-.627.412-1.455.618-2.484.618zm.801-2.268c.932 0 1.67-.267 2.216-.801.546-.534.819-1.165.819-1.892v-1.543c-.131.108-.371.203-.72.286-.35.082-.72.153-1.113.213-.392.06-.724.106-.997.14-.688.097-1.261.286-1.722.567-.46.282-.69.718-.69 1.309 0 .568.207.997.622 1.287.415.29.943.434 1.585.434zm9.628 7.1a5.206 5.206 0 0 1-1.943-.35l.716-2.471c.676.193 1.24.225 1.692.098.452-.128.828-.55 1.13-1.266l.323-.818-4.764-13.38h3.273l3.017 9.885h.136l3.026-9.886h3.28l-5.283 14.796c-.364 1.028-.924 1.85-1.68 2.467-.755.616-1.73.925-2.923.925zm17.35-4.824c-.84 0-1.514-.14-2.02-.422-.505-.281-.895-.602-1.167-.963-.273-.361-.483-.66-.631-.9h-.17v6.921h-2.012v-18h1.943v2.08h.239c.148-.228.354-.519.618-.874s.645-.673 1.142-.954c.497-.282 1.172-.422 2.024-.422 1.102 0 2.074.275 2.915.826.84.551 1.497 1.333 1.969 2.344.471 1.011.707 2.205.707 3.58 0 1.386-.236 2.586-.707 3.6-.472 1.015-1.125 1.799-1.96 2.353-.836.554-1.799.83-2.89.83zm-.273-1.807c.841 0 1.544-.223 2.11-.67.565-.445.991-1.047 1.278-1.806.287-.758.43-1.604.43-2.535 0-.92-.14-1.752-.421-2.493-.282-.742-.705-1.33-1.27-1.765-.566-.434-1.274-.652-2.127-.652-1.227 0-2.159.452-2.795 1.356-.636.903-.955 2.088-.955 3.554 0 1.483.323 2.688.968 3.617.645.93 1.572 1.394 2.782 1.394zm13.293 1.807c-1.182 0-2.217-.282-3.106-.844-.89-.563-1.583-1.35-2.08-2.36-.497-1.012-.746-2.194-.746-3.546 0-1.364.249-2.554.746-3.571.497-1.017 1.19-1.807 2.08-2.37.889-.562 1.924-.843 3.106-.843s2.218.28 3.107.843c.889.563 1.582 1.353 2.08 2.37.496 1.017.745 2.207.745 3.57 0 1.353-.249 2.535-.746 3.546-.497 1.012-1.19 1.798-2.08 2.361-.888.562-1.924.844-3.106.844zm0-1.807c.898 0 1.637-.23 2.216-.69.58-.46 1.009-1.066 1.287-1.816a6.95 6.95 0 0 0 .418-2.437c0-.875-.14-1.69-.418-2.446-.278-.756-.707-1.367-1.287-1.833-.58-.466-1.318-.699-2.216-.699-.898 0-1.636.233-2.216.7-.58.465-1.008 1.076-1.287 1.832a7.021 7.021 0 0 0-.417 2.446c0 .875.139 1.687.417 2.437.279.75.708 1.355 1.287 1.816.58.46 1.318.69 2.216.69zm17.35-8.625l-1.807.511c-.176-.454-.472-.88-.886-1.278-.415-.398-1.063-.597-1.943-.597-.802 0-1.468.184-2 .55-.53.366-.796.831-.796 1.393 0 .5.182.895.546 1.185.363.29.931.531 1.704.725l1.943.477c2.318.568 3.478 1.75 3.478 3.545 0 .756-.215 1.428-.644 2.016-.429.588-1.027 1.052-1.794 1.393-.767.341-1.66.512-2.676.512-1.335 0-2.44-.29-3.315-.87-.875-.58-1.43-1.426-1.662-2.54l1.909-.477c.358 1.41 1.369 2.114 3.034 2.114.937 0 1.683-.2 2.237-.6.554-.401.831-.883.831-1.445 0-.927-.648-1.54-1.943-1.841l-2.182-.512c-1.199-.284-2.078-.726-2.638-1.325-.56-.6-.84-1.35-.84-2.254 0-.739.21-1.392.627-1.96.418-.569.989-1.015 1.713-1.339.725-.323 1.547-.485 2.468-.485 1.295 0 2.313.284 3.055.852.741.568 1.268 1.318 1.58 2.25zm8.043-2.932v1.705h-2.796v7.636c0 .568.084.993.252 1.274.167.281.383.469.647.563.265.093.544.14.84.14.221 0 .403-.013.545-.038.142-.026.256-.047.341-.064l.41 1.807a4.426 4.426 0 0 1-.572.157 4.418 4.418 0 0 1-.929.081 4.02 4.02 0 0 1-1.666-.366 3.282 3.282 0 0 1-1.346-1.116c-.356-.5-.533-1.131-.533-1.893v-8.181h-1.977V9.909h1.977V6.773h2.011v3.136h2.796z" />
                  </g>
                </svg>
              </Link>
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
                  <a
                    className="nav-link text-white"
                    href=""
                    onClick={this.handleOnClickFeatures}
                  >
                    Features
                  </a>
                </div>
                <div
                  className={
                    location.pathname === '/faq'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link
                    className="nav-link text-white"
                    to="/#pricing"
                    onClick={this.handleOnClickPricing}
                  >
                    Pricing
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
              <a
                className="btn btn-lg btn-white font-weight-semibold"
                href={APPLE_APP_STORE_URL}
              >
                Get iPhone App
              </a>
            </div>
          </div>
          <div
            className={isMobileMenuOpen ? 'navbar-side show' : 'navbar-side'}
            id="headers-1-sidebar"
            data-id="headers-1-sidebar-close"
          >
            <div className="navbar-side-content d-flex flex-column justify-content-between">
              <div className="weight-700">
                <a
                  className="navbar-side-close mb-4"
                  href=""
                  data-id="headers-1-sidebar-close"
                  onClick={this.handleToggleMobileMenu}
                >
                  {/* <%= require('./assets/glyphs/close.svg') %> */}
                  close
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
