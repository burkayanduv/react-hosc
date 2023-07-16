import HomePageCard from '@/components/home/HomePageCard';
import HomePageRedirect from '@/components/home/HomePageRedirect';
import HomePageUsername from '@/components/home/HomePageUsername';
import withSession from '@/lib/hocs/withSession';
const HomePageRedirectWithSession = withSession(HomePageRedirect);

export default function HomePage() {
  return (
    <HomePageCard>
      <HomePageUsername />
      <HomePageRedirectWithSession />
    </HomePageCard>
  );
}
