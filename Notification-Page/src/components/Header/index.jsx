import "./index.scss";

const Header = () => {
  return (
    <header className="header">
      <h1>
        Notifications <span>3</span>
      </h1>
      <a href="#">
        <p className="mark-all">Mark all as read</p>
      </a>
    </header>
  );
};
export default Header;
