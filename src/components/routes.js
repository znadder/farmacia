import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import index from './../pages/find/index';
import first from './../pages/checkout/first';
import second from './../pages/checkout/second';
import third from './../pages/checkout/third';
import fourth from './../pages/checkout/fourth';
import final from './../pages/checkout/final';
import QRCodeScreen from './../pages/checkout/qrcode';

export default createAppContainer(createStackNavigator({
    index,
    first,
    second,
    QRCodeScreen,
    third,
    fourth,
    final,
},
    {
        headerMode: 'null',
    }));