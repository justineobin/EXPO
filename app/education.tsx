import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

export default function Education() {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>My Education Journey</Text>

        {/* New Anglo Fil Chinese School (Elementary) */}
        <View style={styles.schoolContainer}>
          <Image 
            source={require('./img/elem.jpg')}  // Path to the logo image
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

        {/* Eduardo V. Agomma (High School) */}
        <View style={styles.schoolContainer}>
          <Image 
            source={require('./img/high.jpg')}  // Path to the logo image
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

        {/* Naga College Foundation (Current) */}
        <View style={styles.schoolContainer}>
          <Image 
            source={require('./img/coll.jpg')}  // Path to the logo image
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    padding: 20,
    backgroundColor: '#1D3C34',  // Dark Forest Green background
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#F4E1D2',  // Light Beige text color for header
  },
  schoolContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  schoolLogo: {
    width: 120,
    height: 120,
    borderRadius: 15,  // Rounded corners for the logos
    marginBottom: 10,
  },
  textContainer: {
    backgroundColor: '#4C8C72', // Lighter Green background for text container
    padding: 20,
    borderRadius: 10,  // Rounded corners for the container
    width: '80%',  // Reduced width to make it smaller and fit better on screen
    marginHorizontal: 'auto', // Center-align the container horizontally
  },
  schoolName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F4E1D2',  // Light Beige text color for school names
    marginBottom: 10,
  },
  schoolDescription: {
    fontSize: 16,
    color: '#F4E1D2',  // Light Beige text for description
    textAlign: 'center',
    lineHeight: 24,
  },
});
