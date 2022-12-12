import React from "react";

const Article = ({ title, text }) => (
  <div>
    <h3>{title || "Без заголовка"}</h3>
    <p>{text || "пусто"}</p>
  </div>
);

export default class TestApp extends React.Component {
  static emptyArticle = {
    title: "",
    text: ""
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      newArticle: { ...TestApp.emptyArticle }
    };
  }

  handleCreateArticle = e => {
    e.preventDefault();
    const { articles, newArticle } = this.state;

    this.setState({
      newArticle: { ...TestApp.emptyArticle },
      articles: [
        ...articles,
        {
          ...newArticle,
          id: Math.random()
        }
      ]
    });
  };

  handleChangeNewArticle = name => ({ target }) => {
    const { newArticle } = this.state;
    this.setState({
      ...this.state,
      newArticle: {
        ...newArticle,
        [name]: target.value
      }
    });
  };

  render() {
    const { articles, newArticle } = this.state;

    return (
      <div>
        <form onSubmit={this.handleCreateArticle}>
          <input
            placeholder="Вопрос"
            onChange={this.handleChangeNewArticle("title")}
            value={newArticle.title}
          />
          <br />
          <br />
          <input
            placeholder="Ответы"
            onChange={this.handleChangeNewArticle("text")}
            value={newArticle.text}
          />
          <input
            placeholder="Ответы"
            onChange={this.handleChangeNewArticle("text")}
            value={newArticle.text}
          /> 
          <br />
          <br />
          <input type="submit" value="Создать" />
        </form>
        <br />
        <br />
        {articles.map(article => <Article key={article.id} {...article} />)}
      </div>
    );
  }
}
