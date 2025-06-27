import { createDrawerNavigator } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'

import Home from '../screens/home/Home';
import EmpreedixTitulo from '../components/empreendix/EmpreendixTitulo';
import Dashboard from '../screens/dashboard/Dashboard';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator screenOptions={{
            headerTitle: () => <EmpreedixTitulo />,
        }}>
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name='home' color={color} size={size} />
                }}
            />

            <Drawer.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name='grid' color={color} size={size} />
                }}
            />
        </Drawer.Navigator>
    )
}

