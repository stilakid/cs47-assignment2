import * as React from 'react';
import { Text, View, StyleSheet, Image, Platform, Dimensions } from 'react-native';
import { Icons } from '../../assets/Themes';

const windowWidth = Dimensions.get('window').width;

export default function Header() {
  return (
    <View style={styles.container}>
        <View>
            <Image
                style={styles.menuIcon}
                resizeMode= {'contain'}
                source={Icons.menu.light}
            />
        </View>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>
            ensom
            </Text>
        </View>
        <View>
            <Image
                style={styles.menuIcon}
                resizeMode= {'contain'}
                source={Icons.sun}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: Platform.OS === 'ios' ? (Platform.isPad ? 80 : 41) : 54,
    marginLeft: Platform.isPad ? 45 : 30,
    marginRight: Platform.isPad ? 45 : 30
  },
  title: {
    fontSize: Platform.isPad ? 72 : 32,
    textAlign: 'center',
    fontFamily: 'SydneyBold'
  },
  menuIcon: {
    width: Platform.OS === 'ios' ? (Platform.isPad ? 80 : 41) : 54,
    height: Platform.OS === 'ios' ? (Platform.isPad ? 80 : 41) : 54,
  },
  titleContainer: {
    flex: 1,
  }
});
