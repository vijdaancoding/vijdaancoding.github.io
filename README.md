# vijdaancoding.github.io

My personal site. All of the content lives in `content/`. You never need to touch `index.html` or `post.html` to update it.

| To change… | Edit |
|---|---|
| Name, intro, status window, stats, skills, links, Medium username | `content/profile.yml` |
| Work projects (Quest log), with an optional link to each | `content/quests.yml` |
| The list of Chapters (posts here, on Medium, anywhere) | `content/chapters.yml` |
| The text of a post people read on this site | `content/posts/<name>.md` |
| Books, webnovels, manhwa (Library) | `content/library.yml` |

Each file starts with a template block. To add something, copy it, paste it, and fill it in.

## Updating from your phone or browser

1. Open the file on github.com and press the pencil icon.
2. Make your change and commit.
3. The site updates in about a minute.

## Writing a chapter on this site

1. Create `content/posts/my-post.md` and write in Markdown. Leave the title out; it comes from step 2.
2. Add an entry to `content/chapters.yml` with `post: my-post` (the file name without `.md`). The template at the top of that file shows the fields.
3. It shows up in Chapters and opens at `post.html?p=my-post`.

Inside the post you can use:

- **Markdown**: headings, lists, quotes, tables, links. Link to another chapter with `[text](other-post.md)`.
- **Code**: fenced with three backticks and a language, e.g. ` ```python `.
- **Math (LaTeX)**: `$inline$` and `$$display$$`, or a ` ```math ` fence. Same syntax GitHub uses, so the file previews correctly on github.com too.
- **Pictures**: upload them to `content/posts/images/` and write `![description](images/photo.jpg "optional caption")`. Images from other sites work with their full `https://` address.

`content/posts/example.md` shows all of it. Delete it and its `chapters.yml` entry once you've got the hang of it.

**Drafts:** a `.md` file that isn't in `chapters.yml` isn't listed anywhere, but you can still open `post.html?p=its-name` to preview it. Put a `# Title` line at the top of a draft if you want it to have a title before it's listed.

**Also on Medium:** if you publish the same post on Medium, add its link as `url:` on the entry. The post shows an "Also on Medium" link, and the Medium sync won't list it twice.

## YAML rules that matter

- Indentation is two spaces. Don't use tabs.
- Each new item starts with `- ` at the same indentation as the others.
- Wrap text in "double quotes" if it contains a colon followed by a space, or starts with `*`, `#`, `[`, `{`, `@` or `` ` ``. When in doubt, quote it.
- To put a double quote inside quoted text, use single quotes around it instead: `'He said "hi"'`.
- Dates are written `2026-11-02`.

If you make a typo, only that section breaks. It shows a pink box naming the file and the line, so you know exactly what to fix.

## Previewing on your computer

The page loads its content with `fetch`, so double-clicking `index.html` won't work. Run a tiny server instead:

```
python -m http.server
```

Then open http://localhost:8000.

## Medium

Set `medium_username` in `profile.yml`. Your latest Medium posts (Medium's feed returns about the last 10) are pulled in live and numbered alongside everything in `chapters.yml`. You don't need to list Medium posts by hand unless they're older than that.
