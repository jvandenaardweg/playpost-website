import React from 'react'
import { Link } from 'gatsby'

import voicesImage from '../../../static/img/example-voices.png'
import VoiceSample from 'components/VoiceSample/index'

class Voices extends React.Component {
  state = {
    isVisibleSamples: false,
  }

  handleOnClickListenSamples = event => {
    event.preventDefault()
    this.setState({ isVisibleSamples: !this.state.isVisibleSamples })
  }
  render() {
    const { isVisibleSamples } = this.state

    return (
      <div
        className="row justify-content-between align-items-center py-5"
        id="voices"
      >
        <div className="col-12 col-md-6 pl-md-0 mb-4 mb-md-0 position-relative">
          <VoiceSample
            src="https://storage.playpost.app/voices/8a0b8297-5070-4733-a424-933adf568ed2.wav"
            label="Richard (American)"
            language="English"
            accent="American"
            gender="Male"
            style={{ position: 'absolute', top: '22%', left: '15%' }}
          />
          <VoiceSample
            src="https://storage.playpost.app/voices/1d6ae8a7-a745-4216-8e56-92b1f11a7e75.wav"
            label="Jack (British)"
            language="English"
            accent="British"
            gender="Male"
            style={{ position: 'absolute', top: '8%', left: '60%' }}
          />
          <VoiceSample
            src="https://storage.playpost.app/voices/1d6e122d-e102-4de1-9dba-a0b840763858.wav"
            label="Emily (American)"
            language="English"
            accent="American"
            gender="Female"
            style={{ position: 'absolute', top: '40%', left: '50%' }}
          />
          <VoiceSample
            src="https://storage.playpost.app/voices/24f93f2e-824c-4eb6-a617-fb12d02fdae4.wav"
            label="Albert (German)"
            language="German"
            accent=""
            gender="Male"
            style={{ position: 'absolute', top: '65%', left: '27%' }}
          />
          <VoiceSample
            src="https://storage.playpost.app/voices/32d5c10d-56bc-4509-bad1-8f7b223c8602.wav"
            label="Noah (Australian)"
            language="English"
            accent="Australian"
            gender="Male"
            style={{ position: 'absolute', top: '65%', left: '70%' }}
          />
          <img className="w-100" src={voicesImage} alt="Playpost voices" />
        </div>
        <div className="col-12 col-md-5">
          <h4 className="text-black-50">Sounds natural</h4>
          <h2>50+ naturally sounding voices by Artificial Intelligence</h2>
          <p className="mb-2">
            The most advanced text to speech synthesis solutions to speak text
            to you and sound natural and pleasant to listen to. Personalize the
            experience by using a variety of voices.<br /><br />
            <a
              className="action-link"
              href="#"
              onClick={this.handleOnClickListenSamples}
            >
              <span>
                {isVisibleSamples ? 'Hide samples' : 'Listen to samples'}
              </span>
            </a>
          </p>

          <div className={!isVisibleSamples ? 'd-none' : ''}>
            <VoiceSample
              src="https://storage.playpost.app/voices/8a0b8297-5070-4733-a424-933adf568ed2.wav"
              label="Richard (American)"
              language="English"
              accent="American"
              gender="Male"
            />
            <VoiceSample
              src="https://storage.playpost.app/voices/1d6ae8a7-a745-4216-8e56-92b1f11a7e75.wav"
              label="Jack (British)"
              language="English"
              accent="British"
              gender="Male"
            />
            <VoiceSample
              src="https://storage.playpost.app/voices/1d6e122d-e102-4de1-9dba-a0b840763858.wav"
              label="Emily (American)"
              language="English"
              accent="American"
              gender="Female"
            />
            <VoiceSample
              src="https://storage.playpost.app/voices/24f93f2e-824c-4eb6-a617-fb12d02fdae4.wav"
              label="Albert (German)"
              language="German"
              accent=""
              gender="Male"
            />
            <VoiceSample
              src="https://storage.playpost.app/voices/32d5c10d-56bc-4509-bad1-8f7b223c8602.wav"
              label="Noah (Australian)"
              language="English"
              accent="Australian"
              gender="Male"
            />
            <VoiceSample
              src="https://storage.playpost.app/voices/5f42e3bc-0db3-4f2c-84b2-5cc348a60610.wav"
              label="Armand (French)"
              language="French"
              gender="Male"
            />
            <VoiceSample
              src="https://storage.playpost.app/voices/df71540d-eacf-4b63-91c7-677f95c941f4.wav"
              label="Koen (Dutch)"
              language="Dutch"
              gender="Male"
            />
            <VoiceSample
              src="https://storage.playpost.app/voices/ca0e586e-0128-47b5-8a4e-eed168ac4cca.wav"
              label="Vivaan (Indian English)"
              language="Indian English"
              gender="Male"
            />
            <VoiceSample
              src="https://storage.playpost.app/voices/2945b5e5-ec8a-4851-bdf6-2e41dcfe6202.wav"
              label="Maya (Spanish)"
              language="Spanish"
              gender="Female"
            />
            <VoiceSample
              src="https://storage.playpost.app/voices/eda85a99-619d-4d13-ac3b-ab5203cf3134.mp3"
              label="Enrique (Spanish)"
              language="Spanish"
            />
          </div>

          {/* <VoiceSample
            src="https://storage.playpost.app/voices/405ed251-a67e-4b0c-a168-2cb0adffad69.wav"
            label="Hugo (French)"
          />
          <VoiceSample
            src="https://storage.playpost.app/voices/5f42e3bc-0db3-4f2c-84b2-5cc348a60610.wav"
            label="Armand (French)"
          />
          <VoiceSample
            src="https://storage.playpost.app/voices/df71540d-eacf-4b63-91c7-677f95c941f4.wav"
            label="Koen (Dutch)"
          />
          <VoiceSample
            src="https://storage.playpost.app/voices/ca0e586e-0128-47b5-8a4e-eed168ac4cca.wav"
            label="Vivaan (Indian English)"
          />
          <VoiceSample
            src="https://storage.playpost.app/voices/2945b5e5-ec8a-4851-bdf6-2e41dcfe6202.wav"
            label="Maya (Spanish)"
          />
          <VoiceSample
            src="https://storage.playpost.app/voices/eda85a99-619d-4d13-ac3b-ab5203cf3134.mp3"
            label="Enrique (Spanish)"
          /> */}

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
                Male ánd female voices, with different accents like British, American or Australian.
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
