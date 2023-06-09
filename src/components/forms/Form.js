import { VStack, FormControl, HStack, Input, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";

export const Form = props => {

    const { onInputChange, setInputValue } = props;

    return (
        <VStack space={2} width="100%" py={5}>
            <FormControl isRequired>
                <FormControl.Label color="black">Search Movie/TV Show Name</FormControl.Label>
                <HStack width="100%" space={2} display="flex">
                    <Input
                        placeholder="i.e. James Bond, CSI"
                        variant="filled"
                        bg="gray.200"
                        px={3}
                        width="85%"
                        InputLeftElement={
                            <Icon size={5} ml={2} color="gray.400" as={< Ionicons name="ios-search" />} />
                        }
                        onChangeText={value => {
                            onInputChange(value);
                            setInputValue(value);
                        }}
                    />
                </HStack>
            </FormControl>
        </VStack>
    )
}