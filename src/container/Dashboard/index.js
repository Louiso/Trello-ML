import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { Box, Typography, Card, CardContent, CardHeader, makeStyles } from '@material-ui/core'
import { Link, useRouteMatch } from 'react-router-dom'
// const GET_BOARDS = gql`
//   query boards {
//     boards @client {
//       _id,
//       stages {
//         _id,
//         tasks{
//           _id,
//           title,
//           members {
//             _id,
//             firstName,
//             lastName,
//             email
//           }
//         }
//       }
//     }
//   }
// `

const GET_BOARDS = gql`
  query {
    boards @client {
      _id,
      title,
      createdBy{
        _id,
        email
      }
    }
  }
`

function Dashboard() {
  const { loading, data } = useQuery(GET_BOARDS)
  const classes = useStyles()
  if (loading) return <div>Loading ...</div>
  const { boards } = data
  return (
    <Box>
      <Typography>Tableros personales</Typography>
      <Box display='flex'>
        {boards.map((board) => {
          const { _id, title, createdBy } = board
          return (
            <Link key={_id} to={`/board/${_id}`}>
              <Card className={classes.cardContent}>
                <CardHeader
                  title={title}
                  subheader={createdBy.email}
                />
                <CardContent>

                </CardContent>
              </Card>
            </Link>
          )
        })}
      </Box>
    </Box>
  )
}

const useStyles = makeStyles(() => ({
  cardContent: {
    minWidth: 245
  }
}))

export default Dashboard
