// @/app/page.tsx

import HomePageCard from '@/components/home/HomePageCard';
import HomePageRedirectDefault from '@/components/home/HomePageRedirect';
import HomePageUsername from '@/components/home/HomePageUsername';
import Navbar from '@/components/shared/Navbar';
import withSession from '@/lib/hocs/withSession';
const HomePageRedirect = withSession(HomePageRedirectDefault);

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HomePageCard>
        <HomePageUsername />
        <HomePageRedirect />
      </HomePageCard>
    </>
  );
}
