import Shell from '@/components/Shell';
import WorkIndex from '@/components/WorkIndex';

export const metadata = {
  title: 'All Work — Aryan Singh',
  description: 'Every project by Aryan Singh — AI/ML systems, full-stack platforms, and hackathon builds.',
};

export default function WorkPage() {
  return (
    <Shell>
      <WorkIndex />
    </Shell>
  );
}
