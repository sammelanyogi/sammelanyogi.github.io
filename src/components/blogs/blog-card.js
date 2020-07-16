import React from 'react'
import { Link } from 'gatsby'

export default function BlogCard({ title, date, excerpt, slug }) {
  return (
    <div>
      <div>
        <div className="title">
          <Link to={slug}>{title}</Link>
        </div>
        <small>{date}</small>
      </div>

      <p>
        {excerpt}
      </p>
    </div>
  )
}
