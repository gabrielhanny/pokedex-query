'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

import { clearKeyword, setKeyword } from '@/lib/features/searchSlice';
import { useAppSelector } from '@/lib/hook';

interface Props {
  size?: 'desktop' | 'mobile' | 'hero';
}

export default function SearchInput({ size = 'desktop' }: Props) {
  const dispatch = useDispatch();
  const keyword = useAppSelector((state) => state.search.keyword);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setKeyword(e.target.value));
  };

  const handleClear = () => {
    dispatch(clearKeyword());
  };

  const handleSearch = () => {
    if (keyword.trim()) {
      window.location.href = `/search?name=${keyword.toLowerCase()}`;
    }
  };

  const iconSize = size === 'mobile' ? 28 : 40;
  const crossSize = size === 'mobile' ? 20 : 24;

  return (
    <div
      className={clsx(
        'flex items-center gap-2 w-full border border-neutral-300 rounded-full bg-white',
        {
          'px-3 py-1.5': size === 'mobile',
          'px-4 py-2': size === 'desktop' || size === 'hero',
          'max-w-[361px]': size === 'mobile',
          'max-w-[518px]': size === 'desktop' || size === 'hero',
        }
      )}
    >
      <input
        type='text'
        value={keyword}
        onChange={handleInput}
        placeholder='Search Pokémon'
        className={clsx(
          'flex-1 bg-transparent text-neutral-900 placeholder:text-neutral-400 focus:outline-none',
          {
            'text-sm': size === 'mobile',
            'text-base': size === 'desktop' || size === 'hero',
          }
        )}
      />

      {/* Clear Icon */}
      {keyword && (
        <button
          type='button'
          onClick={handleClear}
          aria-label='Clear search'
          className={clsx(
            'flex items-center justify-center rounded-full bg-neutral-400 text-white',
            {
              'w-5 h-5 text-[10px]': size === 'mobile',
              'w-6 h-6 text-xs': size === 'desktop' || size === 'hero',
            }
          )}
        >
          ×
        </button>
      )}

      {/* Search Icon */}
      <button type='button' onClick={handleSearch} aria-label='Search'>
        <Image
          src='/images/search.png'
          alt='Search'
          width={iconSize}
          height={iconSize}
        />
      </button>
    </div>
  );
}
