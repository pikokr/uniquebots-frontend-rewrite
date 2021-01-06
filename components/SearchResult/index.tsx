import React, { Component } from 'react'
import SearchBar from '../../components/SearchBar'
import { Bot } from '../../interfaces'

type Props = {
  keyword: string
  results: Bot[]
}

class SearchResult extends Component<Props> {
  render() {
    return (
      <div>
        <SearchBar initial={this.props.keyword} />
        <h2 className="text-2xl pt-2">검색 결과 - {this.props.keyword}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {this.props.results.map((it, key) => (
            <div
              key={key}
              className="p-0 md:p-4 rounded-xl cursor-pointer hover:shadow-2xl transition-shadow bg-white dark:bg-discord-black dark:text-white text-black shadow-xl flex md:flex-row md:gap-2"
            >
              <img
                src={it.avatarURL}
                alt="Avatar"
                className="rounded-none rounded-l-xl w-24 md:rounded-full md:h-12 md:w-12"
              />
              <div className="p-2">
                <div className="text-2xl">{it.name}</div>
                <div>{it.brief}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default SearchResult
