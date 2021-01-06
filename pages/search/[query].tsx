import { NextPageContext } from 'next'
import React, { Component } from 'react'
import SearchBar from '../../components/SearchBar'

class Search extends Component<any> {
  render() {
    return (
      <div className="px-2 lg:px-64">
        <SearchBar initial={this.props.keyword} />
        <h2 className="text-2xl pt-2">검색 결과</h2>
      </div>
    )
  }
}

export async function getServerSideProps(ctx: NextPageContext) {
  return { props: { keyword: ctx.query.query } }
}

export default Search
