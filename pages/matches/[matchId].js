import { useRouter } from "next/router";

import { getMatchById } from "../../dummy-data";
import MatchSummary from "../../components/match-detail/match-summary";
import MatchLogistics from "../../components/match-detail/match-logistics";
import MatchContent from "../../components/match-detail/match-content";
import ErrorAlert from "../../components/ui/error-alert";

function MatchDetailPage() {
  const router = useRouter();

  const matchId = router.query.matchId;
  const match = getMatchById(matchId);

  if (!match) {
    return (
      <ErrorAlert>
        <p>No match found!</p>
      </ErrorAlert>
    );
  }

  return (
    <>
      <MatchSummary title={match.title} />
      <MatchLogistics
        date={match.date}
        address={match.location}
        image={match.image}
        imageAlt={match.title}
      />
      <MatchContent>
        <p>{match.description}</p>
      </MatchContent>
    </>
  );
}

export default MatchDetailPage;
