import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from 'components/Layout'
import CenterHeader from 'components/CenterHeader'
import Badge from 'components/Badge'
import Card from 'components/Card'
import Accordion from 'components/Accordion/index'

class AcceptableUsePolicy extends React.Component {
  render() {
    const { location, title } = this.props
    const pageTitle = 'Acceptable Use Policy'
    const pageDescription =
      'To prevent excessive, bad or unlawful usage of our service we implemented a Acceptable Use Policy. So we can provide the service within the technical limitations and give all of our users the experience they signed up for.'

    return (
      <Layout location={location}>
        <Helmet>
          <title>{pageTitle} - Playpost</title>
          <meta name="description" content={pageDescription} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDescription} />
          <meta name="robots" content="noindex,follow" />
        </Helmet>
        <CenterHeader title={pageTitle} description={pageDescription} />
        <div className="container mb-4 mt-lg-5 mt-3">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <Badge label="Updated: 01-07-2019 14:19" />
              {/* <Card
                title="Current Policy Limit"
                content="Articles below 25 minutes of listening time are within this policy."
              /> */}

              <h2>Technical Limitations</h2>
              <p>
                Other than making sure our service runs for every user
                accordingly, there are also technical limitations. These
                limitations are an external factor and not something Playpost
                can control.
              </p>
              <p>
                It's currently not possible to convert 150.000 or more
                characters to speech, per minute. This comes down to
                approximately 150 minutes of audio per minute.
              </p>
              <p>
                Due to this, we have to enforce a system-wide limit to stay
                below that and/or throttle usage.
              </p>

              <Accordion
                items={[
                  // {
                  //   title: 'How do we come up with this limit?',
                  //   paragraphs: [
                  //     'We’ve have noticed 99.9% of the articles on the platform don’t even reach this limit, so this will probably not impact you or the majority of our users.',
                  //     'We will constantly monitor how the App is used and how long the articles are our users use in the App. We might adjust this later to allow longer articles.',
                  //   ],
                  // },
                  {
                    title:
                      'When does the Acceptable Use Policy come into play?',
                    paragraphs: [
                      'That depends on the heavy use of the platform as a whole. If the overall usage is within the technical limitations, nothing happens. If our systems detect a spike in usage, or heavy usage on a longer longer period of time, we will enforce this Acceptable Use Policy.',
                    ],
                  },
                  {
                    title:
                      'What happens when the Acceptable Use Policy is enforced?',
                    paragraphs: [
                      "Usage will be throttled and/or the user exceeding the limits will be prevented to convert article's to audio for the next 48 hours.",
                      'When a violation of our Code of Conduct is detected, a user risks account deletion.',
                      'You will always receive a message when this happens and you always haven an option to appeal.',
                    ],
                  },
                ]}
              />

              <h2 className="mt-5">Code Of Conduct</h2>
              <p>
                You agree to use our Service in accordance with the following
                acceptable use and code of conduct guidelines. In particular,
                you agree that you:
              </p>
              <ol className="custom-ordered-list">
                <li>
                  Will not upload, copy, distribute, share, or otherwise use
                  content that is unlawful, obscene, defamatory, libelous,
                  harmful, hateful, harassing, bullying, pornographic,
                  threatening, racially or ethnically offensive or abusive, that
                  would violate another person's rights (including their
                  intellectual property rights), constitute or encourage a
                  criminal offense, give rise to civil liability, or violate any
                  local, state, provincial, national or international law or
                  regulation, or that is otherwise inappropriate;
                </li>
                <li>
                  Will not disclose your password or transfer your account to
                  any third party, or allow any third party to access your
                  account;
                </li>
                <li>
                  Will not access the Service by any means other than through
                  the interface provided by us for use in accessing the Service.
                  This includes not using or launching any automated system
                  including, without limitation, any spider, robot (or "bot"),
                  scraper or offline reader that accesses the Service in a way
                  that sends more request messages to our servers in a given
                  time period than a human reasonably can produce in the same
                  time period.
                </li>
                <li>
                  Will not interfere with or disrupt the Service or servers or
                  networks connected thereto, make the Service available over a
                  network (other than our network) where it could be used by
                  others or disobey any requirements, procedures, policies or
                  regulations of networks connected to the Service;
                </li>
                <li>
                  Will not use the Service to artificially generate traffic or
                  page links to a website or for any other purpose not intended;
                </li>
                <li>
                  Will not use the Service in a way that has any unlawful or
                  fraudulent purpose or effect;
                </li>
                <li>
                  Will not translate, reverse engineer, decompile, disassemble,
                  modify or create derivative works based on the Service, in
                  whole or in part;
                </li>
                <li>
                  Will not circumvent, disable, violate or otherwise interfere
                  with any security related feature of the Service;
                </li>
                <li>
                  Will not rent, lease, sublicense, transfer, sell, trade,
                  resell or exploit for any commercial purposes any portion of
                  the Service (including, without limitation, your account
                  information, use of the Service or access to the Service;
                </li>
                <li>
                  Will not use your account for your own commercial purposes by
                  sublicensing any rights granted by the Terms or, in any way,
                  sharing the benefit of your account with others. Your account
                  is non-transferrable and may only be used by you;
                </li>
                <li>
                  Will not use the Service in any way that violates the Terms,
                  or that aids, encourages, or purports to authorize anyone else
                  to violate the terms of this policy;
                </li>
                <li>
                  Will not use the Service in any way that intentionally or
                  unintentionally violates any applicable local, state,
                  provincial, national or international law, rule or regulation;
                </li>
              </ol>

              <p className="mt-5">
                This Acceptable Use Policy is part of our{' '}
                <Link to="/terms">Terms &amp; Conditions</Link>. Playpost has
                the right to change these reasonable usage limits at any time.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default AcceptableUsePolicy
