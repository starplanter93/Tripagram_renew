import React from 'react';
import reactDom from 'react-dom';

interface Ownprops {
  children: React.ReactNode;
}

export default function ModalPortal({ children }: Ownprops) {
  if (typeof window === 'undefined') {
    return null;
  }

  const node = document.getElementById('portal') as Element;

  return reactDom.createPortal(children, node);
}
