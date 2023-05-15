const DUMMY_MATCHES = [
    {
      id: 'm1',
      title: 'FC Barcelona VS Real Madrid',
      description:
        'This is an important match (classico between madrid and barcelona in camp nou, in La Liga competition.',
      location: 'Camp Nou, Barcelona',
      date: '2023-05-12',
      image: 'images/BAR-RM.png',
      isFeatured: true,
    },
    {
      id: 'm2',
      title: 'Elche FC VS FC Barcelona',
      description:
        "this should be an easy match for barcelona who is leading the la liga teams in standings.",
      location: 'Estadio Manuel Martínez',
      date: '2023-05-30',
      image: 'images/Elche-BAR.jpg',
      isFeatured: false,
    },
    {
      id: 'm3',
      title: 'AC Milan VS FC Barcelona',
      description:
        'Another important match which will be held in San Siro as the second match between both teams in UEFA CHAMPIONS LEAGUE.',
      location: 'San Siro',
      date: '2023-06-10',
      image: 'images/BAR-MILAN.jpg',
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