import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { MoviesContainer } from "../containers/MoviesContainer";
import { SearchContainer } from "../containers/SearchContainer";
import { TvShowContainer } from "../containers/TvShowContainer";

const IndexScreen = ({ navigation }) => {

    const [active, setActive] = useState("movies");

    const renderTab = () => {
        if (active === "movies") {
            return <MoviesContainer navigation={navigation} />
        } else if (active === "search") {
            return <SearchContainer navigation={navigation} />
        } else if (active === "tvShows") {
            return <TvShowContainer navigation={navigation} />
        }
    }

    return (
        <>
            <View style={styles.navBarCont}>
                <View style={styles.navBar}>
                    <Text
                        onPress={() => setActive("movies")}
                        style={[
                            styles.navBarItem,
                            active === "movies" && styles.activeNavBarItem
                        ]}
                    >
                        Movies</Text>
                    <Text
                        onPress={() => setActive("search")}
                        style={[
                            styles.navBarItem,
                            active === "search" && styles.activeNavBarItem
                        ]}
                    >
                        Search</Text>
                    <Text
                        onPress={() => setActive("tvShows")}
                        style={[
                            styles.navBarItem,
                            active === "tvShows" && styles.activeNavBarItem
                        ]}
                    >
                        TV Shows</Text>
                </View>
                {renderTab()}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    navBar: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        padding: 15,
        borderBottomColor: "#012945",
        borderBottomWidth: 1
    }, navBarItem: {
        color: "#000",

    },
    activeNavBarItem: {
        fontWeight: "bold",
        color: "#012945",
    }
})

export default IndexScreen;