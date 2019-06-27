import React from 'react'
import { Link } from 'gatsby'

import { Howl } from 'howler'

class VoiceSample extends React.Component {
  state = {
    isPlaying: false,
  }

  sound = null

  componentDidMount() {
    const { src } = this.props

    this.sound = new Howl({
      src,
      autoplay: false,
      loop: false,
      volume: 0.5,
      onplay: () => {
        this.setState({ isPlaying: true })
      },
      onpause: () => {
        this.setState({ isPlaying: false })
      },
      onstop: () => {
        this.setState({ isPlaying: false })
      },
      onend: () => {
        this.setState({ isPlaying: false })
      },
    })
  }

  handlePlay = () => {
    const { isPlaying } = this.state

    if (!isPlaying) return this.sound.play()

    return this.sound.pause()
  }

  render() {
    const { location, title } = this.props
    const { isPlaying } = this.state

    return (
      <button type="button" onClick={this.handlePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    )
  }
}

export default VoiceSample
