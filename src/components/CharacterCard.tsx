import { Character } from "@/types";
import Link from "next/link";

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <div className="border rounded p-4 h-32">
      <Link href={`/character/detail/${character.id}`}>
        <p>Name: {character.name}</p>
      </Link>
      <p>Status: {character.status}</p>
      <p>Location: {character.location.name}</p>
      <p>Episode: {character.episode[0]}</p>
    </div>
  );
}
