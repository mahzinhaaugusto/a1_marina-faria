import { useEffect, useState } from "react";
import axios from "axios";
import { MoviesDropdown } from "../forms/MoviesDropdown";
import { MediaList } from "../lists/MediaList";

export const MoviesContainer = props => {

    const { navigation } = props;

    const [movies, setMovies] = useState([]);
    const [selectedType, setSelectedType] = useState('now_playing');

    useEffect(() => {
        fetchMovies(selectedType);
    }, [selectedType]);

    const fetchMovies = async (type) => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${type}?api_key=6b1e9107faaaceac50d80ee955d31f86`);
            // console.log(response.data.results);
            setMovies(response.data.results);
        }
        catch (error) {
            console.log("Error: ", error);
        }
    };

    const handleTypeSelection = (type) => {
        setSelectedType(type);
    }

    return (
        <>
            <MoviesDropdown onSelectType={handleTypeSelection} />
            <MediaList
                medias={movies}
                navigation={navigation}
            />
        </>
    )
}