import { StyleSheet, SafeAreaView, Text, Image, Pressable, ImageBackground, View } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Images, Themes } from "./assets/Themes";
import SpotifyAuthButton from "./app/components/spotifyauthbutton";
import SongList from "./app/components/songlist";

const AuthButton = ({ authFunction }) => {
  return <Pressable onPress={authFunction}>
    <SpotifyAuthButton/>
  </Pressable>
};


export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  // token: Boolean - authenticated or not
  // tracks: [{}] - tracks
  // getSpotifyAuth - function
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true); // static line

  //console.log(token);
  //console.log(tracks[0])
 // console.log(tracks[1].name, tracks[1].track_number, tracks[1].artists[0].name, tracks[1].album.name, tracks[1].album.images[1].url)
  // if token is True, render FlatList
  // else, render Authentication button

  let contentDisplayed;
  

  
  if (token) {
    // const sz = tracks.length
    // console.log(tracks[9].album.name)
    //console.log(tracks[9])
    //var songName = tracks[1].name
    //console.log(sz, songName)

    contentDisplayed = <SongList tracks={tracks}></SongList>

  } else {
    // render AuthButton
    contentDisplayed = <AuthButton authFunction={getSpotifyAuth}/>;
  }


  return (
    <SafeAreaView style={styles.container}>
      {/* TODO: Your code goes here */}
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