import React from 'react'
import { Link } from 'gatsby'

import voicesImage from '../../../static/img/example-voices.png'
import VoiceSample from 'components/VoiceSample/index';

class Voices extends React.Component {
  render() {
    const { location, title } = this.props

    return (
      <div className="row justify-content-between align-items-center py-5">
        <div className="col-12 col-md-6 pl-md-0 mb-4 mb-md-0">
          <img className="w-100" src={voicesImage} alt="Playpost voices" />
        </div>
        <div className="col-12 col-md-5">
          <h4 className="text-black-50">Sounds natural</h4>
          <h2>50+ naturally sounding voices by Artificial Intelligence</h2>
          <p className="mb-2">
            The most advanced text to speech synthesis solutions to speak text
            to you and sound natural and pleasant to listen to. Personalize the
            experience by using a variety of voices.
          </p>
          <VoiceSample src="audio/example.wav" />
          <div className="row">
            <div className="col-6">
              <div className="icon">
                <svg width="32" height="24" xmlns="http://www.w3.org/2000/svg">
                  <g
                    transform="translate(1 1)"
                    stroke="#06F"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="15" cy="11" r="3" />
                    <path d="M21.36 4.64a9 9 0 0 1 0 12.735M8.64 17.36a9 9 0 0 1 0-12.735M25.605.395c5.856 5.857 5.856 15.353 0 21.21m-21.21 0c-5.856-5.857-5.856-15.353 0-21.21" />
                  </g>
                </svg>
              </div>
              <h4 className="font-weight-semibold mb-1">Voice customization</h4>
              <div className="small">
                Male ánd female voices, with different accessents like British
                or American.
              </div>
            </div>
            <div className="col-6">
              <div className="icon">
                <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                  <g
                    transform="translate(1 1)"
                    stroke="#06F"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="15" cy="15" r="15" />
                    <path d="M0 15h30M15 0a22.95 22.95 0 0 1 6 15 22.95 22.95 0 0 1-6 15 22.95 22.95 0 0 1-6-15 22.95 22.95 0 0 1 6-15z" />
                  </g>
                </svg>
              </div>
              <h4 className="font-weight-semibold mb-1">Multiple languages</h4>
              <div className="small">
                Not just English, but also; German, French, Dutch and Spanish.{' '}
                <strong>More to come!</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Voices
