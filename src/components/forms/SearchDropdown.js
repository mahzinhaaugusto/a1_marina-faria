import { Select, Center, Box, CheckIcon } from "native-base";
import { useState, useEffect } from "react";

export const SearchDropdown = props => {

    const { onSelectType } = props;

    const [selectedType, setSelectedType] = useState(null);

    useEffect(() => {
        if (selectedType) {
            onSelectType(selectedType);
        }
    }, [selectedType]);

    return (
        <Center>
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
                    <Select.Item label="multi" value="multi" />
                    <Select.Item label="movie" value="movie" />
                    <Select.Item label="tv" value="tv" />
                </Select>
            </Box>
        </Center>
    )
}