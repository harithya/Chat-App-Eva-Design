import React, { Component, FC, ReactElement } from 'react'
import { StyleSheet } from 'react-native'
import Header from './Header'
import { Layout } from '@ui-kitten/components'

interface Props {
    title: string,
    subtitle?: string,
    padding?: boolean,
    goBack?: boolean,
    rightComponent?: ReactElement
}
const Container: FC<Props> = (props) => {
    return (
        <>
            <Header
                title={props.title}
                subtitle={props.subtitle}
                goBack={props.goBack}
                rightComponent={props.rightComponent}
            />
            <Layout style={[styles.container, { paddingHorizontal: (props.padding) ? 24 : 0 }]}>
                {props.children}
            </Layout>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default Container
