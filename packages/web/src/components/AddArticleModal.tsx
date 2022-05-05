import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  VStack,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import eventsApi, { Event } from '../services/events';

interface Props {
  onClose: () => void;
  isOpen: boolean;
  currentEvent?: Event;
}

const initialState = { uri: '', abstract: '' };

const AddArticleModal = ({ onClose, isOpen, currentEvent }: Props) => {
  const [values, setValues] = useState(initialState);
  const [isLoading, setLoading] = useState(false);

  const toast = useToast();

  const onChange = (e: React.SyntheticEvent<HTMLInputElement>) =>
    //@ts-ignore
    setValues({ ...values, [e.target.name]: e.target.value });

  const { mutate } = useMutation(eventsApi.submitArticleToEvent, {
    onSuccess: () => {
      setLoading(false);
      onClose();
      toast({
        title: 'Artigo enviado com sucesso!',
        description: 'Acompanhe sua revisão na página de artigos',
        status: 'success',
      });
      setValues(initialState);
    },
    onError: () => {
      setLoading(false);
      toast({
        title: 'Erro ao enviar artigo',
        description: 'Tente novamente mais tarde',
        status: 'error',
      });
    },
  });

  const onSubmit = () => {
    setLoading(true);
    mutate({
      abstract: values.abstract,
      uri: values.uri,
      eventId: currentEvent!.id,
    });
  };

  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Submissão de artigo: {currentEvent?.name ?? ''}
        </ModalHeader>
        <ModalBody>
          <VStack>
            <FormControl>
              <FormLabel>Link do PDF</FormLabel>
              <Input name="uri" value={values.uri} onChange={onChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Resumo do artigo</FormLabel>
              <Textarea
                name="abstract"
                value={values.abstract}
                //@ts-ignore
                onChange={onChange}
              />
            </FormControl>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button isLoading={isLoading} onClick={onSubmit} color="teal">
            Enviar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default AddArticleModal;
