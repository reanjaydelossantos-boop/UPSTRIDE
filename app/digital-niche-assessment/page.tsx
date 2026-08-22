import type {Metadata} from 'next';
import {NicheAssessment} from './assessment';
export const metadata:Metadata={title:'Digital Niche Assessment',description:'Discover your top three digital career pathways and the Upstride Academy courses that fit you.'};
export default function Page(){return <NicheAssessment/>}
