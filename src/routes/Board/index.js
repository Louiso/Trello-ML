import React from 'react'
import { useParams } from 'react-router-dom'
import { BOARD_FRAGMENT } from '../../apollo/Board/fragments'
import { useReadFragment } from '../../hooks/useReadFragment'

export default () => {
  const { boardId } = useParams()
  const { loading, data } = useReadFragment({ id: `Board:${boardId}`, fragment: BOARD_FRAGMENT })
  console.log("TCL: loading, data", loading, data)
  // const { loading, data } = useQuery(GET_BOARD_BY_ID, { variables: { boardId } })
  // console.log("TCL: loading, data", loading, data)
  return (
    <div>board</div>
  )
}