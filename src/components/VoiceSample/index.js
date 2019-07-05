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
      html5: true,
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
          {!isPlaying && (
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
          {isPlaying && (
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
