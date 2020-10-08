import React, { Component } from 'react';


class Link extends Component {

    go() {
        window.location.hash = this.props.to.slice(1);
    }

    render() {
        return (
            <div className="link" onClick={() => this.go()}>
                {this.props.children}
            </div>

        );
    }

}

export default Link;