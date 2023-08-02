import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function Design() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <LinearGradient
          colors={['#2E2B69', '#1A0087', '#2A12CC', '#2A12CC']}
          style={styles.linearGradient}>
          <View style={{ width: 200, height: 472 }}>
            <Image
              source={require('./img/Ellipse2.png')}
              style={{ width: 400.2, height: 400.15, marginLeft: -147, top: -9.77, position: 'absolute' }}
            />
            <Image
              source={require('./img/Ellipse1.png')}
              style={{ width: 272, height: 252, marginLeft: 198, position: 'absolute' }}
            />
            <Image
              source={require('./img/Ellipse3.png')}
              style={{ width: 272, height: 265, top: 214.63, left: 249, position: 'absolute' }}
            />
            <Image
              source={require('./img/king.png')}
              style={{ width: 50, height: 35.35, top: 157, left: 200, position: 'absolute', transform: [{ rotate: '25deg' }] }}
            />
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', top: 180, left: 55 }}>2</Text>
            <Image
              source={require('./img/centerimage.png')}
              style={{ width: 130, height: 130, marginLeft: 138, top: 203, position: 'absolute' }}
            />
            <Image
              source={require('./img/uparrow.png')}
              style={{ width: 9, height: 7, marginLeft: 55, top: 210, position: 'absolute' }}
            />
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', top: 157, left: 337 }}>3</Text>

            <Image
              source={require('./img/downarrow.png')}
              style={{ width: 9, height: 7, marginLeft: 337, top: 210, position: 'absolute' }}
            />
            <Image
              source={require('./img/Ellipse4.png')}
              style={{ width: 180, height: 180, marginLeft: 112.28, top: 179.91, position: 'absolute' }}
            />
            <Image
              source={require('./img/firstimage.png')}
              style={{ width: 85, height: 87, marginLeft: 19, top: 230, position: 'absolute' }}
            />
            <Image
              source={require('./img/lastimage.png')}
              style={{ width: 89, height: 89, marginLeft: 298, top: 228, position: 'absolute' }}
            />
            <Image
              source={require('./img/firstimageborder.png')}
              style={{ width: 107, height: 107, marginLeft: 8, top: 221, position: 'absolute' }}
            />
            <Image
              source={require('./img/firstimageborder.png')}
              style={{ width: 107, height: 107, marginLeft: 290, top: 221, position: 'absolute' }}
            />
          </View>

        </LinearGradient>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  linearGradient: {

  },
});
