import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "../screens/IndexScreen";
import ShowScreen from "../screens/ShowScreen";

const Stack = createNativeStackNavigator()

export const AppStack = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='Index'
                component={IndexScreen}
                options={{
                    title: 'Movies App',
                    headerStyle: {
                        backgroundColor: '#012945'
                    },
                    headerTitleStyle: {
                        color: '#fff'
                    }
                }}
            />
            <Stack.Screen
                name='Show'
                component={ShowScreen}
                options={({ route }) => ({
                    title: route.params.title || route.params.name,
                    headerBackTitle: "Back"
                })}
            />
        </Stack.Navigator>
    </NavigationContainer>
)