import React, { useEffect, useState } from 'react'

const List = ({getItems}) => {
    const [myItems, setMyItems] = useState([])

    useEffect(() => {
        console.log("buscando items")

        setMyItems(getItems)
    }, [getItems])
  return (
    <div>
        {myItems.map(item => (
            <p key={item}>{item}</p>
        ))}
    </div>
  )
}

export default List