import React, { Component } from 'react';

class Layout extends Component {
    render() {
        return (
            <div>
                레이아웃!
                {this.props.children}
            </div>
        );
    }
}

export default Layout;