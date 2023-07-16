// @/components/home/HomePageRedirect.tsx

'use client';

import { SessionProps } from '@/lib/hocs/withSession';
import Link from 'next/link';
import React from 'react';

const HomePageRedirect = ({ session }: SessionProps) => {
  return (
    <div className="flex flex-col items-center gap-2 border border-green-400 p-1">
      <span className="p-1">HomePageRedirect (client)</span>
      {session && (
        <Link href="/profile">
          <button className="p-1">Go to Profile</button>
        </Link>
      )}
    </div>
  );
};

export default HomePageRedirect;
