import type { Metadata } from 'next';
import { heroFrame } from '@/content/home';
import { deckAlumni, deckHero } from '@/content/deck';
import { AdmissionsV4 } from '@/sections/admissions/AdmissionsV4';
import { AlumniSection } from '@/sections/alumni/AlumniSection';
import { PeersTicker } from '@/sections/alumni/PeersTicker';
import { CampusLifeSection } from '@/sections/community/CommunitySections';
import { DeckOutcomes } from '@/sections/deck/DeckOutcomes';
import { DeckFooter } from '@/sections/deck/DeckFooter';
import { DeckFounders } from '@/sections/deck/DeckFounders';
import { HeroFrame, HeroFrameDeadline } from '@/sections/hero/frame/HeroFrame';
import { ScrollRefresh } from '@/sections/home/client';
import { HeroCardAlign, MinimalForm, MinimalNav, StickyApply } from '@/sections/minimal/MinimalChrome';
import { PeopleTabsSection } from '@/sections/people-tabs/PeopleTabsSection';
import { ApplyModal } from '@/sections/site/ApplyModal';
import { CalmEntrance } from '@/sections/shared/CalmEntrance';
import { Tone } from '@/sections/tone/Tone';
import './v6.css';
import '@/sections/deck/tokens.css';
import './v9.css';

export const metadata: Metadata = { title: 'Scaler School of Business' };

/**
 * /v9, the minimal page with the final page's sections (2026-11-03, the user's ask): the layout of
 * ssb-minimal.vercel.app/minimal-sudh (its top bar, its sign-up card sticky at the right of one column,
 * its floating pill at the foot, its sections in its order: the hero, placements, alumni, faculty,
 * mentors, how you learn, admissions, campus life, the footer), each section the final page's (/v8)
 * as it is there, in its tone. Sections the minimal page doesn't have are left out; the four pillars
 * are the final page's. The card stays white over every tone.
 */
export default function V9Page() {
  return (
    <>
      <main data-page="v7" data-layout="minimal" data-entrance="calm" data-brand="ssb" data-theme="light" className="bg-page text-content">
        <ScrollRefresh />
        <ApplyModal />
        <CalmEntrance />
        <HeroFrameDeadline deadline={heroFrame.deadline} />
        <MinimalNav />
        <div className="m9">
          <HeroCardAlign />
          {/* desktop: the sign-up card in a rail at the right, sticky under the top bar */}
          <aside className="m9-rail" aria-label="Apply">
            <div className="m9-sticky">
              <MinimalForm id="mf-rail" />
            </div>
          </aside>

          <Tone>
            <div className="m9-hero">
              <HeroFrame content={deckHero} variant="deck" />
            </div>
          </Tone>
          {/* phones: the card after the first fold */}
          <div className="m9-inline">
            <MinimalForm id="mf-inline" />
          </div>

          <Tone>
            <DeckOutcomes ticker />
          </Tone>
          <Tone>
            <AlumniSection
              eyebrow={deckAlumni.eyebrow}
              title={deckAlumni.title}
              sub={deckAlumni.sub}
              people={deckAlumni.people}
              peers={<PeersTicker title={deckAlumni.peersTitle} />}
            />
          </Tone>
          <Tone>
            <PeopleTabsSection groups={['faculty']} drift />
          </Tone>
          <Tone>
            <PeopleTabsSection groups={['mentors']} id="mentors" label="Mentors" stack borrow={{ from: 'investors', count: 5 }} />
          </Tone>
          {/* "How you learn" (the four USPs) came off, and the founders came on, Nikhil Kamath's card first
              (2026-11-11, the user's ask) */}
          <Tone>
            <DeckFounders kamath />
          </Tone>
          <Tone dark>
            <AdmissionsV4 backers={false} />
          </Tone>
          <Tone>
            <CampusLifeSection clubs={false} still />
          </Tone>
        </div>
        <StickyApply deadline={heroFrame.deadline} />
      </main>
      <Tone>
        <DeckFooter />
      </Tone>
    </>
  );
}
