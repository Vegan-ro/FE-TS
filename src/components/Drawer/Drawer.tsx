import React from 'react';
import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react';
import { CustomDrawerProps } from './Drawer.types';

function CustomDrawer({ content, size = 'xl', trigger }: CustomDrawerProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const triggerWithOnClick = React.cloneElement(trigger, { onClick: onOpen });

  return (
    <>
      {triggerWithOnClick}
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Drawer</DrawerHeader>
          <DrawerBody>{content}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default CustomDrawer;
