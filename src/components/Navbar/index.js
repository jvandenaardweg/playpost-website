import React from 'react'
import { Link, navigate } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

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

    this.setState({ isMobileMenuOpen: false })

    if (location.pathname === '/') {
      return scrollIt(document.getElementById('features'))
    }

    return navigate('/#features')
  }

  handleOnClickPricing = event => {
    const { location } = this.props
    event.preventDefault()

    this.setState({ isMobileMenuOpen: false })

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

  handleOnClickContact = event => {
    event.preventDefault()

    this.setState({ isMobileMenuOpen: false })

    typeof window !== 'undefined' && window.drift.api.openChat()
  }

  handleOnClickVoices = event => {
    const { location } = this.props
    event.preventDefault()

    this.setState({ isMobileMenuOpen: false })

    if (location.pathname === '/') {
      return scrollIt(document.getElementById('voices'))
    }

    return navigate('/#voices')
  }

  handleOnClickReviews = event => {
    const { location } = this.props
    event.preventDefault()

    this.setState({ isMobileMenuOpen: false })

    if (location.pathname === '/') {
      return scrollIt(document.getElementById('reviews'))
    }

    return navigate('/#reviews')
  }

  handleOnClickGetStarted = event => {
    const { location } = this.props
    event.preventDefault()

    this.setState({ isMobileMenuOpen: false })

    if (location.pathname === '/') {
      return scrollIt(document.getElementById('get-started'))
    }

    return navigate('/#get-started')
  }

  render() {
    const { location, title } = this.props
    const { isMobileMenuOpen } = this.state

    return (
      <div className="bg-tint">
        <div className="container">
          <div className="navbar navbar-expand-lg">
            <span
              className="navbar-toggler position-absolute"
              data-id="headers-1-sidebar-toggle"
              onClick={this.handleToggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
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
            <div className="d-flex logo">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="952"
                  height="236"
                  viewBox="0 0 952 236"
                >
                  <g fill="none" fillRule="evenodd">
                    <path d="M0 0h957v236H0z" />
                    <path
                      fill="#FFF"
                      fillRule="nonzero"
                      d="M22.16 110.625H7.385C3.31 110.625 0 113.922 0 118c0 4.078 3.31 7.375 7.386 7.375H22.16c4.077 0 7.386-3.297 7.386-7.375 0-4.078-3.309-7.375-7.386-7.375zm295.454 0H302.84c-4.077 0-7.386 3.297-7.386 7.375 0 4.078 3.309 7.375 7.386 7.375h14.773c4.077 0 7.386-3.297 7.386-7.375 0-4.078-3.31-7.375-7.386-7.375zM265.909 59c-4.077 0-7.386 3.297-7.386 7.375v103.25c0 4.078 3.309 7.375 7.386 7.375s7.386-3.297 7.386-7.375V66.375c0-4.078-3.309-7.375-7.386-7.375zm-147.727 0c-4.077 0-7.387 3.297-7.387 7.375v103.25c0 4.078 3.31 7.375 7.387 7.375s7.386-3.297 7.386-7.375V66.375c0-4.078-3.309-7.375-7.386-7.375zM59.09 88.5c-4.077 0-7.386 3.297-7.386 7.375v44.25c0 4.078 3.309 7.375 7.386 7.375s7.386-3.297 7.386-7.375v-44.25c0-4.078-3.309-7.375-7.386-7.375zm177.273-59c-4.078 0-7.387 3.297-7.387 7.375v162.25c0 4.078 3.31 7.375 7.387 7.375s7.386-3.297 7.386-7.375V36.875c0-4.078-3.31-7.375-7.386-7.375zm-59.091 0c-4.078 0-7.387 3.297-7.387 7.375v162.25c0 4.078 3.31 7.375 7.387 7.375s7.386-3.297 7.386-7.375V36.875c0-4.078-3.309-7.375-7.386-7.375zm-88.637 0c-4.077 0-7.386 3.297-7.386 7.375v162.25c0 4.078 3.31 7.375 7.386 7.375 4.078 0 7.387-3.297 7.387-7.375V36.875c0-4.078-3.31-7.375-7.387-7.375zM206.818 0c-4.077 0-7.386 3.297-7.386 7.375v221.25c0 4.078 3.309 7.375 7.386 7.375s7.387-3.297 7.387-7.375V7.375c0-4.078-3.31-7.375-7.387-7.375zm-59.09 0c-4.078 0-7.387 3.297-7.387 7.375v221.25c0 4.078 3.309 7.375 7.386 7.375 4.078 0 7.387-3.297 7.387-7.375V7.375c0-4.078-3.31-7.375-7.387-7.375zM386.224 169V67.182h36.292c7.889 0 14.443 1.442 19.663 4.325 5.22 2.884 9.131 6.82 11.733 11.808 2.602 4.988 3.886 10.597 3.854 16.828.032 6.265-1.26 11.89-3.879 16.879-2.618 4.988-6.538 8.932-11.758 11.832-5.22 2.9-11.774 4.35-19.662 4.35h-20.881V169h-15.362zm15.362-48.821h19.489c7.523 0 12.95-1.89 16.282-5.668 3.33-3.778 4.98-8.567 4.946-14.368.033-5.733-1.624-10.465-4.971-14.193-3.348-3.73-8.833-5.593-16.456-5.593h-19.29v39.822zm87.798-52.997V169H474.52V67.182h14.865zm42.209 103.508c-4.839 0-9.206-.895-13.1-2.684-3.895-1.79-6.985-4.417-9.272-7.88-2.287-3.464-3.43-7.698-3.43-12.703 0-4.342.836-7.905 2.51-10.689a18.6 18.6 0 0 1 6.712-6.612c2.8-1.624 5.94-2.842 9.42-3.654a97.707 97.707 0 0 1 10.64-1.864c.663-.067 1.301-.133 1.914-.2.613-.065 1.218-.132 1.815-.198 5.502-.63 9.479-1.284 11.932-1.964 2.452-.68 3.662-2.262 3.629-4.748 0-4.375-1.21-7.772-3.63-10.191-2.419-2.42-6.048-3.63-10.887-3.63-5.005 0-8.94 1.094-11.808 3.282-2.867 2.187-4.847 4.64-5.94 7.358l-13.97-3.182c2.485-6.96 6.628-11.949 12.428-14.965 5.8-3.016 12.197-4.524 19.19-4.524 2.983 0 6.182.356 9.596 1.069 3.413.713 6.637 2.022 9.67 3.927 3.032 1.906 5.501 4.6 7.407 8.08 1.906 3.48 2.859 8.004 2.859 13.572V169H554.76v-10.44h-.597c-1.425 2.85-3.96 5.584-7.606 8.203-3.646 2.618-8.634 3.927-14.965 3.927zm3.232-11.931c4.143 0 7.672-.812 10.59-2.437 2.916-1.624 5.145-3.753 6.686-6.388 1.541-2.635 2.312-5.46 2.312-8.477v-9.843c-.73.696-2.262 1.309-4.6 1.84-2.336.53-4.822.985-7.456 1.366-2.635.381-4.748.671-6.34.87-4.308.564-7.995 1.699-11.061 3.406s-4.599 4.549-4.599 8.526c0 3.68 1.36 6.455 4.077 8.328 2.718 1.872 6.181 2.809 10.39 2.809zm63.09 39.921c-2.321 0-4.36-.198-6.116-.596-1.757-.398-3.033-.78-3.828-1.144l3.58-12.33c4.11 1.095 7.523 1.16 10.24.2 2.719-.962 5.055-3.895 7.01-8.8l2.387-5.867-28.139-77.507h15.91l19.339 59.262h.795l19.34-59.262h15.958l-31.818 87.5c-2.154 5.933-5.261 10.507-9.322 13.722-4.06 3.215-9.172 4.822-15.337 4.822zm108.28-28.189c-4.673 0-8.468-.778-11.385-2.336-2.916-1.558-5.203-3.38-6.86-5.469-1.658-2.088-2.934-3.944-3.829-5.568h-.894v40.518h-14.865v-105h14.517v12.38h1.242c.895-1.558 2.147-3.39 3.754-5.494 1.607-2.105 3.861-3.944 6.761-5.518 2.9-1.575 6.704-2.362 11.41-2.362 6.165 0 11.667 1.558 16.506 4.673 4.839 3.116 8.642 7.607 11.41 13.473 2.767 5.867 4.15 12.926 4.15 21.18 0 8.252-1.375 15.328-4.125 21.228-2.751 5.9-6.522 10.424-11.31 13.572-4.79 3.15-10.284 4.723-16.482 4.723zm-3.33-12.677c4.44 0 8.161-1.185 11.16-3.555 3-2.37 5.262-5.593 6.787-9.67 1.524-4.076 2.287-8.667 2.287-13.77 0-5.072-.754-9.604-2.262-13.598-1.508-3.994-3.754-7.15-6.737-9.471-2.983-2.32-6.728-3.48-11.236-3.48-6.496 0-11.434 2.436-14.815 7.308-3.38 4.872-5.088 11.286-5.12 19.24.032 8.054 1.764 14.567 5.195 19.539 3.43 4.971 8.344 7.457 14.74 7.457zm84.168 12.727c-7.159 0-13.406-1.64-18.743-4.922-5.336-3.28-9.479-7.88-12.428-13.796-2.95-5.916-4.425-12.802-4.425-20.657 0-7.921 1.475-14.848 4.425-20.781 2.95-5.933 7.092-10.54 12.428-13.821 5.337-3.281 11.584-4.922 18.743-4.922 7.16 0 13.407 1.64 18.743 4.922 5.336 3.281 9.48 7.888 12.43 13.82 2.95 5.934 4.424 12.86 4.424 20.782 0 7.855-1.475 14.74-4.425 20.657-2.95 5.916-7.093 10.515-12.429 13.796-5.336 3.282-11.583 4.922-18.743 4.922zm0-12.478c4.674 0 8.527-1.227 11.56-3.68 3.032-2.452 5.294-5.725 6.786-9.818 1.491-4.094 2.237-8.576 2.237-13.449 0-4.872-.746-9.363-2.237-13.473-1.492-4.11-3.754-7.399-6.787-9.868-3.032-2.47-6.885-3.704-11.559-3.704-4.673 0-8.534 1.235-11.583 3.704-3.05 2.47-5.32 5.759-6.812 9.868-1.491 4.11-2.237 8.601-2.237 13.473 0 4.873.746 9.355 2.237 13.449 1.492 4.093 3.762 7.366 6.812 9.819 3.049 2.452 6.91 3.679 11.583 3.679zm109.425-46.783l-13.473 2.386c-.862-2.552-2.46-4.897-4.798-7.035-2.336-2.137-5.825-3.206-10.465-3.206-4.209 0-7.73.936-10.564 2.809-2.834 1.872-4.234 4.284-4.201 7.233-.033 2.586.903 4.649 2.809 6.19 1.905 1.541 4.963 2.809 9.172 3.803l12.13 2.784c13.921 3.215 20.882 10.11 20.882 20.682 0 4.607-1.318 8.684-3.953 12.23-2.635 3.547-6.297 6.33-10.987 8.353-4.69 2.021-10.117 3.032-16.282 3.032-8.584 0-15.561-1.831-20.93-5.493-5.37-3.663-8.684-8.875-9.944-15.636l14.368-2.188c1.79 7.557 7.259 11.336 16.407 11.336 4.872 0 8.766-1.02 11.683-3.058 2.916-2.038 4.375-4.532 4.375-7.482 0-4.872-3.596-8.104-10.789-9.695l-12.926-2.834c-7.159-1.59-12.429-4.176-15.81-7.755-3.38-3.58-5.07-8.07-5.07-13.473 0-4.508 1.26-8.46 3.778-11.857 2.519-3.398 5.99-6.04 10.416-7.93 4.424-1.89 9.52-2.834 15.287-2.834 8.253 0 14.75 1.79 19.489 5.37 4.74 3.579 7.871 8.335 9.396 14.268zm53.445-18.644v11.932h-15.66v41.96c-.034 4.31.877 7.085 2.734 8.328 1.856 1.243 3.993 1.864 6.413 1.864 1.193 0 2.237-.083 3.132-.248.895-.166 1.59-.299 2.088-.398l2.685 12.28c-.862.331-2.097.67-3.704 1.019-1.608.348-3.588.538-5.941.572-3.911.066-7.565-.638-10.962-2.113-3.398-1.475-6.14-3.729-8.228-6.762-2.089-3.032-3.116-6.852-3.083-11.46v-45.042h-11.186V92.636h11.186V74.341h14.865v18.295h15.66z"
                    />
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
                    <span>Home</span>
                  </Link>
                </div>
                <div className="nav-item">
                  <a
                    className="nav-link text-white"
                    href=""
                    onClick={this.handleOnClickFeatures}
                  >
                    <span>Features</span>
                  </a>
                </div>
                <div className="nav-item">
                  <a
                    className="nav-link text-white"
                    href=""
                    onClick={this.handleOnClickVoices}
                  >
                    <span>Voices</span>
                  </a>
                </div>
                <div
                  className={
                    location.pathname === '/publishers'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link className="nav-link text-white" to="/publishers">
                    <span>For publishers</span>
                  </Link>
                </div>
                <div
                  className={
                    location.pathname === '/support'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link className="nav-link text-white" to="/support">
                    <span>Support</span>
                  </Link>
                </div>
                <div className="nav-item">
                  <a
                    className="nav-link text-white"
                    href=""
                    onClick={this.handleOnClickContact}
                  >
                    <span>Contact</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="ml-auto d-none d-lg-block">
              <a
                className="btn btn-lg btn-white font-weight-semibold"
                href=""
                onClick={this.handleOnClickGetStarted}
              >
                Get started
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#000"
                      fillRule="evenodd"
                      d="M12 10.609L18.609 4 20 5.391 13.391 12 20 18.609 18.609 20 12 13.391 5.391 20 4 18.609 10.609 12 4 5.391 5.391 4z"
                    />
                  </svg>
                </a>
                <div className="navbar-nav">
                  <div
                    className={
                      location.pathname === '/' ? 'nav-item active' : 'nav-item'
                    }
                  >
                    <Link className="nav-link text-dark" to="/">
                      <span>Home</span>
                    </Link>
                  </div>
                  <div className="nav-item">
                    <a
                      className="nav-link text-dark"
                      href=""
                      onClick={this.handleOnClickFeatures}
                    >
                      <span>Features</span>
                    </a>
                  </div>
                  <div className="nav-item">
                    <a
                      className="nav-link text-dark"
                      href=""
                      onClick={this.handleOnClickVoices}
                    >
                      <span>Voices</span>
                    </a>
                  </div>
                  <div className="nav-item">
                    <a
                      className="nav-link text-dark"
                      href=""
                      onClick={this.handleOnClickReviews}
                    >
                      <span>Reviews</span>
                    </a>
                  </div>
                  <div className="nav-item">
                    <Link className="nav-link text-dark" to="/support">
                      <span>Support</span>
                    </Link>
                  </div>
                  <div className="nav-item">
                    <a
                      className="nav-link text-dark"
                      href=""
                      onClick={this.handleOnClickContact}
                    >
                      <span>Contact</span>
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
                  <Link className="text-muted mr-2" to="/privacy">
                    <span>Privacy Policy</span>
                  </Link>
                  <Link className="text-muted" to="/terms">
                    <span>Terms &amp; Conditions</span>
                  </Link>
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
