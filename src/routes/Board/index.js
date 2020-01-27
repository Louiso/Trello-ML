import React from 'react'
import { useParams } from 'react-router-dom'

export default () => {
  const { boardId } = useParams()
  // const { loading, data } = useQuery(GET_BOARD_BY_ID, { variables: { boardId } })
  // console.log("TCL: loading, data", loading, data)
  return (
    <div>board</div>
  )
}