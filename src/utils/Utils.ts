// utils/Utils.ts
import { Article } from "../data/DataProducts";

export function getRecommendedArticles(
  articles: Article[],
  currentArticle: Article
): Article[] {
  return articles
    .filter((article) => article.id !== currentArticle.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);
}
