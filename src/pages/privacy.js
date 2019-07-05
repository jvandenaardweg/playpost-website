import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from 'components/Layout'
import CenterHeader from 'components/CenterHeader'
import Badge from 'components/Badge/index'

class Privacy extends React.Component {
  render() {
    const { location, title } = this.props
    const pageTitle = 'Privacy Policy'
    const pageDescription =
      'We value privacy and respect yours. This Privacy Policy describes how Playpost collects, uses and discloses information, and what choices you have with respect to the information.'

    return (
      <Layout location={location}>
        <Helmet>
          <title>{pageTitle} - Playpost</title>
          <meta name="description" content={pageDescription} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta name="twitter:card" content={pageTitle} />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDescription} />
          <meta name="robots" content="noindex,follow" />
        </Helmet>
        <CenterHeader title={pageTitle} description={pageDescription} />
        <div className="container mb-4">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <Badge label="Updated: 01-07-2019 14:19" />
              <p>
                This policy sets out our privacy practices and explains how we
                handle the information we collect when you visit and use our
                sites, services, mobile applications, products, and content
                (“Services”).
              </p>
              <p>
                The terms used in this Privacy Policy have the same meanings as
                in our Terms &amp; Conditions, which is accessible at Playpost
                unless otherwise defined in this Privacy Policy.
              </p>

              <h2>What we may collect</h2>
              <p>
                We collect information about what Playpost pages you access,
                information about your mobile device (such as device or browser
                type), information you send us (such as an email address used to
                register or communicate with us), and referral information.
              </p>
              <p>
                When you use Playpost Services, we may collect and store your
                Internet Protocol address. We may use this information to fight
                spam and other abuse; to personalize Playpost Services; or to
                generate aggregate, non-identifying information about how people
                use Playpost Services.
              </p>
              <p>
                When you create your Playpost account, we collect your e-mail
                address, username and password (encrypted).
              </p>
              <h2>Email from Playpost</h2>
              <p>
                Sometimes we’ll send administrative emails about account or
                service changes, or new policies. You can’t opt out of them. You
                can always opt out of non-administrative emails such as
                newsletters.
              </p>
              <p>
                We won’t email you to ask for your password or other account
                information. If you receive such an email, send it to us so we
                can investigate.
              </p>
              <h2>Disclosure of your information</h2>
              <p>
                As a rule, we don’t share your personal information outside the
                company.
              </p>
              <p>We won’t sell your personal information.</p>
              <p>
                We may share your personal information with third parties in
                limited circumstances, including: (1) with your consent; (2) to
                a vendor or partner who meets our data protection standards; or
                (3) when we have a good faith belief it is required by law, such
                as pursuant to a subpoena or other legal process.
              </p>
              <p>
                If we’re going to share your information in response to legal
                process, we’ll give you advance notice so you can challenge it
                (for example by seeking court intervention), unless we’re
                prohibited from doing so by law or court order. We will object
                to requests for information about users of our site that we
                believe to be improper.
              </p>
              <p>
                If we merge with another company such that your information will
                become subject to a different privacy policy, we’ll notify you
                before the transfer. You can opt out of the new policy by
                deleting your account during the notice period.
              </p>
              <h2>Cookies</h2>
              <p>
                We might use cookies and similar technologies such as pixels and
                storage to recognize you when you return to our Services. We use
                them in various ways, for example to log you in, remember your
                preferences, evaluate email effectiveness, show relevant ads,
                and personalize information.
              </p>
              <p>
                Some third-party services that we use may place their own
                cookies in your browser.
              </p>

              <p>
                If you turn cookies off, Some of the features that make your
                site experience more efficient may not function properly.Some of
                the features that make your site experience more efficient and
                may not function properly.
              </p>

              <h3>Third party cookies</h3>
              <p>
                Third party advertising and analytics cookies, which are placed
                by or on behalf of independent advertisers who are advertising
                on our site. These cookies may be placed within the
                advertisement and elsewhere on our site. They are anonymous –
                they cannot identify individuals. They are used for statistical
                analysis by allowing the advertiser to count how many people
                have seen their advertisement or have seen it more than once.
                They might also allow the advertiser to tailor advertising to
                you when you visit other websites.{' '}
              </p>
              <p>
                We have no access to third party cookies and third party
                organisations have no access to ours. The third party
                organisations that place cookies have their own strict privacy
                policies.{' '}
              </p>

              <h2>Data Storage</h2>
              <p>
                Playpost uses third-party vendors and hosting partners, for
                hardware, software, networking, storage, and related technology
                we need to run Playpost. We maintain two types of logs: server
                logs and event logs. Our data is hosted in the European Union
                (EU) and subjected to EU Privacy laws.
              </p>
              <h2>
                Modifying your personal information or deleting your account
              </h2>
              <p>
                If you have a Playpost account, you can access and modify your
                personal information. If you want to delete your account, you
                can do that within our App yourself.
              </p>
              <p>
                To protect information from accidental or malicious destruction,
                we may not immediately delete residual copies from our active
                servers and may not remove information from our backup systems.
              </p>
              <p>
                If you delete your account, your account and content may be
                unrecoverable.
              </p>
              <h2>Data security</h2>
              <p>
                We use encryption (HTTPS/TLS) to protect data transmitted to and
                from our site. However, no data transmission over the Internet
                is 100% secure, so we can’t guarantee security. You use the
                Service at your own risk, and you’re responsible for taking
                reasonable measures to secure your account (like using a strong
                password).
              </p>

              <h2>Children’s Privacy</h2>
              <p>
                These Services do not address anyone under the age of 13. We do
                not knowingly collect personally identifiable information from
                children under 13. In the case we discover that a child under 13
                has provided us with personal information, we immediately delete
                this from our servers. If you are a parent or guardian and you
                are aware that your child has provided us with personal
                information, please contact us so that we will be able to do
                necessary actions.
              </p>
              <h2>Changes to this Policy</h2>
              <p>
                Playpost may periodically update this Policy. We’ll notify you
                about significant changes to it. The most current version of the
                policy will always be here.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions or suggestions about our Privacy
                Policy, do not hesitate to contact us.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Privacy
