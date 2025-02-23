import { Text, View, StyleSheet, Image, ScrollView, ImageBackground } from "react-native";
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function Hobbies() {
  return (
    <ImageBackground 
      source={require('./img/2.jpg')} 
      style={styles.container}
      resizeMode="cover" 
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>My Hobbies</Text>

        <View style={styles.hobbyContainer}>
          <Image 
            source={require('./img/gen.jpg')}  
            style={styles.hobbyImage}
          />
          <View style={styles.textContainer}> 
            <Text style={styles.hobbyName}>Genshin Impact</Text>
            <Text style={styles.hobbyDescription}>
              One of my favorite hobbies is playing **Genshin Impact**, a popular open-world action role-playing game. 
              I love exploring the vast world of Teyvat, discovering new characters, and completing quests. It’s not only fun, 
              but also allows me to immerse myself in a beautifully crafted world with engaging storylines and stunning visuals.
            </Text>
          </View>
        </View>

        <View style={styles.hobbyContainer}>
          <Image 
            source={require('./img/anim.jpg')}  
            style={styles.hobbyImage}
          />
          <View style={styles.textContainer}> 
            <Text style={styles.hobbyName}>Anime</Text>
            <Text style={styles.hobbyDescription}>
              Another hobby of mine is watching **Anime**. I enjoy watching different genres, from action-packed series 
              to heartwarming stories. Anime has introduced me to diverse cultures and themes, and I always look forward to 
              discovering new series and characters. It's a great way to unwind and experience unique storytelling.
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.toolbar}>
        {/* Home Button */}
        <Link href="/" style={styles.button}>
          <MaterialIcons name="home" size={24} color="#1D3C34" />
        </Link>
        {/* Other Navigation Links */}
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
    width: '100%',  
    height: '100%',  
  },
  scrollContainer: {
    flexGrow: 1, 
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#F4E1D2',  
  },
  hobbyContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  hobbyImage: {
    width: 200,    
    height: 200,   
    borderRadius: 15,  
    marginBottom: 10,
  },
  textContainer: {
    backgroundColor: 'rgba(255, 182, 150, 0.8)',  
    padding: 15,
    borderRadius: 10,
    width: '90%',  
    alignItems: 'center',
  },
  hobbyName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',  
    marginBottom: 10,
  },
  hobbyDescription: {
    fontSize: 16,
    color: '#333333',  
    textAlign: 'center',
    lineHeight: 24,
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
