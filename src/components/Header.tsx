import React, { FC } from 'react'
import { View, StatusBar } from 'react-native'
import { TopNavigation, Text, Divider } from '@ui-kitten/components'

interface Props {
    title: string
}
const Header: FC<Props> = (props) => {
    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor='white' />
            <View>
                <TopNavigation
                    alignment='center'
                    title={eva => <Text {...eva} >{props.title}</Text>}
                />
                <Divider />
            </View>
        </>
    )
}

export default Header
