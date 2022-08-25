import React from 'react';
import Image from 'next/image';
import Link from "next/link";

import programming from '../../../../public/programming.jpeg'

const TopicCard = ({ topicName, slug }) => {
    return (
        <Link href={`/category/${slug}`}>
            <a className="card flex flex-col w-full lg:w-80 border-slate-600 border-b">
                <Image
                    alt="Programming"
                    src={programming}
                    layout="responsive"
                    objectFit="contain"
                    width={"100%"}
                    height={"100%"}
                />
                <div>
                    <span className="font-staatliches text-2xl text-slate-900 dark:text-slate-100">{topicName}</span>
                    <p className="font-ubuntu text-slate-900 dark:text-slate-100 ">My Journey on learning programming to share or logged</p>
                </div>
            </a>
        </Link>
    )
}

export default TopicCard