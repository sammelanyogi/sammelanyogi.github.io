import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => {
  const navigation = [{ title: "Home", url: "/" }, { title: "Blogs", url: "/blog" }, { title: "Contact", url: "/#contact" }]
  return (
    <header
      style={{
        background: `#555`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 0`,
        }}
      >
        <ul className="navigation">
          {
            navigation.map((item, index) => {
              return (
                <li key={index}>

                  <Link
                    to={item.url}
                    style={{
                      color: `white`,
                      textDecoration: `none`,
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              )
            })
          }

        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
