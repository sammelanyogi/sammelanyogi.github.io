import React from 'react'
import Layout from '../components/layout'
import BlogCard from '../components/blogs/blog-card'
import { graphql } from 'gatsby'

export default function Blog({ data }) {
  const posts = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <div>
        {
          posts.map(item => {
            return <BlogCard
              key={item.id}
              title={item.frontmatter.title}
              date={item.frontmatter.date}
              excerpt={item.excerpt}
              slug={item.fields.slug}
            />
          })
        }

      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        excerpt
        id
        frontmatter {
          title
          date(formatString: "DD MMM YYYY")
        }
        fields {
          slug
        }
      }
    }
  }
`