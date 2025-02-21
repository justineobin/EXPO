import { Text, View, StyleSheet, Linking } from "react-native";
import { Link } from 'expo-router'; 

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Me</Text>

      {/* Email */}
      <View style={styles.contactContainer}>
        <Text style={styles.contactLabel}>Email:</Text>
        <Text 
          style={styles.contactInfo} 
          onPress={() => Linking.openURL('mailto:jobin@gbox.ncf.edu.ph')} // Email link corrected
        >
          jobin@gbox.ncf.edu.ph
        </Text>
      </View>

      {/* Phone */}
      <View style={styles.contactContainer}>
        <Text style={styles.contactLabel}>Phone:</Text>
        <Text 
          style={styles.contactInfo} 
          onPress={() => Linking.openURL('tel:+639063431602')} // Phone number corrected
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  contactContainer: {
    backgroundColor: '#2C6B2F', // Lighter Green for the contact container
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  contactLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F4E1D2',  // Light Beige color for labels
    marginBottom: 10,
  },
  contactInfo: {
    fontSize: 18,
    color: '#F4E1D2',  // Light Beige color for the contact info
    textDecorationLine: 'underline',  // Makes the text look like a link
  },
  subText: {
    fontSize: 16,
    color: '#F4E1D2',  // Light Beige color for the description text
    marginBottom: 20,
  },
  backButton: {
    fontSize: 18,
    color: '#F4E1D2',  // Light Beige color for the back button
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});
