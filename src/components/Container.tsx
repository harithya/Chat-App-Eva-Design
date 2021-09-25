import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import Header from './Header'
import { Layout } from '@ui-kitten/components'

interface Props {
    title: string,
    padding?: boolean
}
const Container: FC<Props> = (props) => {
    return (
        <>
            <Header title={props.title} />
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
