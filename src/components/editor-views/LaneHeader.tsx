import * as React from 'react'

interface laneHeaderPropsIF {
    laneName: string
    setSort: React.Dispatch<React.SetStateAction<string>>
}

const LaneHeader = (props: laneHeaderPropsIF) => {

    const { laneName, setSort } = props

    return (
        <>
            <span className={`${laneName}-header-name`}>{laneName.toUpperCase()}</span>
            <div className={`${laneName}-header-sort`}>
                <span className={`${laneName}-header-sort`}>Sort by:&nbsp;&nbsp;</span> 
                <select onChange={(e: any) => { setSort(e.target.value)}}>
                    <option>Title</option>
                    <option>Date</option>
                </select>
            </div>
        </>
    )
}

export default LaneHeader