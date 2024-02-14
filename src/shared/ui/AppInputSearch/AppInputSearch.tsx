'use client';

import { useEffect, useState } from 'react';
import { filterSearch } from '@/entities/BlogEntitie/BlogEntitie';
import { Loupe } from '@/shared/icons/Loupe';
import { useAppDispatch } from '@/shared/lib/hooksRedux';

export function AppInputSearch() {
  const [input, setInput] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(filterSearch({ text: input }));
  }, [input, dispatch]);

  return (
    <div className="relative z-20">
      <div className="absolute right-2 top-2">
        <Loupe />
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="py-3 pr-8 px-6 blockborder-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-purple-400 dark:border-gray-700 dark:text-black pu focus:outline-none"
        type="text"
      />
    </div>
  );
}
