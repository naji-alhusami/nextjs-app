import { useRouter } from "next/router";

import { getAllMatches } from "../../helpers/api-util";
import MatchList from "../../components/matches/match-list";
import MatchesSearch from "@/components/matches/matches-search";

function AllMatchesPage(props) {
  const router = useRouter();
  const { matches } = props;

  function findMatchesHandler(year, month) {
    const fullPath = `/matches/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <>
      <MatchesSearch onSearch={findMatchesHandler} />
      <MatchList items={matches} />
    </>
  );
}

export async function getStaticProps() {
  const matches = await getAllMatches();

  return {
    props: {
      matches: matches,
      revalidate: 60,
    },
  };
}

export default AllMatchesPage;
