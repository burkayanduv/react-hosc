import ProfilePageCard from '@/components/profile/ProfilePageCard';
import ProfilePageEmail from '@/components/profile/ProfilePageEmail';
import ProfilePageUsername from '@/components/profile/ProfilePageUsername';

export default function ProfilePage() {
  return (
    <ProfilePageCard>
      <ProfilePageUsername />
      <ProfilePageEmail />
    </ProfilePageCard>
  );
}
