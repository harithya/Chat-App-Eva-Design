import React, { Component, FC, ReactElement } from 'react'
import { View, StatusBar } from 'react-native'
import { TopNavigation, Text, Divider, TopNavigationAction, Icon } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/core'

interface Props {
    title: string,
    subtitle?: string,
    goBack?: boolean,
    rightComponent?: ReactElement
}

const RightItem: FC = () => {
    const navigation = useNavigation();
    return (
        <TopNavigationAction
            onPress={() => navigation.goBack()}
            icon={<Icon name="chevron-left-outline" />}
        />
    )
}

const Header: FC<Props> = (props) => {
    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor='white' />
            <View>
                <TopNavigation
                    alignment='center'
                    title={eva => <Text {...eva} >{props.title}</Text>}
                    subtitle={props.subtitle}
                    accessoryLeft={(props.goBack) ? <RightItem /> : undefined}
                    accessoryRight={(props.rightComponent) ? props.rightComponent : undefined}
                />
                <Divider />
            </View>
        </>
    )
}

export default Header
