import React from 'react';
import Layout from '../common/components/layout';
import TopicCard from '../common/components/Card/topicCard';

import { fetchAPI } from '../lib/api';

const Topics = ({ categories, postsReport }) => {
    console.log(categories)
    return (
        <Layout categories={categories.data}>
            <header className="flex h-40 justify-center content-center items-end align-middle w-full">
                <div className="">
                    <span className="font-staatliches text-7xl text-slate-900 dark:text-slate-100">Topics</span>
                </div>
            </header>

            <div className="flex flex-col gap-10 lg:flex-row justify-center lg:flex-wrap px-7 lg:px-44 py-14">
                {categories.map((category) => {
                    return (
                        <TopicCard key={category.id} topicName={category.attributes.name} slug={category.attributes.slug} />
                    )
                })}
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const allCategories = await fetchAPI("/categories", { populate: "*" });
    const postsReportRes = await fetchAPI("/posts-report")

    return {
        props: {
            categories: allCategories.data,
            postsReport: postsReportRes,
        },
        revalidate: 1,
    }
}

export default Topics