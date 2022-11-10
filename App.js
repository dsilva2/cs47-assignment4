
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import PartOne from "./PartOne";
import SongPreview from "./app/components/songpreview";
import SongDetails from './app/components/songdetails';

const Stack = createStackNavigator();

export default function App(){

    return(

        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="part-one" component={PartOne} />
                <Stack.Screen name="detailed-song" component={SongDetails} />
                <Stack.Screen name="song-preview" component={SongPreview} />
            </Stack.Navigator>
            
        </NavigationContainer>

    );

}