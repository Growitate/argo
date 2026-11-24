import { useSearchParams } from 'react-router-dom';
import { Contact } from '../components/Contact';
import { PageHero } from '../components/PageHero';

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') ?? '';

  return (
    <>
      <PageHero
        pill="CONTACT US"
        line1="Let's Strengthen"
        line2="Your Finance Function"
        description="Connect directly with our partners"
      />

      <main id="main-content">
        <Contact preselectedService={preselectedService} />
      </main>
    </>
  );
}
