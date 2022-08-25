import React from "react"
import Script from "next/script"
import Hero from "../common/components/Hero/hero"
import Articles from "../common/components/Articles/articles"
import Layout from "../common/components/layout"
import Seo from "../common/components/seo"
import { fetchAPI } from "../lib/api"

const Home = ({ articles, postsReport, categories, homepage }) => {
  console.log(articles)
  return (
    <Layout>
      <Seo seo={homepage.attributes.seo} />
      <Hero />
      <Articles articles={articles} postsReport={postsReport} />
    </Layout>
  )
}

export async function getStaticProps() {
  const [articlesRes, postsReportRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { _limit: "10", populate: "*" }),
    fetchAPI("/posts-report", { populate: "*" }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ])

  return {
    props: {
      articles: articlesRes.data,
      postsReport: postsReportRes,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default Home
