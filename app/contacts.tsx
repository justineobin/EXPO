import { Text, View, StyleSheet, Linking, ImageBackground } from "react-native";
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function Contact() {
  return (
    <ImageBackground 
      source={require('./img/2.jpg')} 
      style={styles.container}
      resizeMode="cover" 
    >
      <View style={styles.scrollContainer}>
        <Text style={styles.header}>Contact Me</Text>

        {/* Email */}
        <View style={styles.contactContainer}>
          <Text style={styles.contactLabel}>Email:</Text>
          <Text 
            style={styles.contactInfo} 
            onPress={() => Linking.openURL('mailto:jobin@gbox.ncf.edu.ph')} 
          >
            jobin@gbox.ncf.edu.ph
          </Text>
        </View>

        {/* Phone */}
        <View style={styles.contactContainer}>
          <Text style={styles.contactLabel}>Phone:</Text>
          <Text 
            style={styles.contactInfo} 
            onPress={() => Linking.openURL('tel:+639063431602')} 
          >
            +63 906 343 1602
          </Text>
        </View>

        {/* Facebook */}
        <View style={styles.contactContainer}>
          <Text style={styles.contactLabel}>Facebook:</Text>
          <Text 
            style={styles.contactInfo} 
            onPress={() => Linking.openURL('https://web.facebook.com/justine.obin.50')}
          >
            facebook.com/justine.obin.50
          </Text>
        </View>

        {/* GitHub */}
        <View style={styles.contactContainer}>
          <Text style={styles.contactLabel}>GitHub:</Text>
          <Text 
            style={styles.contactInfo} 
            onPress={() => Linking.openURL('https://github.com/your-profile')}
          >
            github.com/your-profile
          </Text>
        </View>

        <Link href="/" style={styles.backButton}>Back to Home</Link>
      </View>

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
  contactContainer: {
    backgroundColor: 'rgba(255, 182, 150, 0.8)',  
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  contactLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F4E1D2',  
    marginBottom: 10,
  },
  contactInfo: {
    fontSize: 18,
    color: '#F4E1D2',  
    textDecorationLine: 'underline', 
  },
  subText: {
    fontSize: 16,
    color: '#F4E1D2',  
    marginBottom: 20,
  },
  backButton: {
    fontSize: 18,
    color: '#F4E1D2',  
    textDecorationLine: 'underline',
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
