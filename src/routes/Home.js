import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    // async function이 아닌데 await을 사용하면 문법 에러가 발생합니다.
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      // getMovies()는 axios.get을 사용해, 하지만 axios.get은 완료되기가지 시간이 조금 걸려서 await을 넣어야돼.
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false }); // 원래는 movies : movies 지만 이렇게 똑같으면 생략가능. (하나는 state에서 온거고 다른 하나는 axios.get에서 온거)
  };
  componentDidMount() {
    // setTimeout(() => { this.setState({ isLoading: false }) }, 6000);
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
export default Home;
