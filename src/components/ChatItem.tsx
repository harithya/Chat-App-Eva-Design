import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { ListItem, Text, Avatar } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'

interface Props {
    item: {
        name: string,
        last_chat: string,
        avatar: string,
        time: string
    }
}

const ChatItem: FC<Props> = (props) => {
    const navigation = useNavigation();
    return (
        <ListItem
            title={props.item.name}
            onPress={() => navigation.navigate("Chat")}
            description={eva => <Text {...eva} numberOfLines={1}>{props.item.last_chat}</Text>}
            accessoryLeft={() => (<Avatar
                size='large'
                style={styles.avatar}
                source={{ uri: props.item.avatar }} />)}
            accessoryRight={() => (
                <Text category='label' appearance='hint' >{props.item.time}</Text>
            )}
        />
    )
}

const styles = StyleSheet.create({
    avatar: {
        marginRight: 10
    }
})

export default ChatItem
