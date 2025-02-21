import { Stack } from 'expo-router';
import React from 'react';

const RootLayout: React.FC = () => {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerStyle: { backgroundColor: '#333333' },  
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="about"
                options={{
                    title: 'About',
                    headerStyle: { backgroundColor: '#333333' },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="education"
                options={{
                    title: 'Education',
                    headerStyle: { backgroundColor: '#333333' },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="hobbies"
                options={{
                    title: 'Hobbies',
                    headerStyle: { backgroundColor: '#333333' },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="skills"
                options={{
                    title: 'Skills',
                    headerStyle: { backgroundColor: '#333333' },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="contacts"
                options={{
                    title: 'Contacts',
                    headerStyle: { backgroundColor: '#333333' },
                    headerTintColor: '#fff',
                }}
            />
        </Stack>
    );
};

export default RootLayout;


