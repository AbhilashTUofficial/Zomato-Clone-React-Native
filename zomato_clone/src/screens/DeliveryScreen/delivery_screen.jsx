import { useNetInfo } from '@react-native-community/netinfo';
import ConnectedScreen from '../../Components/DeliveryScreen/DeliveryViews/ConnectedScreen';
import NetworkErrorScreen from '../../Components/DeliveryScreen/DeliveryViews/NetworkErrorScreen';
import LoadingScreen from '../../Components/DeliveryScreen/DeliveryViews/LoadingScreen';
import PopupModal from '../../Components/RestaurantView/PopupModal/PopupModal';

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
                // <PopupModal/>
            );
        case null:
            return (<LoadingScreen />);
        default:
            break;

    }

};



export default DeliveryScreen;
