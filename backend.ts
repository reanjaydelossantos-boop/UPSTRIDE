import {createHmac,timingSafeEqual} from 'crypto';
export type Inquiry={id:string;created_at:string;name:string;email:string;company?:string;interest:string;budget?:string;timeline?:string;message:string;status:string};
const url=()=>process.env.SUPABASE_URL;const key=()=>process.env.SUPABASE_SERVICE_ROLE_KEY;
export function backendReady(){return Boolean(url()&&key())}
export async function supabase(path:string,init:RequestInit={}){if(!backendReady())throw new Error('Backend is not configured');const response=await fetch(`${url()}/rest/v1/${path}`,{...init,headers:{apikey:key()!,Authorization:`Bearer ${key()}`,'Content-Type':'application/json',Prefer:'return=representation',...(init.headers||{})},cache:'no-store'});if(!response.ok)throw new Error(`Database request failed (${response.status})`);return response.status===204?null:response.json()}
export function adminToken(){return createHmac('sha256',process.env.ADMIN_SECRET||'').update('upstride-admin').digest('hex')}
export function validToken(token?:string){if(!token||!process.env.ADMIN_SECRET)return false;const expected=adminToken();if(token.length!==expected.length)return false;return timingSafeEqual(Buffer.from(token),Buffer.from(expected))}
