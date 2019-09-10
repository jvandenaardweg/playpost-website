import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPlay,
  faSignal,
  faMobile,
  faMobileAlt,
  faGlobeAmericas,
  faCode,
  faMicrophone,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons'
// import { faS } from '@fortawesome/free-regular-svg-icons'
// import {  } from '@fortawesome/free-solid-svg-icons'

import React from 'react'

import {
  faApple,
  faAws,
  faFacebook,
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faPhp,
  faReact,
  faTwitter,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons'
import './style.scss'

library.add(
  faApple,
  faAws,
  faFacebook,
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faPhp,
  faReact,
  faTwitter,
  faVuejs,
  faPlay,
  faSignal,
  faMobile,
  faMobileAlt,
  faGlobeAmericas,
  faCode,
  faMicrophone,
  faUserShield
)

const colors = {
  green: ['#03A87C', '#DAF8F0'], // foreground, background
  blue: ['#0066FF', '#DAEBFF'],
  orange: ['#FF9937', '#FFEBD3'],
  purple: ['#AA4CFF', '#EEDEFF'],
  red: ['#E7383D', '#FFDEDF'],
  bw: ['#ffffff', '#000000'],
  yellow: ['#EBB700', '#FFF5C0'],
  blueInverted: ['#ffffff', '#0066FF'],
}

const IconMedium = ({ name, color }) => (
  <div
    className={`icon-medium`}
    style={{ backgroundColor: color ? colors[color][1] : 'transparent' }}
    title={name}
  >
    <FontAwesomeIcon icon={name} color={color ? colors[color][0] : 'black'} />
  </div>
)

export default IconMedium
