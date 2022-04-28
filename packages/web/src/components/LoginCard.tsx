import { PropsWithChildren } from 'react';
import { BoxProps, Box } from '@chakra-ui/react';

const LoginCard = ({ children, ...rest }: PropsWithChildren<BoxProps>) => (
  <Box
    {...rest}
    d="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    flex="1"
  >
    {children}
  </Box>
);

export default LoginCard;
