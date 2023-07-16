// @/lib/hocs/withSession.tsx

import { Session } from '../types';
import 'server-only';

const withSession = <T,>(Component: React.ComponentType<T & SessionProps>) => {
  const WrappedComponent = async (props: T) => {
    // Your server-side logic here
    const session = await new Promise<Session>((resolve) => {
      setTimeout(() => {
        resolve({
          username: 'john',
          email: 'johndoe@mail.com',
        });
      }, 1000);
    });

    return <Component {...props} session={session} />;
  };
  WrappedComponent.displayName = `withSession(${Component.displayName})`;
  return WrappedComponent;
};

export default withSession;

export interface SessionProps {
  session: Session | null;
}
