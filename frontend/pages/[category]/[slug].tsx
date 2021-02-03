import Article from '../../components/Article.component'
import Query from '../../components/Query.component'
import SINGLE_QUERY from '../../apollo/SingleQuery'
import { useRouter } from 'next/router'

const ArticleWrapper = () => {
    const router = useRouter()
    return (
        <Query slug={router.query.slug} query={SINGLE_QUERY(router.query.category)}>
            {({ data }) => {
                data['category'] = router.query.category;
                return <Article article={data} />
            }}
        </Query>
    )
}

export default ArticleWrapper;