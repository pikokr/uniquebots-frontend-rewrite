import React, { Component } from "react";
import Link from "next/link";

class Layout extends Component {
  render() {
    return (
      <div>
        <div className="mx-auto py-2 px-2 lg:px-64 dark:bg-discord-black dark:text-white">
          <div className="flex justify-between">
            <div className="text-2xl">
              <Link href="/">UNIQUEBOTS</Link>
            </div>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
