import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import github from '@/img/github-icon.svg';
import logo from '@/img/logo.svg';
import {
  Wordpress__Wp_Api_Menus_Menus_ItemsConnection,
} from '@/types';

export const Navbar = () => {
  const data = useStaticQuery<{
    allWordpressWpApiMenusMenusItems: Wordpress__Wp_Api_Menus_Menus_ItemsConnection
  }>(graphql`
      query {
          allWordpressWpApiMenusMenusItems(filter: { name: { eq: "header" } }) {
              edges {
                  node {
                      slug
                      name
                      items {
                          wordpress_id
                          title
                          url
                          attr
                          description
                          classes
                          order
                          target
                          type
                          type_label
                          wordpress_parent
                          xfn
                          object
                          object_id
                          object_slug
                      }
                  }
              }
          }
      }
  `);

  const nodes = data.allWordpressWpApiMenusMenusItems.edges[0].node.items

  return (
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <figure className="image">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </figure>
          </Link>
        </div>
        <div className="navbar-start">
          {nodes.map(node => (
            <Link
              className="navbar-item"
              to={`/${node.object_slug}`}
              key={node.object_slug}
            >
              {node.title}
            </Link>
          ))}
        </div>
        <div className="navbar-end">
          <a
            className="navbar-item"
            href="https://github.com/GatsbyCentral/gatsby-starter-wordpress"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <img src={github} alt="Github" />
            </span>
          </a>
        </div>
      </div>
    </nav>
  )
}

