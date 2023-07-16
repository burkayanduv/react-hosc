import withSession, { SessionProps } from '@/lib/hocs/withSession';
import React from 'react';

const ProfilePageUsername = ({ session }: SessionProps) => {
  return (
    <div className="flex flex-col items-center gap-2 border border-green-400 p-1">
      <span className="p-1">ProfilePageUsername (server)</span>
      {session?.username}
    </div>
  );
};

export default withSession(ProfilePageUsername);
