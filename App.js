import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes, Icons, Profiles } from './assets/Themes';
import Header from './app/components/header';
import Body from './app/components/body';
import Footer from './app/components/footer';


export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
        {/* <Text
          style={{
            fontFamily: 'Sydney', // test to see if the font is loaded, feel free to remove this
          }}>
          Open up App.js to start working on your app!
        </Text>
        <Text
          style={{
            fontFamily: 'SydneyBold', // test to see if the font is loaded, feel free to remove this
          }}>
          ~Good luck~
        </Text> */}
      </SafeAreaView>
      <SafeAreaView
        edges={["bottom"]}
        style={{ flex: 0, backgroundColor: Themes.light.navigation }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg
  }
});
