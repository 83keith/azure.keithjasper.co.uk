import Link from "next/link";
export function Navigation() {
  return (
    <div id="sidebar" className="sidebar">
      <h1>Keith Jasper</h1>
      <ul>
        <li>
          <Link href="/">
            <i className="fa-solid fa-house fa-lg"></i>Home
          </Link>
        </li>
        <li>
          <Link href="/cv">
            <i className="fa-solid fa-copy fa-lg"></i>CV
          </Link>
        </li>
      </ul>
    </div>
  );
}
