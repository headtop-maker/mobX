import React from 'react';

import ErrorBoundary from './src/shared/ErrorBoundary';
import {Provider} from 'mobx-react';
import store from './src/app/store/TodoStore';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigation from './src/app/navigation/RootStack';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <ErrorBoundary>
          <RootStackNavigation />
        </ErrorBoundary>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
