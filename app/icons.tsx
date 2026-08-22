import type {HTMLAttributes} from 'react';
type P=HTMLAttributes<HTMLSpanElement>&{size?:number};
const icon=(glyph:string)=>(p:P)=><span {...p} aria-hidden="true" style={{fontSize:p.size||18,...p.style}}>{glyph}</span>;
export const ArrowRight=icon('→'),ChevronRight=icon('›'),Menu=icon('☰'),X=icon('×'),Play=icon('▶'),ShieldCheck=icon('◈'),Sparkles=icon('✦'),CheckCircle2=icon('✓'),AlertCircle=icon('!'),Search=icon('⌕'),XCircle=icon('×'),Layers3=icon('▱'),Network=icon('⌘'),GraduationCap=icon('◆'),BookOpen=icon('▤'),Compass=icon('◇'),HeartHandshake=icon('♡'),Workflow=icon('⌁');
