import { DrawerProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

export type CustomDrawerProps = {
  width?: string;
  header?: ReactNode;
  content: ReactNode;
  size?: DrawerProps['size'];
  isOpen: boolean;
  onClose: () => void;
};
