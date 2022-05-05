import {
  Center,
  CircularProgress,
  Box,
  Text,
  Wrap,
  WrapItem,
  Divider,
} from '@chakra-ui/react';

import { useQuery } from 'react-query';

import BasePage from '../components/BasePage';
import articleApi, { Article } from '../services/article';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <WrapItem>
      <Box
        width={300}
        height={200}
        p={4}
        borderColor="gray.200"
        borderWidth={1}
        borderRadius={8}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Text fontSize={22}>Artigo: {article.Event.name}</Text>
          <Text fontSize={16}>0 de 5 revisões concluídas</Text>
          <Divider />
          <Text mt={4} fontSize={14}>
            {article.abstract.slice(0, 80)}
            {article.abstract.length > 80 && '...'}
          </Text>
        </Box>
        <Text fontSize={14}>
          Submetido em {new Date(article.submittedAt).toLocaleDateString()}
        </Text>
      </Box>
    </WrapItem>
  );
};

const Articles = () => {
  const { isLoading, isError, data } = useQuery(
    'articles',
    articleApi.getMyArticles
  );

  return (
    <>
      <BasePage>
        {isLoading ? (
          <Center>
            <CircularProgress isIndeterminate />
          </Center>
        ) : isError ? (
          'Error'
        ) : (
          <Wrap>
            {data &&
              data.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
          </Wrap>
        )}
      </BasePage>
    </>
  );
};

export default Articles;
