import api from './api';

export type Event = {
  id: string;
  name: string;
  description: string;
  startAt: string;
  endAt: string;
  submissionLimitDate: string;
  reviewLimitDate: string;
};

type EventsResponse = Array<Event>;

const getEvents = async () => {
  const { data } = await api.get<EventsResponse>('/events');
  return data;
};

type SubmitArticleToEventArgs = {
  eventId: string;
  uri: string;
  abstract: string;
};

const submitArticleToEvent = ({
  eventId,
  uri,
  abstract,
}: SubmitArticleToEventArgs) =>
  api.post('/article', { eventId, uri, abstract });

const eventsApi = {
  getEvents,
  submitArticleToEvent,
};

export default eventsApi;
