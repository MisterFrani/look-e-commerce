import { articles, Article } from "../data/DataProducts";
import Card from "./Card";

const CardList: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 px-2 max-w-[1380px] mx-auto">
    <h1 className="col-span-full text-4xl text-center font-semibold p-12 md:py-28">
      Nos Articles{" "}
    </h1>
    {articles.map((article: Article) => (
      <Card key={article.id} article={article} />
    ))}
  </div>
);

export default CardList;
