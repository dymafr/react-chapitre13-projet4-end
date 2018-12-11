
export const parseApiMovie = (m) => {
  return { 
    img: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
    title: m.title,
    details: `${ m.release_date } | ${ m.vote_average }/10 (${ m.vote_count })`,
    description: m.overview
  }
}