import { useState } from 'react';

export function BlogCommentItem({ text }: { text: string }) {
  const [active, setActive] = useState(false);

  return (
    <div onClick={() => setActive(!active)}>
      <div>{text}</div>
      {active && (
        <>
          <input type="text" />
          <button type="button">save</button>
        </>
      )}
    </div>
  );
}
