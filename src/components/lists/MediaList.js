import { FlatList } from "native-base";
import { MediaCard } from "../listItems/MediaCard";

export const MediaList = props => {

    const { medias, navigation } = props;

    return (

        <FlatList
            data={medias}
            renderItem={({ item }) => (
                <MediaCard
                    image={item.poster_path}
                    title={item.title}
                    name={item.name}
                    popularity={item.popularity}
                    release_date={item.release_date}
                    first_air_date={item.first_air_date}
                    overview={item.overview}
                    id={item.id}
                    navigation={navigation}
                />
            )}
        />
    )
}