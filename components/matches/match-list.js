import MatchItem from "./match-item";
import classes from "./match-list.module.css";

function MatchList(props) {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((match) => (
        <MatchItem
          key={match.id}
          id={match.id}
          title={match.title}
          location={match.location}
          date={match.date}
          image={match.image}
        />
      ))}
    </ul>
  );
}

export default MatchList;
