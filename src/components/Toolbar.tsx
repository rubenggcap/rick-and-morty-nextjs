import Link from "next/link";

interface NavLink {
  name: string;
  path: string;
}

export default function Toolbar() {
  const navLinks: NavLink[] = [
    {
      name: "Characters",
      path: "/character/list/1",
    },
  ];
  return (
    <div className="h-12 border-b flex items-center px-4">
      <Link href={"/"} className="mr-8">
        <p className="text-lg font-bold italic">Rick & Morty</p>
      </Link>
      <ul>
        {navLinks.map((link) => (
          <li key={link.path} className="mr-2">
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
