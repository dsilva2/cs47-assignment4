import { StyleSheet, SafeAreaView, FlatList, View, Image, Text } from "react-native";
import Song from "./song";
import { Images } from "../../assets/Themes";



export default function SongList ({tracks, navigation}) {

    const renderSongItem = ({item, index}) => {
        return <Song 
        index={index}
        imageUrl={item.album.images[1].url}
        songName={item.name}
        artistName={item.artists[0].name}
        albumName={item.album.name}
        duration={item.duration_ms}
        navigation={navigation}
        external_url={item.external_urls.spotify}
        preview_url={item.preview_url}
        />
    }

    return (
        <SafeAreaView>
            <View style={styles.spotifyButton}>

                <Image source={Images.spotify} style={styles.img}></Image>
                <Text style={styles.topTrackText} adjustsFontSizeToFit={true}> My Top Tracks</Text>
            </View>

            <FlatList
                data={tracks}
                renderItem={(item) => renderSongItem(item)}
                keyExtractor={(item, index) => index}>

            </FlatList>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    spotifyButton: {
      justifyContent: 'center',
      alignItems: 'center',
      //flex: 1,
      height: '10%',
      width: '100%',
      flexDirection: 'row',
      padding: 4,
    },
    img: {
      resizeMode: 'contain',
      width: '10%',
      aspectRatio: 1,
    },
    topTrackText: {
      color: 'white',
      width: '85%',
      fontSize: 25,
      fontWeight: 'bold'
    },
    
  });
  
  