import React, { FC, useState } from 'react'
import { Avatar, Divider, List, ListItem } from '@ui-kitten/components'
import Container from '../components/Container'
import chat from '../data/chat';
import ChatItem from '../components/ChatItem'

interface Props {
    navigation: any
}
const HomeScreen: FC<Props> = (props) => {
    return (
        <>
            <Container title="Telegram" padding={false}>
                <List
                    data={chat}
                    ItemSeparatorComponent={Divider}
                    renderItem={({ item }) => (<ChatItem item={item} />)}
                />
            </Container>
        </>
    )
}


export default HomeScreen
