import { StyleSheet, Image, SafeAreaView, Text, View} from "react-native";
import { millisToMinutesAndSeconds } from "../../utils";

export default function Song({index, imageUrl, songName, artistName, albumName, duration}) {

    return (
        <SafeAreaView style={styles.songComponent}>

            <View style={styles.songIndexBox}>
                <Text style={styles.textStyle}>{index + 1}</Text>
            </View>

            <View style={styles.albumImageBox}>
                <Image style={styles.albumImageStyle} source={{uri: imageUrl}}></Image>
            </View>

            <View style={styles.songInfo}>
                <Text style={styles.textStyle} numberOfLines={1}>{songName}</Text>
                <Text style={styles.textStyle} numberOfLines={1}>{artistName}</Text>
            </View>

            <View style={styles.albumBox}>
                <Text style={styles.textStyle} numberOfLines={1}> {albumName} </Text>
            </View>

            <View style={styles.songDurationBox}>
                <Text style={styles.textStyle}> {millisToMinutesAndSeconds(duration)} </Text>
            </View>

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