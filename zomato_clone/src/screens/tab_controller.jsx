import { Image, StatusBar, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { darkGrey, secondary } from "../constants";
import MoneyScreen from "./money_screen";
import ZomalandScreen from "./zomaland_screen";
import HistoryScreen from "./history_screen";
import DeliveryScreen from "./DeliveryScreen/delivery_screen";

//! Tab navigations


function TabController() {
    const Tab = createBottomTabNavigator();

    //? Tabs
    const delivery = "Delivery";
    const money = "Money";
    const zomaland = "Zomaland";
    const history = "History";

    //? Icons
    const deliveryActive = require('../assets/icons/delivery_active.png');
    const deliveryInActive = require('../assets/icons/delivery_inactive.png');
    const moneyActive = require('../assets/icons/money_active.png');
    const moneyInActive = require('../assets/icons/money_inactive.png');
    const zomalandActive = require('../assets/icons/zomaland_active.png');
    const zomalandInActive = require('../assets/icons/zomaland_inactive.png');
    const historyActive = require('../assets/icons/history_active.png');
    const historyInActive = require('../assets/icons/history_inactive.png');


    return (
        <>
            <StatusBar
                barStyle={"dark-content"}
                backgroundColor={"white"}
                translucent={false} />


            <Tab.Navigator
                initialRouteName={delivery}
                screenOptions={({ route }) => ({
                    tabBarStyle: {
                        paddingTop: 10,
                        height: 58
                    },
                    tabBarActiveTintColor: secondary,
                    tabBarInactiveTintColor: darkGrey,
                    headerShown: false,
                    tabBarLabelStyle: {
                        paddingBottom: 10,
                        paddingTop: 6,
                        fontSize: 12,
                        fontWeight: "500"
                    },
                    tabBarIcon: ({ focused }) => {

                        let current = route.name;

                        if (current === delivery) {
                            if (focused) {
                                return <TabIcon source={deliveryActive} />;
                            }
                            return <TabIcon source={deliveryInActive} />;
                        } else if (current === money) {
                            if (focused) {
                                return <TabIcon source={moneyActive} />;
                            }
                            return <TabIcon source={moneyInActive} />;
                        }
                        else if (current === zomaland) {
                            if (focused) {
                                return <TabIcon source={zomalandActive} />;
                            }
                            return <TabIcon source={zomalandInActive} />;
                        }
                        else if (current === history) {
                            if (focused) {
                                return <TabIcon source={historyActive} />;
                            }
                            return <TabIcon source={historyInActive} />;
                        }
                    },
                })}>

                <Tab.Screen name={delivery} component={DeliveryScreen} />
                <Tab.Screen name={money} component={MoneyScreen} />
                <Tab.Screen name={zomaland} component={ZomalandScreen} />
                <Tab.Screen name={history} component={HistoryScreen} />

            </Tab.Navigator>
        </>

    );
}

export default TabController;


const TabIcon = (props) => {
    return (
        <View
            style={{
                width: 26,
                height: 26
            }}>

            <Image
                {...props}
                style={{
                    height: '100%',
                    width: "100%",
                    alignSelf: "center",
                }} />
        </View>

    );
};