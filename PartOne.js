import { StyleSheet, SafeAreaView, Text, Image, Pressable, ImageBackground, View } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Images, Themes } from "./assets/Themes";
import SpotifyAuthButton from "./app/components/spotifyauthbutton";
import SongList from "./app/components/songlist";
import 'react-native-gesture-handler';

const AuthButton = ({ authFunction }) => {
  return <Pressable onPress={authFunction}>
    <SpotifyAuthButton/>
  </Pressable>
};


export default function PartOne( {navigation} ) {

  const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true); // static line

  let contentDisplayed;
  
  if (token) {

    contentDisplayed = <SongList tracks={tracks} navigation={navigation}></SongList>

  } else {
    contentDisplayed = <AuthButton authFunction={getSpotifyAuth}/>;
  }


  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});