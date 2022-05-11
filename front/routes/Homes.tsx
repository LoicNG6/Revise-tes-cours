import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from "../screens/welcomePages/Welcome";
import Login from "../screens/authentication/Login";
import Registration from "../screens/authentication/Register";
import UserInformation from "../screens/authentication/UserInformation";

const Stack = createNativeStackNavigator();

export default function Homes() {

    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!for fetching my api
    // const [items, setItems]:any = useState([{}]);
    // useEffect(() => {
    //     setItems(result);
    //     console.log(items);
    //     items.map(item => {
    //         console.log(item.id)
    //     })
    // }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Registration" component={Registration} />
                <Stack.Screen name="UserInformation" component={UserInformation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}