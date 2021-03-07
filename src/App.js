import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import News from "./Components/News/News";

function App() {
  const [articles, setArtical] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=f8b6766a32fa4d7eaef07ca917ad5f8a"
    )
      .then((res) => res.json())
      .then((data) => setArtical(data.articles));
  }, []);

  return (
    <div>
      <Header></Header>
      {articles.map((article) => (
        <News article={article} key={article.id}></News>
      ))}
    </div>
  );
}

export default App;
