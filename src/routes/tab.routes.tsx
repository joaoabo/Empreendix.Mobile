import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

import HomeAcesso from '../screens/home/HomeAcesso'
import Login from '../screens/controleUsuario/Login'
import EmpreedixTitulo from '../components/empreendix/EmpreendixTitulo';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <SafeAreaProvider>
            <Tab.Navigator
                screenOptions={{ headerTitle: () => <EmpreedixTitulo />, headerTitleAlign: 'center' }}
                initialRouteName='HomeAcesso'>
                <Tab.Screen
                    name="HomeAcesso"
                    component={HomeAcesso}
                    options={{
                        tabBarIcon: ({ color, size }) => <Feather name='home' color={color} size={size} />
                    }}
                />

                <Tab.Screen
                    name="Login"
                    component={Login}
                    options={{
                        tabBarIcon: ({ color, size }) => <Feather name='log-in' color={color} size={size} />
                    }}
                />
            </Tab.Navigator>
        </SafeAreaProvider>
    )
}

