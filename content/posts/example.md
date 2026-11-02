This is an example chapter. It shows everything a post on this site can do, so you can copy what you need. Delete this file (and its entry in `chapters.yml`) once your first real chapter is up.

Don't put the title at the top of the file. It comes from `chapters.yml`.

## Text

Regular **Markdown** works: *italics*, **bold**, `inline code`, [links](https://github.com), and lists.

- Bullet points
- With as many items as you like
  1. Numbered lists nest inside them
  2. Like this

> Quotes look like this. Good for the line from a novel that wouldn't leave you alone.

Link to another chapter by its file name, like [this one](example.md), and it opens here on the site.

## Code

Put the language after the three backticks to get colours:

```python
def cultivate(qi: int, days: int) -> int:
    for _ in range(days):
        qi += qi // 10 or 1   # compound interest, but for the dantian
    return qi
```

```js
const bug = await findBug();   // it's always a missing await
```

## Math

Inline math goes between single dollar signs: the attention score is $\text{softmax}\!\left(\frac{QK^\top}{\sqrt{d_k}}\right)V$. Prices like $5 and $10 stay as text.

Display math goes between double dollar signs on their own lines:

$$
\mathcal{L}(\theta) = -\sum_{i=1}^{N} y_i \log \hat{y}_i
$$

A `math` code fence works too, the same way it does on GitHub:

```math
e^{i\pi} + 1 = 0
```

## Pictures

Put images in `content/posts/images/` and point at them like this. The text in quotes becomes the caption.

![Truck-kun on the road](images/example-truck.svg "Truck-kun, mid-delivery")

Images from anywhere on the internet work too, with their full `https://` address.

## Tables

| Realm | What it means |
|---|---|
| Qi Condensation | Copy-pasting from Stack Overflow |
| Foundation Establishment | Knowing *why* the copy-paste works |

---

That's everything. Happy writing.
