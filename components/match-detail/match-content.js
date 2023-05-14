import classes from './match-content.module.css';

function MatchContent(props) {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default MatchContent;
