const article = document.querySelector("article");

// article could be null, if the selector doesn't match anything
if (article) {
  const text = article.textContent;
  const wordsMatchRegExp = /[^\s]+/g; //regexp

  const words = text.matchAll(wordsMatchRegExp);
  // matchAll would return an iterator, convert to array to get word count
  const wordCount = [...words].length;

  //assume speed of 200 words per minute
  const readingTime = Math.round(wordCount / 200);

  const badge = document.createElement("p");

  // use similar styles as the publish information in the article's head
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  // support for API reference docs
  const heading = article.querySelector("h1");

  // support for article docs with date
  const date = article.querySelector("time")?.parentNode;

  (date ?? heading).insertAdjacentElement("afterend", badge);
}
