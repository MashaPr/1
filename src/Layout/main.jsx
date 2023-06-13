import React from "react";
import { Movies } from "../Components/Movies";
import { Search } from "../Components/Search";
import { Preloader } from "../Components/Preloader";

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };
    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=4b500573&s=matrix')
        .then((response) => response.json())
        .then((data) => this.setState({ movies: data.Search, loading: false }));
    }

    searchMovies = (str, type = "all") => {
        fetch(`http://www.omdbapi.com/?apikey=4b500573&s=${str}${
            type !== "all" ? `&type=${type}` : ""
        }`)
            .then((response) => response.json())
            .then ((data) => this.setState({ movies: data.Searh, loading: false }));
    };

    render() {
        const { loading } = this.state;

        return <main className="container content">
            <Search searchMovies={this.searchMovies} />
            {
                loading ? <Preloader /> : <Movies movies={this.state.movies} />
            }
        </main>
    }
}
export { Main };