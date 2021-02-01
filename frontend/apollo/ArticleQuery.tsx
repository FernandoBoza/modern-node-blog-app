import gql from 'graphql-tag';

const ARTICLE_QUERY = (category: string) => {
  return gql`
    query ARTICLE_QUERY {
        ${category}Articles {
          title,
          slug,
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