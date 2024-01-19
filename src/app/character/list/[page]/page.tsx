import CharacterCard from "@/components/CharacterCard";
import Paginator from "@/components/Paginator";
import { Character, Info, Page } from "@/types";

async function getCharacterPage(page: string): Promise<Page<Character>> {
  const response = await fetch(
    process.env.API_URL + `/character/?page=${page}`
  );
  return await response.json();
}

export default async function CharacterList({
  params: { page },
}: {
  params: { page: string };
}) {
  const characterPage: Page<Character> = await getCharacterPage(page);
  const characters: Character[] = characterPage.results;
  const info: Info = characterPage.info;

  return (
    <>
      <div className="h-[700px] overflow-y-auto grid grid-cols-1 gap-4">
        {characters.map((character) => (
          <CharacterCard key={character.id + "_card"} character={character} />
        ))}
      </div>
      <Paginator
        nextUrl={info.next ? `/character/list/${parseInt(page) + 1}` : null}
        previousUrl={info.prev ? `/character/list/${parseInt(page) - 1}` : null}
        page={page}
        info={info}
      />
    </>
  );
}
