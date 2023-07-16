import withSession, { SessionProps } from '@/lib/hocs/withSession';
import React from 'react';

const ProfilePageEmail = ({ session }: SessionProps) => {
  return (
    <div className="flex flex-col items-center gap-2 border border-green-400 p-1">
      <span className="p-1">ProfilePageEmail (server)</span>
      {session?.email}
    </div>
  );
};

export default withSession(ProfilePageEmail);
