import "./index.scss";
import Header from "../components/Header/index";
import Notification from "../components/Notification";
import { users } from "../utils/data";
export default function Homepage() {
  const data = users;
  console.log(data);
  return (
    <main className="main">
      <section className="section">
        <div className="container">
          <Header />
          {data.map((user, id) => (
            <Notification
              key={id}
              className={user.className}
              avatar={user.avatar}
              name={user.name}
              text={user.text}
              boldText={user.boldText}
              date={user.date}
              message={user.message}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
