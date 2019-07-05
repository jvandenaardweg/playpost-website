import React from 'react'
import { Link } from 'gatsby'
// import './style.scss'

class Accordion extends React.Component {
  state = {
    activeIndex: null,
  }

  handleOnClick = index => {
    const { activeIndex } = this.state

    if (activeIndex !== index) {
      return this.setState({ activeIndex: index })
    }

    return this.setState({ activeIndex: null })
  }

  render() {
    const { items } = this.props
    const { activeIndex } = this.state

    return (
      <div className="accordion" id="texts-17-accordion">
        {items.map((item, index) => (
          <React.Fragment>
            <h3
              key={index}
              className={`mb-0 pr-3 py-2 caret-${
                index === activeIndex ? 'up' : 'down'
              } font-weight-semibold`}
              onClick={() => this.handleOnClick(index)}
            >
              {item.title}
            </h3>
            <div className="border-bottom">
              <div
                className={index === activeIndex ? 'collapse show' : 'collapse'}
              >
                {item.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    )
  }
}

export default Accordion
