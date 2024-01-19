import { Info } from "@/types";
import Link from "next/link";

export default function Paginator({
  page,
  info,
  nextUrl,
  previousUrl,
}: {
  page: string;
  info: Info;
  nextUrl: string | null;
  previousUrl: string | null;
}) {
  console.log(nextUrl);
  return (
    <div>
      {previousUrl && <Link href={previousUrl}>Previous</Link>}
      {nextUrl && <Link href={nextUrl}>Next</Link>}
    </div>
  );
}
