import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { BlogCommentItem } from '@/shared/ui/BlogCommentItem/BlogCommentItem';
import { AppTextArea } from '@/shared/ui/AppTextArea/AppTextArea';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooksRedux';
import {
  addCommentItem,
  getAllComment,
} from '@/entities/CommentEntitie/actions';

export function BlogComment() {
  const [comment, setComment] = useState('');
  const searchParams = useSearchParams();
  const id = searchParams.get('fullBlog');
  const dispatch = useAppDispatch();
  const allComment = useAppSelector((allComments) => allComments.comment.data);

  const handleCreateComment = useCallback(() => {
    if (!comment) return;
    if (!id) return;

    dispatch(addCommentItem({ fullText: comment, id }));
    setComment('');
  }, [comment, dispatch, id]);

  useEffect(() => {
    if (!id) return;
    dispatch(getAllComment({ id }));
  }, [dispatch, id]);

  return (
    <section>
      <div className="w-full bg-purple-400 rounded-t-lg p-5 flex flex-col h-24 overflow-y-scroll">
        {allComment.map((item) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <BlogCommentItem key={item.id} {...item} />
        ))}
      </div>
      <div>
        <AppTextArea setState={setComment} state={comment} hideHeader />
      </div>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={handleCreateComment}
      >
        send comment
      </button>
    </section>
  );
}
