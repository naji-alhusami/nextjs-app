import { getMatchById, getFeaturedMatches } from "../../helpers/api-util";
import MatchSummary from "../../components/match-detail/match-summary";
import MatchLogistics from "../../components/match-detail/match-logistics";
import MatchContent from "../../components/match-detail/match-content";

function MatchDetailPage(props) {
  const match = props.selectedMatch;

  if (!match) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
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

export async function getStaticProps(context) {
  const matchId = context.params.matchId;

  const match = await getMatchById(matchId);

  return {
    props: {
      selectedMatch: match,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const matches = await getFeaturedMatches();

  const paths = matches.map((match) => ({ params: { matchId: match.id } }));

  return {
    paths: paths,
    fallback: 'blocking',
  };
}

export default MatchDetailPage;
