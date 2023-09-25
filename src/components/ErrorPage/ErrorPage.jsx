import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h2>Oops !!!</h2>
      <Link to={`/`}>
        <button>Home</button>
      </Link>
    </div>
  );
}
