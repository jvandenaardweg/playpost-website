import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from 'components/Layout'
import CenterHeader from 'components/CenterHeader'
import Badge from 'components/Badge'

class Terms extends React.Component {
  render() {
    const { location, title } = this.props

    const pageTitle = 'Terms & Conditions'
    const pageDescription =
      'By downloading or using the app, these terms will automatically apply to you – you should make sure you read them carefully before using the app.'

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

              <h2>Apple App Store agreement</h2>
              <p>
                Apps made available through the App Store are licensed, not
                sold, to you. Your license to each App is subject to your prior
                acceptance of either this Licensed Application End User License
                Agreement (“Standard EULA”), or a custom end user license
                agreement between you and the Application Provider (“Custom
                EULA”), if one is provided. Your license to any Apple App under
                this Standard EULA or Custom EULA is granted by Apple, and your
                license to any Third Party App under this Standard EULA or
                Custom EULA is granted by the Application Provider of that Third
                Party App. Any App that is subject to this Standard EULA is
                referred to herein as the “Licensed Application.” The
                Application Provider or Apple as applicable (“Licensor”)
                reserves all rights in and to the Licensed Application not
                expressly granted to you under this Standard EULA.
              </p>
              <p>
                a. Scope of License: Licensor grants to you a nontransferable
                license to use the Licensed Application on any Apple-branded
                products that you own or control and as permitted by the Usage
                Rules. The terms of this Standard EULA will govern any content,
                materials, or services accessible from or purchased within the
                Licensed Application as well as upgrades provided by Licensor
                that replace or supplement the original Licensed Application,
                unless such upgrade is accompanied by a Custom EULA. Except as
                provided in the Usage Rules, you may not distribute or make the
                Licensed Application available over a network where it could be
                used by multiple devices at the same time. You may not transfer,
                redistribute or sublicense the Licensed Application and, if you
                sell your Apple Device to a third party, you must remove the
                Licensed Application from the Apple Device before doing so. You
                may not copy (except as permitted by this license and the Usage
                Rules), reverse-engineer, disassemble, attempt to derive the
                source code of, modify, or create derivative works of the
                Licensed Application, any updates, or any part thereof (except
                as and only to the extent that any foregoing restriction is
                prohibited by applicable law or to the extent as may be
                permitted by the licensing terms governing use of any
                open-sourced components included with the Licensed Application).
              </p>
              <p>
                b. Consent to Use of Data: You agree that Licensor may collect
                and use technical data and related information—including but not
                limited to technical information about your device, system and
                application software, and peripherals—that is gathered
                periodically to facilitate the provision of software updates,
                product support, and other services to you (if any) related to
                the Licensed Application. Licensor may use this information, as
                long as it is in a form that does not personally identify you,
                to improve its products or to provide services or technologies
                to you.
              </p>
              <p>
                c. Termination. This Standard EULA is effective until terminated
                by you or Licensor. Your rights under this Standard EULA will
                terminate automatically if you fail to comply with any of its
                terms.
              </p>
              <p>
                d. External Services. The Licensed Application may enable access
                to Licensor’s and/or third-party services and websites
                (collectively and individually, "External Services"). You agree
                to use the External Services at your sole risk. Licensor is not
                responsible for examining or evaluating the content or accuracy
                of any third-party External Services, and shall not be liable
                for any such third-party External Services. Data displayed by
                any Licensed Application or External Service, including but not
                limited to financial, medical and location information, is for
                general informational purposes only and is not guaranteed by
                Licensor or its agents. You will not use the External Services
                in any manner that is inconsistent with the terms of this
                Standard EULA or that infringes the intellectual property rights
                of Licensor or any third party. You agree not to use the
                External Services to harass, abuse, stalk, threaten or defame
                any person or entity, and that Licensor is not responsible for
                any such use. External Services may not be available in all
                languages or in your Home Country, and may not be appropriate or
                available for use in any particular location. To the extent you
                choose to use such External Services, you are solely responsible
                for compliance with any applicable laws. Licensor reserves the
                right to change, suspend, remove, disable or impose access
                restrictions or limits on any External Services at any time
                without notice or liability to you.
              </p>
              <p>
                e. NO WARRANTY: YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT USE OF
                THE LICENSED APPLICATION IS AT YOUR SOLE RISK. TO THE MAXIMUM
                EXTENT PERMITTED BY APPLICABLE LAW, THE LICENSED APPLICATION AND
                ANY SERVICES PERFORMED OR PROVIDED BY THE LICENSED APPLICATION
                ARE PROVIDED "AS IS" AND “AS AVAILABLE,” WITH ALL FAULTS AND
                WITHOUT WARRANTY OF ANY KIND, AND LICENSOR HEREBY DISCLAIMS ALL
                WARRANTIES AND CONDITIONS WITH RESPECT TO THE LICENSED
                APPLICATION AND ANY SERVICES, EITHER EXPRESS, IMPLIED, OR
                STATUTORY, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
                AND/OR CONDITIONS OF MERCHANTABILITY, OF SATISFACTORY QUALITY,
                OF FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY, OF QUIET
                ENJOYMENT, AND OF NONINFRINGEMENT OF THIRD-PARTY RIGHTS. NO ORAL
                OR WRITTEN INFORMATION OR ADVICE GIVEN BY LICENSOR OR ITS
                AUTHORIZED REPRESENTATIVE SHALL CREATE A WARRANTY. SHOULD THE
                LICENSED APPLICATION OR SERVICES PROVE DEFECTIVE, YOU ASSUME THE
                ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR, OR CORRECTION.
                SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED
                WARRANTIES OR LIMITATIONS ON APPLICABLE STATUTORY RIGHTS OF A
                CONSUMER, SO THE ABOVE EXCLUSION AND LIMITATIONS MAY NOT APPLY
                TO YOU.
              </p>
              <p>
                f. Limitation of Liability. TO THE EXTENT NOT PROHIBITED BY LAW,
                IN NO EVENT SHALL LICENSOR BE LIABLE FOR PERSONAL INJURY OR ANY
                INCIDENTAL, SPECIAL, INDIRECT, OR CONSEQUENTIAL DAMAGES
                WHATSOEVER, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF
                PROFITS, LOSS OF DATA, BUSINESS INTERRUPTION, OR ANY OTHER
                COMMERCIAL DAMAGES OR LOSSES, ARISING OUT OF OR RELATED TO YOUR
                USE OF OR INABILITY TO USE THE LICENSED APPLICATION, HOWEVER
                CAUSED, REGARDLESS OF THE THEORY OF LIABILITY (CONTRACT, TORT,
                OR OTHERWISE) AND EVEN IF LICENSOR HAS BEEN ADVISED OF THE
                POSSIBILITY OF SUCH DAMAGES. SOME JURISDICTIONS DO NOT ALLOW THE
                LIMITATION OF LIABILITY FOR PERSONAL INJURY, OR OF INCIDENTAL OR
                CONSEQUENTIAL DAMAGES, SO THIS LIMITATION MAY NOT APPLY TO YOU.
                In no event shall Licensor’s total liability to you for all
                damages (other than as may be required by applicable law in
                cases involving personal injury) exceed the amount of fifty
                dollars ($50.00). The foregoing limitations will apply even if
                the above stated remedy fails of its essential purpose.
              </p>
              <p>
                g. You may not use or otherwise export or re-export the Licensed
                Application except as authorized by United States law and the
                laws of the jurisdiction in which the Licensed Application was
                obtained. In particular, but without limitation, the Licensed
                Application may not be exported or re-exported (a) into any
                U.S.-embargoed countries or (b) to anyone on the U.S. Treasury
                Department's Specially Designated Nationals List or the U.S.
                Department of Commerce Denied Persons List or Entity List. By
                using the Licensed Application, you represent and warrant that
                you are not located in any such country or on any such list. You
                also agree that you will not use these products for any purposes
                prohibited by United States law, including, without limitation,
                the development, design, manufacture, or production of nuclear,
                missile, or chemical or biological weapons.
              </p>
              <p>
                h. The Licensed Application and related documentation are
                "Commercial Items", as that term is defined at 48 C.F.R. §2.101,
                consisting of "Commercial Computer Software" and "Commercial
                Computer Software Documentation", as such terms are used in 48
                C.F.R. §12.212 or 48 C.F.R. §227.7202, as applicable. Consistent
                with 48 C.F.R. §12.212 or 48 C.F.R. §227.7202-1 through
                227.7202-4, as applicable, the Commercial Computer Software and
                Commercial Computer Software Documentation are being licensed to
                U.S. Government end users (a) only as Commercial Items and (b)
                with only those rights as are granted to all other end users
                pursuant to the Terms &amp; Conditions herein.
                Unpublished-rights reserved under the copyright laws of the
                United States.
              </p>
              <p>
                i. Except to the extent expressly provided in the following
                paragraph, this Agreement and the relationship between you and
                Apple shall be governed by the laws of the State of California,
                excluding its conflicts of law provisions. You and Apple agree
                to submit to the personal and exclusive jurisdiction of the
                courts located within the county of Santa Clara, California, to
                resolve any dispute or claim arising from this Agreement. If (a)
                you are not a U.S. citizen; (b) you do not reside in the U.S.;
                (c) you are not accessing the Service from the U.S.; and (d) you
                are a citizen of one of the countries identified below, you
                hereby agree that any dispute or claim arising from this
                Agreement shall be governed by the applicable law set forth
                below, without regard to any conflict of law provisions, and you
                hereby irrevocably submit to the non-exclusive jurisdiction of
                the courts located in the state, province or country identified
                below whose law governs:
              </p>
              <p>
                If you are a citizen of any European Union country or
                Switzerland, Norway or Iceland, the governing law and forum
                shall be the laws and courts of your usual place of residence.
              </p>
              <p>
                Specifically excluded from application to this Agreement is that
                law known as the United Nations Convention on the International
                Sale of Goods.
              </p>

              <h2>Terms &amp; Conditions for Playpost</h2>

              <h2>Introduction</h2>

              <p>
                These Website/App Standard Terms &amp; Conditions written on
                this webpage shall manage your use of our Website/App, Playpost
                accessible at https://playpost.app.
              </p>

              <p>
                These Terms will be applied fully and affect to your use of this
                Website/App. By using this Website/App, you agreed to accept all
                Terms &amp; Conditions written in here. You must not use this
                Website/App if you disagree with any of these Website/App
                Standard Terms &amp; Conditions.
              </p>

              <h2>Intellectual Property Rights</h2>

              <p>
                Other than the content you own, under these Terms, Playpost
                and/or its licensors own all the intellectual property rights
                and materials contained in this Website/App.
              </p>

              <p>
                You are granted limited license only for purposes of viewing the
                material contained on this Website/App.
              </p>

              <h2>Restrictions</h2>

              <p>You are specifically restricted from all of the following:</p>

              <ul>
                <li>publishing any Website/App material in any other media;</li>
                <li>
                  selling, sublicensing and/or otherwise commercializing any
                  Website/App material;
                </li>
                <li>
                  publicly performing and/or showing any Website/App material;
                </li>
                <li>
                  using this Website/App in any way that is or may be damaging
                  to this Website/App;
                </li>
                <li>
                  using this Website/App in any way that impacts user access to
                  this Website/App;
                </li>
                <li>
                  using this Website/App contrary to applicable laws and
                  regulations, or in any way may cause harm to the Website/App,
                  or to any person or business entity;
                </li>
                <li>
                  engaging in any data mining, data harvesting, data extracting
                  or any other similar activity in relation to this Website/App;
                </li>
                <li>
                  using this Website/App to engage in any advertising or
                  marketing.
                </li>
              </ul>

              <p>
                Certain areas of this Website/App are restricted from being
                access by you and Playpost may further restrict access by you to
                any areas of this Website/App, at any time, in absolute
                discretion. Any user ID and password you may have for this
                Website/App are confidential and you must maintain
                confidentiality as well.
              </p>

              <h2>Your Content</h2>

              <p>
                In these Website/App Standard Terms &amp; Conditions, "Your
                Content" shall mean any audio, video text, images or other
                material you choose to display on this Website/App. By
                displaying Your Content, you grant Playpost a non-exclusive,
                worldwide irrevocable, sub licensable license to use, reproduce,
                adapt, publish, translate and distribute it in any and all
                media.
              </p>

              <p>
                Your Content must be your own and must not be invading any
                third-party’s rights. Playpost reserves the right to remove any
                of Your Content from this Website/App at any time without
                notice.
              </p>

              <h2>No warranties</h2>

              <p>
                This Website/App is provided "as is," with all faults, and
                Playpost express no representations or warranties, of any kind
                related to this Website/App or the materials contained on this
                Website/App. Also, nothing contained on this Website/App shall
                be interpreted as advising you.
              </p>

              <p>
                Playpost cannot be held responsible for articles not being
                processed correctly when those articles are behind a pay-wall or
                require a login. As the Service only has access to the publicly
                available articles.
              </p>

              <h2>Acceptable Use Policy</h2>

              <p>
                The app enforces a{' '}
                <Link to="/acceptable-use-policy">Acceptable Use Policy</Link>,
                meaning there is a restriction applied to our platform usage.
                Therefore, usage could be restricted when limitations are
                reached.
              </p>

              <h2>Limitation of liability</h2>

              <p>
                In no event shall Playpost, nor any of its officers, directors
                and employees, shall be held liable for anything arising out of
                or in any way connected with your use of this Website/App
                whether such liability is under contract. Playpost, including
                its officers, directors and employees shall not be held liable
                for any indirect, consequential or special liability arising out
                of or in any way related to your use of this Website/App.
              </p>

              <h2>Indemnification</h2>

              <p>
                You hereby indemnify to the fullest extent Playpost from and
                against any and/or all liabilities, costs, demands, causes of
                action, damages and expenses arising in any way related to your
                breach of any of the provisions of these Terms.
              </p>

              <h2>Severability</h2>

              <p>
                If any provision of these Terms is found to be invalid under any
                applicable law, such provisions shall be deleted without
                affecting the remaining provisions herein.
              </p>

              <h2>Variation of Terms</h2>

              <p>
                Playpost is permitted to revise these Terms at any time as it
                sees fit, and by using this Website/App you are expected to
                review these Terms on a regular basis.
              </p>

              <h2>Assignment</h2>

              <p>
                The Playpost is allowed to assign, transfer, and subcontract its
                rights and/or obligations under these Terms without any
                notification. However, you are not allowed to assign, transfer,
                or subcontract any of your rights and/or obligations under these
                Terms.
              </p>

              <h2>Entire Agreement</h2>

              <p>
                These Terms constitute the entire agreement between Playpost and
                you in relation to your use of this Website/App, and supersede
                all prior agreements and understandings.
              </p>

              <h2>Governing Law & Jurisdiction</h2>

              <p>
                These Terms will be governed by and interpreted in accordance
                with the laws of the State of ro, and you submit to the
                non-exclusive jurisdiction of the state and federal courts
                located in ro for the resolution of any disputes.
              </p>

              <h2>Changes to This Terms &amp; Conditions</h2>
              <p>
                {' '}
                We may update our Terms &amp; Conditions from time to time.
                Thus, you are advised to review this page periodically for any
                changes. We will notify you of any changes by posting the new
                Terms &amp; Conditions on this page. These changes are effective
                immediately after they are posted on this page.
              </p>
              <h2>Contact Us</h2>
              <p>
                If you have any questions or suggestions about our Terms and
                Conditions, do not hesitate to contact us.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Terms
