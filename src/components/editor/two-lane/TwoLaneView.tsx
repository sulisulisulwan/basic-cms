import * as React from 'react'
const { useState } = React
import { baseItemDataIF, twoLaneViewPropsIF } from '../../../types'
import EventsItem from '../itemCards/EventsItemCard'
import NewsItem from '../itemCards/NewsItemCard'
import sortedDataIF from '../../../types/sortedDataIF'
import LaneHeader from './LaneHeader'

function TwoLaneView(props: twoLaneViewPropsIF) {

    const { viewContext, fetchedData } = props

    const [ draftSortState, setDraftSortState ] = useState('title')
    const [ publishedSortState, setPublishedSortState ] = useState('title')

    const sortedData: sortedDataIF = {
        draft: [],
        published: []
    }

    fetchedData.forEach(data => {
        sortedData[data.status as keyof sortedDataIF].push(data)
    })

    sortedData.draft.sort((dataA: baseItemDataIF, dataB: baseItemDataIF) => {
        const propToSort = draftSortState.toLowerCase()

        const dataAProp = dataA[propToSort as keyof baseItemDataIF]
        const dataBProp = dataB[propToSort as keyof baseItemDataIF]

        let dataAString = dataAProp instanceof Date ? (dataAProp as Date).toISOString() : dataAProp.toString()
        let dataBString = dataBProp instanceof Date ? (dataBProp as Date).toISOString() : dataBProp.toString()

        return dataAString.localeCompare(dataBString)
    })

    sortedData.published.sort((dataA: baseItemDataIF, dataB: baseItemDataIF) => {
        const propToSort = publishedSortState.toLowerCase()

        const dataAProp = dataA[propToSort as keyof baseItemDataIF]
        const dataBProp = dataB[propToSort as keyof baseItemDataIF]

        let dataAString = dataAProp instanceof Date ? (dataAProp as Date).toISOString() : dataAProp.toString()
        let dataBString = dataBProp instanceof Date ? (dataBProp as Date).toISOString() : dataBProp.toString()

        return dataAString.localeCompare(dataBString)
    })

    return (
        <div className="two-lane-view-and-add-item">
            <div className="two-lane-view">
                <div className="left-lane">
                    <div className="left-lane-header">
                        <LaneHeader 
                            laneName={'draft'}
                            setSort={setDraftSortState}
                        />
                    </div>
                    {
                        sortedData.draft.map((data: any, idx: number) => {
                            const itemCard = itemCardMap.get(viewContext || 'default')

                            if (!itemCard) {
                                throw new Error('Invalid view context passed into item card map returned undefined.')
                            }

                            return (
                                itemCard({data, mapIdx: idx, draftStatus: 'draft'})
                            )
                        })
                    }
                </div>
                <div className="right-lane">
                    <div className="right-lane-header">
                        <LaneHeader 
                            laneName={'published'}
                            setSort={setPublishedSortState}
                        />
                    </div>
                    {
                        sortedData.published.map((data: any, idx: number) => {
                            const itemCard = itemCardMap.get(viewContext || 'default')

                            if (!itemCard) {
                                throw new Error('Invalid view context passed into item card map returned undefined.')
                            }

                            return (
                                itemCard({data, mapIdx: idx, draftStatus: 'published'})
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const itemCardMap = new Map([
    ['newsEditor', NewsItem],
    ['eventsEditor', EventsItem]
])


export default TwoLaneView