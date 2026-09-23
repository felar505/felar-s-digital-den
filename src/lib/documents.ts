export type StudyDocument = { id:string; subject:"arabic"|"english"|"history"|"psychology"|"french"; part:1|2|"story"; group:"main"|"other"; pages:number; filename:string };
export const documents: StudyDocument[] = [
 {id:"arabic-1",subject:"arabic",part:1,group:"main",pages:164,filename:"Arabic-EB-part1_compressed.pdf"},
 {id:"arabic-2",subject:"arabic",part:2,group:"main",pages:175,filename:"Arabic-EB-part2_compressed.pdf"},
 {id:"arabic-story",subject:"arabic",part:"story",group:"main",pages:130,filename:"Story-Ar-EB.pdf"},
 {id:"english-1",subject:"english",part:1,group:"main",pages:172,filename:"Eng-L1-EB-Part1_compressed.pdf"},
 {id:"english-2",subject:"english",part:2,group:"main",pages:164,filename:"Eng-L1-EB-Part2_compressed.pdf"},
 {id:"english-story",subject:"english",part:"story",group:"main",pages:78,filename:"Story-En-EB-L1.pdf"},
 {id:"history-1",subject:"history",part:1,group:"main",pages:127,filename:"EgyptianHistory-Ar-EB-part1_compressed.pdf"},
 {id:"history-2",subject:"history",part:2,group:"main",pages:114,filename:"EgyptianHistory-Ar-EB-part2_compressed.pdf"},
 {id:"psychology-1",subject:"psychology",part:1,group:"other",pages:161,filename:"Psychology-EB-part1_compressed.pdf"},
 {id:"psychology-2",subject:"psychology",part:2,group:"other",pages:141,filename:"Psychology-EB-part2_compressed.pdf"},
 {id:"french-1",subject:"french",part:1,group:"other",pages:138,filename:"Frensh-L2-EB-part1_compressed.pdf"},
 {id:"french-2",subject:"french",part:2,group:"other",pages:144,filename:"Frensh-L2-EB-part2_compressed.pdf"},
];
export const getDocument = (id:string) => documents.find(d=>d.id===id);
