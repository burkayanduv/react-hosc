import withSession, { SessionProps } from '@/lib/hocs/withSession';
import React from 'react';

const NavbarUsername = ({
  session,
  showUserName,
}: NavbarUsernameProps & SessionProps) => {
  return (
    <div className="flex flex-col items-center gap-2 border border-green-400 p-1">
      <span className="p-1">NavbarUsername (server)</span>
      {showUserName && session?.username}
    </div>
  );
};

export default withSession(NavbarUsername);

export interface NavbarUsernameProps {
  showUserName: boolean;
}
