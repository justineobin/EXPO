import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function Skills() {
    return (
        <ImageBackground 
            source={require('./img/2.jpg')}  
            style={styles.container}
            resizeMode="cover" 
        >
            <View style={styles.innerContainer}>
                <Text style={styles.header}>My Skills</Text>
                
                
                <View style={styles.textContainer}>
                    <Text style={styles.skillDescription}>
                        I have developed a variety of technical and creative skills over the years, which have been essential in my journey as a software developer.
                    </Text>

                    <Text style={styles.skillDescription}>
                        Some of the key skills I have include:
                    </Text>

                    <Text style={styles.skillList}>
                        - JavaScript (ES6+)
                    </Text>
                    <Text style={styles.skillList}>
                        - React Native for mobile app development
                    </Text>
                    <Text style={styles.skillList}>
                        - UI/UX design principles
                    </Text>
                    <Text style={styles.skillList}>
                        - Version control with Git
                    </Text>
                    <Text style={styles.skillList}>
                        - Problem-solving and critical thinking
                    </Text>

                    <Text style={styles.skillDescription}>
                        I am always eager to learn new technologies and improve my skills, especially in the areas of mobile development, front-end frameworks, and user experience design.
                    </Text>
                </View>
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
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    innerContainer: {
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 20,
        width: '100%',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#F4E1D2', 
        marginBottom: 20,
        textAlign: 'center',
    },
    textContainer: {
        backgroundColor: 'rgba(255, 182, 150, 0.8)', 
        padding: 20,
        borderRadius: 10,  
        marginBottom: 30,
        width: '90%',
    },
    skillDescription: {
        fontSize: 18,
        color: '#F4E1D2',  
        textAlign: 'center',
        marginBottom: 15,
        lineHeight: 24,
    },
    skillList: {
        fontSize: 16,
        color: '#F4E1D2', 
        textAlign: 'center',
        marginBottom: 10,
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
