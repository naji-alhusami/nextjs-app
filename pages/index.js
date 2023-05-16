import { getFeaturedMatches } from "../helpers/api-util";
import MatchList from "../components/matches/match-list";
import NewsletterRegistration from "../components/input/newsletter-registration";

function HomePage(props) {
  return (
    <div>
      <NewsletterRegistration />
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
