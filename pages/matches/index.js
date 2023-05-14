import { useRouter } from "next/router";

import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/matches/match-list";
import EventsSearch from "../../components/matches/events-search";

function AllMatchesPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export default AllMatchesPage;
