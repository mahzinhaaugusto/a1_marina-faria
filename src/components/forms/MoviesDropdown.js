import { Select, Center, Box, CheckIcon } from "native-base";
import { useState, useEffect } from "react";

export const MoviesDropdown = props => {

    const { onSelectType } = props;

    const [selectedType, setSelectedType] = useState(null);

    useEffect(() => {
        if (selectedType) {
            onSelectType(selectedType);
        }
    }, [selectedType]);

    return (
        <Center paddingBottom={2} paddingTop={2}>
            <Box>
                <Select
                    selectedValue={selectedType}
                    minWidth="200"
                    _selectedItem={{
                        bg: "gray.200",
                        endIcon: <CheckIcon size="5" />
                    }}
                    placeholder="Choose an option"
                    accessibilityLabel="Choose an option"
                    onValueChange={type => setSelectedType(type)}
                >
                    <Select.Item label="now playing" value="now_playing" />
                    <Select.Item label="popular" value="popular" />
                    <Select.Item label="top rated" value="top_rated" />
                    <Select.Item label="upcoming" value="upcoming" />
                </Select>
            </Box>
        </Center>
    )
}