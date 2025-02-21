import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Homescreen ni pogi</Text>
      <Link href="/about" style={styles.button}>About</Link>
      <Link href="/education" style={styles.button}>Education</Link>
      <Link href="/hobbies" style={styles.button}>Hobbies</Link>
      <Link href="/skills" style={styles.button}>Skills</Link>
      <Link href="/contacts" style={styles.button}>Contacts</Link>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1D3C34',  
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    color: '#F5F5DC', 
  },
  button: {
    fontSize: 18,
    marginVertical: 10,
    color: '#1D3C34',              
    backgroundColor: '#F4E1D2',     
    paddingVertical: 12,            
    paddingHorizontal: 25,          
    borderRadius: 5,                
    textAlign: 'center',           
    width: '80%',                  
    textDecorationLine: 'none',    
  },
});
