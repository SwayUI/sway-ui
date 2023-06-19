import React from "react";
import {
    AlertDialog, AlertDialogBody, AlertDialogCloseButton,
    AlertDialogContent, AlertDialogFooter, AlertDialogHeader,
    AlertDialogOverlay, Button,
    Heading,
    HeadingProps,
    TextProps,
    useColorModeValue, useDisclosure
} from "@chakra-ui/react";

export interface ConfirmModalButtonProps {
    title?: string;
    description?: string;
    children: (onClick: () => void) => React.ReactNode;
    cancelText?: string;
    confirmText?: string;
    onConfirm: () => void;
}

const ConfirmModalButton = (props: ConfirmModalButtonProps) => {

    const disclosure = useDisclosure();

    const cancelRef = React.useRef(null);

    return (
       <>
           {props.children(() => disclosure.onOpen())}

           <AlertDialog
               motionPreset='slideInBottom'
               leastDestructiveRef={cancelRef}
               onClose={() => disclosure.onClose()}
               isOpen={disclosure.isOpen}
               isCentered
           >
               <AlertDialogOverlay />

               <AlertDialogContent>
                   <AlertDialogHeader>{props.title || "Are you sure ?"}</AlertDialogHeader>
                   <AlertDialogCloseButton />
                   <AlertDialogBody>
                       {props.description || "Are you sure? You can't undo this action afterwards."}
                   </AlertDialogBody>
                   <AlertDialogFooter>
                       <Button ref={cancelRef} onClick={() => disclosure.onClose()}>
                           {props.cancelText || "Cancel"}
                       </Button>
                       <Button variant={'primary'} ml={3} onClick={() => {
                            props.onConfirm();
                            disclosure.onClose();
                       }}>
                           {props.confirmText || "Confirm"}
                       </Button>
                   </AlertDialogFooter>
               </AlertDialogContent>
           </AlertDialog>
       </>
    );
}

export default ConfirmModalButton;
