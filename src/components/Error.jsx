import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error=useRouteError()
    //console.log(error)

  return (
    <div>Error..!!!
    <h3>{error.status}</h3>
    </div>
  )
}

export default Error