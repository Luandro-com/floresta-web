import { Query } from "react-apollo"
import gql from "graphql-tag"
import ErrorMessage from "./ErrorMessage"
import BackButton from "./BackButton"
import TagList, { PROJECT_TAGS } from "./TagList"
import ProjectList from "../components/ProjectList"
import Project from "../components/Project"
import Loading from "../components/Loading"

import colors from "../lib/colors"

export const TAG_PROJECTS = gql`
  query($slug: String) {
    projectTags(slug: $slug) {
      slug
      id
      name
      projects {
        id
        slug
        name
        media
        description
        intro
        tags {
          id
          slug
          name
        }
      }
    }
  }
`

export const CATEGORY = gql`
  query($slug: String) {
    categories(slug: $slug) {
      slug
      description
      projects {
        id
        slug
        name
        media
        description
        intro
        tags {
          id
          slug
          name
        }
      }
    }
  }
`

export const CATEGORIES = gql`
  query {
    categories {
      id
      slug
      description
      projects {
        id
        slug
        name
        media
        description
        intro
        tags {
          id
          slug
          name
        }
      }
    }
  }
`

const mergeById = (a1, a2) =>
  a1.map(itm => ({
    ...a2.find(item => item.id === itm.id && item),
    ...itm
  }))

function List({ slug, tags }) {
  const query = tags && slug ? TAG_PROJECTS : slug ? CATEGORY : CATEGORIES
  return (
    <Query query={query} variables={slug ? { slug } : null}>
      {({ loading, error, data, fetchMore }) => {
        let allProjects = []
        if (error) return <ErrorMessage message='Error loading posts.' />
        if (loading) return <Loading />

        const list = data[tags ? "projectTags" : "categories"]
        if (list) {
          list.map(p => {
            if (allProjects.length === 0) {
              allProjects = p.projects
            } else {
              mergeById(allProjects, p.projects)
            }
          })
          return <ProjectList projects={allProjects} />
        } else {
          return <Loading />
        }
      }}
    </Query>
  )
}

export default function PageLayout({ slug, project, tags }) {
  return (
    <section>
      <div className='back'>
        <BackButton />
      </div>
      <div className='container'>
        {!project ? <List slug={slug} tags={tags} /> : <Project {...project} />}
        <div className='tag-list'>
          <TagList
            column
            titleColor={colors.light}
            color={colors.color1}
            hoverColor={colors.light}
            hoverBackgroundColor={colors.color1}
            width={"250px"}
            weight={600}
            fontSize={"2em"}
            padding={"5px 25px"}
            radius={5}
          />
        </div>
      </div>
      <style jsx>{`
        section {
          margin: 0 auto;
          padding-top: 5vh;
          width: 95%;
        }
        div {
          align-items: center;
          display: flex;
        }
        .back {
          position: relative;
          right: 1vw;
          cursor: pointer;
          top: 5vh;
        }
        .container {
          display: flex;
          flex-flow: column;
          margin: 0 auto;
        }
        .tag-list {
          width: 100%;
        }
        @media screen and (min-width: 480px) {
          width: 90%;
        }
        @media screen and (min-width: 1024px) {
          /* width: 968px; */
          margin: 0 auto;
        }
        @media screen and (min-width: 1200px) {
          .container {
            display: flex;
            flex-flow: row nowrap;
            align-items: flex-start;
            justify-content: space-between;
          }
          .tag-list {
            width: 200px;
            margin-left: 5vw;
          }
        }
      `}</style>
    </section>
  )
}

// function loadMorePosts(allPosts, fetchMore) {
// 	fetchMore({
// 		variables: {
// 			skip: allPosts.length
// 		},
// 		updateQuery: (previousResult, { fetchMoreResult }) => {
// 			if (!fetchMoreResult) {
// 				return previousResult;
// 			}
// 			return Object.assign({}, previousResult, {
// 				// Append the new posts results to the old one
// 				allPosts: [ ...previousResult.allPosts, ...fetchMoreResult.allPosts ]
// 			});
// 		}
// 	});
// }
