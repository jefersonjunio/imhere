import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import { Home } from "../screen/Home";
import { ScreenB } from "../screen/ScreenB";

export function StackRoutes(){
    return (
        <Navigator>
            <Screen
                name='screenB'
                component={ScreenB}
                options={{
                    headerShown: false,
                }}
            />

            <Screen
                name='home'
                component={Home}
            />
             

           
        </Navigator>
    )
}