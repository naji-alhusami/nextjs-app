import { Fragment } from "react";
import { useRouter } from "next/router";

import { getFilteredMatches } from "../../helpers/api-util";
import MatchList from "../../components/matches/match-list";
import ResultsTitle from "../../components/matches/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

function FilteredMatchesPage(props) {
  const router = useRouter();

  // const filterData = router.query.slug;

  // if (!filterData) {
  //   return <p className="center">Loading...</p>;
  // }

  // const filteredYear = filterData[0];
  // const filteredMonth = filterData[1];

  // const numYear = +filteredYear;
  // const numMonth = +filteredMonth;

  // if (
  //   isNaN(numYear) ||
  //   isNaN(numMonth) ||
  //   numYear > 2030 ||
  //   numYear < 2021 ||
  //   numMonth < 1 ||
  //   numMonth > 12
  // )
  if (props.hasError) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  // const filteredMatches = getFilteredMatches({
  //   year: numYear,
  //   month: numMonth,
  // });

  const filteredMatches = props.mathces;

  if (!filteredMatches || filteredMatches.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No matches found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/matches">Show All Matches</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <MatchList items={filteredMatches} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const filterData = params.slug;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: { haError: true },
      // notFound: true,
      // redirect: {
      //   destination: "/error",
      // },
    };
  }

  const filteredMatches = await getFilteredMatches({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      mathces: filteredMatches,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
}

export default FilteredMatchesPage;
