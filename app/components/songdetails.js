
import 'react-native-gesture-handler';
import WebView from "react-native-webview";


export default function SongDetails ({route}) {

    let url = route.params.link

    return (
        <WebView source={{uri: url}}></WebView>
    );

}