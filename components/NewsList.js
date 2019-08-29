import { useState, useEffect } from 'react'
import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'
import Carousel from 'nuka-carousel'
import NewsItem from './NewsItem'
import Arrows from './Arrows'
import Loading from './Loading'

export const NEWS_ALL = gql`
  query($page: Int) {
    newsAll(page: $page) {
      id
      description
      intro
      link
      title
      media
      post {
        id
      }
    }
  }
`
export default function NewsList () {
  const [page, setPage] = useState(1)
  const [fetching, setFetching] = useState(false)
  const {
    loading,
    error,
    data: { newsAll },
    fetchMore
  } = useQuery(NEWS_ALL, {
    // variables: { page }
  })
  let slidesToShow = 1
  if (process.browser) {
    if (window.innerWidth > 640) slidesToShow = 2
    if (window.innerWidth > 968) slidesToShow = 3
  }
  async function more () {
    setFetching(true)
    const newPage = page + 1
    await fetchMore({
      variables: {
        page: newPage
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          setPage(null)
          return prev
        }
        setPage(newPage)
        return Object.assign({}, prev, {
          newsAll: [...prev.newsAll, ...fetchMoreResult.newsAll]
        })
      }
    })
    setFetching(false)
  }
  // if (newsAll && newsAll.length > 0 && !fetching && page) {
  //   more()
  // }
  if (error) return <ErrorMessage message='Error loading posts.' />
  if (loading || !newsAll) return <Loading />
  return (
    <section>
      <h2>Notícias</h2>
      {slidesToShow ? (
        <Carousel
          cellSpacing={slidesToShow > 1 ? 40 : 0}
          slidesToShow={slidesToShow}
          slidesToScroll={slidesToShow}
          // renderBottomCenterControls={({ currentSlide }) => (
          // 	<div className="slide-count">Slide: {currentSlide}</div>
          // )}
          renderCenterLeftControls={
            slidesToShow > 1
              ? ({ previousSlide }) => (
                <button className='slide-button' onClick={previousSlide}>
                  <Arrows left />
                </button>
              )
              : null
          }
          renderCenterRightControls={
            slidesToShow > 1
              ? ({ nextSlide }) => (
                <button className='slide-button right' onClick={nextSlide}>
                  <Arrows right />
                </button>
              )
              : null
          }
        >
          {newsAll.map(news => (
            <NewsItem {...news} key={news.id} />
          ))}
        </Carousel>
      ) : (
        <NewsItem />
      )}
      <div className='list' />
      <style jsx>{`
        section {
          padding: 10vh 5% 0;
          text-align: center;
        }
        h2 {
          padding-bottom: 5vh;
        }
        div {
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: center;
        }
        .slide-button {
          cursor: pointer;
          position: relative;
          right: 50px;
          background: none;
          width: 50px;
        }
        .right {
          left: 50px;
        }
        @media screen and (min-width: 480px) {
          flex-flow: row;
          justify-content: space-around;
        }
        @media screen and (min-width: 1024px) {
          flex-flow: row;
          justify-content: space-around;
          /* width: 860px; */
          width: 75%;
          margin: 0 auto;
        }
        @media screen and (min-width: 1280px) {
          /* width: 968px; */
        }
      `}</style>
    </section>
  )
}
