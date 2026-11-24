import { About } from '../components/About';
import { BusinessOverview } from '../components/BusinessOverview';
import { MissionVision } from '../components/MissionVision';
import { Partners } from '../components/Partners';
import { WhyArgo } from '../components/WhyArgo';

export function AboutPage() {
  return (
    <>
      <About />

      <main id="main-content">
        <MissionVision />
        <BusinessOverview />
        <WhyArgo />
        <Partners />
      </main>
    </>
  );
}
