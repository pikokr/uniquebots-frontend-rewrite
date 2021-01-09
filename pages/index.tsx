import React from 'react'
import SearchBar from '../components/SearchBar'
import {NextSeo} from "next-seo";

const Home = () => {
  return (
    <NextSeo title="홈 - UniqueBots" description="UNIQUEBOTS, 디스코드 봇 리스트">
      <SearchBar />
    </NextSeo>
  )
}

export default Home
