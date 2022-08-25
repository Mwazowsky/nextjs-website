import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CardLarge from "../Card/cardLarge";
import CaedSmall from "../Card/cardSmall";

import { fetchAPI } from "../../../lib/api";

const Articles = ({ articles, postsReport }) => {
  const [posts, setPosts] = useState(articles);
  const [hasMore, setHasMore] = useState();

  const getMorePosts = async () => {
    const res = await fetchAPI("/articles", { 
      _start: `${posts.length}`,
      _limit: "10",
      populate: "*" 
    });
    const newPosts = await res;
    setPosts((posts) => [...posts, ...newPosts]);
  }

  console.log(posts);

  useEffect(() => {
    setHasMore(postsReport.count > posts.length ? true : false);
  }, [posts])

  return (
    <div className="bg-gray-100 dark:bg-gray-800 px-8 lg:px-32 py-5 mx-auto lg:py-11">
      <div>
        {/* <div>
          <InfiniteScroll
            dataLength={posts.length}
            next={getMorePosts}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {posts.map((post, i) => {
              return (
                <CardLarge
                  article={post}
                  key={`article__left__${post.attributes.slug}`}
                />
              )
            })}
          </InfiniteScroll>
        </div> */}

        <div className="medium-scroll">
          <InfiniteScroll
            dataLength={posts.length}
            next={getMorePosts}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {posts.map((post, i) => {
              return (
                <CaedSmall
                  article={post}
                  key={`article__left__${post.attributes.slug}`}
                />
              )
            })}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  )
}

export default Articles
