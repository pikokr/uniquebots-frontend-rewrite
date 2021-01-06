import React, { Component } from 'react'
import Link from 'next/link'
import Dropdown from '../Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'

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
              <Dropdown
                leftOffset={-20}
                button={({ opened }) => (
                  <div
                    className="inline-flex select-none cursor-pointer"
                    style={{ alignItems: 'center' }}
                  >
                    <span>드롭다운</span>
                    <FontAwesomeIcon
                      icon={['fas', 'angle-down']}
                      size="2x"
                      className={clsx('ml-2 transition-transform', {
                        'fa-rotate-180': opened,
                      })}
                    />
                  </div>
                )}
              >
                <div className="flex flex-column">
                  <div>테스트입니다</div>
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="md:px-24 px-2">{this.props.children}</div>
      </div>
    )
  }
}

export default Layout
