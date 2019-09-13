import { Link } from 'gatsby'
import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import {
  APPLE_APP_STORE_URL,
  GOOGLE_PLAY_STORE_URL,
  FACEBOOK_URL,
  TWITTER_URL,
  INSTAGRAM_URL,
  MEDIUM_URL,
} from '../../constants/urls'
import './style.scss'

const Footer = ({ author, title }) => {
  function handleOnClickContact(event) {
    event.preventDefault()
    typeof window !== 'undefined' && window.drift.api.openChat()
  }

  return (
    <div className="footer">
      <div className="container py-8">
        <div className="row pt-4">
          <div className="col-12 col-md-6 col-lg-5 mb-4">
            <h2>Playpost</h2>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="mb-1">
                  <Link className="text-white-70" to="/">
                    <span>Home</span>
                  </Link>
                </div>
                <div className="mb-1">
                  <Link className="text-white-70" to="/#features">
                    <span>Features</span>
                  </Link>
                </div>
                <div className="mb-1">
                  <Link className="text-white-70" to="/#voices">
                    <span>Voices</span>
                  </Link>
                </div>
                <div className="mb-1">
                  <Link className="text-white-70" to="/publishers">
                    <span>For publishers</span>
                  </Link>
                </div>
                <div className="mb-1">
                  <Link className="text-white-70" to="/support">
                    <span>Support</span>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-1">
                  <Link className="text-white-70" to="/privacy">
                    <span>Privacy Policy</span>
                  </Link>
                </div>
                <div className="mb-1">
                  <Link className="text-white-70" to="/terms">
                    <span>Terms &amp; Conditions</span>
                  </Link>
                </div>
                <div className="mb-1">
                  <Link className="text-white-70" to="/acceptable-use-policy">
                    <span>Acceptable Use Policy</span>
                  </Link>
                </div>
                <div className="mb-1">
                  <Link className="text-white-70" to="/crawler">
                    <span>Crawler</span>
                  </Link>
                </div>
                <div className="mb-1">
                  <Link className="text-white-70" to="/support">
                    <span>Contact</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <h2>Mobile apps</h2>
            <div className="row">
              <div className="mb-2 col-12">
                <OutboundLink href={APPLE_APP_STORE_URL}>
                  <svg
                    width="123"
                    height="38"
                    viewBox="0 0 123 38"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path
                        d="M0 3.995A3.996 3.996 0 0 1 4.005 0h114.99A3.996 3.996 0 0 1 123 3.995v30.01A3.996 3.996 0 0 1 118.995 38H4.005A3.996 3.996 0 0 1 0 34.005V3.995z"
                        fill="#000"
                      />
                      <path
                        d="M38.83 6.517h2.187c1.818 0 2.889 1.116 2.889 3.04 0 1.93-1.07 3.063-2.89 3.063H38.83V6.517zm.948.816v4.466h1.15c1.294 0 2.013-.79 2.013-2.233 0-1.438-.719-2.233-2.013-2.233h-1.15zm7.502 5.342c-1.328 0-2.174-.905-2.174-2.352 0-1.442.85-2.356 2.174-2.356 1.324 0 2.17.91 2.17 2.356 0 1.447-.842 2.352-2.17 2.352zm0-.762c.778 0 1.24-.588 1.24-1.59 0-1.002-.462-1.594-1.24-1.594s-1.243.596-1.243 1.594c0 1.002.465 1.59 1.243 1.59zm9.52-3.886l-1.265 4.593h-.947l-.977-3.46h-.021l-.969 3.46h-.943L50.41 8.027h.914l.854 3.637h.017l.973-3.637h.88l.977 3.637h.017l.854-3.637h.905zm1.18 4.593V8.027h.875V8.8h.017c.279-.54.74-.824 1.45-.824 1.016 0 1.595.643 1.595 1.7v2.944H61V9.85c0-.698-.321-1.088-.994-1.088-.693 0-1.108.483-1.108 1.206v2.652h-.918zm5.493 0V6.242h.918v6.378h-.918zm4.461.055c-1.328 0-2.173-.905-2.173-2.352 0-1.442.85-2.356 2.173-2.356 1.324 0 2.17.91 2.17 2.356 0 1.447-.841 2.352-2.17 2.352zm0-.762c.779 0 1.24-.588 1.24-1.59 0-1.002-.461-1.594-1.24-1.594-.778 0-1.243.596-1.243 1.594 0 1.002.465 1.59 1.243 1.59zm5.1.022c.682 0 1.198-.436 1.198-1.04v-.36l-1.117.076c-.626.038-.952.27-.952.676 0 .394.343.648.872.648zm-.245.731c-.917 0-1.552-.541-1.552-1.362 0-.803.622-1.268 1.755-1.34l1.24-.072v-.356c0-.524-.351-.812-.965-.812-.499 0-.863.258-.943.656h-.859c.026-.812.796-1.413 1.828-1.413 1.12 0 1.844.592 1.844 1.502v3.15h-.876v-.765h-.021c-.254.5-.825.812-1.45.812zm5.6 0c-1.15 0-1.938-.926-1.938-2.347 0-1.413.787-2.339 1.93-2.339.659 0 1.183.3 1.446.808h.02V6.242h.914v6.378h-.888v-.779h-.017c-.27.52-.795.825-1.467.825zm.232-3.908c-.74 0-1.23.618-1.23 1.565 0 .952.486 1.565 1.23 1.565.736 0 1.231-.626 1.231-1.565 0-.935-.495-1.565-1.23-1.565zm8.276 3.917c-1.328 0-2.174-.905-2.174-2.352 0-1.442.85-2.356 2.174-2.356 1.324 0 2.17.91 2.17 2.356 0 1.447-.842 2.352-2.17 2.352zm0-.762c.778 0 1.24-.588 1.24-1.59 0-1.002-.462-1.594-1.24-1.594s-1.243.596-1.243 1.594c0 1.002.465 1.59 1.243 1.59zm3.506.707V8.027h.875V8.8h.017c.28-.54.74-.824 1.45-.824 1.016 0 1.595.643 1.595 1.7v2.944h-.917V9.85c0-.698-.322-1.088-.994-1.088-.694 0-1.108.483-1.108 1.206v2.652h-.918zm8.326-5.625h.914v1.032h.88v.723h-.88v2.567c0 .398.178.584.563.584.097 0 .253-.013.312-.021v.723a2.588 2.588 0 0 1-.515.046c-.918 0-1.274-.35-1.274-1.239V8.75h-.634v-.723h.634V6.995zm3.206 5.625V6.242h.91V8.8h.02c.275-.54.749-.824 1.451-.824 1.01 0 1.616.672 1.616 1.708v2.936h-.918V9.862c0-.685-.343-1.1-1.015-1.1-.715 0-1.146.491-1.146 1.227v2.63h-.918zm7.426-3.904c-.66 0-1.138.482-1.188 1.188h2.33c-.021-.714-.474-1.188-1.142-1.188zm1.138 2.559h.875c-.13.824-.939 1.4-1.97 1.4-1.333 0-2.162-.897-2.162-2.335s.838-2.373 2.123-2.373c1.26 0 2.056.876 2.056 2.267v.322h-3.253v.055c0 .795.5 1.32 1.252 1.32.533 0 .952-.254 1.079-.656zM45.774 30l-1.08-3.189h-4.497L39.117 30h-1.904l4.26-11.8h1.979l4.26 11.8h-1.938zm-3.353-9.837l-1.758 5.176h3.565l-1.758-5.176h-.049zm11.19.867c2.265 0 3.753 1.774 3.753 4.53 0 2.747-1.48 4.53-3.712 4.53-1.276 0-2.281-.564-2.813-1.546h-.032v4.4h-1.775V21.12h1.71v1.472h.04c.499-.957 1.594-1.562 2.83-1.562zm-.45 7.555c1.44 0 2.388-1.185 2.388-3.025 0-1.832-.948-3.026-2.388-3.026-1.406 0-2.363 1.219-2.37 3.026.007 1.815.956 3.025 2.37 3.025zm10.397-7.555c2.265 0 3.753 1.774 3.753 4.53 0 2.747-1.48 4.53-3.712 4.53-1.276 0-2.281-.564-2.813-1.546h-.033v4.4H58.98V21.12h1.71v1.472h.04c.499-.957 1.594-1.562 2.83-1.562zm-.45 7.555c1.44 0 2.388-1.185 2.388-3.025 0-1.832-.948-3.026-2.388-3.026-1.406 0-2.363 1.219-2.37 3.026.007 1.815.956 3.025 2.37 3.025zm9.534-1.872h1.807c.131 1.17 1.268 1.938 2.821 1.938 1.489 0 2.56-.769 2.56-1.824 0-.915-.646-1.463-2.175-1.84l-1.53-.367c-2.166-.524-3.172-1.538-3.172-3.181 0-2.036 1.774-3.435 4.293-3.435 2.494 0 4.203 1.399 4.26 3.435h-1.783c-.106-1.178-1.079-1.89-2.502-1.89-1.423 0-2.396.72-2.396 1.767 0 .834.622 1.325 2.143 1.7l1.3.32c2.42.572 3.426 1.545 3.426 3.27 0 2.208-1.758 3.59-4.554 3.59-2.617 0-4.383-1.349-4.498-3.483zm11.247-7.588h1.767v1.995h1.7v1.398h-1.7v4.963c0 .77.343 1.129 1.087 1.129.188 0 .49-.025.605-.041v1.398c-.196.05-.613.09-.997.09-1.775 0-2.462-.678-2.462-2.396v-5.143h-1.226V21.12h1.226v-1.995zm8.762 10.981c-2.568 0-4.203-1.75-4.203-4.546 0-2.788 1.643-4.555 4.203-4.555 2.559 0 4.194 1.758 4.194 4.555 0 2.796-1.627 4.546-4.194 4.546zm0-1.472c1.504 0 2.395-1.136 2.395-3.074s-.89-3.083-2.395-3.083-2.404 1.153-2.404 3.083c0 1.938.899 3.074 2.404 3.074zM98.468 30v-8.88h1.693v1.496h.033c.278-.99 1.095-1.586 2.142-1.586.262 0 .482.024.621.057v1.66c-.147-.057-.458-.106-.81-.106-1.168 0-1.904.81-1.904 2.06V30h-1.775zm9.522-7.547c-1.276 0-2.2.932-2.298 2.297h4.506c-.041-1.382-.916-2.297-2.208-2.297zm2.2 4.947h1.692c-.253 1.594-1.815 2.706-3.81 2.706-2.576 0-4.179-1.733-4.179-4.513s1.62-4.588 4.105-4.588c2.437 0 3.974 1.693 3.974 4.383v.622h-6.288v.106c0 1.537.965 2.551 2.42 2.551 1.03 0 1.84-.49 2.086-1.267z"
                        fill="#FFF"
                      />
                      <path
                        d="M27.81 26.548c-1.013 1.475-2.061 2.941-3.716 2.972-1.629.03-2.151-.96-4.01-.96-1.86 0-2.442.93-3.98.99-1.597.06-2.812-1.593-3.834-3.061-2.087-3.003-3.68-8.49-1.538-12.194 1.061-1.84 2.962-3.003 5.023-3.034 1.569-.028 3.05 1.053 4.009 1.053.96 0 2.759-1.298 4.65-1.108.792.033 3.014.318 4.44 2.396-.112.074-2.651 1.545-2.62 4.61.03 3.66 3.221 4.876 3.258 4.893-.029.086-.51 1.737-1.682 3.443zM20.862 7.185c.876-1.022 2.356-1.782 3.577-1.833.156 1.42-.417 2.84-1.265 3.865-.848 1.022-2.238 1.819-3.602 1.713-.185-1.39.502-2.837 1.29-3.745z"
                        fill="#FFF"
                        fillRule="nonzero"
                      />
                    </g>
                  </svg>
                </OutboundLink>
              </div>
              <div className="mb-2 col-12">
                <OutboundLink href={GOOGLE_PLAY_STORE_URL}>
                  <svg
                    width="123"
                    height="38"
                    viewBox="0 0 123 38"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        x1="29.532%"
                        y1="-6.096%"
                        x2="55.094%"
                        y2="92.156%"
                        id="a"
                      >
                        <stop stopColor="#006884" offset="0%" />
                        <stop stopColor="#8AD1D0" offset="100%" />
                      </linearGradient>
                      <linearGradient
                        x1="-7.528%"
                        y1="15.759%"
                        x2="91.537%"
                        y2="86.25%"
                        id="b"
                      >
                        <stop stopColor="#24BBB6" offset="0%" />
                        <stop stopColor="#DBE692" offset="100%" />
                      </linearGradient>
                      <linearGradient
                        x1="49.94%"
                        y1="105.755%"
                        x2="49.94%"
                        y2="-3.127%"
                        id="c"
                      >
                        <stop stopColor="#FCC072" offset="0%" />
                        <stop stopColor="#F58A5B" offset="100%" />
                      </linearGradient>
                      <linearGradient
                        x1="11.149%"
                        y1="117.837%"
                        x2="90.437%"
                        y2="12.103%"
                        id="d"
                      >
                        <stop stopColor="#712B8F" offset="0%" />
                        <stop stopColor="#EA1D27" offset="100%" />
                      </linearGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <path
                        d="M119 38H4c-2.27 0-4-1.71-4-4V4c0-2.29 1.73-4 4-4h115c2.27 0 4 1.71 4 4v30c0 2.29-1.73 4-4 4z"
                        fill="#000"
                        fillRule="nonzero"
                      />
                      <path
                        d="M9.82 19.12V9.132c0-.571.478-1.047.954-1.047.477 0 .668.095.954.286L30.13 18.454c.382.19.572.475.572.76 0 .286-.19.571-.572.762L11.728 30.059c-.19.095-.477.285-.954.285-.476 0-.953-.476-.953-1.046V19.12z"
                        fill="url(#a)"
                      />
                      <path
                        d="M21.74 19.215L10.584 8.085h.19c.477 0 .668.095.954.286l13.54 7.42-3.528 3.424z"
                        fill="url(#b)"
                      />
                      <path
                        d="M25.172 22.544L21.74 19.12l3.527-3.52 4.863 2.663c.382.19.572.476.572.761 0 .286-.19.571-.572.761l-4.958 2.759z"
                        fill="url(#c)"
                      />
                      <path
                        d="M10.68 30.154L21.74 19.12l3.432 3.424-13.444 7.324c-.286.19-.477.286-1.049.286.095 0 .095 0 0 0z"
                        fill="url(#d)"
                      />
                      <path
                        d="M68.27 32.722c-.477-.38-.858-1.046-1.05-1.427l1.527-.666c.095.19.286.476.476.761.382.38.954.761 1.526.761.572 0 1.24-.285 1.62-.76.287-.476.478-.952.478-1.618v-.57c-1.145 1.426-3.528 1.236-4.863-.286-1.43-1.522-1.43-4.09 0-5.612 1.43-1.427 3.528-1.617 4.767-.285v-.666h1.621v7.134c0 1.807-.667 2.853-1.525 3.52-.573.475-1.43.665-2.194.665-.858-.095-1.716-.38-2.383-.951zm39.95.38l1.622-3.804-2.86-6.564h1.62l2.003 4.661 2.002-4.66h1.62l-4.385 10.367h-1.621zm-7.722-3.614c-.477-.476-.668-1.142-.668-1.808 0-.57.19-1.141.572-1.521.668-.666 1.621-.952 2.67-.952.668 0 1.24.095 1.716.38 0-1.14-.953-1.616-1.716-1.616-.667 0-1.335.38-1.62 1.046l-1.431-.57c.286-.667 1.049-1.903 2.956-1.903.953 0 1.907.285 2.479.951.572.666.763 1.427.763 2.473v3.995h-1.621v-.665c-.191.285-.572.475-.858.665-.382.19-.859.286-1.335.286-.572-.095-1.43-.286-1.907-.761zm-50.821-3.425c0-1.902 1.43-3.995 4.004-3.995 2.48 0 4.005 2.093 4.005 3.995 0 1.903-1.43 3.996-4.005 3.996-2.574 0-4.004-2.093-4.004-3.996zm8.581 0c0-1.902 1.43-3.995 4.005-3.995 2.479 0 4.004 2.093 4.004 3.995 0 1.903-1.43 3.996-4.004 3.996-2.48 0-4.005-2.093-4.005-3.996zm-19.356 2.093c-2.383-2.378-2.288-6.278.096-8.751 1.24-1.237 2.765-1.807 4.386-1.807 1.525 0 3.05.57 4.195 1.712l-1.144 1.236c-1.716-1.712-4.482-1.617-6.102.095a4.588 4.588 0 0 0 0 6.374c1.716 1.807 4.576 1.902 6.293.095.572-.571.762-1.332.858-2.093h-4.005v-1.712h5.626c.095.38.095.856.095 1.332 0 1.426-.572 2.853-1.526 3.804-1.048 1.047-2.574 1.618-4.1 1.618-1.716-.096-3.432-.666-4.672-1.903zm40.333.666c-1.43-1.522-1.43-4.09 0-5.707 1.43-1.522 3.814-1.522 5.149 0 .476.475.763 1.141 1.049 1.807l-5.245 2.188a2.034 2.034 0 0 0 1.907 1.236c.858 0 1.43-.285 2.003-1.141l1.43.951c-.19.19-.381.38-.477.57-1.62 1.618-4.386 1.618-5.816.096zm9.916 1.141V19.405h3.433c2.002 0 3.623 1.427 3.623 3.139 0 1.712-1.43 3.139-3.242 3.139h-2.098v4.185h-1.716v.095zm8.01 0V19.405h1.62v10.558h-1.62zm-21.55-.19V17.978h1.717v11.795h-1.716zm29.082-2.949c-.381-.285-.953-.38-1.526-.38-1.144 0-1.811.57-1.811 1.236s.667 1.047 1.335 1.047c.953 0 2.002-.761 2.002-1.903zm-48.819-.76c0-1.142-.762-2.379-2.193-2.379-1.43 0-2.193 1.237-2.193 2.378 0 1.142.763 2.378 2.193 2.378 1.335 0 2.193-1.236 2.193-2.378zm8.582 0c0-1.142-.763-2.379-2.193-2.379-1.43 0-2.193 1.237-2.193 2.378 0 1.142.763 2.378 2.193 2.378 1.43 0 2.193-1.236 2.193-2.378zm8.486.665c0-.095 0-.19.095-.285v-.38-.381-.095c0-.095-.095-.286-.095-.38-.286-.952-1.144-1.618-2.002-1.618-1.145 0-2.098 1.142-2.098 2.378 0 1.332.953 2.378 2.193 2.378.763.095 1.525-.57 1.907-1.617zm6.96-.856l3.528-1.522c-.381-.666-.953-.856-1.43-.856-1.43.095-2.288 1.617-2.098 2.378zm14.589-3.234c0-.951-.763-1.617-1.812-1.617h-1.907v3.33h2.002c.954 0 1.717-.762 1.717-1.713z"
                        fill="#FFF"
                      />
                      <path
                        fill="#FFF"
                        d="M109.46 31.2h-.095v-.095h.095-.095v.095zM109.46 31.2c0-.095 0-.095 0 0 0-.095 0-.095 0 0zM109.46 31.2v-.095.095zM109.46 31.105v.095-.095zM109.46 31.2v-.095.095zM109.46 31.2c0-.095 0-.095 0 0zm0 0c0-.095 0-.095 0 0zM109.556 31.2c0-.095 0-.095 0 0 0-.095 0-.095 0 0 0-.095 0-.095 0 0zm0 0c0-.095 0-.095 0 0zM109.556 31.105v.095zM109.556 31.2v-.095.095zM109.556 31.2c0-.095 0-.095 0 0 0-.095 0-.095 0 0zm0-.095c0 .095 0 .095 0 0 0 .095 0 .095 0 0zM109.556 31.2c0-.095 0-.095 0 0 0-.095 0-.095 0 0 0-.095 0-.095 0 0 0-.095 0-.095 0 0zM109.651 31.2c0-.095 0-.095 0 0-.095-.095-.095-.095 0 0-.095 0-.095 0 0 0zm0-.095c0 .095 0 .095 0 0 0 .095-.095.095 0 0-.095 0 0 0 0 0zM109.651 31.2v-.095.095-.095.095-.095zM109.651 31.2c0-.095 0-.095 0 0 0-.095 0-.095 0 0 0-.095 0-.095 0 0 0-.095 0-.095 0 0 0-.095 0-.095 0 0 0-.095 0-.095 0 0 0-.095 0-.095 0 0 0-.095 0-.095 0 0zM109.747 31.105h-.096.096v.095-.095zM109.747 31.2v-.095.095zM109.747 31.2c0-.095 0-.095 0 0 0-.095 0-.095 0 0z"
                      />
                      <path
                        d="M37.567 10.083c0-1.712 1.24-2.759 2.766-2.759 1.048 0 1.716.476 2.193 1.142l-.763.475c-.286-.38-.763-.665-1.43-.665-1.05 0-1.812.76-1.812 1.902s.763 1.902 1.812 1.902c.572 0 1.048-.285 1.24-.475v-.856h-1.526v-.856h2.574v1.997c-.477.571-1.24.951-2.193.951-1.621 0-2.86-1.141-2.86-2.758zM43.765 12.746V7.42h3.623v.856h-2.765v1.331h2.67v.856h-2.67v1.522h2.765v.856zM50.058 12.746v-4.47h-1.62V7.42h4.195v.856h-1.621v4.47zM55.874 12.746V7.42h.954v5.326h-.954zM59.402 12.746v-4.47h-1.62V7.42h4.195v.856h-1.621v4.47zM65.028 10.083c0-1.617 1.144-2.759 2.765-2.759 1.621 0 2.765 1.142 2.765 2.759s-1.144 2.758-2.765 2.758c-1.62 0-2.765-1.236-2.765-2.758zm4.481 0c0-1.142-.667-1.903-1.811-1.903-1.05 0-1.812.857-1.812 1.903 0 1.141.667 1.902 1.812 1.902 1.144 0 1.811-.856 1.811-1.902zM75.326 12.746L72.56 8.941v3.805h-.953V7.42h.953l2.766 3.71V7.42h.953v5.326z"
                        fill="#FFF"
                        fillRule="nonzero"
                      />
                    </g>
                  </svg>
                </OutboundLink>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-2 mb-4">
            <h2>Extensions</h2>
            <div className="row">
              <div className="mb-1 col-12">
                <Link className="text-white-70" to="/chrome">
                  <span>Chrome</span>
                </Link>
              </div>
              <div className="mb-1 col-12">
                <Link className="text-white-70" to="/firefox">
                  <span>Firefox</span>
                </Link>
              </div>
              <div className="mb-1 col-12">
                <Link className="text-white-70" to="/opera">
                  <span>Opera</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-2 mb-4">
            <h2>Socials</h2>
            <div className="row">
              <div className="mb-1 col-12">
                <OutboundLink className="text-white-70" href={FACEBOOK_URL}>
                  <span>Facebook</span>
                </OutboundLink>
              </div>
              <div className="mb-1 col-12">
                <OutboundLink className="text-white-70" href={TWITTER_URL}>
                  <span>Twitter</span>
                </OutboundLink>
              </div>
              <div className="mb-1 col-12">
                <OutboundLink className="text-white-70" href={INSTAGRAM_URL}>
                  <span>Instagram</span>
                </OutboundLink>
              </div>
              <div className="mb-1 col-12">
                <OutboundLink className="text-white-70" href={MEDIUM_URL}>
                  <span>Medium</span>
                </OutboundLink>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer__bottom py-3">
              <div className="small text-center">
                <span className="text-muted">
                  &copy; 2019 Playpost. Made with &hearts; in Amsterdam by{' '}
                  <OutboundLink
                    className="text-muted"
                    href="https://www.linkedin.com/in/jvandenaardweg/"
                  >
                    <u>Jordy van den Aardweg</u>
                  </OutboundLink>
                  .
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
