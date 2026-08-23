export type Item={slug:string;title:string;kicker:string;description:string;image:string;tags:string[]};
const img=(id:string)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=82`;
const solutionRows:[string,string,string,string,string,string[]][]=[
 ['website-development','Website Development','Digital foundations','High-converting, accessible websites engineered to make your brand credible and easy to choose.','photo-1460925895917-afdab827c52f',['UX strategy','Next.js','Conversion design']],
 ['e-commerce-solutions','E-Commerce Solutions','Connected commerce','Unified storefronts and operating systems across Shopify, WooCommerce, Shopee, Lazada and TikTok Shop.','photo-1556742049-0cfed4f6a45d',['Shopify','Marketplaces','Operations']],
 ['business-automation','Business Automation','Work without bottlenecks','Replace repetitive handoffs with reliable workflows your team can see, trust and improve.','photo-1551288049-bebda4e38f71',['Workflows','SOPs','Integrations']],
 ['ai-business-systems','AI Business Systems','Practical intelligence','Deploy governed AI assistants and automations around real business workflows.','photo-1677442136019-21780ecad995',['AI agents','Knowledge','Governance']],
 ['lead-generation','Lead Generation','Predictable pipeline','Build a measurable path from attention to qualified conversation.','photo-1552664730-d307ca884978',['Funnels','Attribution','Nurture']],
 ['crm-client-management','CRM & Client Management','One source of truth','Design a customer system that keeps every lead, task and next action visible.','photo-1556761175-b413da4baf72',['CRM','Pipelines','Client care']],
 ['social-media-systems','Social Media Systems','Content that compounds','Turn scattered posting into a repeatable content-to-conversation engine.','photo-1611162617474-5b21e879e113',['Content ops','Publishing','Analytics']],
 ['email-marketing-automation','Email Marketing & Automation','Lifecycle growth','Create timely, useful email journeys that move people from interest to loyalty.','photo-1563986768609-322da13575f3',['Lifecycle','Segmentation','Automation']],
 ['digital-transformation','Digital Transformation','Connected operations','Align strategy, people, data and tools into one scalable operating model.','photo-1497366811353-6870744d04b2',['Strategy','Systems','Enablement']]
];
export const solutions:Item[]=solutionRows.map(([slug,title,kicker,description,id,tags])=>({slug,title,kicker,description,image:img(id),tags}));
export const academy:Item[]=[
 'Business Automation','E-Commerce','Website Development','AI for Business','Lead Generation','Social Media Systems','Email Marketing & Automation','CRM & Client Management','Digital Business Operations','Digital Solutions'
].map((name,i)=>({slug:name.toLowerCase().replaceAll(' & ','-').replaceAll(' ','-'),title:`${name} Specialist`,kicker:i===9?'Advanced program':'Career-ready program',description:`Build practical ${name.toLowerCase()} capability through guided projects, reusable systems and a portfolio-ready capstone.`,image:img(['photo-1523240795612-9a054b0db644','photo-1516321318423-f06f85e504b3','photo-1498050108023-c5249f4df085','photo-1535223289827-42f1e9919769','photo-1551836022-d5d88e9218df'][i%5]),tags:['10 modules','Practical capstone','Certificate']}));
export const resources:Item[]=[
 'Your First Step Into Online Work','Template Library','SOP Collection','AI Prompt Pack','Growth Checklists','Client Toolkit'
].map((title,i)=>({slug:title.toLowerCase().replaceAll(' ','-'),title,kicker:i===0?'Always-free starter eBook':'Free for course enrollees',description:[
  'A realistic and encouraging introduction to online work, freelancing, digital opportunity and finding the niche you are ready to learn.',
  'Reusable briefs, scope documents, project updates and handoff templates for clearer professional delivery.',
  'A practical system for documenting recurring work, quality checks, exceptions and ownership.',
  'Structured prompts, review methods and safety checks for responsible AI-supported business work.',
  'Journey audits and experiment checklists for finding and improving the weakest point in growth.',
  'Discovery, kickoff, communication, change and handoff tools for professional client engagements.'
][i],image:img(['photo-1456513080510-7bf3a84b82f8','photo-1517841905240-472988babdf9','photo-1499750310107-5fef28a66643','photo-1434030216411-0b793f4b4173'][i%4]),tags:i===0?['Always free','10-page PDF','Assessment pathway']:['Enrollee access','Included with courses','Guided exercises']}));
const workRows:[string,string,string,string,string,string[]][]=[
 ['lumera-skin','Luméra Skin','Multi-channel commerce','A premium skincare ecosystem unifying discovery, storefront, marketplace inventory and post-purchase retention.','photo-1556228720-195a672e8a03',['E-commerce','Retention','Operations']],
 ['northline-home-services','Northline Home Services','Lead-to-booking system','A local services acquisition system connecting demand capture, qualification, scheduling and follow-up.','photo-1581578731548-c64695cc6952',['Lead gen','Booking','CRM']],
 ['verdant-cafe','Verdant Café','Retention engine','A warm, behavior-led email system designed to turn first visits into familiar rituals.','photo-1445116572660-236099ec97a0',['Email','Loyalty','Automation']],
 ['vantage-property-group','Vantage Property Group','AI + CRM lead system','An intelligent property inquiry flow that helps agents prioritize, respond and follow through.','photo-1560518883-ce09059eeffa',['AI','CRM','Property']],
 ['forma-studio','Forma Studio','Social-to-sales system','A content engine connecting creative publishing to qualified studio consultations.','photo-1497366754035-f200968a6e72',['Social','Content','Sales']],
 ['arden-and-co','Arden & Co.','Digital transformation','A connected digital operating model spanning brand, commerce, service and insight.','photo-1524758631624-e2822e304c36',['Strategy','Automation','Growth']]
];
export const work:Item[]=workRows.map(([slug,title,kicker,description,id,tags])=>({slug,title,kicker,description,image:img(id),tags}));
export const findItem=(items:Item[],slug:string)=>items.find(x=>x.slug===slug);
