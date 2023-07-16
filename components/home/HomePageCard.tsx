'use client';

import { ReactNode } from 'react';

const HomePageCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-1 flex flex-col items-center gap-1 border border-red-400 p-1">
      <span className="p-1">HomePageCard (client)</span>
      {children}
    </div>
  );
};

export default HomePageCard;
