'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

type ClientPortalInterface = {
  children: ReactNode;
  show?: boolean;
  selector: string;
};
export function ClientPortal({
  children,
  selector,
  show,
}: ClientPortalInterface) {
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    ref.current = document.getElementById(selector);
  }, [selector]);

  return show && ref.current ? createPortal(children, ref.current) : null;
}
