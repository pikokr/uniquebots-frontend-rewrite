import clsx from 'clsx'
import React from 'react'
import { Bot, Status, StatusColors } from '../types'

const BotCard = ({ bot }: { bot: Bot }) => {
  return (
    <div className="container mt-5">
      <div className="relative">
        <img
          src={bot.avatarURL}
          className="absolute w-32 h-32 -left-2 shadow-lg top-2 rounded-xl z-50"
          alt="Avatar"
        />
      </div>
      <div className="rounded-xl p-4 lg:p-0 relative shadow-lg w-full transition-shadow border-black border lg:flex lg:min-h-56">
        {/* <img
          src={bot.avatarURL}
          className="rounded-full w-16 h-16 lg:h-32 lg:w-full lg:rounded-none lg:rounded-tl-xl"
          alt="AVATAR"
        /> */}
        <div className="mt-32 pl-2 w-28 absolute">
          <div className="whitespace-nowrap mt-3 p-2">
            <div
              className={clsx(
                'w-4 h-4 inline-block rounded-full mr-2',
                'bg-' + StatusColors[bot.status],
              )}
            />
            <span>{Status[bot.status]}</span>
          </div>
          <div className="whitespace-nowrap px-2 pb-2">
            <span>{bot.guilds} 서버</span>
          </div>
        </div>
        <div className="p-2 pl-32">
          <div className="text-2xl">{bot.name}</div>
          <div>{bot.brief}</div>
        </div>
      </div>
    </div>
  )
}

export default BotCard
