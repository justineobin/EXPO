import { Text, View, StyleSheet } from 'react-native';

export default function Skills() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>My Skills</Text>
            
            {/* Skills Content Container with Light Green Background */}
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1D3C34', // Dark Forest Green background (same as Index and Education)
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#F4E1D2',  // Light Beige text
        marginBottom: 20,
    },
    textContainer: {
        backgroundColor: '#4C8C72', // Lighter Green background for text container
        padding: 20,
        borderRadius: 10,  // Rounded corners for the container
        marginBottom: 30,
        width: '90%',
    },
    skillDescription: {
        fontSize: 18,
        color: '#F4E1D2',  // Light Beige text
        textAlign: 'center',
        marginBottom: 15,
        lineHeight: 24,
    },
    skillList: {
        fontSize: 16,
        color: '#F4E1D2',  // Light Beige text
        textAlign: 'center',
        marginBottom: 10,
        lineHeight: 24,
    },
});
