// import { gql } from 'apollo-boost'
import React, { Component } from 'react'
// import { Query } from 'react-apollo'
// import { Category } from '../interfaces'
import Select from 'react-select'
import SelectOption from '../components/Select/SelectOption'
import SelectValueContainer from '../components/Select/SelectContainer'
import SelectControl from '../components/Select/SelectControl'

class AddBot extends Component {
  state = {
    category: '',
  }

  render() {
    return (
      <div className="pt-4">
        <div className="text-2xl">봇 추가하기</div>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <label className="block mt-4">
              <span>카테고리</span>
              {/*<select
                className="mt-1 block w-full rounded-md dark:bg-discord-black"
                value={this.state.category}
                onChange={(e) => this.setState({ category: e.target.value })}
                multiple
              >
                <Query
                  query={gql`
                    query {
                      categories {
                        id
                        name
                      }
                    }
                  `}
                >
                  {({ data, loading, error }: any) => {
                    if (loading)
                      return (
                        <option disabled value="">
                          Loading...
                        </option>
                      )
                    if (error || !data)
                      return (
                        <option disabled value="">
                          카테고리 목록 가져오기 실패.
                        </option>
                      )
                    return (
                      <>
                        {data.categories.map((it: Category, key: number) => (
                          <option key={key} value={it.id}>
                            {it.name}
                          </option>
                        ))}
                      </>
                    )
                  }}
                </Query>
              </select>*/}
              <Select
                isSearchable
                isMulti
                components={{
                  Option: SelectOption,
                  SelectContainer: SelectValueContainer,
                  Control: SelectControl,
                }}
                instanceId="addbot__category"
                options={[
                  {
                    label: '테스트',
                    value: 'test',
                  },
                  {
                    label: '테스트2',
                    value: 'test2',
                  },
                  {
                    label: '테스트3',
                    value: 'test3',
                  },
                  {
                    label: '테스트4',
                    value: 'test4',
                  },
                ]}
              />
            </label>
          </div>
        </form>
      </div>
    )
  }
}

export default AddBot
