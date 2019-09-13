import React from 'react'
import './style.scss'
import { scrollIt } from '../../utils/scroll'

import { VOICES_COUNT, LANGUAGE_COUNT } from '../../constants/counts';

import backgroundVoicesImage from '../../../static/img/background-voices.png'
import VoiceSample from 'components/VoiceSample/index'

class Voices extends React.Component {
  state = {
    isVisibleSamples: false,
  }

  handleOnClickListenSamples = event => {
    event.preventDefault()
    this.setState({ isVisibleSamples: !this.state.isVisibleSamples })
  }

  handleOnClickMoreToCome = event => {
    event.preventDefault()
    scrollIt(document.getElementById('newsletter'))
  }

  render() {
    const { isVisibleSamples } = this.state

    return (
      <section className="voices py-8" id="voices">
        <div className="row justify-content-between align-items-center">
          <div
            className="col-12 col-md-6 pl-md-0 mb-4 mb-md-0 position-relative voices-background-container"
            style={{ minHeight: 400 }}
          >
            <VoiceSample
              src={require('../../../static/audio/preview-richard.wav')}
              label="Richard (American)"
              language="English"
              accent="American English"
              gender="Male"
              style={{ top: '22%', left: '0%' }}
              iconComponent={<IconMaleWestern />}
            />
            <VoiceSample
              src={require('../../../static/audio/preview-jack.wav')}
              label="Jack (British)"
              language="English"
              accent="British English"
              gender="Male"
              style={{ top: '0%', left: '40%' }}
              iconComponent={<IconMaleRedhead />}
            />
            <VoiceSample
              src={require('../../../static/audio/preview-maya.wav')}
              label="Maya (Spanish)"
              language="Spanish"
              gender="Female"
              accent=""
              style={{ top: '38%', left: '54%' }}
              iconPosition="left"
              iconComponent={<IconFemaleWestern />}
            />
            <VoiceSample
              src={require('../../../static/audio/preview-emily.wav')}
              label="Emily (American)"
              language="English"
              accent="American English"
              gender="Female"
              style={{ top: '54%', left: '7%' }}
              iconComponent={<IconFemaleWesternBlonde />}
            />

            <VoiceSample
              src={require('../../../static/audio/preview-vivaan.wav')}
              label="Vivaan (Indian English)"
              language="English"
              accent="Indian English"
              gender="Male"
              style={{ top: '76%', left: '45%' }}
              iconComponent={<IconMaleIndian />}
            />
            <img
              className="voices-background"
              src={backgroundVoicesImage}
              alt="Playpost voices"
            />
          </div>
          <div className="col-12 col-md-5">
            <h3 className="text-black-50">Sounds natural</h3>
            <h2>
              {VOICES_COUNT}+ naturally sounding voices by Artificial
              Intelligence
            </h2>
            <p>
              The most advanced text to speech synthesis solutions to speak text
              to you and sound natural and pleasant to listen to. Personalize
              the experience by using a variety of voices.
            </p>
            <h3 className="mb-1 font-weight-semibold">
              {LANGUAGE_COUNT} supported languages
            </h3>
            <p className="mb-2">
              New languages are added on a regular basis. We plan on supporting
              all major languages, including yours.
              <br />
              <br />
              {/* <br />
            Playpost currently supports the following languages:
            <br />
            English, French, German, Spanish, Hindi, Dutch, Chinese (Mandarin),
            Indonesian, Portuguese, Polish, Norwegian, Danish, Czech, Greek,
            Swedish, Vietnamese, Korean, Finnish, Turkish, Russian and Romanian.
            <br />
            <br /> */}
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
                src={require('../../../static/audio/preview-richard.wav')}
                label="Richard (American)"
                language="English"
                accent="American"
                gender="Male"
              />
              <VoiceSample
                src={require('../../../static/audio/preview-jack.wav')}
                label="Jack (British)"
                language="English"
                accent="British"
                gender="Male"
              />
              <VoiceSample
                src={require('../../../static/audio/preview-emily.wav')}
                label="Emily (American)"
                language="English"
                accent="American"
                gender="Female"
              />
              <VoiceSample
                src={require('../../../static/audio/preview-albert.wav')}
                label="Albert (German)"
                language="German"
                accent=""
                gender="Male"
              />
              <VoiceSample
                src={require('../../../static/audio/preview-noah.wav')}
                label="Noah (Australian)"
                language="English"
                accent="Australian"
                gender="Male"
              />
              <VoiceSample
                src={require('../../../static/audio/preview-armand.wav')}
                label="Armand (French)"
                language="French"
                gender="Male"
              />
              <VoiceSample
                src={require('../../../static/audio/preview-koen.wav')}
                label="Koen (Dutch)"
                language="Dutch"
                gender="Male"
              />
              <VoiceSample
                src={require('../../../static/audio/preview-vivaan.wav')}
                label="Vivaan (Indian English)"
                language="Indian English"
                gender="Male"
              />
              <VoiceSample
                src={require('../../../static/audio/preview-maya.wav')}
                label="Maya (Spanish)"
                language="Spanish"
                gender="Female"
              />
              <VoiceSample
                src={require('../../../static/audio/preview-enrique.mp3')}
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
              <div className="col-12 col-sm-6">
                <div className="icon">
                  <svg
                    width="32"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
                <h4 className="font-weight-semibold mb-1">
                  Voice customization
                </h4>
                <div className="small">
                  Male ánd female voices, with different accents like British,
                  American or Australian.
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="icon">
                  <svg
                    width="32"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
                <h4 className="font-weight-semibold mb-1">
                  Multiple languages
                </h4>
                <div className="small">
                  Our goal is supporting all major languages, even yours.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const IconMaleWestern = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 50 50"
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="#F2A775"
        d="M49.706 29.259a4.529 4.529 0 1 1-9.057 0 4.529 4.529 0 0 1 9.057 0M9.983 29.259a4.529 4.529 0 1 1-9.057 0 4.529 4.529 0 0 1 9.057 0"
      />
      <path
        fill="#F4B48A"
        d="M25.316 49.12c-10.893 0-19.805-8.912-19.805-19.804V19.274c0-10.893 8.912-15.623 19.805-15.623 10.892 0 19.804 4.73 19.804 15.623v10.042c0 10.892-8.912 19.804-19.804 19.804"
      />
      <path
        fill="#F4B48A"
        d="M49.706 29.259a4.529 4.529 0 1 1-9.057 0 4.529 4.529 0 0 1 9.057 0M9.983 29.259a4.529 4.529 0 1 1-9.057 0 4.529 4.529 0 0 1 9.057 0"
      />
      <path
        fill="#F4B48A"
        d="M5.511 29.316V19.274c0-10.893 8.912-15.623 19.805-15.623 10.892 0 19.804 4.73 19.804 15.623v10.042c0 10.892-8.912 19.804-19.804 19.804-10.893 0-19.805-8.912-19.805-19.804z"
      />
      <path
        fill="#895837"
        d="M5.468 28.78s2.178-2.787 3.659-8.449c1.481-5.662-.523-12.195-.523-12.195s-2.176.481-3.397 5.923c-2.091 9.321.261 14.721.261 14.721M45.132 28.78s-2.178-2.787-3.659-8.449c-1.48-5.662.523-12.195.523-12.195s2.176.481 3.397 5.923c2.091 9.321-.261 14.721-.261 14.721"
      />
      <path
        fill="#895837"
        d="M22.28 15.889C9.388 15.366 6.165 8.833 5.555 6.046c-.609-2.788.262-6.098.262-6.098s2.787 4.007 14.634 2.265C32.297.471 36.217 1.255 39.44 3.258c3.223 2.004 2.961 5.836 2.961 5.836s-7.229 7.317-20.121 6.795z"
      />
      <path
        fill="#CB875F"
        d="M24.667 43.007c-3.876-.004-7.239-1.99-8.625-4.942a.749.749 0 0 1 .679-1.067c.283 0 .553.161.681.433 1.07 2.321 3.89 4.076 7.254 4.076h.022c3.363 0 6.182-1.755 7.254-4.076a.75.75 0 0 1 1.359.634c-1.386 2.952-4.749 4.938-8.624 4.942"
      />
      <path
        fill="#523B2E"
        d="M14.815 32.438a2.413 2.413 0 0 1-2.406-2.407v-1.75a2.413 2.413 0 0 1 2.406-2.406 2.413 2.413 0 0 1 2.406 2.406v1.75a2.414 2.414 0 0 1-2.406 2.407"
      />
      <path
        fill="#FFF"
        d="M14.969 28.011a.813.813 0 1 1-1.626-.002.813.813 0 0 1 1.626.002"
      />
      <path
        fill="#523B2E"
        d="M34.816 32.438a2.414 2.414 0 0 1-2.406-2.407v-1.75a2.413 2.413 0 0 1 2.406-2.406 2.413 2.413 0 0 1 2.406 2.406v1.75a2.413 2.413 0 0 1-2.406 2.407"
      />
      <path
        fill="#FFF"
        d="M34.97 28.011a.813.813 0 1 1-1.626-.002.813.813 0 0 1 1.626.002"
      />
      <path
        fill="#895837"
        d="M11.69 23.542h6.25v-1.75h-6.25zM31.691 23.542h6.25v-1.75h-6.25z"
      />
    </g>
  </svg>
)

const IconFemaleWestern = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="47"
    height="52"
    viewBox="0 0 47 52"
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="#F8CB95"
        d="M46.825 25.469a4.281 4.281 0 1 1-8.563 0 4.281 4.281 0 0 1 8.563 0"
      />
      <path
        fill="#4F2E1A"
        d="M5.596 27.239s-3.87 3.458-4.529 8.234c-.658 4.776 1.894 8.316 3.047 10.787 1.153 2.47 1.894 5.352 1.894 5.352s4.446-2.141 7.164-6.587c2.717-4.447 3.293-9.058 2.14-14.245-1.152-5.188-7.822-5.27-9.716-3.541"
      />
      <path
        fill="#F8CB95"
        d="M9.275 25.469a4.28 4.28 0 1 1-8.562 0 4.28 4.28 0 0 1 8.562 0"
      />
      <path
        fill="#F8CB95"
        d="M23.769 44.242c-10.296 0-18.721-8.424-18.721-18.72v-9.493c0-10.296 8.425-14.768 18.721-14.768 10.297 0 18.721 4.472 18.721 14.768v9.493c0 10.296-8.424 18.72-18.721 18.72"
      />
      <path
        fill="#4F2E1A"
        d="M23.769 5.21S19.347 16.205 4.554 25.522v-9.493C4.554 6.473 11.737.767 23.769.767s19.215 5.706 19.215 15.262v9.493C27.581 16.123 23.769 5.21 23.769 5.21"
      />
      <path
        fill="#FFF"
        d="M15.771 33.471c1.162 2.493 4.086 4.262 7.51 4.262 3.424 0 6.348-1.769 7.51-4.262h-15.02"
      />
      <path
        fill="#523B2E"
        d="M13.968 28.451a2.281 2.281 0 0 1-2.274-2.275v-1.654a2.28 2.28 0 0 1 2.274-2.274 2.281 2.281 0 0 1 2.275 2.274v1.654a2.282 2.282 0 0 1-2.275 2.275"
      />
      <path
        fill="#FFF"
        d="M14.114 24.266a.768.768 0 1 1-1.536 0 .768.768 0 0 1 1.536 0"
      />
      <path
        fill="#523B2E"
        d="M32.875 28.451a2.281 2.281 0 0 1-2.274-2.275v-1.654a2.28 2.28 0 0 1 2.274-2.274 2.281 2.281 0 0 1 2.275 2.274v1.654a2.282 2.282 0 0 1-2.275 2.275"
      />
      <path
        fill="#FFF"
        d="M33.021 24.266a.768.768 0 1 1-1.536 0 .768.768 0 0 1 1.536 0"
      />
      <path
        fill="#4F2E1A"
        d="M11.014 20.042h5.908v-.945h-5.908zM29.921 20.042h5.908v-.945h-5.908z"
      />
    </g>
  </svg>
)

const IconMaleIndian = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="47"
    height="48"
    viewBox="0 0 47 48"
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="#F2A775"
        d="M46.534 28.592a4.281 4.281 0 1 1-8.563 0 4.281 4.281 0 0 1 8.563 0M8.984 28.592a4.28 4.28 0 1 1-8.562 0 4.28 4.28 0 0 1 8.562 0"
      />
      <path
        fill="#A27555"
        d="M23.478 47.366c-10.296 0-18.721-8.425-18.721-18.721v-9.493c0-10.296 8.425-14.768 18.721-14.768s18.721 4.472 18.721 14.768v9.493c0 10.296-8.425 18.721-18.721 18.721"
      />
      <path
        fill="#A27555"
        d="M46.534 28.592a4.281 4.281 0 1 1-8.563 0 4.281 4.281 0 0 1 8.563 0M8.984 28.592a4.28 4.28 0 1 1-8.562 0 4.28 4.28 0 0 1 8.562 0"
      />
      <path
        fill="#4F2E1A"
        d="M4.717 28.139s2.058-2.635 3.458-7.987c1.4-5.352-.494-11.528-.494-11.528s-2.058.455-3.212 5.6c-1.976 8.81.248 13.915.248 13.915M42.21 28.139s-2.058-2.635-3.458-7.987c-1.4-5.352.494-11.528.494-11.528s2.057.455 3.211 5.6c1.976 8.81-.247 13.915-.247 13.915"
      />
      <path
        fill="#4F2E1A"
        d="M39.629 9.53s-6.834 6.917-19.021 6.423C8.422 15.459 5.375 9.283 4.799 6.648c-.576-2.635.247-5.764.247-5.764s2.635 3.788 13.833 2.141c11.199-1.647 14.904-.906 17.95.988 3.047 1.894 2.8 5.517 2.8 5.517"
      />
      <path
        fill="#FFF"
        d="M15.315 36.405c1.162 2.493 4.086 4.262 7.51 4.262 3.424 0 6.348-1.769 7.51-4.262h-15.02"
      />
      <path
        fill="#523B2E"
        d="M13.512 31.385a2.281 2.281 0 0 1-2.274-2.275v-1.654a2.281 2.281 0 0 1 2.274-2.275 2.282 2.282 0 0 1 2.275 2.275v1.654a2.282 2.282 0 0 1-2.275 2.275"
      />
      <path
        fill="#FFF"
        d="M13.658 27.2a.768.768 0 1 1-1.536 0 .768.768 0 0 1 1.536 0"
      />
      <path
        fill="#523B2E"
        d="M32.419 31.385a2.281 2.281 0 0 1-2.274-2.275v-1.654a2.281 2.281 0 0 1 2.274-2.275 2.282 2.282 0 0 1 2.275 2.275v1.654a2.282 2.282 0 0 1-2.275 2.275"
      />
      <path
        fill="#FFF"
        d="M32.565 27.2a.768.768 0 1 1-1.536 0 .768.768 0 0 1 1.536 0"
      />
      <path
        fill="#341909"
        d="M10.558 23.921h5.908v-1.654h-5.908zM29.465 23.921h5.908v-1.654h-5.908z"
      />
    </g>
  </svg>
)

const IconFemaleArabic = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="47"
    height="66"
    viewBox="0 0 47 66"
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="#F2A775"
        d="M24.169 56.298h-.509a4.205 4.205 0 0 1-4.192-4.192V41.963a4.205 4.205 0 0 1 4.192-4.192h.509a4.204 4.204 0 0 1 4.192 4.192v10.143a4.204 4.204 0 0 1-4.192 4.192M46.971 27.972a4.282 4.282 0 1 1-8.563 0 4.282 4.282 0 0 1 8.563 0M9.421 27.972a4.282 4.282 0 1 1-8.563 0 4.282 4.282 0 0 1 8.563 0"
      />
      <path
        fill="#F4B48A"
        d="M23.915 46.746c-10.297 0-18.721-8.424-18.721-18.721v-9.492c0-10.297 8.424-14.768 18.721-14.768 10.296 0 18.72 4.471 18.72 14.768v9.492c0 10.297-8.424 18.721-18.72 18.721"
      />
      <path
        fill="#E4E4E4"
        d="M44.065 20.932c-.247-2.141-1.893-7.41-5.846-11.033-3.952-3.623-11.445-6.011-19.268-4.2-7.822 1.812-14.492 8.975-14.739 13.998-.158 3.214.492 5.31.982 6.407v-.279c0-5.551 8.424-12.55 18.721-12.55 10.049 0 18.293 7.366 18.683 12.192.836-1.703 1.581-3.547 1.467-4.535"
      />
      <path
        fill="#84D9FE"
        d="M41.647 29.585c0 9.439-7.5 16.935-17.796 16.935h.061c-10.296 0-17.73-7.496-17.73-16.935v-8.701c0-5.551 7.436-13.538 17.733-13.538 10.296 0 17.732 8.728 17.732 13.538v8.701zm2.949-15.075C39.489.916 25.169.67 23.869.676 22.569.67 8.249.916 3.142 14.51-2.21 28.755 2.73 40.612 4.953 44.564c2.224 3.952 4.447 6.258 3.376 8.646-1.07 2.388-4.034 3.458-1.893 6.093 2.14 2.635 6.422 5.105 11.857 5.764 5.434.659 5.718.659 11.153 0 5.434-.659 9.716-3.129 11.857-5.764 2.141-2.635-.824-3.705-1.894-6.093-1.071-2.388 1.153-4.694 3.376-8.646 2.223-3.952 7.164-15.809 1.811-30.054z"
      />
      <path
        fill="#FFF"
        d="M15.892 35.738C17.054 38.231 19.978 40 23.402 40c3.424 0 6.348-1.769 7.51-4.262h-15.02"
      />
      <path
        fill="#523B2E"
        d="M14.089 30.718a2.28 2.28 0 0 1-2.274-2.274v-1.655a2.28 2.28 0 0 1 2.274-2.274 2.281 2.281 0 0 1 2.275 2.274v1.655a2.281 2.281 0 0 1-2.275 2.274"
      />
      <path
        fill="#FFF"
        d="M14.235 26.533a.768.768 0 1 1-1.536 0 .768.768 0 0 1 1.536 0"
      />
      <path
        fill="#523B2E"
        d="M32.996 30.718a2.28 2.28 0 0 1-2.274-2.274v-1.655a2.28 2.28 0 0 1 2.274-2.274 2.281 2.281 0 0 1 2.275 2.274v1.655a2.281 2.281 0 0 1-2.275 2.274"
      />
      <path
        fill="#FFF"
        d="M33.142 26.533a.768.768 0 1 1-1.536 0 .768.768 0 0 1 1.536 0"
      />
      <path
        fill="#C25B14"
        d="M11.135 22.309h5.908v-.945h-5.908zM30.042 22.309h5.908v-.945h-5.908z"
      />
    </g>
  </svg>
)

const IconMaleAsian = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="51"
    viewBox="0 0 50 51"
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="#F4B48A"
        d="M25.142 27.246v8.297l16.411.042-9.539-8.339h-6.872"
      />
      <path
        fill="#2B3A4D"
        d="M29.242 31.509l.983.606c2.426 1.496 5.393 1.43 7.709.089l3.967 3.468-17.456-.042.459-8.14c1.19 1.458 2.405 2.844 4.338 4.019"
      />
      <path
        fill="#F8CB95"
        d="M49.611 30.585a4.53 4.53 0 1 1-9.059 0 4.53 4.53 0 0 1 9.059 0"
      />
      <path
        fill="#F8CB95"
        d="M25.22 50.445c-10.892 0-19.804-8.912-19.804-19.804V20.599c0-10.893 8.912-15.623 19.804-15.623 10.893 0 19.805 4.73 19.805 15.623v10.042c0 10.892-8.912 19.804-19.805 19.804"
      />
      <path
        fill="#341909"
        d="M48.639 9.908c-.823-.927-2.084-.613-3.302.091 1.457-1.918 1.869-3.889.264-4.37-1.728-.518-3.352 5.656-3.713 7.129l-.161.035.13.092-.007.03-.076.084.053.012-.015.065.09-.051c.057.011.133.023.229.038a8.74 8.74 0 0 0 1.379.699c2.385.948 3.332 3.528 4.704 1.568.737-1.053-.512-2.027-2.122-2.521 2.174-.544 3.665-1.641 2.547-2.901"
      />
      <path
        fill="#341909"
        d="M43.837 13.142s-6.86 5.03-19.272 5.553c-12.413.522-22.329-2.868-22.735-6.403-.501-4.355 4.424-2.403 4.424-2.403S1.985 6.545 4.603 3.978c2.174-2.132 5.088 1.956 5.088 1.956s-1.878-4.467 1.024-4.682c2.635-.196 3.397 3.593 5.422 2.482 2.025-1.11 7.317-5.684 15.483-2.613 8.166 3.07 12.217 12.021 12.217 12.021"
      />
      <path
        fill="#CE9866"
        d="M24.458 44.215c-2.41 0-4.614-.771-6.276-2.058a.749.749 0 1 1 .918-1.186c1.382 1.072 3.269 1.745 5.358 1.744h.009c2.821 0 5.269-1.235 6.609-3.006a.746.746 0 0 1 1.05-.144c.33.25.395.72.145 1.05-1.671 2.195-4.556 3.598-7.813 3.6"
      />
      <path
        fill="#523B2E"
        d="M14.607 33.646A2.414 2.414 0 0 1 12.2 31.24v-1.75a2.413 2.413 0 0 1 2.407-2.406 2.413 2.413 0 0 1 2.406 2.406v1.75a2.413 2.413 0 0 1-2.406 2.406"
      />
      <path
        fill="#FFF"
        d="M14.76 29.219a.811.811 0 1 1-1.625 0 .813.813 0 0 1 1.625 0"
      />
      <path
        fill="#523B2E"
        d="M34.608 33.646a2.413 2.413 0 0 1-2.406-2.406v-1.75a2.412 2.412 0 0 1 2.406-2.406 2.413 2.413 0 0 1 2.406 2.406v1.75a2.413 2.413 0 0 1-2.406 2.406"
      />
      <path
        fill="#F8CB95"
        d="M9.888 30.585a4.53 4.53 0 1 1-9.059 0 4.53 4.53 0 0 1 9.059 0"
      />
      <path
        fill="#341909"
        d="M5.154 20.598c0-2.682.54-5.096 1.605-7.176l.312-.609.174.662c.233.891.389 1.705.478 2.49.292 2.542.533 7.991-.633 10.421-.406.844-.939 1.389-1.588 1.617l-.348.124v-7.529M44.938 28.003c-.648-.228-1.182-.773-1.587-1.617-1.167-2.43-.925-7.879-.633-10.421.091-.795.248-1.609.479-2.49l.174-.661.311.608c1.064 2.081 1.604 4.495 1.604 7.176v7.529l-.348-.124"
      />
      <path
        fill="#FFF"
        d="M34.762 29.219a.812.812 0 1 1-1.624 0 .812.812 0 0 1 1.624 0"
      />
      <path
        fill="#341909"
        d="M11.482 24.75h6.25V23h-6.25zM31.483 24.75h6.25V23h-6.25z"
      />
    </g>
  </svg>
)

const IconFemaleAfrican = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="61"
    height="56"
    viewBox="0 0 61 56"
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="#341909"
        d="M60.733 32.122c0-4.197-2.644-7.768-6.353-9.164a10.529 10.529 0 0 0 2.695-7.038c0-5.845-4.739-10.583-10.584-10.583-.614 0-1.213.063-1.799.164a8.818 8.818 0 0 0-8.066-5.26 8.782 8.782 0 0 0-6.076 2.438A8.782 8.782 0 0 0 24.474.241a8.818 8.818 0 0 0-8.066 5.26 10.557 10.557 0 0 0-1.799-.164c-5.845 0-10.584 4.738-10.584 10.583 0 2.706 1.024 5.167 2.695 7.038C3.011 24.354.367 27.925.367 32.122c0 4.637 3.225 8.513 7.552 9.53a8.065 8.065 0 0 0-.758 3.405 8.101 8.101 0 0 0 8.101 8.101 8.055 8.055 0 0 0 4.449-1.335 8.089 8.089 0 0 0 6.788 3.687 8.055 8.055 0 0 0 4.051-1.093 8.055 8.055 0 0 0 4.051 1.093 8.09 8.09 0 0 0 6.788-3.687 8.055 8.055 0 0 0 4.449 1.335 8.101 8.101 0 0 0 8.101-8.101 8.065 8.065 0 0 0-.758-3.405c4.327-1.017 7.552-4.893 7.552-9.53"
      />
      <path
        fill="#A27555"
        d="M55.386 34.343a4.529 4.529 0 1 1-9.059 0 4.529 4.529 0 0 1 9.059 0M15.663 34.343a4.529 4.529 0 1 1-9.059 0 4.529 4.529 0 0 1 9.059 0"
      />
      <path
        fill="#A27555"
        d="M30.996 54.203c-10.892 0-19.804-8.911-19.804-19.804V24.357c0-10.892 8.912-15.622 19.804-15.622 10.892 0 19.804 4.73 19.804 15.622v10.042c0 10.893-8.912 19.804-19.804 19.804"
      />
      <path
        fill="#341909"
        d="M47.658 11.108c-.648.042-1.276.092-1.875.252.049-.343.084-.691.084-1.047 0-4.119-3.413-7.459-7.623-7.459-3.568 0-6.062.458-7.385 3.549-1.747-2.569-3.766-3.549-7.286-3.549-4.153 0-7.52 3.34-7.52 7.459 0 .356.034.704.083 1.047-.591-.16-1.21-.21-1.85-.252-6.203-.414-10.682 12.739-3.055 19.3a6.972 6.972 0 0 0 3.968-5.407c3.454-.445 6.124-3.367 6.124-6.914a7.05 7.05 0 0 0-.034-.669 7.562 7.562 0 0 0 2.284.353 7.505 7.505 0 0 0 7.286-5.639c.831 3.238 3.817 5.639 7.385 5.639.807 0 1.585-.125 2.316-.353a6.733 6.733 0 0 0-.035.669c0 3.547 2.707 6.469 6.208 6.914a6.981 6.981 0 0 0 4.022 5.407c7.732-6.561 3.191-19.714-3.097-19.3"
      />
      <path
        fill="#FFF"
        d="M22.43 42.623c1.229 2.638 4.323 4.509 7.945 4.509s6.716-1.871 7.945-4.509H22.43"
      />
      <path
        fill="#523B2E"
        d="M20.523 37.313a2.414 2.414 0 0 1-2.406-2.407v-1.75a2.413 2.413 0 0 1 2.406-2.406 2.413 2.413 0 0 1 2.406 2.406v1.75a2.413 2.413 0 0 1-2.406 2.407"
      />
      <path
        fill="#FFF"
        d="M20.677 32.886a.813.813 0 1 1-1.625-.001.813.813 0 0 1 1.625.001"
      />
      <path
        fill="#523B2E"
        d="M40.524 37.313a2.414 2.414 0 0 1-2.406-2.407v-1.75a2.413 2.413 0 0 1 2.406-2.406 2.414 2.414 0 0 1 2.407 2.406v1.75a2.414 2.414 0 0 1-2.407 2.407"
      />
      <path
        fill="#FFF"
        d="M40.678 32.886a.813.813 0 1 1-1.625-.001.813.813 0 0 1 1.625.001"
      />
      <path
        fill="#341909"
        d="M17.398 28.417h6.25v-1h-6.25zM37.399 28.417h6.25v-1h-6.25z"
      />
    </g>
  </svg>
)

const IconMaleRedhead = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="47"
    height="48"
    viewBox="0 0 47 48"
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="#F4B48A"
        d="M46.112 28.838a4.28 4.28 0 1 1-8.562 0 4.281 4.281 0 0 1 8.562 0M8.563 28.838a4.281 4.281 0 1 1-8.562 0 4.281 4.281 0 0 1 8.562 0"
      />
      <path
        fill="#F4B48A"
        d="M23.056 47.612c-10.296 0-18.721-8.424-18.721-18.72v-9.493C4.335 9.102 12.76 4.63 23.056 4.63c10.297 0 18.721 4.472 18.721 14.77v9.491c0 10.297-8.424 18.721-18.721 18.721"
      />
      <path
        fill="#C25B14"
        d="M45.193 9.293c-.777-.877-1.969-.579-3.121.086 1.378-1.813 1.767-3.676.25-4.132-1.633-.489-3.168 5.347-3.51 6.74l-.152.033.123.087-.007.028-.072.08.051.01-.015.063.085-.049c.054.01.126.022.217.036.299.186.752.442 1.304.661 2.254.896 3.149 3.335 4.446 1.482.697-.995-.484-1.916-2.005-2.383 2.055-.514 3.464-1.55 2.406-2.742M4.088 19.398c0-2.536.511-4.818 1.517-6.783l.295-.576.164.626c.22.841.368 1.611.452 2.353.276 2.403.504 7.554-.598 9.851-.384.798-.888 1.314-1.501 1.53l-.329.116v-7.117"
      />
      <path
        fill="#C25B14"
        d="M41.695 26.398c-.612-.215-1.117-.73-1.5-1.529-1.103-2.297-.874-7.448-.598-9.85.085-.752.234-1.52.452-2.354l.165-.625.294.575c1.006 1.966 1.516 4.248 1.516 6.783v7.117l-.329-.117"
      />
      <path
        fill="#C25B14"
        d="M40.654 12.35s-6.484 4.755-18.218 5.25C10.703 18.092 1.33 14.886.945 11.546.472 7.43 5.128 9.275 5.128 9.275S1.092 6.113 3.567 3.687c2.055-2.015 4.81 1.85 4.81 1.85s-1.776-4.223.967-4.427c2.491-.185 3.212 3.396 5.126 2.347 1.914-1.05 6.917-5.373 14.636-2.47 7.72 2.902 11.548 11.362 11.548 11.362"
      />
      <path
        fill="#FFF"
        d="M14.947 36.63c1.162 2.493 4.087 4.262 7.511 4.262 3.423 0 6.348-1.769 7.51-4.262H14.947"
      />
      <path
        fill="#523B2E"
        d="M13.145 31.61a2.282 2.282 0 0 1-2.275-2.275v-1.654a2.282 2.282 0 0 1 2.275-2.275 2.281 2.281 0 0 1 2.274 2.275v1.654a2.281 2.281 0 0 1-2.274 2.275"
      />
      <path
        fill="#FFF"
        d="M13.29 27.425a.768.768 0 1 1-1.536 0 .768.768 0 0 1 1.536 0"
      />
      <path
        fill="#523B2E"
        d="M32.052 31.61a2.282 2.282 0 0 1-2.275-2.275v-1.654a2.282 2.282 0 0 1 2.275-2.275 2.281 2.281 0 0 1 2.274 2.275v1.654a2.281 2.281 0 0 1-2.274 2.275"
      />
      <path
        fill="#FFF"
        d="M32.197 27.425a.768.768 0 1 1-1.536 0 .768.768 0 0 1 1.536 0"
      />
      <path
        fill="#C25B14"
        d="M10.191 24.146h5.908v-1.654h-5.908zM29.098 24.146h5.908v-1.654h-5.908z"
      />
    </g>
  </svg>
)

const IconFemaleWesternBlonde = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="47"
    height="52"
    viewBox="0 0 47 52"
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="#FDDD4E"
        d="M41.553 7.548C34.656-.735 23.566.018 23.113.018c-.454 0-11.543-.753-18.441 7.53-7.04 8.455-4.367 39.8-3.132 44.44 4.852.016 38.294.016 43.145 0 1.235-4.64 3.908-35.985-3.132-44.44"
      />
      <path
        fill="#F4B48A"
        d="M46.169 26.456a4.282 4.282 0 1 1-8.564.001 4.282 4.282 0 0 1 8.564 0M8.619 26.456a4.282 4.282 0 1 1-8.564.001 4.282 4.282 0 0 1 8.564 0"
      />
      <path
        fill="#F4B48A"
        d="M23.113 45.23c-10.297 0-18.721-8.424-18.721-18.72v-9.493c0-10.296 8.424-14.768 18.72-14.768 10.297 0 18.722 4.472 18.722 14.768v9.492c0 10.297-8.425 18.721-18.721 18.721"
      />
      <path
        fill="#FDDD4E"
        d="M4.355 25.511s1.79-2.964 3.273-8.152c1.482-5.187.124-10.684.124-10.684s-1.976 1.421-2.965 4.323c-.988 2.903-1.111 5.435-1.111 7.843 0 2.41.679 6.67.679 6.67M41.844 25.511s-1.791-2.964-3.273-8.152c-1.482-5.187-.124-10.684-.124-10.684s1.977 1.421 2.965 4.323c.988 2.903 1.11 5.435 1.11 7.843 0 2.41-.678 6.67-.678 6.67"
      />
      <path
        fill="#FDDD4E"
        d="M32.536 2.742C29.358 1.033 25.353.797 22.99.792c-2.322-.007-6.057.14-9.433 1.827C8.6 5.097 6.68 7.395 6.68 7.395s1.812-.247 2.553 4.611c.467 3.06.509 5.333.476 6.598h26.715c-.032-1.265.009-3.539.476-6.598.74-4.858 2.553-4.61 2.553-4.61S36.9 5.088 32.536 2.741"
      />
      <path
        fill="#FFF"
        d="M15.049 34.55c1.162 2.492 4.087 4.261 7.51 4.261 3.424 0 6.349-1.769 7.51-4.262H15.05"
      />
      <path
        fill="#523B2E"
        d="M13.247 29.53a2.282 2.282 0 0 1-2.275-2.276V25.6a2.282 2.282 0 0 1 2.275-2.275A2.281 2.281 0 0 1 15.52 25.6v1.654a2.281 2.281 0 0 1-2.274 2.275"
      />
      <path
        fill="#FFF"
        d="M13.392 25.344a.768.768 0 1 1-1.537 0 .768.768 0 0 1 1.537 0"
      />
      <path
        fill="#523B2E"
        d="M32.154 29.53a2.282 2.282 0 0 1-2.275-2.276V25.6a2.282 2.282 0 0 1 2.275-2.275 2.281 2.281 0 0 1 2.274 2.275v1.654a2.281 2.281 0 0 1-2.274 2.275"
      />
      <path
        fill="#FFF"
        d="M32.299 25.344a.768.768 0 1 1-1.537 0 .768.768 0 0 1 1.537 0"
      />
      <path
        fill="#FDDD4E"
        d="M10.293 21.12H16.2v-.946h-5.908zM29.2 21.12h5.908v-.946H29.2z"
      />
    </g>
  </svg>
)
export default Voices
