import { Video } from 'expo-av';
import { router } from 'expo-router';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import apple_logo from '../assets/images/auth/apple_logo.png';
import bg_video from '../assets/images/auth/bg_video.mp4';
import google_logo from '../assets/images/auth/google_logo.png';
import app_logo from '../assets/images/auth/logo.png';

const Onboarding = () => {
    const videoRef = React.useRef(null);

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            enableOnAndroid={true}
            extraScrollHeight={350}
            keyboardShouldPersistTaps="handled"
        >
            <View style={styles.container}>
                <Video ref={videoRef} style={styles.backgroundVideo} source={bg_video} shouldPlay isLooping isMuted resizeMode="cover" />
                <View style={styles.header}>
                    <Image source={app_logo} style={styles.appLogo} />
                </View>
                <View style={styles.overlay}>

                    <View style={styles.content}>
                        <Text style={styles.welcomeText}>Welcome!</Text>

                        <Pressable style={[styles.button, styles.googleButton]}>
                            <Image source={google_logo} style={styles.icon} />
                            <Text style={styles.buttonText}>Continue with Google</Text>
                        </Pressable>

                        <Pressable style={[styles.button, styles.appleButton]}>
                            <Image source={apple_logo} style={styles.icon} />
                            <Text style={[styles.buttonText, { color: "#fff" }]}>Continue with Apple</Text>
                        </Pressable>

                        <Text style={styles.orText}>or</Text>

                        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#888" />

                        <TouchableOpacity onPress={() => router.push("/auth")} style={[styles.button, styles.continueButton]}>
                            <Text style={styles.continueButtonText}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    backgroundVideo: {
        height: "50%"
    },
    overlay: {
        backgroundColor: '#000000',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 'auto',
        position: "absolute",
        top: 80,
        left: "30%"
    },
    appLogo: {
        width: 180,
        height: 35,
        marginRight: 10,
        tintColor: '#fff',
    },
    appName: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 50,
    },
    welcomeText: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'semibold',
        marginBottom: 20,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingVertical: 15,
        borderRadius: 10,
        marginBottom: 15,
    },
    googleButton: {
        backgroundColor: '#fff',
    },
    appleButton: {
        backgroundColor: '#000',
        borderColor: '#fff',
        borderWidth: 1,
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
    },
    orText: {
        color: '#AAAAAA',
        fontSize: 16,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        backgroundColor: '#222',
        color: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 15,
    },
    continueButton: {
        backgroundColor: '#fff',
    },
    continueButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Onboarding;