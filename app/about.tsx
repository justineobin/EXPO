import { Text, View, StyleSheet, Image } from "react-native";
import { Link } from 'expo-router';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About Me</Text>
      
      <View style={styles.imageContainer}>
        <Image 
          source={require('./img/me.jpg')}  // Replace with actual image path
          style={styles.image}
        />
      </View>

      {/* Text Container with Lighter Green Background */}
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

      {/* Navigation Links */}
      <Link href="/" style={styles.backButton}>Back to Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1D3C34',  // Dark Forest Green
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#F4E1D2',  // Light Beige text color
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,  // Circular image
    borderWidth: 2,
    borderColor: '#F4E1D2',  // Light Beige border
  },
  textContainer: {
    backgroundColor: '#4C8C72',  // Lighter Green Background for the text container
    padding: 20,
    borderRadius: 10,  // Rounded corners
    marginBottom: 30,
    width: '90%',
  },
  description: {
    fontSize: 18,
    color: '#F4E1D2',  // Light Beige text
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
  },
  subText: {
    fontSize: 16,
    color: '#F4E1D2',  // Light Beige text
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
  },
  backButton: {
    fontSize: 18,
    color: '#F4E1D2',  // Light Beige text
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});
