import Link from "next/link";

export default function NavBar() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>,
      </li>
      <li>
        <Link href="winner1">First winner</Link>
      </li>
      <li>
        <Link href="winner2">Second winner</Link>
      </li>
    </ul>
  );
}
