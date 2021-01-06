import React, { Component } from 'react'
import Link from 'next/link'
import Dropdown from '../Dropdown'

class Layout extends Component {
  render() {
    return (
      <div>
        <div
          className="mx-auto py-2 px-2 lg:px-64 dark:bg-discord-black dark:text-white"
          style={{ alignItems: 'center' }}
        >
          <div className="flex justify-between">
            <div className="text-2xl flex-grow">
              <Link href="/">UNIQUEBOTS</Link>
            </div>
            <div style={{ alignItems: 'center' }} className="flex">
              <Dropdown button={() => <div>드롭다운</div>}>
                <div className="flex flex-column">
                  <div>테스트입니다</div>
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Layout
