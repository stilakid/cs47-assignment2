import * as React from 'react';
import reactDom from 'react-dom';
import { Text, View, StyleSheet, Image, Dimensions, ImageBackground, Platform } from 'react-native';
import { Icons, Profiles, Themes } from '../../assets/Themes';

const windowWidth = Dimensions.get('window').width;

export default function Body() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={[styles.card, styles.profileContainer]}
        resizeMode= {'cover'}
        source={Profiles.mtl.image}>
          <Text style={[styles.text, styles.profileText, styles.artistName]}>
            MTL
          </Text>
          <Text style={[styles.text, styles.profileText, styles.albumName]}>
            1 miles away
          </Text>
      </ImageBackground>
      <View style={[styles.card, styles.playerContainer]}>
        <Text style={[styles.text, styles.songName]}>
          My hottest take
        </Text>
        <View style={styles.iconsContainer}>
          <Image
            style={[styles.icon, styles.player]}
            resizeMode= {'contain'}
            source={Icons.player.light}
          />
          <Image
            style={[styles.icon, styles.wave]}
            resizeMode= {'contain'}
            source={Icons.audioWave.light}
          />
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  },
  card: {
    width: Platform.isPad ? windowWidth * 0.70: windowWidth * 0.84,
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,

    marginLeft: Platform.isPad ? windowWidth * 0.15: windowWidth * 0.08,
    marginRight: Platform.isPad ? windowWidth * 0.15: windowWidth * 0.08,
    marginTop: Platform.isPad ? windowWidth * 0.04: windowWidth  * 0.08
  },
  profileContainer: {
    aspectRatio: 1/1.1,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    marginTop: Platform.isPad ? windowWidth * 0.01: windowWidth  * 0.08
  },
  playerContainer: {
    borderRadius: 30,
    padding: Platform.isPad ? 30 : 15,
    backgroundColor: Themes.light.bgSecondary
  },
  icon: {
    height: Platform.isPad ? windowWidth * 0.1: windowWidth*0.14,
    width: Platform.isPad ? windowWidth * 0.1: windowWidth*0.14,
    marginBottom: Platform.isPad ? windowWidth * 0.02: windowWidth*0.04
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  player: {
    marginRight: Platform.isPad ? windowWidth * 0.01: windowWidth*0.02
  },
  wave: {
    width: Platform.isPad ? windowWidth * 0.55: windowWidth*0.6,
  },
  text: {
    fontFamily: 'Sydney',
    color: Themes.light.text
  },
  profileText: {
    color: Themes.light.textSecondary,
    margin: Platform.isPad ? 20 : 10
  },
  songName: {
    fontSize: Platform.isPad ? 56: 32,
    marginBottom: windowWidth*0.02
  },
  albumName: {
    fontSize: Platform.isPad ? 28 : 18,
    position: 'absolute',
    bottom: 0
  },
  artistName: {
    fontSize: Platform.isPad ? 56 : 32
  }
});