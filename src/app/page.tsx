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
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </main>
  );
};

export default RootPage;
