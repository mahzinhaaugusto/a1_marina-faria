import { Box, Center, Image, Heading, Text, View } from "native-base";
import { useState, useEffect } from "react";
import axios from "axios";

const MediaContainer = ({ navigation, route }) => {

    // const { id, mediaType } = route.params;
    // const [media, setMedia] = useState(null);

    // useEffect(() => {
    //     const fetchMedia = async () => {
    //         try {
    //             let endpoint;
    //             if (mediaType === "movie") {
    //                 endpoint = `https://api.themoviedb.org/3/movie/${id}?api_key=6b1e9107faaaceac50d80ee955d31f86`;
    //             } else if (mediaType === "tv") {
    //                 endpoint = `https://api.themoviedb.org/3/tv/${id}?api_key=6b1e9107faaaceac50d80ee955d31f86`;
    //             }
    //             const response = await axios.get(endpoint);
    //             setMedia(response.data.results);
    //         }
    //         catch (error) {
    //             console.log("Error: ", error);
    //         }
    //     }
    //     fetchMedia();
    // }, [id, mediaType]);

    // if (!media) {
    //     return null;
    // }

    // console.log(media);

    // const { image, title, name, popularity, release_date, first_air_date, overview } = media;
    const { image, title, name, popularity, release_date, first_air_date, overview } = route.params;

    return (
        <Box width="100%">
            <Center py={10}>
                {title && !name && (<Heading size="md" paddingBottom={3}>{title}</Heading>)}
                {!title && name && (<Heading size="md" paddingBottom={3}>{name}</Heading>)}
                {title && !name &&
                    (<Image
                        source={{
                            uri: `https://image.tmdb.org/t/p/w500/${image}`
                        }}
                        alt={title}
                        width="200"
                        height="280"
                        marginTop={2}
                    // marginBottom={2}
                    />)
                }
                {!title && name &&
                    (<Image
                        source={{
                            uri: `https://image.tmdb.org/t/p/w500/${image}`
                        }}
                        alt={name}
                        width="200"
                        height="280"
                        marginTop={2}
                    // marginBottom={2}
                    />)
                }
                <Text margin={10}>{overview}</Text>
                <View display="flex" flexDirection="row" >
                    <Text fontSize={12}>Popularity: {popularity} | </Text>
                    {release_date && !first_air_date && <Text fontSize={12}>Release Date: {release_date}</Text>}
                    {!release_date && first_air_date && <Text fontSize={12}>First Air Date: {first_air_date}</Text>}
                </View>
            </Center>
        </Box>
    )
}

export default MediaContainer;