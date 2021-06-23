import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OrdersPage from '../pages/Orders/OrdersPage';
import InfoPage from '../pages/TelaInformativa/Info';
import Singin from '../pages/SignIn/SingIn';

const Route = createStackNavigator();

export default () => {
  return( 
    <Route.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#7159c1'}
        }}
        initialRouteName="OrdersPage">
        <Route.Screen name="Info" component={InfoPage}/>
        <Route.Screen name="OrdersPage" component={OrdersPage}/>
        <Route.Screen name="Singin" component={Singin}/>
      
    </Route.Navigator>
    );
}