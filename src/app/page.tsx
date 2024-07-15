'use client';

import { tv } from 'tailwind-variants';

const responsiveTV = tv(
  {
    base: 'flex gap-4',
    variants: {
      layout: {
        horizontal: 'flex-row',
        vertical: 'flex-col'
      }
    }
  },
  { responsiveVariants: true }
);

const item = tv({
  base: 'flex aspect-square w-16 items-center justify-center rounded font-semibold',
  variants: {
    color: {
      amber: 'bg-amber-500 text-amber-50',
      cyan: 'bg-cyan-500 text-cyan-50',
      emerald: 'bg-emerald-500 text-emerald-50',
      lime: 'bg-lime-500 text-lime-50',
      violet: 'bg-violet-500 text-violet-50'
    }
  }
});

const RootPage = () => {
  return (
    <main className="relative min-h-dvh w-full">
      <div
        className={responsiveTV({
          layout: { 'custom-sm': 'horizontal', initial: 'vertical' }
        })}
      >
        <div className={item({ color: 'amber' })}>1</div>
        <div className={item({ color: 'cyan' })}>2</div>
        <div className={item({ color: 'emerald' })}>3</div>
        <div className={item({ color: 'lime' })}>4</div>
        <div className={item({ color: 'violet' })}>5</div>
      </div>
    </main>
  );
};

export default RootPage;
