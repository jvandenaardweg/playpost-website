import React from 'react'
import { Link } from 'gatsby'

import './style.scss'

import { Howl } from 'howler'

class VoiceSample extends React.Component {
  state = {
    isPlaying: false,
    isLoading: false,
  }

  sound = null

  componentDidMount() {
    const { src } = this.props

    this.sound = new Howl({
      src,
      autoplay: false,
      loop: false,
      volume: 0.5,
      preload: false,
      // html5: true, // seems to not work on safari/chrome mobile
      onplay: () => {
        this.setState({ isPlaying: true, isLoading: false })
      },
      onpause: () => {
        this.setState({ isPlaying: false, isLoading: false })
      },
      onstop: () => {
        this.setState({ isPlaying: false, isLoading: false })
      },
      onend: () => {
        this.setState({ isPlaying: false, isLoading: false })
      },
      onload: () => {
        this.setState({ isPlaying: false, isLoading: true })
      },
      onloaderror: (soundId, error) =>
        console.error('Error while loading preview', soundId, error),
    })

    // Put all the sounds on the window, so we can pause all others when we start playing one
    if (!window.sounds) window.sounds = []
    window.sounds.push(this.sound)
  }

  componentWillUnmount() {
    if (this.sound) {
      this.sound.unload()
      this.sound = null
    }
  }

  handlePlay = () => {
    const { isPlaying } = this.state

    if (!isPlaying) {
      // Stop others
      window.sounds.forEach(sound => sound.stop())

      // Play current
      this.sound.load()
      return this.sound.play()
    }

    return this.sound.pause()
  }

  render() {
    const {
      location,
      label,
      style,
      language,
      accent,
      iconComponent,
      iconPosition,
    } = this.props
    const { isPlaying, isLoading } = this.state

    const buttonClassName = isPlaying
      ? `btn btn-white mb-1 mr-1 ${
          iconPosition === 'left' ? 'order-1' : 'order-2'
        }`
      : `btn btn-white mb-1 mr-1 ${
          iconPosition === 'left' ? 'order-1' : 'order-2'
        }`
    return (
      <div
        className={`voice-sample ${iconComponent ? 'voice-sample--icon' : ''}`}
        style={{ ...style }}
      >
        <div
          className={`voice-sample-icon ${
            iconPosition === 'left' ? 'order-2' : 'order-1'
          }`}
        >
          {iconComponent}
        </div>
        <button
          type="button"
          className={buttonClassName}
          onClick={this.handlePlay}
          style={{ boxShadow: '0 2px 10px 0 rgba(0,0,0,0.17)' }}
        >
          {isLoading && !isPlaying && (
            <svg
              class="lds-spinner"
              width="22"
              height="22"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid"
            >
              <circle
                fill="#037DE2"
                fillRule="nonzero"
                cx="50"
                cy="50"
                r="50"
              ></circle>
              <g transform="rotate(0 50 50)">
                <rect
                  x="48"
                  y="24"
                  rx="4.8"
                  ry="2.4"
                  width="4"
                  height="12"
                  fill="#ffffff"
                >
                  <animate
                    attributeName="opacity"
                    values="1;0"
                    keyTimes="0;1"
                    dur="1s"
                    begin="-0.9166666666666666s"
                    repeatCount="indefinite"
                  ></animate>
                </rect>
              </g>
              <g transform="rotate(30 50 50)">
                <rect
                  x="48"
                  y="24"
                  rx="4.8"
                  ry="2.4"
                  width="4"
                  height="12"
                  fill="#ffffff"
                >
                  <animate
                    attributeName="opacity"
                    values="1;0"
                    keyTimes="0;1"
                    dur="1s"
                    begin="-0.8333333333333334s"
                    repeatCount="indefinite"
                  ></animate>
                </rect>
              </g>
              <g transform="rotate(60 50 50)">
                <rect
                  x="48"
                  y="24"
                  rx="4.8"
                  ry="2.4"
                  width="4"
                  height="12"
                  fill="#ffffff"
                >
                  <animate
                    attributeName="opacity"
                    values="1;0"
                    keyTimes="0;1"
                    dur="1s"
                    begin="-0.75s"
                    repeatCount="indefinite"
                  ></animate>
                </rect>
              </g>
              <g transform="rotate(90 50 50)">
                <rect
                  x="48"
                  y="24"
                  rx="4.8"
                  ry="2.4"
                  width="4"
                  height="12"
                  fill="#ffffff"
                >
                  <animate
                    attributeName="opacity"
                    values="1;0"
                    keyTimes="0;1"
                    dur="1s"
                    begin="-0.6666666666666666s"
                    repeatCount="indefinite"
                  ></animate>
                </rect>
              </g>
              <g transform="rotate(120 50 50)">
                <rect
                  x="48"
                  y="24"
                  rx="4.8"
                  ry="2.4"
                  width="4"
                  height="12"
                  fill="#ffffff"
                >
                  <animate
                    attributeName="opacity"
                    values="1;0"
                    keyTimes="0;1"
                    dur="1s"
                    begin="-0.5833333333333334s"
                    repeatCount="indefinite"
                  ></animate>
                </rect>
              </g>
              <g transform="rotate(150 50 50)">
                <rect
                  x="48"
                  y="24"
                  rx="4.8"
                  ry="2.4"
                  width="4"
                  height="12"
                  fill="#ffffff"
                >
                  <animate
                    attributeName="opacity"
                    values="1;0"
                    keyTimes="0;1"
                    dur="1s"
                    begin="-0.5s"
                    repeatCount="indefinite"
                  ></animate>
                </rect>
              </g>
              <g transform="rotate(180 50 50)">
                <rect
                  x="48"
                  y="24"
                  rx="4.8"
                  ry="2.4"
                  width="4"
                  height="12"
                  fill="#ffffff"
                >
                  <animate
                    attributeName="opacity"
                    values="1;0"
                    keyTimes="0;1"
                    dur="1s"
                    begin="-0.4166666666666667s"
                    repeatCount="indefinite"
                  ></animate>
                </rect>
              </g>
              <g transform="rotate(210 50 50)">
                <rect
                  x="48"
                  y="24"
                  rx="4.8"
                  ry="2.4"
                  width="4"
                  height="12"
                  fill="#ffffff"
                >
                  <animate
                    attributeName="opacity"
                    values="1;0"
                    keyTimes="0;1"
                    dur="1s"
                    begin="-0.3333333333333333s"
                    repeatCount="indefinite"
                  ></animate>
                </rect>
              </g>
              <g transform="rotate(240 50 50)">
                <rect
                  x="48"
                  y="24"
                  rx="4.8"
                  ry="2.4"
                  width="4"
                  height="12"
                  fill="#ffffff"
                >
                  <animate
                    attributeName="opacity"
                    values="1;0"
                    keyTimes="0;1"
                    dur="1s"
                    begin="-0.25s"
                    repeatCount="indefinite"
                  ></animate>
                </rect>
              </g>
              <g transform="rotate(270 50 50)">
                <rect
                  x="48"
                  y="24"
                  rx="4.8"
                  ry="2.4"
                  width="4"
                  height="12"
                  fill="#ffffff"
                >
                  <animate
                    attributeName="opacity"
                    values="1;0"
                    keyTimes="0;1"
                    dur="1s"
                    begin="-0.16666666666666666s"
                    repeatCount="indefinite"
                  ></animate>
                </rect>
              </g>
              <g transform="rotate(300 50 50)">
                <rect
                  x="48"
                  y="24"
                  rx="4.8"
                  ry="2.4"
                  width="4"
                  height="12"
                  fill="#ffffff"
                >
                  <animate
                    attributeName="opacity"
                    values="1;0"
                    keyTimes="0;1"
                    dur="1s"
                    begin="-0.08333333333333333s"
                    repeatCount="indefinite"
                  ></animate>
                </rect>
              </g>
              <g transform="rotate(330 50 50)">
                <rect
                  x="48"
                  y="24"
                  rx="4.8"
                  ry="2.4"
                  width="4"
                  height="12"
                  fill="#ffffff"
                >
                  <animate
                    attributeName="opacity"
                    values="1;0"
                    keyTimes="0;1"
                    dur="1s"
                    begin="0s"
                    repeatCount="indefinite"
                  ></animate>
                </rect>
              </g>
            </svg>
          )}

          {!isLoading && !isPlaying && (
            <svg
              className="icon-stopped"
              width="22"
              height="22"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <circle
                  fill="#000"
                  fillRule="nonzero"
                  cx="25"
                  cy="25"
                  r="25"
                ></circle>
                <path
                  d="M20 17.396v14.443c0 1.1 1.2 1.77 2.125 1.17l11.233-7.22c.856-.544.856-1.799 0-2.357l-11.233-7.207c-.924-.6-2.125.07-2.125 1.171z"
                  fill="#FFF"
                ></path>
              </g>
            </svg>
          )}

          {!isLoading && isPlaying && (
            <svg
              className="icon-playing"
              width="22"
              height="22"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <circle
                  fill="#037DE2"
                  fillRule="nonzero"
                  cx="25"
                  cy="25"
                  r="25"
                ></circle>
                <path
                  d="M20.333 34c1.284 0 2.334-1.157 2.334-2.571V18.57c0-1.414-1.05-2.571-2.334-2.571C19.05 16 18 17.157 18 18.571V31.43C18 32.843 19.05 34 20.333 34zm7-15.429V31.43c0 1.414 1.05 2.571 2.334 2.571C30.95 34 32 32.843 32 31.429V18.57C32 17.157 30.95 16 29.667 16c-1.284 0-2.334 1.157-2.334 2.571z"
                  fill="#FFF"
                ></path>
              </g>
            </svg>
          )}
          <span className="ml-1">{accent ? accent : language}</span>
        </button>
      </div>
    )
  }
}

export default VoiceSample
