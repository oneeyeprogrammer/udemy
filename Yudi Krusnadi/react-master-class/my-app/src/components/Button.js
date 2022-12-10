import React from "react"
import PropTypes from "prop-types"

class Button extends React.Component {
      render() {
            return (
                  <div>
                        <button type="button" onClick={this.props.click}>Click</button>
                  </div>
            )
      }
}

// Button.propTypes = {
//       color: PropTypes.string.isRequired
// }

// Button.defaultProps = {
//       color: "red"
// }

export default Button