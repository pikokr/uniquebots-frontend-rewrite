import { gql } from 'apollo-boost'
import Link from 'next/link'
import React from 'react'
import { Query } from 'react-apollo'
import Dropdown from '../Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'

const Header = () => {
  const dropdownItemClass =
    'rounded-md p-2 dark:hover:bg-gray-600 cursor-pointer transition-all hover:bg-gray-100'

  return (
    <div
      className="mx-auto py-2 px-2 md:px-32 dark:bg-discord-black dark:text-white"
      style={{ alignItems: 'center' }}
    >
      <div className="flex justify-between">
        <div
          className="text-2xl flex-grow flex"
          style={{ alignItems: 'center' }}
        >
          <Link href="/">UNIQUEBOTS</Link>
        </div>
        <div style={{ alignItems: 'center' }} className="flex">
          <Query
            query={gql`
              query {
                user: me {
                  id
                  tag
                  avatarURL
                  admin
                }
                loginURL
              }
            `}
          >
            {({ loading, data }: any) => {
              if (loading) return <div>Loading...</div>
              const user = data?.user
              if (data?.user)
                return (
                  <Dropdown
                    leftOffset={-20}
                    button={({ opened }) => (
                      <div
                        className="inline-flex select-none cursor-pointer"
                        style={{ alignItems: 'center' }}
                      >
                        <img
                          src={user.avatarURL}
                          className="h-6 w-6 rounded-full mr-2"
                          alt="Avatar"
                        />
                        <span className="md:block hidden">{user.tag}</span>
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
                    <div className="flex flex-col gap-1">
                      <Link href="/profile/[id]" as={`/profile/${user.id}`}>
                        <div className={dropdownItemClass}>프로필</div>
                      </Link>
                      {user.admin && (
                        <>
                          <Link href="/admin">
                            <div className={dropdownItemClass}>관리</div>
                          </Link>
                        </>
                      )}
                      <Link href="/addbot">
                        <div className={dropdownItemClass}>봇 추가하기</div>
                      </Link>
                      <Link href="/logout">
                        <div className={dropdownItemClass}>로그아웃</div>
                      </Link>
                    </div>
                  </Dropdown>
                )
              return (
                <div>
                  <a href={data.loginURL}>로그인</a>
                </div>
              )
            }}
          </Query>
        </div>
      </div>
    </div>
  )
}

export default Header
