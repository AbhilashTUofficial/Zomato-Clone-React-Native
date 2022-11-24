import { View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import ConnectedScreen from '../../Components/DeliveryScreen/DeliveryViews/ConnectedScreen';
import NetworkErrorScreen from '../../Components/DeliveryScreen/DeliveryViews/NetworkErrorScreen';
import LoadingScreen from '../../Components/DeliveryScreen/DeliveryViews/LoadingScreen';

const DeliveryScreen = () => {

    const netInfo = useNetInfo();

    // TODO: Need a way to make it dynamic.
    const network = netInfo.isConnected;

    switch (network) {
        case false:
            return (
                <NetworkErrorScreen />
            );
        case true:
            return (
                <ConnectedScreen />
            );
        case null:
            return (<LoadingScreen />);
        default:
            break;

    }

};



export default DeliveryScreen;
