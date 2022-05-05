import api from './api';

export interface Article {
  id: string;
  uri: string;
  abstract: string;
  Event: {
    name: string;
  };
  submittedAt: string;
}

type ArticleResponse = Array<Article>;

const getMyArticles = async () => {
  const { data } = await api.get<ArticleResponse>('/article');
  return data;
};

const articleApi = {
  getMyArticles,
};

export default articleApi;
