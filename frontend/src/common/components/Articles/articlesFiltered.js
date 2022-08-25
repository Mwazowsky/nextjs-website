import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CardLarge from "../Card/cardLarge";
import CardMedium from "../Card/cardMedium";

import { fetchAPI } from "../../../lib/api";

const ArticlesFiltered = ({ articles, postsReport, slug }) => {
    const [posts, setPosts] = useState(articles);
    const [hasMore, setHasMore] = useState();

    const getMorePosts = async () => {
        const res = await fetchAPI("/categories", {
            filters: { slug: slug },
            _start: `${posts.length}`,
            _limit: "10",
            populate: {
                articles: {
                    populate: "*",
                },
            },
        });
        // const newPosts = await res;
        // setPosts((posts) => [...posts, ...newPosts]);
    }

    useEffect(() => {
        setHasMore(postsReport.count > posts.length ? true : false);
    }, [posts])

    return (
        <div className="bg-gray-100 dark:bg-gray-800 px-8 lg:px-40 py-5 mx-auto lg:py-16">
            <div>
                <div>
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
                </div>
            </div>
        </div>
    )
}

export default ArticlesFiltered
