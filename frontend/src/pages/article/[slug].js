import { useEffect } from "react"
import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "../../lib/api"
import Layout from "../../common/components/layout"
import Image from "../../common/components/image"
import Seo from "../../common/components/seo"
import { getStrapiMedia } from "../../lib/media"
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);

const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.attributes.image)
  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  }

  useEffect(() => {
    hljs.initHighlighting();
  },[])


  return (
    <Layout categories={categories.data}>
      <Seo seo={seo} />
      <div
        id="article-header"
        className="flex flex-col align-middle justify-center items-start px-3 h-auto lg:px-44"
      >
        <div className="flex flex-col justify-center items-start px-10 lg:px-20 py-20 p-6 w-full">
          <div>
            <span id="category" className="text-md font-medium text-blue-600 uppercase dark:text-blue-400">{article.attributes.category.data.attributes.name}</span>
            <p id="title" className="block mt-3 text-6xl font-staatliches font-normal text-gray-800 transition-colors duration-200 transform dark:text-white">{article.attributes.title}</p>
            <p className="mt-4 text-2xl text-gray-600 dark:text-gray-400">{article.attributes.description}</p>
          </div>

          <div className="mt-8">
            <div className="flex items-center">
              <div className="flex items-center">
                {/* <Image className="object-cover h-10 rounded-full" image="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" /> */}
                {article.attributes.author.picture && (
                  <Image className="object-cover h-10 rounded-full" image={article.attributes.author.picture} alt="Avatar" />
                )}
                <a href="#" className="mx-2 font-semibold text-gray-700 hover:text-black dark:text-gray-200">Jone Doe</a>
              </div>
              <span className="mx-1 text-xs text-gray-700 dark:text-gray-300">21 SEP 2015</span>
            </div>
          </div>
        </div>
        <div className="h-96 w-full relative">
          <Image image={article.attributes.image} />
        </div>
      </div>

      <div id="article-body" className="article relative py-20 p-6 px-8 h-auto lg:px-64">
        <div className="font-sans font-medium text-xl text-slate-800 dark:text-slate-200">
          <ReactMarkdown
            source={article.attributes.content}
            escapeHtml={false}
          />
          <hr className="uk-divider-small" />
          <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <div>
              {article.attributes.author.picture && (
                <Image image={article.attributes.author.picture} />
              )}
            </div>
            <div className="uk-width-expand">
              <p className="uk-margin-remove-bottom">
                By {article.attributes.author.name}
              </p>
              <p className="uk-text-meta uk-margin-remove-top">
                <Moment format="MMM Do YYYY">
                  {article.attributes.published_at}
                </Moment>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] })

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: "*",
  })
  const categoriesRes = await fetchAPI("/categories")

  return {
    props: { article: articlesRes.data[0], categories: categoriesRes },
    revalidate: 1,
  }
}

export default Article
