import React, { FC } from 'react'
import { View, Text } from 'react-native'
import Container from '../components/Container'
import { Avatar } from '@ui-kitten/components'

const Profile: FC = () => {
    return (
        <Avatar
            source={{ uri: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
            size='small'
        />
    )
}

const ChatScreen: FC = () => {
    return (
        <Container
            title="Aninditha Rahma"
            subtitle={"Last seen just now"}
            goBack={true}
            rightComponent={<Profile />}
        >
        </Container>
    )
}

export default ChatScreen
