import { useEffect, useState } from "react";
import axios from "axios";
import { TvShowDropdown } from "../forms/TvShowDropdown";
import { MediaList } from "../lists/MediaList";

export const TvShowContainer = props => {

    const { navigation } = props;

    const [tvShows, setTvShows] = useState([]);
    const [selectedType, setSelectedType] = useState('airing_today');

    useEffect(() => {
        fetchTvShow(selectedType);
    }, [selectedType]);

    const fetchTvShow = async (type) => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/tv/${type}?api_key=6b1e9107faaaceac50d80ee955d31f86`);
            // console.log(response.data.results);
            setTvShows(response.data.results);
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
            <TvShowDropdown onSelectType={handleTypeSelection} />
            <MediaList
                medias={tvShows}
                navigation={navigation}
            />
        </>
    )
}