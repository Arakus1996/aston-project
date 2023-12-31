export const parseMovieLength = (movieLength: string) => {
  const time = Number(movieLength.split(' ')[0])
  return `${Math.floor(time / 60)}:${
    time % 60 < 10 ? '0' + (time % 60) : time % 60
  }`
}
