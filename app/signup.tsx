import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'


const signup = () => {
    const [countryCode, setCountryCode] = useState('+234');
    const [phoneNumber, setPhoneNumber] = useState('');
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;
    const onSignup = async () => {

    }
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={keyboardVerticalOffset}>
            <View style={defaultStyles.container}>
                <Text style={defaultStyles.header}>Let's get started!</Text>
                <Text style={defaultStyles.descriptionText}>
                    Enter your Phone number to receive confirmation code
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='Country Code'
                        placeholderTextColor={Colors.gray}
                        value={countryCode}
                    />
                    <TextInput
                        style={[styles.input, { flex: 1 }]}
                        placeholder='Mobile number'
                        placeholderTextColor={Colors.gray}
                        keyboardType="numeric"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                </View>
                <Link href={'/login'} replace asChild>
                    <TouchableOpacity>
                        <Text style={defaultStyles.textLink}> Already have an account? Login</Text>
                    </TouchableOpacity>
                </Link>

                <View style={{ flex: 1 }} />

                <TouchableOpacity style={[defaultStyles.pillButton,
                phoneNumber !== '' ? styles.enabled : styles.disabled,
                { marginBottom: 20 }]} onPress={onSignup}>
                    <Text style={defaultStyles.buttonText}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 40,
        flexDirection: 'row',
    },
    input: {
        backgroundColor: Colors.lightGray,
        padding: 20,
        borderRadius: 16,
        fontSize: 22,
        marginRight: 10,
    },
    enabled: {
        backgroundColor: Colors.primary,
    },
    disabled: {
        backgroundColor: Colors.primaryMuted,
    }
})
export default signup