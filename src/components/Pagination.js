import React from 'react'
import { Link } from 'gatsby'

const Pagination = ({ pageContext, pathPrefix }) => {
  const { previousPagePath, nextPagePath } = pageContext;

  return (
    <nav role="navigation">

        {previousPagePath && (
          <Link to={previousPagePath} rel="prev">
            Previous
          </Link>
        )}
        {nextPagePath && (

            <Link to={nextPagePath} rel="next">
              Next
            </Link>

        )}

    </nav>
  )
}

export default Pagination
