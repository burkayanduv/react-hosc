import ProfilePageCard from '@/components/profile/ProfilePageCard';
import ProfilePageEmail from '@/components/profile/ProfilePageEmail';
import ProfilePageUsername from '@/components/profile/ProfilePageUsername';
import Navbar from '@/components/shared/Navbar';

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <ProfilePageCard>
        <ProfilePageUsername />
        <ProfilePageEmail />
      </ProfilePageCard>
    </>
  );
}
