import React, { FC } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { Layout, Text, Input, Icon, Button } from '@ui-kitten/components'

const LoginScreen: FC = (props: any) => {
    const handleLogin = () => {
        props.navigation.navigate("Home");
    }

    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor="#3366FF" />
            <Layout style={styles.container}>
                <View style={styles.banner}>
                    <Text status='control' category='h2'>Telegram</Text>
                    <Text status='control' appearance='hint' style={styles.subtitle}>Please sign in to your account</Text>
                </View>
                <View style={styles.form}>
                    <Input
                        placeholder='Email'
                        value=''
                        style={styles.input}
                        size='large'
                        accessoryLeft={(props) => (<Icon {...props} name="person-outline" />)}
                        onChange={() => null}
                    />
                    <Input
                        placeholder='Password'
                        value=''
                        size='large'
                        secureTextEntry={true}
                        style={styles.input}
                        accessoryLeft={(props) => (<Icon {...props} name="lock-outline" />)}
                        onChange={() => null}
                    />
                    <Text appearance='hint' style={styles.forgotPassword} category='s2'>Forgot your password ?</Text>
                </View>
                <View style={styles.footer}>
                    <Button onPress={handleLogin} size='large'>Sign In</Button>
                    <Text appearance='hint' style={styles.dontHaveAccount} category='s2'>Don't have an account? Create</Text>
                </View>
            </Layout>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    banner: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3366FF',
        marginBottom: 30
    },
    subtitle: {
        marginTop: 20
    },
    form: {
        paddingHorizontal: 24,
    },
    input: {
        marginBottom: 20
    },
    forgotPassword: {
        fontWeight: 'bold',
        textAlign: 'right'
    },
    footer: {
        paddingHorizontal: 24,
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: 20
    },
    dontHaveAccount: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    }
})

export default LoginScreen
