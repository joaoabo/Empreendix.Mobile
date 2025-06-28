import { createDrawerNavigator } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'

import Home from '../screens/home/Home';
import EmpreedixTitulo from '../components/empreendix/EmpreendixTitulo';
import Dashboard from '../screens/dashboard/Dashboard';
import CadastroProduto from '../screens/produto/ProdutoScreen';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator screenOptions={({ navigation }) => ({
            headerTitle: () => <EmpreedixTitulo />,
            drawerInactiveTintColor: '#e6b800',
            drawerActiveTintColor: '#66539c',
            headerTintColor: '#e6b800',
            headerLeft: () => (
                <Feather
                    name="menu"
                    size={30}
                    color="#e6b800"
                    style={{ marginLeft: 16 , marginRight: 30}}
                    onPress={() => navigation.toggleDrawer()}
                />
            ),
        })}>
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
             <Drawer.Screen
                name="Cadastar Produtos"
                component={CadastroProduto}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name='plus-circle' color={color} size={size} />
                }}
            />
        </Drawer.Navigator>
    )
}

