import { getFeaturedMatches } from "@/dummy-data";
import MatchList from "../components/matches/match-list";

function HomePage() {
  const featuredMatches = getFeaturedMatches();

  return (
    <div>
      <MatchList items={featuredMatches} />
    </div>
  );
}

export default HomePage;
