import { getFeaturedMatches } from "../helpers/api-util";
import MatchList from "../components/matches/match-list";

function HomePage(props) {
  return (
    <div>
      <MatchList items={props.matches} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredMatches = await getFeaturedMatches();

  return {
    props: {
      matches: featuredMatches,
    },
    revalidate: 1800,
  };
}

export default HomePage;
