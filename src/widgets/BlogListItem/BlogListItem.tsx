import { IBlog } from '@/entities/BlogEntitie/types';
import { BlogModal } from '../BlogModal/BlogModal';

interface IBlogListItem {
  blogData: IBlog;
}

export function BlogListItem({ blogData }: IBlogListItem) {
  const {
    id, description, title, createdAt,
  } = blogData;
  return (
    <article className="min-h-15  bg-purple-400 flex items-center p-5 rounded-lg drop-shadow-lg flex-col">
      <h3 className="text-lg">{title}</h3>
      <p className="w-full flex justify-start">
        {createdAt.slice(0, 10)}
        .
        {description}
      </p>
      <div className="flex w-full items-center justify-end">
        <BlogModal id={id} />
      </div>
    </article>
  );
}
