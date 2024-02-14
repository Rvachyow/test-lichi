'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooksRedux';
import { BlogListItem } from '@/widgets/BlogListItem/BlogListItem';
import { getBlogsItem } from '@/entities/BlogEntitie/actions';
import { Apploader } from '@/shared/ui/Apploader/Apploader';
import { AddItemModal } from '../AddItemModal/AddItemModal';
import { container, item } from './constant';

export function BlogList() {
  const dataListBlog = useAppSelector((blog) => blog.blog.filtred);
  const dataStatus = useAppSelector((blog) => blog.blog.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBlogsItem());
  }, [dispatch]);

  if (dataStatus === 'loading') return <Apploader />;

  return (
    <div className="mt-20">
      <AddItemModal />
      <motion.div
        variants={container}
        initial="hidden"
        className="flex flex-col gap-5 overflow-y-auto max-h-full pb-10"
        animate="visible"
      >
        {dataListBlog?.map((blog) => (
          <motion.div key={blog.id} className="item" variants={item}>
            <BlogListItem blogData={blog} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
