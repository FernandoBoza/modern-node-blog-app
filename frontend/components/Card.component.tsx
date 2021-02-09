import Link from 'next/link'
import ReactMarkdown from 'react-markdown';

export default function Card({ article }) {
    const category = article.__typename.replace('Article', '').toLowerCase();
    const { title, slug, ArticleBase, published_at } = article;
    return (
        <Link href={`${category}/${slug}`}>
            <a className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                    <img src={`http://localhost:1337${ArticleBase.images[1].url}`} alt={title} className='rounded-2xl' />
                    <div className="w-full font-bold text-xl text-gray-800 px-6 my-5">
                        {title}
                    </div>
                    <p className="text-gray-800 text-base px-6 mb-5">
                        {ArticleBase.content.slice(0, 200) + ' ...'}
                    </p>
                </div>
            </a>
        </Link>
    )
}