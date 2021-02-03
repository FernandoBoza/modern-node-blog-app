import gql from 'graphql-tag';

const ARTICLE_QUERY = (category: string | string[]) => {
    return gql`
    query SINGLE_ARTICLE_QUERY($slug: String!) {
        ${category}Articles(where: {slug: $slug}) {
          title,
          slug,
          published_at,
           ArticleBase {
             content,
             link,
             images {
               url
             }
           }
        }
      }
    `
}

export default ARTICLE_QUERY;