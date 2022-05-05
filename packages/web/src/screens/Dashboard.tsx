import {
  Center,
  CircularProgress,
  Box,
  Text,
  HStack,
  VStack,
  Button,
  Wrap,
  WrapItem,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import AddArticleModal from '../components/AddArticleModal';
import BasePage from '../components/BasePage';
import eventsApi, { Event } from '../services/events';

interface EventCardProps {
  event: Event;
  onClick: () => void;
}

const EventCard = ({ event, onClick }: EventCardProps) => {
  const { name, description } = event;

  return (
    <WrapItem>
      <Box
        width={250}
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
          <Text fontSize={22}>{name}</Text>
          <Text fontSize={14}>
            {description.slice(0, 80)}
            {description.length > 80 && '...'}
          </Text>
        </Box>
        <HStack mt="4">
          <Button onClick={onClick} color="teal" variant="outline">
            Submeter Artigo
          </Button>
        </HStack>
      </Box>
    </WrapItem>
  );
};

const Dashboard = () => {
  const { isLoading, isError, data } = useQuery('events', eventsApi.getEvents);

  const [selectedEvent, setSelectedEvent] = useState<Event>();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
              data.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onClick={() => {
                    setSelectedEvent(event);
                    onOpen();
                  }}
                />
              ))}
          </Wrap>
        )}
      </BasePage>
      <AddArticleModal
        onClose={() => {
          onClose();
          setSelectedEvent(undefined);
        }}
        isOpen={isOpen}
        currentEvent={selectedEvent}
      />
    </>
  );
};

export default Dashboard;
