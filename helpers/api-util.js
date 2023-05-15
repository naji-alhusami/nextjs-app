export async function getAllMatches() {
  const response = await fetch(
    "https://rect-nextjs-3ce0a-default-rtdb.firebaseio.com/matches.json"
  );
  const data = await response.json();

  const matches = [];
  for (const key in data) {
    matches.push({
      id: key,
      ...data[key],
    });
  }

  return matches;
}

export async function getFeaturedMatches() {
  const allMatches = await getAllMatches();
  return allMatches.filter((match) => match.isFeatured);
}

export async function getMatchById(id) {
  const allMatches = await getAllMatches();
  return allMatches.find((match) => match.id === id);
}
