/* SkillRise Academy — course catalog (52 courses, worldwide USD pricing) */
const CATS = ['Web Development','Design','Video','Marketing','Freelancing','AI Skills','Business'];
const CAT_VIDEO = {'Web Development':'web-intro.mp4','Design':'design-intro.mp4','Video':'ai-intro.mp4','Marketing':'seo-intro.mp4','Freelancing':'freelance-intro.mp4','AI Skills':'ai-intro.mp4','Business':'social-intro.mp4'};
/* Full lesson videos: course id -> {lesson number: video path}. Grows as lessons are produced. */
const LESSON_VIDEOS = {1:{1:'assets/video/lessons/c01-l01.mp4',2:'assets/video/lessons/c01-l02.mp4',3:'assets/video/lessons/c01-l03.mp4',4:'assets/video/lessons/c01-l04.mp4',5:'assets/video/lessons/c01-l05.mp4'},2:{1:'assets/video/lessons/c02-l01.mp4',2:'assets/video/lessons/c02-l02.mp4',3:'assets/video/lessons/c02-l03.mp4',4:'assets/video/lessons/c02-l04.mp4',5:'assets/video/lessons/c02-l05.mp4'},3:{1:'assets/video/lessons/c03-l01.mp4',2:'assets/video/lessons/c03-l02.mp4',3:'assets/video/lessons/c03-l03.mp4',4:'assets/video/lessons/c03-l04.mp4',5:'assets/video/lessons/c03-l05.mp4'},5:{1:'assets/video/lessons/c05-l01.mp4',2:'assets/video/lessons/c05-l02.mp4',3:'assets/video/lessons/c05-l03.mp4',4:'assets/video/lessons/c05-l04.mp4',5:'assets/video/lessons/c05-l05.mp4'},6:{1:'assets/video/lessons/c06-l01.mp4',2:'assets/video/lessons/c06-l02.mp4',3:'assets/video/lessons/c06-l03.mp4'},7:{1:'assets/video/lessons/c07-l01.mp4',2:'assets/video/lessons/c07-l02.mp4',3:'assets/video/lessons/c07-l03.mp4',4:'assets/video/lessons/c07-l04.mp4',5:'assets/video/lessons/c07-l05.mp4'},8:{1:'assets/video/lessons/c08-l01.mp4',2:'assets/video/lessons/c08-l02.mp4',3:'assets/video/lessons/c08-l03.mp4'},11:{1:'assets/video/lessons/c11-l01.mp4',2:'assets/video/lessons/c11-l02.mp4',3:'assets/video/lessons/c11-l03.mp4',4:'assets/video/lessons/c11-l04.mp4',5:'assets/video/lessons/c11-l05.mp4'},12:{1:'assets/video/lessons/c12-l01.mp4',2:'assets/video/lessons/c12-l02.mp4',3:'assets/video/lessons/c12-l03.mp4',4:'assets/video/lessons/c12-l04.mp4',5:'assets/video/lessons/c12-l05.mp4'},13:{1:'assets/video/lessons/c13-l01.mp4',2:'assets/video/lessons/c13-l02.mp4',3:'assets/video/lessons/c13-l03.mp4',4:'assets/video/lessons/c13-l04.mp4',5:'assets/video/lessons/c13-l05.mp4'},14:{1:'assets/video/lessons/c14-l01.mp4',2:'assets/video/lessons/c14-l02.mp4',3:'assets/video/lessons/c14-l03.mp4',4:'assets/video/lessons/c14-l04.mp4',5:'assets/video/lessons/c14-l05.mp4'},15:{1:'assets/video/lessons/c15-l01.mp4',2:'assets/video/lessons/c15-l02.mp4',3:'assets/video/lessons/c15-l03.mp4',4:'assets/video/lessons/c15-l04.mp4',5:'assets/video/lessons/c15-l05.mp4'},16:{1:'assets/video/lessons/c16-l01.mp4',2:'assets/video/lessons/c16-l02.mp4',3:'assets/video/lessons/c16-l03.mp4',4:'assets/video/lessons/c16-l04.mp4',5:'assets/video/lessons/c16-l05.mp4'},17:{1:'assets/video/lessons/c17-l01.mp4',2:'assets/video/lessons/c17-l02.mp4',3:'assets/video/lessons/c17-l03.mp4',4:'assets/video/lessons/c17-l04.mp4',5:'assets/video/lessons/c17-l05.mp4'},18:{1:'assets/video/lessons/c18-l01.mp4',2:'assets/video/lessons/c18-l02.mp4',3:'assets/video/lessons/c18-l03.mp4',4:'assets/video/lessons/c18-l04.mp4',5:'assets/video/lessons/c18-l05.mp4'},19:{1:'assets/video/lessons/c19-l01.mp4',2:'assets/video/lessons/c19-l02.mp4',3:'assets/video/lessons/c19-l03.mp4',4:'assets/video/lessons/c19-l04.mp4',5:'assets/video/lessons/c19-l05.mp4'},21:{1:'assets/video/lessons/c21-l1.mp4',2:'assets/video/lessons/c21-l2.mp4',3:'assets/video/lessons/c21-l3.mp4',4:'assets/video/lessons/c21-l4.mp4',5:'assets/video/lessons/c21-l5.mp4'},27:{1:'assets/video/lessons/c27-l01.mp4',2:'assets/video/lessons/c27-l02.mp4',3:'assets/video/lessons/c27-l03.mp4',4:'assets/video/lessons/c27-l04.mp4',5:'assets/video/lessons/c27-l05.mp4'},28:{1:'assets/video/lessons/c28-l01.mp4',2:'assets/video/lessons/c28-l02.mp4',3:'assets/video/lessons/c28-l03.mp4',4:'assets/video/lessons/c28-l04.mp4',5:'assets/video/lessons/c28-l05.mp4'},29:{1:'assets/video/lessons/c29-l01.mp4',2:'assets/video/lessons/c29-l02.mp4',3:'assets/video/lessons/c29-l03.mp4',4:'assets/video/lessons/c29-l04.mp4',5:'assets/video/lessons/c29-l05.mp4'},30:{1:'assets/video/lessons/c30-l01.mp4',2:'assets/video/lessons/c30-l02.mp4'},34:{1:'assets/video/lessons/c34-l1.mp4',2:'assets/video/lessons/c34-l2.mp4',3:'assets/video/lessons/c34-l3.mp4',4:'assets/video/lessons/c34-l4.mp4'},40:{1:'assets/video/lessons/c40-l1.mp4',2:'assets/video/lessons/c40-l2.mp4',3:'assets/video/lessons/c40-l3.mp4',4:'assets/video/lessons/c40-l4.mp4',5:'assets/video/lessons/c40-l5.mp4'},41:{1:'assets/video/lessons/c41-l1.mp4',2:'assets/video/lessons/c41-l2.mp4',3:'assets/video/lessons/c41-l3.mp4',4:'assets/video/lessons/c41-l4.mp4'},47:{1:'assets/video/lessons/c47-l01.mp4',2:'assets/video/lessons/c47-l02.mp4',3:'assets/video/lessons/c47-l03.mp4',4:'assets/video/lessons/c47-l04.mp4',5:'assets/video/lessons/c47-l05.mp4'},48:{1:'assets/video/lessons/c48-l01.mp4',2:'assets/video/lessons/c48-l02.mp4',3:'assets/video/lessons/c48-l03.mp4',4:'assets/video/lessons/c48-l04.mp4',5:'assets/video/lessons/c48-l05.mp4'},20:{1:'assets/video/lessons/c20-l01.mp4'},49:{1:'assets/video/lessons/c49-l01.mp4',2:'assets/video/lessons/c49-l02.mp4',3:'assets/video/lessons/c49-l03.mp4',4:'assets/video/lessons/c49-l04.mp4',5:'assets/video/lessons/c49-l05.mp4'},50:{1:'assets/video/lessons/c50-l01.mp4',2:'assets/video/lessons/c50-l02.mp4',3:'assets/video/lessons/c50-l03.mp4',4:'assets/video/lessons/c50-l04.mp4',5:'assets/video/lessons/c50-l05.mp4'},51:{1:'assets/video/lessons/c51-l01.mp4',2:'assets/video/lessons/c51-l02.mp4',3:'assets/video/lessons/c51-l03.mp4'},4:{1:'assets/video/lessons/c04-l01.mp4',2:'assets/video/lessons/c04-l02.mp4'}};
/* [name, category, price, old price, lessons, level, rating, badge, description] */
const RAW = [
['HTML & CSS Mastery','Web Development',19,49,40,'Beginner',4.9,'BESTSELLER','Build real websites from scratch — the exact skill clients pay for.'],
['JavaScript Essentials','Web Development',19,49,36,'Beginner',4.8,'','Make websites interactive with JavaScript, step by step on video.'],
['React for Beginners','Web Development',25,69,42,'Intermediate',4.8,'','Build modern web apps with React, the most in-demand skill.'],
['WordPress Pro','Web Development',19,59,38,'Beginner',4.7,'','Create professional WordPress sites clients pay $500+ for.'],
['Shopify Store Setup','Web Development',25,69,30,'Beginner',4.7,'','Launch complete online stores on Shopify, start to finish.'],
['Figma UI Design','Web Development',19,49,28,'Beginner',4.8,'','Design beautiful website interfaces in Figma like a pro.'],
['Landing Page Design','Web Development',19,49,24,'Beginner',4.7,'','Design landing pages that convert visitors into buyers.'],
['PHP & Laravel Basics','Web Development',25,69,40,'Intermediate',4.6,'','Backend development with PHP and the Laravel framework.'],
['Photoshop Mastery','Design',19,59,36,'Beginner',4.8,'','Master Photoshop — editing, retouching and creative design.'],
['Illustrator Essentials','Design',19,59,32,'Beginner',4.7,'','Vector graphics and illustration with Adobe Illustrator.'],
['Canva Pro Design','Design',15,39,24,'Beginner',4.8,'','Stunning designs in Canva, no experience needed.'],
['Logo Design Pro','Design',19,49,28,'Beginner',4.8,'HOT','Design professional logos brands pay for, step by step.'],
['YouTube Thumbnail Design','Design',15,39,20,'Beginner',4.9,'','Thumbnails that get clicks — a high-demand freelance skill.'],
['Social Media Graphics','Design',15,39,22,'Beginner',4.7,'','Scroll-stopping graphics for Instagram, Facebook and more.'],
['Brand Identity Design','Design',25,69,26,'Intermediate',4.8,'','Complete brand kits: logos, colors, typography and guides.'],
['Print & Packaging','Design',19,49,24,'Intermediate',4.6,'','Professional print and packaging design for real products.'],
['Premiere Pro Editing','Video',25,69,38,'Beginner',4.9,'BESTSELLER','Edit like a pro — cuts, effects, color, and client delivery.'],
['CapCut Mobile Editing','Video',15,39,24,'Beginner',4.8,'','Pro video editing right on your phone with CapCut.'],
['AI Video Creation','Video',25,69,30,'Beginner',4.8,'HOT','Create stunning videos with AI tools — no camera needed.'],
['YouTube Automation','Video',25,69,28,'Intermediate',4.7,'','Build faceless YouTube channels that earn on autopilot.'],
['Reels & Shorts Mastery','Video',15,39,22,'Beginner',4.8,'','Viral short-form videos for Reels, Shorts and TikTok.'],
['Motion Graphics Basics','Video',25,69,30,'Intermediate',4.7,'','Animated graphics and titles that make videos pop.'],
['Podcast Video Editing','Video',19,49,24,'Beginner',4.6,'','Edit podcasts into engaging video content for YouTube.'],
['SEO Mastery','Marketing',19,59,36,'Beginner',4.9,'BESTSELLER','Rank websites #1 on Google — the highest-paid marketing skill.'],
['Keyword Research Pro','Marketing',15,39,20,'Beginner',4.7,'','Find profitable keywords and outrank competitors.'],
['Facebook Ads Mastery','Marketing',25,69,30,'Intermediate',4.8,'HOT','Run profitable ad campaigns businesses pay monthly for.'],
['Google Ads Essentials','Marketing',25,69,28,'Intermediate',4.7,'','Master Google Ads and get clients measurable results.'],
['TikTok Marketing','Marketing',15,39,22,'Beginner',4.8,'','Grow brands fast with TikTok marketing strategies.'],
['Content Writing Pro','Marketing',15,39,26,'Beginner',4.7,'','Write content that ranks, converts and gets you hired.'],
['Email Marketing','Marketing',19,49,22,'Intermediate',4.6,'','Email campaigns and automation that drive real sales.'],
['Social Media Management','Marketing',19,59,28,'Beginner',4.8,'','Manage client social accounts as a paid monthly service.'],
['Freelancing & Client Hunting','Freelancing',15,39,26,'Beginner',4.9,'BESTSELLER','Find clients and close deals — the complete freelancing playbook.'],
['Fiverr Gig Mastery','Freelancing',19,49,24,'Beginner',4.8,'','Gigs that rank and sell — from setup to first 100 orders.'],
['Upwork Proposals That Win','Freelancing',19,49,22,'Beginner',4.7,'','Proposals that win jobs on Upwork, with real examples.'],
['Virtual Assistant Pro','Freelancing',15,39,28,'Beginner',4.7,'','Become a VA clients rely on — admin, inbox, scheduling.'],
['Data Entry Mastery','Freelancing',15,39,20,'Beginner',4.6,'','Fast, accurate data entry work you can start this week.'],
['Customer Support Skills','Freelancing',15,39,22,'Beginner',4.6,'','Professional support skills for remote support jobs.'],
['Amazon Virtual Assistant','Freelancing',25,69,30,'Intermediate',4.7,'','High-paying Amazon VA skills: listings, PPC, support.'],
['ChatGPT & AI Tools','AI Skills',15,39,20,'Beginner',4.8,'HOT','Master ChatGPT and 20+ AI tools for work and business.'],
['AI Content Creation','AI Skills',19,49,24,'Beginner',4.7,'','Create blogs, scripts and posts 10x faster with AI.'],
['Prompt Engineering','AI Skills',15,39,18,'Beginner',4.8,'','Write prompts that get perfect results from any AI.'],
['AI Voiceover & Dubbing','AI Skills',19,49,20,'Beginner',4.6,'','Pro voiceovers and video dubbing with AI voices.'],
['AI Automation Basics','AI Skills',25,69,26,'Intermediate',4.7,'','Automate business tasks with AI workflows.'],
['AI Art & Design','AI Skills',19,49,22,'Beginner',4.7,'','Create stunning art and designs with AI image tools.'],
['Dropshipping Business','Business',29,79,32,'Intermediate',4.7,'','Launch your own dropshipping store, step by step.'],
['E-commerce Startup','Business',25,69,28,'Beginner',4.6,'','Start and grow an online store from zero.'],
['Online Teaching Mastery','Business',19,49,24,'Beginner',4.7,'','Teach online and earn from your own knowledge.'],
['CV & Interview Skills','Business',15,39,16,'Beginner',4.6,'','CVs and interviews that land real jobs.'],
['Spoken English','Business',15,39,30,'Beginner',4.7,'','Confident spoken English for work and clients.'],
['Freelance Accounting Basics','Business',19,49,22,'Beginner',4.5,'','Simple accounting for freelancers and small business.'],
['Stock Market Basics','Business',25,69,26,'Beginner',4.5,'','Understand stocks and start investing wisely.'],
['Digital Product Selling','Business',19,49,24,'Beginner',4.6,'','Create and sell ebooks, templates and courses online.']
];
const IMG = {'Web Development':['t-web.jpg','t-web2.jpg'],'Design':['t-design.jpg'],'Video':['t-video.jpg'],'Marketing':['t-marketing.jpg'],'Freelancing':['t-freelance.jpg'],'AI Skills':['t-ai.jpg'],'Business':['t-biz.jpg']};
const COURSES = RAW.map((r,i)=>{
  const imgs = IMG[r[1]];
  return {id:i+1, name:r[0], cat:r[1], price:r[2], old:r[3], lessons:r[4], hours:Math.max(4,Math.round(r[4]*0.35)), level:r[5], rating:r[6], badge:r[7], desc:r[8], img:'assets/img/thumbs/'+imgs[i%imgs.length], video:'assets/video/'+CAT_VIDEO[r[1]]};
});
const SYL_TPL = {
'Web Development':['Setup & your first project','Core concepts, clearly explained','Hands-on guided practice','Responsive & pro techniques','Final project: {n} portfolio piece'],
'Design':['Design fundamentals','Tools mastery, step by step','Color, type & composition','Real client-style briefs','Final project: {n} portfolio piece'],
'Video':['Setup & workflow','Core editing techniques','Effects, color & audio','Speed & pro shortcuts','Final project: {n} client-ready video'],
'Marketing':['Foundations & mindset','Strategy that works in 2026','Hands-on campaign builds','Analytics & optimization','Final project: {n} live campaign'],
'Freelancing':['Getting started right','Profile & portfolio setup','Finding your first clients','Pricing & communication','Final project: {n} client acquisition plan'],
'AI Skills':['AI foundations','Essential tools walkthrough','Real-world workflows','Advanced techniques','Final project: {n} automation build'],
'Business':['Business foundations','Setup, step by step','Getting your first sales','Growth & scaling','Final project: {n} launch plan']
};
function syllabus(c){
  const tpl = SYL_TPL[c.cat];
  return tpl.map((t,i)=>({n:i+1, t:t.replace('{n}', c.name), d:(10+((c.id*7+i*5)%22))+' min'}));
}
function courseById(id){ return COURSES.find(c=>c.id===parseInt(id,10)); }
