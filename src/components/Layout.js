import * as React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import { container, heading, navlinks, navLinkItem, navlinktext  } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`)
    return (
        <div className={container}>
          <nav>
            <ul className={navlinks}>
              <li className={navLinkItem}><Link className={navlinktext } to="/">Home</Link></li>
              <li className={navLinkItem}><Link className={navlinktext } to="/about">About Us</Link></li>
              <li className={navLinkItem}><Link className={navlinktext } to="/contact">Contact Us</Link></li>
            </ul>
          </nav>
          <main>
            <h1 className={heading}>{pageTitle}</h1>
            <header>{data.site.siteMetadata.title}</header>
            {children}
          </main>
        </div>
      )
}

export default Layout