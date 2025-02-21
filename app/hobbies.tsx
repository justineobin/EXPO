import { Text, View, StyleSheet, Image } from "react-native";

export default function Hobbies() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Hobbies</Text>

      {/* Genshin Impact */}
      <View style={styles.hobbyContainer}>
        <Image 
          source={require('./img/gen.jpg')}  // Replace with actual Genshin Impact image path
          style={styles.hobbyImage}
        />
        <View style={styles.textContainer}> {/* New container for text */}
          <Text style={styles.hobbyName}>Genshin Impact</Text>
          <Text style={styles.hobbyDescription}>
            One of my favorite hobbies is playing **Genshin Impact**, a popular open-world action role-playing game. 
            I love exploring the vast world of Teyvat, discovering new characters, and completing quests. It’s not only fun, 
            but also allows me to immerse myself in a beautifully crafted world with engaging storylines and stunning visuals.
          </Text>
        </View>
      </View>

      {/* Anime */}
      <View style={styles.hobbyContainer}>
        <Image 
          source={require('./img/anim.jpg')}  // Replace with actual anime image path
          style={styles.hobbyImage}
        />
        <View style={styles.textContainer}> {/* New container for text */}
          <Text style={styles.hobbyName}>Anime</Text>
          <Text style={styles.hobbyDescription}>
            Another hobby of mine is watching **Anime**. I enjoy watching different genres, from action-packed series 
            to heartwarming stories. Anime has introduced me to diverse cultures and themes, and I always look forward to 
            discovering new series and characters. It's a great way to unwind and experience unique storytelling.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1D3C34',  // Dark Forest Green background (same as Index and Education)
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#F4E1D2',  // Light Beige text color to contrast against the dark green
  },
  hobbyContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  hobbyImage: {
    width: 200,    // Larger image size
    height: 200,   // Larger image size
    borderRadius: 15,  // Smooth edges for the images
    marginBottom: 10,
  },
  textContainer: {
    backgroundColor: '#A8E6CF',  // Lighter green background for the text container
    padding: 15,
    borderRadius: 10,
    width: '90%',  // Makes the container slightly narrower than the image
    alignItems: 'center',
  },
  hobbyName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',  // Dark text for the hobby name
    marginBottom: 10,
  },
  hobbyDescription: {
    fontSize: 16,
    color: '#333333',  // Dark text for the description
    textAlign: 'center',
    lineHeight: 24,
  },
});
