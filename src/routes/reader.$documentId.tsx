import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, Bookmark, ChevronLeft, ChevronRight, Eye, EyeOff, Heart, Maximize, Search, Utensils, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getDocument } from "@/lib/documents";
import { useAppState } from "@/lib/app-state";
import { useT } from "@/lib/i18n";
import { PetAvatar } from "@/components/app/PetAvatar";
import { playSfx } from "@/lib/sfx";

export const Route=createFileRoute("/reader/$documentId")({head:({params})=>({meta:[{title:`Read ${params.documentId} — Felar’s Studies`},{name:"description",content:"Read the original study book as native text inside Felar’s private library."},{property:"og:title",content:"Native Reading Library — Felar’s Studies"},{property:"og:description",content:"Selectable, searchable study books in a calm focused space."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Reader});

type ContentBlock={type:"heading"|"paragraph"|"list-item";text:string;level?:number};
type NativePage={page:number;topic:string;blocks:ContentBlock[];plainText:string};
type NativeBook={id:string;version:number;pages:NativePage[]};
type ExplainTerm={term:string;context:string};

const glossary:Record<string,string[]>={
 psychology:["introvert","extrovert","personality","behavior","stimulus","response","الإدراك","السلوك","الشخصية","الدافع","الاستجابة","المثير"],
 history:["civilization","dynasty","pharaoh","empire","revolution","الحضارة","الأسرة","الفرعون","الاحتلال","الثورة","الدستور"],
 arabic:["بلاغة","استعارة","تشبيه","كناية","مجاز","ضمير","نحو","إعراب","أسلوب","محسنات"],
 english:["metaphor","narrator","conflict","characterization","inference","grammar","adjective","passive","protagonist"],
 french:["conjugaison","adjectif","pronom","subjonctif","conditionnel","complément","métaphore"],
};

function splitWithTerms(text:string,subject:string,onTerm:(term:string,context:string)=>void):ReactNode[]{
 const terms=glossary[subject]??[];if(!terms.length)return [text];
 const pattern=new RegExp(`(${terms.map(term=>term.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")})`,`giu`);
 return text.split(pattern).filter(Boolean).map((part,index)=>terms.some(term=>term.toLocaleLowerCase()===part.toLocaleLowerCase())?<button type="button" className="study-term" key={`${part}-${index}`} onClick={()=>onTerm(part,text)}>{part}</button>:part);
}

function Reader(){
 const {documentId}=Route.useParams();const doc=getDocument(documentId);const {state,update}=useAppState();const t=useT();const roomRef=useRef<HTMLDivElement>(null);const pageRefs=useRef<Record<number,HTMLElement|null>>({});
 const [page,setPage]=useState(state.library.lastPageByDocument[documentId]??1);const [query,setQuery]=useState("");const [book,setBook]=useState<NativeBook|null>(null);const [petVisible,setPetVisible]=useState(true);const [petMessage,setPetMessage]=useState("");const [explaining,setExplaining]=useState<ExplainTerm|null>(null);
 const mode=state.settings.readingMode;const isContinuous=mode==="webtoon"||mode==="continuous"||mode==="scroll"||mode==="vertical";
 useEffect(()=>{if(!doc)return;let active=true;fetch(`/stuff/books/${doc.id}/content.json`).then(r=>r.ok?r.json():Promise.reject()).then((data:NativeBook)=>{if(active)setBook(data)}).catch(()=>{if(active)setBook({id:doc.id,version:1,pages:[]})});return()=>{active=false}},[doc?.id]);
 useEffect(()=>{if(!doc||!state.settings.rememberPage)return;update(s=>({...s,library:{...s.library,lastOpenedDocument:doc.id,lastPageByDocument:{...s.library.lastPageByDocument,[doc.id]:page}}}))},[page,doc?.id,state.settings.rememberPage]);
 useEffect(()=>{if(!doc||isContinuous)return;const onKey=(event:KeyboardEvent)=>{if(event.target instanceof HTMLInputElement)return;const forward=mode==="rtl"?"ArrowLeft":"ArrowRight";const backward=mode==="rtl"?"ArrowRight":"ArrowLeft";if(event.key===forward||event.key==="PageDown")setPage(value=>Math.min(doc.pages,value+1));if(event.key===backward||event.key==="PageUp")setPage(value=>Math.max(1,value-1))};addEventListener("keydown",onKey);return()=>removeEventListener("keydown",onKey)},[doc?.pages,mode,isContinuous]);
 useEffect(()=>{if(!isContinuous||!book)return;const observer=new IntersectionObserver(entries=>{const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(visible)setPage(Number((visible.target as HTMLElement).dataset["page"]??1))},{root:roomRef.current,threshold:[.25,.5,.75]});Object.values(pageRefs.current).forEach(node=>{if(node)observer.observe(node)});return()=>observer.disconnect()},[book,isContinuous]);
 const searchMatches=useMemo(()=>{const needle=query.trim().toLocaleLowerCase();if(!needle||!book)return[];return book.pages.filter(item=>item.plainText.toLocaleLowerCase().includes(needle)).slice(0,8)},[book,query]);
 if(!doc)return <div className="page"><h1>Document not found</h1></div>;
 const pages=book?.pages??[];const visiblePages=isContinuous?pages:pages.filter(item=>item.page===page);const bookmarks=state.library.bookmarks[doc.id]??[];
 const jump=(target:number)=>{setPage(target);requestAnimationFrame(()=>pageRefs.current[target]?.scrollIntoView({behavior:"smooth",block:"start"}))};
 const toggleBookmark=()=>update(s=>({...s,library:{...s.library,bookmarks:{...s.library.bookmarks,[doc.id]:bookmarks.includes(page)?bookmarks.filter(value=>value!==page):[...bookmarks,page]}}}));
 const interact=(message:string)=>{playSfx("pet",state);setPetMessage(message);setTimeout(()=>setPetMessage(""),1800)};
 return <div className={`reading-room native-mode mode-${mode}`} ref={roomRef}>
  <div className="reading-aurora" aria-hidden="true"/><header className="reading-header"><Button asChild variant="ghost" size="icon"><Link to="/library" aria-label={t("back")}><ArrowLeft/></Link></Button><div className="reader-title"><strong>{t(doc.subject)} · {t(`part${doc.part}`)}</strong><small>{pages[page-1]?.topic||doc.filename}</small></div><div className="reading-actions"><Button variant="ghost" size="icon" onClick={()=>setPetVisible(value=>!value)} aria-label={petVisible?t("petHide"):t("petShow")}>{petVisible?<EyeOff/>:<Eye/>}</Button><Button variant="ghost" size="icon" onClick={toggleBookmark} className={bookmarks.includes(page)?"active-icon":""} aria-label={t("bookmark")}><Bookmark/></Button><Button variant="ghost" size="icon" onClick={()=>roomRef.current?.requestFullscreen()} aria-label={t("fullscreen")}><Maximize/></Button></div></header>
  <div className="reader-search-float"><Search/><Input value={query} onChange={event=>setQuery(event.target.value)} placeholder={t("search")}/>{searchMatches.length>0&&<div className="search-results">{searchMatches.map(result=><Button key={result.page} variant="ghost" onClick={()=>{jump(result.page);setQuery("")}}><span>{String(result.page).padStart(3,"0")}</span>{result.topic}</Button>)}</div>}</div>
  <main className="native-book-flow" dir={doc.subject==="arabic"||doc.subject==="history"||doc.subject==="psychology"?"rtl":"ltr"}>{book===null?<div className="native-loading">ASSEMBLING BOOK…</div>:visiblePages.map(item=><article key={item.page} ref={node=>{pageRefs.current[item.page]=node}} data-page={item.page} className="semantic-book-page"><div className="page-folio"><span>{t(doc.subject)}</span><span>{String(item.page).padStart(3,"0")}</span></div>{item.topic&&<p className="semantic-topic">{item.topic}</p>}<div className="semantic-copy">{item.blocks.map((block,index)=>block.type==="heading"?(block.level===2?<h2 key={index}>{splitWithTerms(block.text,doc.subject,(term,context)=>setExplaining({term,context}))}</h2>:<h3 key={index}>{splitWithTerms(block.text,doc.subject,(term,context)=>setExplaining({term,context}))}</h3>):block.type==="list-item"?<div className="semantic-list-item" key={index}><i/><p>{splitWithTerms(block.text,doc.subject,(term,context)=>setExplaining({term,context}))}</p></div>:<p key={index}>{splitWithTerms(block.text,doc.subject,(term,context)=>setExplaining({term,context}))}</p>)}</div><footer>{item.page} / {doc.pages}</footer></article>)}</main>
  {petVisible&&<aside className="reader-pet reader-pet-quiet"><div className="pet-bubble">{petMessage}</div><PetAvatar type={state.pet.type} size="tiny" equipped={state.pet.equippedItems} onInteract={()=>interact("♥")}/><div><Button size="icon" variant="ghost" onClick={()=>interact("♥")} aria-label={t("petPet")}><Heart/></Button><Button size="icon" variant="ghost" onClick={()=>interact("♪")} aria-label={t("petFeed")}><Utensils/></Button></div></aside>}
  {explaining&&<div className="jarvis-explain" role="dialog" aria-modal="true"><section className="jarvis-terminal animate-enter"><header><p>JARVIS // TERM</p><Button variant="ghost" size="icon" onClick={()=>setExplaining(null)} aria-label={t("close")}><X/></Button></header><p className="prompt">&gt; {t("askJarvisAbout")}</p><h2>{explaining.term}</h2><p>{t("termContext")}</p><blockquote>{explaining.context}</blockquote></section></div>}
  {!isContinuous&&<footer className="reading-dock"><Button variant="ghost" size="icon" onClick={()=>setPage(value=>Math.max(1,value-1))} aria-label={t("previous")}><ChevronLeft/></Button><Input aria-label={t("page")} type="number" min={1} max={doc.pages} value={page} onChange={event=>setPage(Math.max(1,Math.min(doc.pages,Number(event.target.value))))}/><span>/ {doc.pages}</span><input className="page-scrubber" aria-label="Page position" type="range" min={1} max={doc.pages} value={page} onChange={event=>setPage(Number(event.target.value))}/><Button variant="ghost" size="icon" onClick={()=>setPage(value=>Math.min(doc.pages,value+1))} aria-label={t("next")}><ChevronRight/></Button></footer>}
  {isContinuous&&<div className="continuous-counter">{page} / {doc.pages}</div>}
 </div>
}