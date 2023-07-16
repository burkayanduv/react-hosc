'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

const ProfilePageCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-1 flex flex-col items-center gap-1 border border-red-400 p-1">
      <span className="p-1">ProfilePageCard (client)</span>
      {children}
      <Link href="/">
        <button className="p-1">Go Back</button>
      </Link>
    </div>
  );
};

export default ProfilePageCard;
