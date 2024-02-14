import { ReactNode, useState } from 'react';
import { Pen } from '@/shared/icons/Pen';

interface IBlogAboutItem {
  title?: string;
  redactorArea?: ReactNode;
}
export function BlogAboutItem({ title, redactorArea }: IBlogAboutItem) {
  const [redactorActive, setRedactorActive] = useState(false);
  const handleToggleRedactor = () => {
    setRedactorActive(!redactorActive);
  };

  return (
    <article className="flex flex-col w-full">
      <div className="flex items-center gap-5">
        <h3>{title}</h3>
        <button type="button" onClick={handleToggleRedactor}>
          <Pen />
        </button>
      </div>
      {redactorActive && redactorArea}
    </article>
  );
}
