import { useState } from 'react';
import { motion } from 'framer-motion';
import { ClientPortal } from '@/shared/ui/ClientPortal/ClientPortal';
import { AppButton } from '@/shared/ui/AppButton/AppButton';
import { BlogCreate } from '../BlogCreate/BlogCreate';

export function AddItemModal() {
  const [active, setActive] = useState(false);

  const handleOpenModal = () => {
    setActive(true);
  };

  const handleCloseModal = () => {
    setActive(false);
  };

  return (
    <>
      <AppButton onClick={handleOpenModal}>Add Item</AppButton>
      <ClientPortal selector="portal" show={active}>
        <div className="w-full h-full absolute top-0 left-0">
          <div className="w-full h-full relative flex  justify-center">
            <div
              onClick={handleCloseModal}
              className="absolute w-full h-full bg-black z-30 opacity-60"
            />
            <motion.div
              className="w-full  bg-purple-600 z-50 rad rounded-lg md:w-1/2"
              initial={{ scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 25,
              }}
            >
              <div className="p-8">
                <BlogCreate closeModal={handleCloseModal} />
              </div>
            </motion.div>
          </div>
        </div>
      </ClientPortal>
    </>
  );
}
