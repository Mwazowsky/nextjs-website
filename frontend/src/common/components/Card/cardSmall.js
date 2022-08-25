import React from "react";
import Link from "next/link";
import Image from "../image";

const CardSmall = ({ article }) => {
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <a className="w-full lg:w-1/3 border-slate-600 border-t lg:p-5">
        <div className="py-5 lg:pt-10 w-full">
          <div className="flex flex-col content-center mx-auto overflow-hidden bg-transparent rounded-lg">
            <div className="w-full h-40">
              <Image image={article.attributes.image} />
            </div>

            <div className="flex flex-col justify-center items-start py-4 w-full">
              <div>
                <span id="category" className="text-sm lg:text-md font-medium text-blue-600 uppercase dark:text-blue-400">{article.attributes.category.data.attributes.name}</span>
                <p id="title" className="block mt-1 lg:mt-3 text-xl lg:text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600 hover:underline">{article.attributes.title}</p>
                <p className="mt-2 lg:mt-4 text-base lg:text-md text-gray-600 dark:text-gray-400">{article.attributes.description}</p>
              </div>

              <div className="mt-3 lg:mt-8">
                <div className="flex items-center">

                  <div className="flex items-center">
                    <img className="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                    <p className="mx-2 font-semibold text-gray-700 hover:text-black dark:text-gray-200">Jone Doe</p>
                  </div>

                  <span className="mx-1 text-xs text-gray-700 dark:text-gray-300">21 SEP 2015</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default CardSmall
