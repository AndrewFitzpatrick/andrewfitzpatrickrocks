import React, { Component } from 'react';


class Image extends Component {
  constructor(props) {
    super(props)
    this.state = {
    showHoverImage: false
  }
}

showHoverImage = (passedImage) => {
  this.setState({showHoverImage: true})
}

hideHoverImage = (passedImage) => {
  this.setState({showHoverImage: false})
}
  render() {
    return (
      // this.props.logo.imageHover ?
      <img
        src={this.state.showHoverImage ? this.props.rolloverImage : this.props.defaultImage}
        alt={this.props.altImage}
        onMouseOver={this.showHoverImage}
        onMouseLeave={this.hideHoverImage}
        style={{
            transition: `opacity 0.5s`,
            opacity: `${this.state.showHoverImage ? '1' : '0'}`
        }}
      />
      // :
      // <img src={this.props.logo} alt="null"/>


    );
  }

}

export default Image;