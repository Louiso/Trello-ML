import { useState, useEffect } from "react"
import { useApolloClient } from "@apollo/react-hooks"

export const useReadFragment = ({ id, fragment }) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const client = useApolloClient()
  useEffect(() => {
    try {
      const res = client.readFragment({ id, fragment })
      setData(res)
      setLoading(true)
    } catch (error) {
      console.log(error.message)
    }
  }, [client, fragment, id])
  return {
    loading,
    data
  }
}