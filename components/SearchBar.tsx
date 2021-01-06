import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Router from 'next/router'

const SearchBar = () => {
  const [keyword, setKeyword] = React.useState('')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        return Router.push(
          '/search',
          '/search?' +
            new URLSearchParams({
              q: keyword,
            }),
        )
      }}
      className="bg-discord-black mt-6 rounded-md flex"
    >
      <input
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        type="text"
        placeholder="봇 검색하기"
        className="bg-transparent p-3 outline-none flex-grow"
      />
      <button type="submit" className="p-3 bg-transparent">
        <FontAwesomeIcon size="2x" icon={['fas', 'search']} />
      </button>
    </form>
  )
}

export default SearchBar
