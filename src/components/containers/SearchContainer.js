import { Center, View, Button, Icon, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Form } from "../forms/Form";
import { useState, useEffect } from "react";
import axios from "axios";
import { WaitSearch } from "../layout/WaitSearch";
import { SearchDropdown } from "../forms/SearchDropdown";
import { MediaList } from "../lists/MediaList";

export const SearchContainer = props => {

    const { navigation } = props;

    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedType, setSelectedType] = useState("multi");
    const [error, setError] = useState("");

    const fetchSearch = async () => {
        setError("");

        if (search === "") {
            setError("Movie/TV show name is required");
            return;
        }

        try {
            const response = await axios.get(`https://api.themoviedb.org/3/search/${selectedType}?query=${search}&api_key=6b1e9107faaaceac50d80ee955d31f86`);
            setResult(response.data.results);
            setIsLoading(false);
        }
        catch (error) {
            console.log("Error: ", error);
        }
    };

    const handleTypeSelection = (type) => {
        setSelectedType(type);
        // console.log(type);
    }

    const handleInputChange = (value) => {
        setSearch(value);
        // console.log(search)
    }

    // console.log(selectedType);

    return (
        <>
            <View px={4}>
                <Form
                    onInputChange={handleInputChange}
                    setInputValue={setSearch}
                // onSubmit={fetchSearch}
                />
                <View display="flex" flexDirection="row">
                    <SearchDropdown onSelectType={handleTypeSelection} />
                    <Button startIcon={
                        <Icon as={<Ionicons name="ios-search" />} />
                    }
                        onPress={fetchSearch}
                        marginLeft={3}
                    >
                        Search
                    </Button>
                </View>
                {error !== "" && (<Text color="red.500">{error}</Text>)}
            </View>
            {isLoading ? (< WaitSearch />) : (<MediaList medias={result} navigation={navigation} />)}
        </>
    )
}