import { StyleSheet, Image, SafeAreaView, Text, View, Pressable} from "react-native";
import { millisToMinutesAndSeconds } from "../../utils";
import { Ionicons } from '@expo/vector-icons';
import { Themes } from "../../assets/Themes";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { WebView } from "react-native-webview"


export default function Song({imageUrl, songName, artistName, albumName, duration, navigation, preview_url, external_url}) {


    return (
        <SafeAreaView style={styles.songComponent}>

            <Pressable style={styles.songIndexBox} onPress={() => {navigation.navigate("song-preview", {link: preview_url})}}>
                    <Ionicons name="play-circle" size={32} color={Themes.colors.spotify} />
            </Pressable>
            <Pressable style={styles.albumImageBox} onPress={() => {navigation.navigate("song-preview", {link: external_url})}}>
                <Image style={styles.albumImageStyle} source={{uri: imageUrl}}></Image>
            </Pressable>

            <Pressable style={styles.songInfo} onPress={() => {navigation.navigate("song-preview", {link: external_url})}}>
                <Text style={styles.textStyle} numberOfLines={1}>{songName}</Text>
                <Text style={styles.textStyle} numberOfLines={1}>{artistName}</Text>
            </Pressable>

            <Pressable style={styles.albumBox} onPress={() => {navigation.navigate("song-preview", {link: external_url})}}>
                <Text style={styles.textStyle} numberOfLines={1}> {albumName} </Text>
            </Pressable>

            <Pressable style={styles.songDurationBox} onPress={() => {navigation.navigate("song-preview", {link: external_url})}}>
                <Text style={styles.textStyle}> {millisToMinutesAndSeconds(duration)} </Text>
            </Pressable>

        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    songIndexBox: {
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    albumBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '25%',
    },
    albumImageBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '15%',
    },

    albumImageStyle: {
        height: 50,
        width: 50,
    },
    songInfo: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '35%',
    }, 

    songDurationBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
        
    }, 
    

    songComponent: { 
        flexDirection: 'row',
        display: 'flex',
    }, 

    textStyle: {
        color: '#FFFFFF',
        fontSize: 10
        
    }

})