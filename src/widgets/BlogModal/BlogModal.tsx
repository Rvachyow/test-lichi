'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ClientPortal } from '@/shared/ui/ClientPortal/ClientPortal';
import { useAppDispatch } from '@/shared/lib/hooksRedux';
import { deleteBlogItem } from '@/entities/BlogEntitie/actions';
import { BlogAbout } from '../BlogAbout/BlogAbout';

interface IBlogModal {
  id: string;
}
export function BlogModal({ id }: IBlogModal) {
  const [active, setActive] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleDeleteBlogItem = () => {
    if (!id) return;

    dispatch(deleteBlogItem({ id }));
  };

  const handleOpenModal = () => {
    setActive(true);
    router.push(`?fullBlog=${id}`);
  };

  const handleCloseModal = () => {
    router.push('/');
    setActive(false);
  };

  return (
    <>
      <button
        type="button"
        className="text-white bg-red-700 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-red-700 dark:hover:bg-red-700 dark:focus:ring-purple-900"
        onClick={handleDeleteBlogItem}
      >
        del
      </button>
      <button
        type="button"
        className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        onClick={handleOpenModal}
      >
        full
      </button>
      <ClientPortal selector="portal" show={active}>
        <div className="w-full h-full absolute top-0 left-0">
          <div className="w-full h-full relative flex justify-center">
            <div
              onClick={handleCloseModal}
              className="absolute w-full h-full bg-black z-30 opacity-60"
            />
            <motion.div
              className="w-full  bg-purple-600 z-50 rad rounded-lg md:w-1/2"
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 25,
              }}
            >
              <div className="p-8">
                <BlogAbout closeModal={handleCloseModal} />
              </div>
            </motion.div>
          </div>
        </div>
      </ClientPortal>
    </>
  );
}
