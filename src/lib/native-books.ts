export type ContentBlock = {
  type: "heading" | "paragraph" | "list-item" | "image";
  text: string;
  level?: number;
  src?: string;
  width?: number;
  height?: number;
};
export type NativePage = {
  page: number;
  topic: string;
  blocks: ContentBlock[];
  plainText: string;
  verification?: { status: "needs-review" | "verified"; method: string; confidence?: number };
};
export type NativeBook = {
  id: string;
  version: number;
  pages: NativePage[];
  sourcePageCount?: number;
  excludedPages?: number[];
  status?: "needs-review" | "verified";
};

export function nearestIncludedPage(pages: NativePage[], requested: number) {
  return pages.find(item => item.page >= requested)?.page ?? pages.at(-1)?.page ?? 1;
}

export function adjacentIncludedPage(pages: NativePage[], current: number, direction: number) {
  const index = pages.findIndex(item => item.page === current);
  return pages[Math.max(0, Math.min(pages.length - 1, index + direction))]?.page ?? current;
}