import { StyleSheet, Text, View, Image } from "react-native";
import { Images } from "../../assets/Themes";

export default function SpotifyAuthButton() {
  
    return (
        <View style={styles.spotifyButton}>

          <Image source={Images.spotify} style={styles.img}>
          </Image>

        <Text style={styles.connectText} adjustsFontSizeToFit={true}>   CONNECT WITH SPOTIFY</Text>
        </View>
    );
  }


  const styles = StyleSheet.create({
    spotifyButton: {
      backgroundColor: '#1DB954',
      justifyContent: 'space-around',
      alignItems: 'center',
      //flex: 1,
      height: '20%',
      width: '60%',
      flexDirection: 'row',
      borderRadius: 9999,
      padding: 4
    },
    img: {
      resizeMode: 'contain',
      width: '10%',
      aspectRatio: 1,
    },
    connectText: {
      color: 'white',
      width: '85%',
    }
  });
  