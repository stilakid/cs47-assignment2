import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, Platform } from 'react-native';
import { Themes, Icons, Profiles } from '../../assets/Themes';

const windowWidth = Dimensions.get('window').width;

export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image
              style={styles.icon}
              resizeMode= {'contain'}
              source={Icons.discover.light}
          />
          <Text style={styles.text}>
            Discover
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <Image
              style={styles.icon}
              resizeMode= {'contain'}
              source={Icons.heart.light}
          />
          <Text style={styles.text}>
            Matches
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <Image
              style={styles.icon}
              resizeMode= {'contain'}
              source={Icons.messages.light}
          />
          <Text style={styles.text}>
            DMs
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: Platform.isPad ? windowWidth * 0.15: windowWidth * 0.08,
    marginRight: Platform.isPad ? windowWidth * 0.15: windowWidth * 0.08,
  },
  footer: {
    height: Platform.isPad ? 110 : 70,
    backgroundColor: Themes.light.navigation,
    padding: 10
  },
  icon: {
    height: Platform.isPad ? 60 : 40,
    width: Platform.isPad ? 60 : 40
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Sydney',
    fontSize: Platform.isPad ? 28 : 17
  }
});