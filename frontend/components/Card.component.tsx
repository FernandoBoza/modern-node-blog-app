export default function Card({ article }) {
    const { title, slug, ArticleBase } = article;
    return (
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                    <img src={`http://localhost:1337${ArticleBase.images[1].url}`} alt="" />
                    <div className="w-full font-bold text-xl text-gray-800 px-6">
                        {title}
                    </div>
                    <p className="text-gray-800 text-base px-6 mb-5">
                        {ArticleBase.content.slice(0, 200) + ' ...'}
                    </p>
                </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="flex items-center justify-end">
                    <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        Action
              </button>
                </div>
            </div>
        </div>
    )
}