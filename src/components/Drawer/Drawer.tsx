import React from 'react';
import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/react';
import { CustomDrawerProps } from './Drawer.types';

function CustomDrawer({ header, content, size = 'xl', isOpen, onClose }: CustomDrawerProps) {
  return (
    <>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">{header}</DrawerHeader>
          <DrawerBody>{content}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default CustomDrawer;
