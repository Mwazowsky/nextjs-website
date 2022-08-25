import ArticlesFiltered from "../../common/components/Articles/articlesFiltered"
import { fetchAPI } from "../../lib/api"
import Layout from "../../common/components/layout"
import Seo from "../../common/components/seo"

const Category = ({ category, categories, postsReport }) => {
  console.log(category.attributes.slug);
  console.log(categories);
  const seo = {
    metaTitle: category.attributes.name,
    metaDescription: `All ${category.attributes.name} articles`,
  }

  return (
    <Layout categories={categories.data}>
      <Seo seo={seo} />
      <div>
        <div>
          <h1>{category.attributes.name}</h1>
          <ArticlesFiltered articles={category.attributes.articles.data} postsReport={postsReport} slug={category.attributes.slug} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const categoriesRes = await fetchAPI("/categories", { fields: ["slug"] })

  return {
    paths: categoriesRes.data.map((category) => ({
      params: {
        slug: category.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const matchingCategories = await fetchAPI("/categories", {
    filters: { slug: params.slug },
    populate: {
      articles: {
        populate: "*",
      },
    },
  });
  const allCategories = await fetchAPI("/categories");
  const postsReportRes = await fetchAPI("/posts-report")

  return {
    props: {
      category: matchingCategories.data[0],
      categories: allCategories,
      postsReport: postsReportRes,
    },
    revalidate: 1,
  }
}

export default Category
