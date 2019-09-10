import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from 'components/Layout'
import Button from 'components/Button'
import CenterHeader from 'components/CenterHeader'
import IconMedium from 'components/IconMedium/index'
import { LANGUAGE_COUNT, VOICES_COUNT } from '../constants/counts'
import WaitingList from 'components/WaitingList/index'
import { scrollIt } from '../utils/scroll'

class Publishers extends React.Component {
  handleOnClickJoinWaitingListScroll = event => {
    event.preventDefault()
    return scrollIt(document.getElementById('waiting-list'))
  }

  render() {
    const { location, title } = this.props

    const pageTitle = 'Playpost for Publishers'
    const pageDescription = `Add audio articles to your website with minimal effort. Give your audience a new way to digest your articles using our ${VOICES_COUNT}+ different voices in ${LANGUAGE_COUNT} different languages.`

    return (
      <Layout location={location}>
        <Helmet>
          <title>{pageTitle} - Playpost</title>
          <meta name="description" content={pageDescription} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDescription} />
          <meta
            property="og:image"
            content={require('../../static/img/ogimage-playpost-for-publishers.png')}
          />
          <meta property="og:url" content="https://playpost.app/publishers" />
        </Helmet>
        <CenterHeader
          title={pageTitle}
          description={pageDescription}
          button={
            <Button
              url="#"
              title="Signup for early access"
              onClick={this.handleOnClickJoinWaitingListScroll}
            />
          }
        />
        <div className="container">
          <div className="d-flex justify-content-center mt-lg-4 mb-1">
            <div className="px-1">
              <div className="row pb-2">
                <div className="col-12 col-md-4 mb-4 mb-md-0">
                  <IconMedium name="play" color="blue" />
                  <h3 className="font-weight-semibold mb-1 mt-2">
                    Embeddable player
                  </h3>
                  <p>
                    Easy to use embeddable player to automatically offer your
                    articles in audio format. Customize the player to match your
                    brand. Works on every device.
                  </p>
                  {/* <a className="weight-500 action-link" href="">
                    <span>Read more</span>
                  </a> */}
                </div>
                <div className="col-12 col-md-4 mb-4 mb-md-0">
                  <IconMedium name="signal" color="green" />
                  <h3 className="font-weight-semibold mb-1 mt-2">
                    Listener insights
                  </h3>
                  <p>
                    Knowledge is power. Know which articles perform better. Get
                    to know what your audience likes. Choose a voice that
                    matches what your audience likes.
                  </p>
                  {/* <a className="weight-500 action-link" href="">
                    <span>Read more</span>
                  </a> */}
                </div>
                <div className="col-12 col-md-4">
                  <IconMedium name="mobile-alt" color="orange" />
                  <h3 className="font-weight-semibold mb-1 mt-2">
                    Playpost app integration
                  </h3>
                  <p>
                    All audio articles can be played within the Playpost app on
                    iOS and Android. So you don't have to create an app for
                    that. Just create and publish.
                  </p>
                  {/* <a className="weight-500 action-link" href="">
                    <span>Read more</span>
                  </a> */}
                </div>
              </div>

              <div className="row pb-2 mb-5">
                <div className="col-12 col-md-4 mb-4 mb-md-0">
                  <IconMedium name="globe-americas" color="red" />
                  <h3 className="font-weight-semibold mb-1 mt-2">
                    {LANGUAGE_COUNT} languages supported
                  </h3>
                  <p>
                    English, French, Spanish, German, Chinese, Arabic, Czech,
                    Danish, Dutch, Finnish, Greek, Hindi, Hungarian, Icelandic,
                    Indonesian, Italian and many more...
                  </p>
                  {/* <a className="weight-500 action-link" href="">
                    <span>Read more</span>
                  </a> */}
                </div>
                <div className="col-12 col-md-4 mb-4 mb-md-0">
                  <IconMedium name="code" color="purple" />
                  <h3 className="font-weight-semibold mb-1 mt-2">
                    API integration
                  </h3>
                  <p>
                    Next to our embeddable player we'll offer an API. So your
                    developers can integrate Playpost for Publishers into your
                    website, just the way you want it.
                  </p>
                  {/* <a className="weight-500 action-link" href="">
                    <span>Read more</span>
                  </a> */}
                </div>
                <div className="col-12 col-md-4">
                  <IconMedium name="microphone" color="yellow" />
                  <h3 className="font-weight-semibold mb-1 mt-2">
                    Record your own audio
                  </h3>
                  <p>
                    Don't like one of the {VOICES_COUNT} voices we offer? Don't
                    worry, Playpost for Publishers also allows you to use your
                    own recordings.
                  </p>
                  {/* <a className="weight-500 action-link" href="">
                    <span>Read more</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 bg-light">
          <div className="container">
            <div className="row justify-content-center text-center py-3">
              <div className="col-12 col-md-8">
                <div className="justify-content-center text-center d-flex mb-2">
                  <IconMedium name="user-shield" color="blueInverted" />
                </div>
                <h3 className="text-black-50 h3">Friendly to use</h3>
                <h2>Privacy-focused and GDPR compliant</h2>
                <p className="lead mb-0">
                  Playpost for Publishers will be build with a strong focus on
                  privacy. So you, as a publisher, writer or website owner, can
                  use this service without worrying about privacy implications
                  for your audience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <WaitingList />
      </Layout>
    )
  }
}

export default Publishers
