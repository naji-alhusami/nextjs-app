const DUMMY_MATCHES = [
    {
      id: 'm1',
      title: 'FC Barcelona VS Real Madrid',
      description:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      location: 'Camp Nou, Barcelona',
      date: '2023-05-12',
      image: 'images/BAR-RM.png',
      isFeatured: true,
    },
    {
      id: 'm2',
      title: 'Elche FC VS FC Barcelona',
      description:
        "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
      location: 'Estadio Manuel Martínez',
      date: '2023-05-30',
      image: 'images/introvert-event.jpg',
      isFeatured: false,
    },
    {
      id: 'm3',
      title: 'AC Milan VS FC Barcelona',
      description:
        'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
      location: 'San Siro',
      date: '2023-06-10',
      image: 'images/extrovert-event.jpg',
      isFeatured: true,
    },
  ];
  
  export function getFeaturedMatches() {
    return DUMMY_MATCHES.filter((match) => match.isFeatured);
  }
  
  export function getAllMatches() {
    return DUMMY_MATCHES;
  }
  
  export function getFilteredMatches(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredMatches = DUMMY_MATCHES.filter((match) => {
      const matchDate = new Date(match.date);
      return matchDate.getFullYear() === year && matchDate.getMonth() === month - 1;
    });
  
    return filteredMatches;
  }
  
  export function getMatchById(id) {
    return DUMMY_MATCHES.find((match) => match.id === id);
  }