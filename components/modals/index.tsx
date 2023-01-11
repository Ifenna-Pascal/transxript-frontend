/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { useModalContext } from '../context/ModalContext';

type Props = {
    children?: React.ReactNode
}



function ModalWraper({children}: Props) {
    const modalHook = useModalContext();

      // close the modal when clicking outside the modal.
  const modalRef = useRef<HTMLElement>();
  const closeModal = (e:any) => {
    if (e.target === modalRef.current) {
        modalHook?.close()
    }
  };
    useEffect(() => {
        if ( modalHook?.show)  {
            document.body.style.overflow = 'hidden'}
            else {
                document.body.style.overflow = 'unset';
            }
            return () => {
                document.body.style.overflow = 'unset';
            }

    }, [ modalHook?.show])
  return (
    <div className={`container w-full`}  ref={modalRef as React.RefObject<HTMLDivElement> } onClick={closeModal}>
        <main className='modal'>{children}</main>
    </div>
  )
}

export default ModalWraper