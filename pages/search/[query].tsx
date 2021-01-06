import { NextPageContext } from 'next'
import React, { Component } from 'react'
import SearchResult from '../../components/SearchResult'
import { Bot } from '../../interfaces'

const sample: Bot[] = [
  {
    id: '123',
    name: '테스트',
    avatarURL: 'https://cdn.discordapp.com/embed/avatars/0.png',
    brief: '테스트입니다.',
    description: '설명설명',
  },
  {
    id: '123',
    name: '테스트',
    avatarURL: 'https://cdn.discordapp.com/embed/avatars/0.png',
    brief: '테스트입니다.',
    description: '설명설명',
  },
  {
    id: '123',
    name: '테스트',
    avatarURL: 'https://cdn.discordapp.com/embed/avatars/0.png',
    brief: '테스트입니다.',
    description: '설명설명',
  },
  {
    id: '123',
    name: '테스트',
    avatarURL: 'https://cdn.discordapp.com/embed/avatars/0.png',
    brief: '테스트입니다.',
    description: '설명설명',
  },
]

class Search extends Component<any> {
  render() {
    return <SearchResult keyword={this.props.keyword} results={sample} />
  }
}

export async function getServerSideProps(ctx: NextPageContext) {
  return { props: { keyword: ctx.query.query } }
}

export default Search
