import React from 'react'

class Button extends React.PureComponent {
  render() {
    const { title, isPrimary, url, onClick } = this.props

    const btnTypeClass = isPrimary ? 'btn-primary' : 'btn-white'

    const classNames = `btn btn-lg ${btnTypeClass} font-weight-semibold`

    return (
      <a
        className={classNames}
        href={url ? url : undefined}
        onClick={onClick ? onClick : undefined}
      >
        {title}
      </a>
    )
  }
}

export default Button
