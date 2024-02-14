import { useState } from 'react';
import { AppInputCreate } from '@/shared/ui/AppInputCreate/AppInputCreate';
import { AppTextArea } from '@/shared/ui/AppTextArea/AppTextArea';
import { AppButton } from '@/shared/ui/AppButton/AppButton';
import { useAppDispatch } from '@/shared/lib/hooksRedux';
import { createBlogItem } from '@/entities/BlogEntitie/actions';

export function BlogCreate({ closeModal }: { closeModal: () => void }) {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fullText, setFullText] = useState('');

  const createNewBlog = () => {
    if (!(title && description && fullText)) return;
    try {
      dispatch(createBlogItem({ title, description, fullText }));
      closeModal();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <section className="flex flex-col gap-5 justify-between h-full">
      <div>
        <h4>title</h4>
        <AppInputCreate setState={setTitle} state={title} />
      </div>
      <div>
        <h4>subject</h4>
        <AppInputCreate setState={setDescription} state={description} />
      </div>
      <div>
        <h4>description</h4>
        <AppTextArea setState={setFullText} state={fullText} />
      </div>
      <AppButton onClick={createNewBlog}>Create</AppButton>
    </section>
  );
}
