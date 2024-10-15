const MoviesData = [
  {
    title: "Relatos Salvajes",
    year: 2014,
    director: "Damián Szifron",
    duration: "2h 2min",
    genre: ["Drama", "Comedy", "Thriller"],
    rate: 8.1,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM3ODg4MDc2NV5BMl5BanBnXkFtZTgwMTc1MTY1MjE@._V1_SX300.jpg",
  },
  {
    title: "El secreto de sus ojos",
    year: 2009,
    director: "Juan José Campanella",
    duration: "2h 9min",
    genre: ["Drama", "Mystery", "Thriller"],
    rate: 8.2,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjAwOTI1MTU4MV5BMl5BanBnXkFtZTcwNTAzNTI3Mg@@._V1_SX300.jpg",
  },
  {
    title: "Nueve reinas",
    year: 2000,
    director: "Fabián Bielinsky",
    duration: "1h 54min",
    genre: ["Crime", "Drama", "Thriller"],
    rate: 8.5,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTYwMjI2NjA4MF5BMl5BanBnXkFtZTcwNjM3OTUyMQ@@._V1_SX300.jpg",
  },
  {
    title: "La historia oficial",
    year: 1985,
    director: "Luis Puenzo",
    duration: "1h 52min",
    genre: ["Drama", "History"],
    rate: 8.0,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTY3NDc2MjY2Nl5BMl5BanBnXkFtZTcwMDAzMjM3Mg@@._V1_SX300.jpg",
  },
  {
    title: "El hijo de la novia",
    year: 2001,
    director: "Juan José Campanella",
    duration: "2h 4min",
    genre: ["Comedy", "Drama"],
    rate: 7.8,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjI3ODg2MTAwNF5BMl5BanBnXkFtZTcwNjQyNjc3MQ@@._V1_SX300.jpg",
  },
  {
    title: "Zama",
    year: 2017,
    director: "Lucrecia Martel",
    duration: "2h 5min",
    genre: ["Drama", "History"],
    rate: 7.0,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjMwOTc4NDA0NF5BMl5BanBnXkFtZTgwMDg5MDA2MjI@._V1_SX300.jpg",
  },
  {
    title: "El ángel",
    year: 2018,
    director: "Luis Ortega",
    duration: "1h 58min",
    genre: ["Crime", "Biography"],
    rate: 7.2,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNTMwODI2Mjg1OV5BMl5BanBnXkFtZTgwNjE3MjA2MjI@._V1_SX300.jpg",
  },
  {
    title: "Martín (Hache)",
    year: 1997,
    director: "Adolfo Aristarain",
    duration: "1h 45min",
    genre: ["Drama", "Romance"],
    rate: 7.6,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjE1MzI4NTg0MV5BMl5BanBnXkFtZTcwMzE0Nzc5MQ@@._V1_SX300.jpg",
  },
  {
    title: "Crónica de una fuga",
    year: 2006,
    director: "Adrián Caetano",
    duration: "1h 53min",
    genre: ["Drama", "Thriller"],
    rate: 7.5,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjEyNjk4NTI5NF5BMl5BanBnXkFtZTcwMTQ2Nzg1MQ@@._V1_SX300.jpg",
  },
  {
    title: "La odisea de los giles",
    year: 2019,
    director: "Sebastián Borensztein",
    duration: "1h 55min",
    genre: ["Comedy", "Drama"],
    rate: 7.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNmE1Y2JhMzUtZTAwOS00ZDIzLTg1YzktYWFkNjU1ZmNhOGI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    title: "La casa",
    year: 2018,
    director: "Matías Lucchesi",
    duration: "1h 27min",
    genre: ["Drama", "Horror"],
    rate: 6.5,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzg1MDQzMDUwOF5BMl5BanBnXkFtZTgwNjEzNzA1MjI@._V1_SX300.jpg",
  },
  {
    title: "Los olvidados",
    year: 1950,
    director: "Luis Buñuel",
    duration: "1h 22min",
    genre: ["Drama"],
    rate: 8.1,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTQwNjA0MzI4N15BMl5BanBnXkFtZTYwOTI2Nzg3._V1_SX300.jpg",
  },
  {
    title: "Cuentos de la selva",
    year: 2012,
    director: "Alvaro Giménez",
    duration: "1h 28min",
    genre: ["Animation", "Family"],
    rate: 7.0,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTc4NTc1Mjc5MF5BMl5BanBnXkFtZTcwODAxMTg0OQ@@._V1_SX300.jpg",
  },
  {
    title: "El fútbol o yo",
    year: 2017,
    director: "Mariano Cattaneo",
    duration: "1h 35min",
    genre: ["Comedy", "Romance"],
    rate: 6.2,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMTI3MjM2M15BMl5BanBnXkFtZTgwNzA3NjU1MzI@._V1_SX300.jpg",
  },
  {
    title: "La última fiesta",
    year: 2016,
    director: "Enrique Ciriaco",
    duration: "1h 30min",
    genre: ["Comedy"],
    rate: 6.8,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDIxMzU4MDY0NF5BMl5BanBnXkFtZTgwODIxODI1MTI@._V1_SX300.jpg",
  },
  {
    title: "Siete cajas",
    year: 2012,
    director: "Juan Carlos Maneglia, Tana Schémbori",
    duration: "1h 38min",
    genre: ["Thriller", "Crime"],
    rate: 7.3,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjE5NjM2NzQzNl5BMl5BanBnXkFtZTcwNzQ5OTczOQ@@._V1_SX300.jpg",
  },
];
export default MoviesData;
