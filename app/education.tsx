import { Text, View, StyleSheet, Image, ScrollView, ImageBackground } from "react-native";
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function Education() {
  return (
    <ImageBackground 
      source={require('./img/2.jpg')}  
      style={styles.container}
      resizeMode="cover" 
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>My Education Journey</Text>

        
        <View style={styles.schoolContainer}>
          <Image 
            source={require('./img/elem.jpg')}  
            style={styles.schoolLogo}
          />
          <View style={styles.textContainer}>
            <Text style={styles.schoolName}>New Anglo Fil Chinese School (Elementary)</Text>
            <Text style={styles.schoolDescription}>
              I began my educational journey at New Anglo Fil Chinese School, where I completed my elementary education. 
              The school provided a strong academic foundation while fostering values and discipline. I developed my love for learning
              during these formative years and engaged in extracurricular activities that helped shape my interests.
            </Text>
          </View>
        </View>

        
        <View style={styles.schoolContainer}>
          <Image 
            source={require('./img/high.jpg')}  
            style={styles.schoolLogo}
          />
          <View style={styles.textContainer}>
            <Text style={styles.schoolName}>Eduardo V. Agomma High School</Text>
            <Text style={styles.schoolDescription}>
              After elementary, I transitioned to Eduardo V. Agomma High School, where I developed deeper academic interests 
              and made lasting friendships. This was a time of intellectual growth, where I began exploring subjects like 
              technology and science, which would later shape my career aspirations. The school encouraged critical thinking 
              and leadership, preparing me for the next chapter of my academic journey.
            </Text>
          </View>
        </View>

        
        <View style={styles.schoolContainer}>
          <Image 
            source={require('./img/coll.jpg')}  
            style={styles.schoolLogo}
          />
          <View style={styles.textContainer}>
            <Text style={styles.schoolName}>Naga College Foundation</Text>
            <Text style={styles.schoolDescription}>
              Currently, I am continuing my education at Naga College Foundation. Here, I am pursuing higher education with a focus 
              on [Computer Science]. The school offers a great learning environment and resources to enhance my academic 
              and personal growth. I am gaining the skills and knowledge I need to prepare for my future career, while also 
              participating in extracurricular activities that broaden my horizons.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Navigation Toolbar */}
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
  schoolContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  schoolLogo: {
    width: 120,
    height: 120,
    borderRadius: 15,  
    marginBottom: 10,
  },
  textContainer: {
    backgroundColor: 'rgba(255, 182, 150, 0.8)', 
    padding: 20,
    borderRadius: 10,
    width: '80%',
    marginHorizontal: 'auto',
  },
  schoolName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F4E1D2',  
    marginBottom: 10,
  },
  schoolDescription: {
    fontSize: 16,
    color: '#F4E1D2', 
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
