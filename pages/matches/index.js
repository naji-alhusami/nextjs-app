import { useRouter } from "next/router";

import { getAllMatches } from "../../dummy-data";
import MatchList from "../../components/matches/match-list";
import MatchesSearch from "@/components/matches/matches-search";

function AllMatchesPage() {
  const router = useRouter();
  const matches = getAllMatches();

  function findMatchesHandler(year, month) {
    const fullPath = `/matches/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <>
      <MatchesSearch onSearch={findMatchesHandler} />
      <MatchList items={events} />
    </>
  );
}

export default AllMatchesPage;
