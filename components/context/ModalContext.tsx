/* eslint-disable no-unused-vars */
import { useContext, createContext, useState } from "react";
import { ModalProps, Props } from "./interface";

export const ModalContext = createContext<ModalProps | null>(null);

const ModalContextProvider = ({children}: Props) => {
    const [show, setShow] = useState<boolean>();

    const toggle = (): void => {
        setShow(!show);    
    }

    const close = (): void => {
        setShow(false);   
    }

    return (
        <ModalContext.Provider value={{show, toggle, close}}>
                {children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider;

export const useModalContext = () => {
    return useContext(ModalContext);
}
