import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { AppButton } from '@/shared/ui/AppButton/AppButton';
import { AppInputCreate } from '@/shared/ui/AppInputCreate/AppInputCreate';
import { AppTextArea } from '@/shared/ui/AppTextArea/AppTextArea';
import { BlogAboutItem } from '@/shared/ui/BlogAboutItem/BlogAboutItem';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooksRedux';
import { changeBlogItem, getOneBlog } from '@/entities/BlogEntitie/actions';
import { BlogComment } from '../BlogComment/BlogComment';

export function BlogAbout({ closeModal }: { closeModal: () => void }) {
  const dispatch = useAppDispatch();
  const dataBlog = useAppSelector((blog) => blog.blog.blog);
  const searchParams = useSearchParams();
  const id = searchParams.get('fullBlog');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [fullText, setFullText] = useState<string>('');

  const handleSaveNewItem = () => {
    if (!id) return;
    dispatch(
      changeBlogItem({
        id,
        title: title || dataBlog.title,
        fullText: fullText || dataBlog.fullText,
        description: description || dataBlog.description,
      }),
    );
    closeModal();
  };

  useEffect(() => {
    if (!id) return;
    dispatch(getOneBlog({ id }));
  }, [id, dispatch]);

  return (
    <section className="flex flex-col w-full">
      <BlogAboutItem
        redactorArea={<AppInputCreate setState={setTitle} state={title} />}
        title={dataBlog.title}
      />
      <BlogAboutItem
        redactorArea={
          <AppInputCreate setState={setDescription} state={description} />
        }
        title={dataBlog.description}
      />
      <BlogAboutItem
        redactorArea={<AppTextArea setState={setFullText} state={fullText} />}
        title={dataBlog.fullText}
      />
      <BlogComment />
      <AppButton onClick={handleSaveNewItem}>Save</AppButton>
    </section>
  );
}
