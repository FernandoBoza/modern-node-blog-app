import { useRouter } from 'next/router'
import { resourceLimits } from 'worker_threads';

const ActiveLink = ({ children, href }) => {

    const router = useRouter();
    let cls;
    if (`/${router.query.category}` === href || router.asPath === href) {
        cls = 'font-bold'
    } else {
        cls = 'hover:text-gray-800 hover:text-underline'
    }

    const handleClick = e => {
        e.preventDefault();
        router.push(href)
    }

    return <a href={href} onClick={handleClick} className={`inline-block py-2 px-4 no-underline ${cls}`}>{children}</a>
}

export default ActiveLink;