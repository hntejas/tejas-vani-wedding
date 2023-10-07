import "./main-page.css";

const MainPage = ({ handleClick }) => {
  return (
    <div className="book-cover" onClick={handleClick}>
      <img src="images/top-book-cover.jpg" />
      <h1 className="names">Tejas & Vanishree</h1>
      <h2 className="date">19 / 10 / 2023</h2>
      <img src="images/top-book-cover.jpg" />

      <img className="hide" src="images/wood-bg.png" />
      <img className="hide" src="images/red-3.jpg" />
      <img className="hide" src="images/pattern-top.jpg" />
    </div>
  );
};

export default MainPage;
