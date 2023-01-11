import React from 'react';

export interface ModalProps {
  show: boolean | undefined;
  toggle: () => void;
  close: () => void;
}

export interface Props {
  children: React.ReactNode;
}
