import { gql } from 'apollo-boost'
import React, { Component } from 'react'
import UBSelect from '../components/Select/UBSelect'
import { Category } from '../interfaces'
import { getApolloClient } from '../lib/apollo'
import { getMarkdown } from '../lib/markdown'

class AddBot extends Component {
  state = {
    category: [],
    brief: '',
    description: '',
    library: ''
  }

  render() {
    return (
      <div className="pt-4">
        <div className="text-2xl">봇 추가하기</div>
        <form>
          <div className="grid gap-2">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              <label className="block mt-4">
                <span>봇 ID</span>
                <input
                  type="text"
                  className="w-full p-2 rounded-md border-gray-300 dark:bg-discord-black border dark:border-white focus:border-blue-600 transition-colors"
                  placeholder="봇 클라이언트 ID를 입력해주세요"
                />
              </label>
              <label className="block mt-4">
                <span>카테고리</span>
                <UBSelect
                value={this.state.category}
                  onChange={(category) => this.setState({ category })}
                  isSearchable
                  isMulti
                  instanceId="addbot__category"
                  async
                  defaultOptions
                  loadOptions={async (value) => {
                    const client = getApolloClient()
                    const res = await client.query({
                      query: gql`
                        query {
                          categories {
                            id
                            name
                          }
                        }
                      `,
                    })
                    return res.data.categories
                      .filter((r: Category) => r.name.includes(value))
                      .map((it: Category) => ({
                        value: it.id,
                        label: it.name,
                      }))
                  }}
                />
              </label>
              <label className="block mt-4">
                <span>라이브러리</span>
                <UBSelect
                  onChange={(library) => this.setState({ library })}
                  value={this.state.library}
                  isSearchable
                  instanceId="addbot__library"
                  async
                  defaultOptions
                  loadOptions={async (value) => {
                    const client = getApolloClient()
                    const res = await client.query({
                      query: gql`
                        query {
                          libraries {
                            id
                            name
                          }
                        }
                      `,
                    })
                    return res.data.libraries
                      .filter((r: Category) => r.name.includes(value))
                      .map((it: Category) => ({
                        value: it.id,
                        label: it.name,
                      }))
                  }}
                />
              </label>
            <label className="block mt-4">
              <span>짧은 설명</span>
              <input
                type="text"
                className="w-full p-2 rounded-md border-gray-300 dark:bg-discord-black border dark:border-white focus:border-blue-600 transition-colors"
                placeholder="봇의 간단한 소개를 적어주세요.(최대 50자)"
                maxLength={50}
              />
            </label>
            </div>
            <label className="block mt-4">
              <span>봇 설명</span>
              <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
                <textarea
                  onChange={(e) =>
                    this.setState({ description: e.target.value })
                  }
                  value={this.state.description}
                  className="w-full p-2 rounded-md border-gray-300 dark:bg-discord-black border resize-y dark:border-white focus:border-blue-600 transition-colors"
                  placeholder="봇이 어떤 기능을 하는지 적어주세요.(최대 5000자)"
                  maxLength={5000}
                />
                <div
                  className="shadow-lg bg-discord-black p-2 markdown"
                  dangerouslySetInnerHTML={{
                    __html: getMarkdown().render(this.state.description),
                  }}
                ></div>
              </div>
            </label>
          </div>
        </form>
      </div>
    )
  }
}

export default AddBot
