import { Box, Heading, VStack, Center, Text, Image, Button, View } from "native-base"

export const MediaCard = props => {

    const { image, title, name, popularity, release_date, first_air_date, overview, navigation, id } = props;

    return (
        <Box borderBottomColor="gray.300" borderBottomWidth={1} borderBottomRadius="md" padding={2} >
            <VStack space={4} display="flex" flexDirection="row" width="100%" alignItems="center">
                <Box display="block">
                    {title && !name &&
                        (<View
                            width="100"
                            height="150"
                        >
                            <Image
                                source={{
                                    uri: `https://image.tmdb.org/t/p/w500/${image}`
                                }}
                                alt={title}
                                width="100"
                                height="150"
                            />
                        </View>)
                    }
                    {!title && name &&
                        (<View
                            width="100"
                            height="150"
                        >
                            <Image
                                source={{
                                    uri: `https://image.tmdb.org/t/p/w500/${image}`
                                }}
                                alt={name}
                                width="100"
                                height="150"
                            />
                        </View>)
                    }
                </Box>

                <View display="flex" flexDirection="column" justifyContent="flex-start" width="95%" pl={3} pr={60}>
                    {title && !name && (<Heading size="xs" width="80%">{title}</Heading>)}
                    {!title && name && (<Heading size="xs" width="80%">{name}</Heading>)}
                    <Text>Popularity: {popularity}</Text>
                    {release_date && !first_air_date && <Text>Release Date: {release_date}</Text>}
                    {!release_date && first_air_date && <Text>First Air Date: {first_air_date}</Text>}
                    <Box width="50%" paddingTop={3}>
                        <Button
                            onPress={() => {
                                navigation.navigate("Show", {
                                    image,
                                    title,
                                    name,
                                    popularity,
                                    release_date,
                                    first_air_date,
                                    overview,
                                    id
                                })
                            }}
                        >
                            More Details</Button>
                    </Box>
                </View>
            </VStack>
        </Box>
    )
}