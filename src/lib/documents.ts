import arabic1 from "@/assets/pdfs/Arabic-EB-part1_compressed.pdf.asset.json";
import arabic2 from "@/assets/pdfs/Arabic-EB-part2_compressed.pdf.asset.json";
import history1 from "@/assets/pdfs/EgyptianHistory-Ar-EB-part1_compressed.pdf.asset.json";
import history2 from "@/assets/pdfs/EgyptianHistory-Ar-EB-part2_compressed.pdf.asset.json";
import english1 from "@/assets/pdfs/Eng-L1-EB-Part1_compressed.pdf.asset.json";
import english2 from "@/assets/pdfs/Eng-L1-EB-Part2_compressed.pdf.asset.json";
import french1 from "@/assets/pdfs/Frensh-L2-EB-part1_compressed.pdf.asset.json";
import french2 from "@/assets/pdfs/Frensh-L2-EB-part2_compressed.pdf.asset.json";
import psychology1 from "@/assets/pdfs/Psychology-EB-part1_compressed.pdf.asset.json";
import psychology2 from "@/assets/pdfs/Psychology-EB-part2_compressed.pdf.asset.json";
import arabicStory from "@/assets/pdfs/Story-Ar-EB.pdf.asset.json";
import englishStory from "@/assets/pdfs/Story-En-EB-L1.pdf.asset.json";
export type StudyDocument = { id:string; subject:"arabic"|"english"|"history"|"psychology"|"french"; part:1|2|"story"; group:"main"|"other"; pages:number; filename:string; url:string };
export const documents: StudyDocument[] = [
 {id:"arabic-1",subject:"arabic",part:1,group:"main",pages:164,filename:"Arabic-EB-part1_compressed.pdf",url:arabic1.url},
 {id:"arabic-2",subject:"arabic",part:2,group:"main",pages:175,filename:"Arabic-EB-part2_compressed.pdf",url:arabic2.url},
 {id:"arabic-story",subject:"arabic",part:"story",group:"main",pages:130,filename:"Story-Ar-EB.pdf",url:arabicStory.url},
 {id:"english-1",subject:"english",part:1,group:"main",pages:172,filename:"Eng-L1-EB-Part1_compressed.pdf",url:english1.url},
 {id:"english-2",subject:"english",part:2,group:"main",pages:164,filename:"Eng-L1-EB-Part2_compressed.pdf",url:english2.url},
 {id:"english-story",subject:"english",part:"story",group:"main",pages:78,filename:"Story-En-EB-L1.pdf",url:englishStory.url},
 {id:"history-1",subject:"history",part:1,group:"main",pages:127,filename:"EgyptianHistory-Ar-EB-part1_compressed.pdf",url:history1.url},
 {id:"history-2",subject:"history",part:2,group:"main",pages:114,filename:"EgyptianHistory-Ar-EB-part2_compressed.pdf",url:history2.url},
 {id:"psychology-1",subject:"psychology",part:1,group:"other",pages:161,filename:"Psychology-EB-part1_compressed.pdf",url:psychology1.url},
 {id:"psychology-2",subject:"psychology",part:2,group:"other",pages:141,filename:"Psychology-EB-part2_compressed.pdf",url:psychology2.url},
 {id:"french-1",subject:"french",part:1,group:"other",pages:138,filename:"Frensh-L2-EB-part1_compressed.pdf",url:french1.url},
 {id:"french-2",subject:"french",part:2,group:"other",pages:144,filename:"Frensh-L2-EB-part2_compressed.pdf",url:french2.url},
];
export const getDocument = (id:string) => documents.find(d=>d.id===id);
