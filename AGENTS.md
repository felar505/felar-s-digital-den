<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the primary navigation in a persistent, user-collapsible icon rail because it preserves fast access while giving reading content more room.
- Generate book content offline into structured JSON under public/stuff/books and render semantic HTML at runtime; this keeps reading native, portable, and PDF-free.
- Preserve original PDF-position IDs after exclusions and track source hashes and page-level verification offline; this prevents false completeness claims and incorrect resume/navigation.
- Use the semantic book flow itself as the scroll/observer root and save relative page offsets in centralized state; this keeps continuous reading and restoration reliable across layouts.
