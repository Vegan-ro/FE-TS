import { DrawerProps } from '@chakra-ui/react';
import { ReactElement, ReactNode } from 'react';

export type CustomDrawerProps = {
  content: ReactNode;
  size?: DrawerProps['size'];
  trigger: ReactElement;
};
