'use client';

import { tv } from 'tailwind-variants';

const filterList = tv(
  {
    base: 'mt-2 flex items-start gap-2',
    variants: {
      layout: {
        horizontal:
          'flex-row mb-2 box-[mx*-1] box-px overflow-y-hidden overflow-x-scroll [-ms-overflow-style:none] scrollbar-width-none [&::-webkit-scrollbar]:hidden',
        vertical: 'flex-col'
      }
    }
  },
  { responsiveVariants: true }
);

const RootPage = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-6">
      <div
        className={filterList({
          layout: { initial: 'horizontal', xs: 'vertical' }
        })}
      >
        Hello World
      </div>
    </main>
  );
};

export default RootPage;
