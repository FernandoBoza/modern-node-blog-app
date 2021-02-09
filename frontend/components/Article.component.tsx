import Link from 'next/link';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

const Article = ({ article }) => {
    const category = article.category,
        singleArticle = article[category + 'Articles'][0],
        date = new Date(singleArticle.published_at).toLocaleDateString();

    return (
        <section className="container max-w-full w-full mb-10">
            <Head>
                <title>Fer B | {singleArticle.title}</title>
            </Head>

            <div className="flex w-screen justify-between relative h-3/4 md:h-75">
                <div className="bg-blue-600 z-1 items-center justify-center flex w-full md:w-8/12 p10">
                    <h1 className='text-white my-20 md:w-1/2 text-4xl md:text-8xl font-bold'>{singleArticle.title}</h1>
                </div>
                <img src='https://via.placeholder.com/720x765' alt="" className="hidden md:flex aboslute right-0" />
            </div>

            <div className="mt-20 px-10 lg:px-0 container mx-auto leading-loose">
                <div className="text-gray-500 mb-10 flex justify-between">
                    <Link href={`/${category}`}>
                        <a className='flex items-center text-2xl capitalize'>
                            Back to {category}
                        </a>
                    </Link>
                    <p>{date}</p>
                </div>
                <ReactMarkdown children={singleArticle.ArticleBase.content} />
            </div>
        </section>
    )
}

export default Article