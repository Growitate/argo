import { MISSION_VISION } from '../data/siteData';
import { Reveal } from './Reveal';

export function MissionVision() {
  return (
    <section
      id="mission-vision"
      aria-label="Vision and Mission"
      className="mx-auto max-w-[1280px] pt-8 sm:pt-12 md:pt-16 lg:pt-20"
    >
      <Reveal>
        <div className="grid grid-cols-1 overflow-hidden rounded-card md:rounded-[28px] lg:grid-cols-2">
          {/* Vision (left — lime accent) */}
          <div className="flex flex-col justify-between bg-accent p-6 text-on-accent sm:p-10 md:p-12 lg:p-14">
            <span className="inline-flex w-fit items-center rounded-full border border-ink/15 bg-white/85 px-[14px] py-[6px] text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-ink">
              {MISSION_VISION.vision.label}
            </span>
            <blockquote className="mt-5 text-left text-[1.0625rem] font-light leading-[1.52] tracking-[-0.01em] text-on-accent sm:mt-6 sm:text-justify sm:text-[1.375rem] sm:leading-[1.48] lg:mt-10 lg:text-[1.5rem]">
              “{MISSION_VISION.vision.quote}”
            </blockquote>
          </div>

          {/* Mission (right — deep forest green) */}
          <div className="flex flex-col justify-between bg-ink p-6 text-white sm:p-10 md:p-12 lg:p-14">
            <span className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-[14px] py-[6px] text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-accent">
              {MISSION_VISION.mission.label}
            </span>
            <blockquote className="mt-5 text-left text-[1.0625rem] font-light leading-[1.52] tracking-[-0.01em] text-[#F7F5F0] sm:mt-6 sm:text-justify sm:text-[1.375rem] sm:leading-[1.48] lg:mt-10 lg:text-[1.5rem]">
              “{MISSION_VISION.mission.quote}”
            </blockquote>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
