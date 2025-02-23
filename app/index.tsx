import { Text, View, StyleSheet, ImageBackground, Image } from "react-native";
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

import backgroundImage from './img/2.jpg';  
import profileImage from './img/me.jpg';  

export default function Index() {
  return (
    <ImageBackground 
      source={backgroundImage}  
      style={styles.container}
      resizeMode="cover" 
    >
      <View style={styles.content}>
        <Image source={profileImage} style={styles.profileImage} />
        <Text style={styles.text}>Homescreen ni pogi</Text>
      </View>
      <View style={styles.toolbar}>
        <Link href="/" style={styles.button}> 
          <MaterialIcons name="home" size={24} color="#1D3C34" />
        </Link>
        <Link href="/about" style={styles.button}>
          <MaterialIcons name="info" size={24} color="#1D3C34" />
        </Link>
        <Link href="/education" style={styles.button}>
          <MaterialIcons name="school" size={24} color="#1D3C34" />
        </Link>
        <Link href="/hobbies" style={styles.button}>
          <MaterialIcons name="sports-soccer" size={24} color="#1D3C34" />
        </Link>
        <Link href="/skills" style={styles.button}>
          <MaterialIcons name="build" size={24} color="#1D3C34" />
        </Link>
        <Link href="/contacts" style={styles.button}>
          <MaterialIcons name="contacts" size={24} color="#1D3C34" />
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    justifyContent: 'space-between', 
    width: '100%', 
    height: '100%', 
  },
  content: {
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center', 
    padding: 20,
  },
  profileImage: {
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    marginBottom: 10,  
  },
  text: {
    fontSize: 24,
    color: '#F5F5DC',
  },
  toolbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(244, 225, 210, 0.8)', 
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    textDecorationLine: 'none',
  },
});
