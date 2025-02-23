import { Text, View, StyleSheet, Image, ImageBackground, ScrollView } from "react-native";
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function About() {
  return (
    <ImageBackground 
      source={require('./img/2.jpg')}  
      style={styles.container}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>About Me</Text>

        <View style={styles.imageContainer}>
          <Image 
            source={require('./img/me.jpg')}  
            style={styles.image}
          />
        </View>

       
        <View style={styles.textContainer}>
          <Text style={styles.description}>
            Hello! I'm [Justine], a passionate and driven individual with a love for technology, design, and creative problem-solving. 
            Over the years, I've developed a strong interest in software development, particularly mobile application development. 
            I enjoy creating products that not only serve a purpose but also provide a seamless user experience.
          </Text>

          <Text style={styles.description}>
            With a background in [computer programming], I have gained experience working with a variety of tools and technologies such as 
            JavaScript, React Native, and UI/UX principles. In addition to my technical skills, I am also keen on design and enjoy 
            bringing aesthetics and functionality together. I believe in continuous learning and always strive to stay up-to-date 
            with the latest trends in tech and design.
          </Text>

          <Text style={styles.subText}>
            Outside of work, I love to explore new hobbies, meet new people, and take on personal projects that challenge my creativity. 
            I’m always looking for opportunities to collaborate on exciting projects and learn from others. Feel free to reach out if you’d like to connect or discuss potential collaborations!
          </Text>
        </View>

      
        <Link href="/" style={styles.backButton}>Back to Home</Link>
      </ScrollView>

    
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
    marginBottom: 20,
    color: '#F4E1D2',  
    textAlign: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,  
    borderWidth: 2,
    borderColor: '#F4E1D2',  
  },
  textContainer: {
    backgroundColor: 'rgba(255, 182, 150, 0.8)',  
    padding: 20,
    borderRadius: 10,  
    marginBottom: 30,
    width: '90%',
    alignSelf: 'center',  
  },
  description: {
    fontSize: 18,
    color: '#F4E1D2',  
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
  },
  subText: {
    fontSize: 16,
    color: '#F4E1D2',  
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
  },
  backButton: {
    fontSize: 18,
    color: '#F4E1D2', 
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 20,
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
