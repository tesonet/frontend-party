import React from 'react'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <div>
      <div>Route doesn't exist :(</div>
      <div>
          <Link to="/login">
              Go home
          </Link>
      </div>
    </div>
  )
}

export default NotFound
