import React, { FC } from 'react'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import * as eva from '@eva-design/eva'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import PageNavigation from './src/routes/PageNavigation'
import { NavigationContainer } from '@react-navigation/native';

const App: FC = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <PageNavigation />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  )
}

export default App
