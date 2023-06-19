import React from "react";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogCloseButton,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button, ButtonGroup, Flex,
    Heading,
    HeadingProps,
    Modal as ChakraModal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalContentProps,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    ModalProps,
    TextProps,
    useColorModeValue,
    useDisclosure
} from "@chakra-ui/react";
import {UseModalProps} from "@chakra-ui/modal/dist/use-modal";
import {ThemingProps} from "@chakra-ui/system";

export interface IModalProps extends UseModalProps, ThemingProps<"Modal">{
    title: string;
    cancelText?: string;
    onConfirm: () => void;
    children: (onClick: () => void) => React.ReactNode;
    body: (onClose: () => void) => React.ReactNode;
    footer?: (onClose: () => void) => React.ReactNode;
}

const Modal = (props: IModalProps) => {

    const disclosure = useDisclosure();

    const cancelRef = React.useRef(null);

    return (
       <>
           {props.children(() => disclosure.onOpen())}

           <ChakraModal
               {...props}
               motionPreset='slideInBottom'
               onClose={() => disclosure.onClose()}
               isOpen={disclosure.isOpen}
           >
               <ModalOverlay />

               <ModalContent>
                   <ModalHeader>{props.title || "Are you sure ?"}</ModalHeader>
                   <ModalCloseButton />
                   <ModalBody>
                       {props.body && props.body(() => disclosure.onClose())}
                   </ModalBody>
                   <ModalFooter>
                       <Flex align={'flex-end'} justify={'flex-end'}>
                            <ButtonGroup>
                                <Button ref={cancelRef} onClick={() => disclosure.onClose()}>
                                    {props.cancelText || "Cancel"}
                                </Button>
                                {props.footer && props.footer(() => disclosure.onClose())}
                            </ButtonGroup>
                       </Flex>
                   </ModalFooter>
               </ModalContent>
           </ChakraModal>
       </>
    );
}

export default Modal;
