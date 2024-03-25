import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <h1 className="select-none font-bold text-2xl">
        TESTY
        <span className="text-ac-sec">•</span>
      </h1>
    </Link>
  );
}
