import Link from 'next/link';
import type {Item} from '../data';
import {ArrowRight, Sparkles} from '../icons';

type Mockup={
  category:string; headline:string; subhead:string; primary:string; secondary:string;
  stats:[string,string][]; features:[string,string][]; steps:string[];
  service:[string,string]; course:[string,string]; accent:string; soft:string;
};

const mockups:Record<string,Mockup>={
  'lumera-skin':{
    category:'Ritual-led skincare',headline:'Radiance, thoughtfully refined.',
    subhead:'High-performance essentials designed to make your daily ritual beautifully simple.',primary:'Shop the ritual',secondary:'Find your formula',
    stats:[['4.9 / 5','Illustrative rating'],['98%','Illustrative satisfaction'],['24 hr','Dispatch concept']],
    features:[['01','Barrier-first formulas'],['02','Ingredient transparency'],['03','A ritual for every rhythm']],steps:['Discover','Personalize','Nourish'],
    service:['E-Commerce Services','/solutions/e-commerce-solutions'],course:['E-Commerce Specialist','/academy/e-commerce'],accent:'#b96d58',soft:'#f4e7df'
  },
  'northline-home-services':{
    category:'Home care, made dependable',headline:'The right help. Right when home needs it.',
    subhead:'Book trusted home specialists through one simple, transparent experience.',primary:'Book a service',secondary:'Get an estimate',
    stats:[['60 sec','Booking concept'],['24 / 7','Request access'],['4 steps','From request to visit']],
    features:[['01','Upfront service options'],['02','Smart appointment matching'],['03','Clear visit updates']],steps:['Choose','Schedule','Relax'],
    service:['Lead Generation Services','/solutions/lead-generation'],course:['Lead Generation Specialist','/academy/lead-generation'],accent:'#167d73',soft:'#dff1ec'
  },
  'verdant-cafe':{
    category:'Coffee · Kitchen · Community',headline:'A slower morning starts here.',
    subhead:'Seasonal plates, carefully sourced coffee, and a corner that remembers your name.',primary:'Explore the menu',secondary:'Join Verdant Circle',
    stats:[['7–3','Daily hours'],['12','Seasonal plates'],['1 cup','A better morning']],
    features:[['01','Roasted with intention'],['02','Season-led kitchen'],['03','Rewards that feel human']],steps:['Visit','Belong','Return'],
    service:['Email Automation Services','/solutions/email-marketing-automation'],course:['Email Marketing Specialist','/academy/email-marketing-automation'],accent:'#547359',soft:'#e4ecdf'
  },
  'vantage-property-group':{
    category:'Property intelligence',headline:'See the opportunity before everyone else.',
    subhead:'A smarter property search shaped around your goals, timing, and investment profile.',primary:'Explore properties',secondary:'Speak with an advisor',
    stats:[['128','Illustrative listings'],['6 min','Response concept'],['1 view','Unified portfolio']],
    features:[['01','Intent-led discovery'],['02','AI-assisted matching'],['03','Advisor-ready insights']],steps:['Define','Match','Decide'],
    service:['AI Business Systems','/solutions/ai-business-systems'],course:['AI for Business Specialist','/academy/ai-for-business'],accent:'#b68a3f',soft:'#f0e8d6'
  },
  'forma-studio':{
    category:'Brand and content studio',headline:'Ideas people notice. Systems that convert.',
    subhead:'We shape distinct brands and turn everyday publishing into measurable momentum.',primary:'View selected work',secondary:'Start a project',
    stats:[['3×','Content system concept'],['6 wk','Sample sprint'],['1 voice','Across every channel']],
    features:[['01','A clear creative position'],['02','Repeatable content pillars'],['03','A path from post to inquiry']],steps:['Position','Create','Convert'],
    service:['Social Media Services','/solutions/social-media-systems'],course:['Social Media Specialist','/academy/social-media-systems'],accent:'#6754d9',soft:'#e9e5ff'
  },
  'arden-and-co':{
    category:'Modern business advisory',headline:'Make complexity feel clear.',
    subhead:'Connected strategy, operations, and digital experiences for ambitious organizations.',primary:'Explore capabilities',secondary:'Discuss your priorities',
    stats:[['360°','Operating view'],['4','Connected systems'],['1 plan','Shared direction']],
    features:[['01','Strategy people can use'],['02','Operations that connect'],['03','Digital experiences that scale']],steps:['Align','Transform','Advance'],
    service:['Digital Transformation','/solutions/digital-transformation'],course:['Digital Solutions Specialist','/academy/digital-solutions'],accent:'#c07a38',soft:'#f4e5d6'
  }
};

export default function WorkShowcase({item}:{item:Item}){
  const site=mockups[item.slug]||mockups['lumera-skin'];
  const style={'--mock-accent':site.accent,'--mock-soft':site.soft} as React.CSSProperties;
  return <main className="concept-experience" style={style}>
    <aside className="concept-notice"><Sparkles size={15}/><b>UPSTRIDE CONCEPT PROJECT</b><span>Public interactive mockup · Not commissioned client work · Any metrics are illustrative</span></aside>
    <div className="mock-browser">
      <div className="mock-browserbar"><i/><i/><i/><span>{item.slug.replaceAll('-','')}.concept</span><Link href="/work">View all concept projects</Link></div>
      <section className="mock-site">
        <nav className="mock-nav"><b>{item.title.toUpperCase()}</b><div><a href="#story">Story</a><a href="#experience">Experience</a><a href="#journey">Journey</a></div><a className="mock-nav-action" href="#experience">Explore</a></nav>
        <header className="mock-hero">
          <div className="mock-hero-copy"><small>{site.category}</small><h1>{site.headline}</h1><p>{site.subhead}</p><div><a className="mock-primary" href="#experience">{site.primary}</a><a className="mock-secondary" href="#story">{site.secondary} <ArrowRight/></a></div></div>
          <div className="mock-visual" style={{backgroundImage:`url(${item.image})`}}><span>CONCEPT<br/>EXPERIENCE</span><i/></div>
        </header>
        <section className="mock-stats" aria-label="Illustrative concept metrics">{site.stats.map(([value,label])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>
        <section className="mock-story" id="story"><small>OUR APPROACH</small><h2>Designed around the moment that matters.</h2><p>{item.description} This concept shows how a focused digital experience can make the next step feel natural, useful, and clear.</p></section>
        <section className="mock-features" id="experience">{site.features.map(([n,title],i)=><article key={title}><span>{n}</span><div className={`mock-feature-art art-${i+1}`}><i/><b>{title}</b></div><h3>{title}</h3><p>{['Clear choices remove friction and help visitors act with confidence.','Connected information creates a more personal and relevant experience.','Thoughtful follow-through turns a single interaction into lasting value.'][i]}</p></article>)}</section>
        <section className="mock-journey" id="journey"><div><small>CONNECTED JOURNEY</small><h2>Simple on the surface.<br/>Powerful underneath.</h2></div><ol>{site.steps.map((step,i)=><li key={step}><span>0{i+1}</span><b>{step}</b><p>{['Understand the visitor’s intent and offer a clear first step.','Use relevant information to shape a useful experience.','Continue the relationship through timely, connected follow-up.'][i]}</p></li>)}</ol></section>
        <section className="mock-closing"><small>{site.category}</small><h2>Ready for your next step?</h2><a href="#story">Start the experience <ArrowRight/></a></section>
      </section>
    </div>
    <section className="concept-next"><div><small>YOU’VE REACHED THE END OF THE MOCKUP</small><h2>Want a system like this—or the skills to build one?</h2><p>Choose done-for-you delivery from UPSTRIDE Services, or develop the practical capability through an UPSTRIDE course.</p></div><div className="concept-next-options"><Link href={site.service[1]}><span>BUILD IT FOR ME</span><b>{site.service[0]}</b><ArrowRight/></Link><Link href={site.course[1]}><span>TEACH ME HOW</span><b>{site.course[0]}</b><ArrowRight/></Link></div></section>
  </main>
}
