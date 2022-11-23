import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { React } from 'react';
import Wrapper from '../../Components/Common/Wrapper';
import { darkGrey, grey, lightGrey } from '../../constants';
import Divider from 'react-native-divider';
import { commonStyles, primary, secondary } from '../common_styles';

const flagImg = require('../../assets/flags/india_flag.png');
const languageIcon = require('../../assets/icons/languagewhite.png');
const headerImg = require('../../assets/img/zomato_auth_img.png');
const googleLogo = require('../../assets/icons/google_logo.png');
const viewmoreIcon = require('../../assets/icons/viewmore.png');
const dropdownIcon = require('../../assets/icons/dropdown.png');

const AuthScreen = (props) => {

    return (

        <Wrapper>

            <View style={commonStyles.container}>

                <HeaderImg onPress={() => props.navigation.navigate("screens")} />

                <View style={authStyles.body}>

                    <Heading />

                    <ScreenDivider text={"Log in or sign up"} />

                    <View style={{ justifyContent: "center" }}>

                        <PhInputField />

                        <ContinueBtn onPress={() => props.navigation.navigate("otpverification")} />

                    </View>

                    <ScreenDivider text={"or"} />

                    <AlternateAuthMeth />

                    <View style={authStyles.phInput} />

                    <TermsOfService />

                </View>

            </View>

        </Wrapper>
    );
};

export default AuthScreen;


//* Components

const ScreenDivider = ({ text }) => {
    return (
        <Divider borderColor={lightGrey} color={darkGrey} orientation="center">

            <Text style={authStyles.divider} >{text} </Text>

        </Divider>
    );
};


const HeaderImg = (props) => {
    return (
        <ImageBackground source={headerImg} style={authStyles.header} >

            <OverlayBtns {...props} />

        </ImageBackground>
    );
};

const Heading = () => {
    return (
        <Text style={authStyles.title}>
            India's #1 Food Delivery and Dining App</Text>
    );
};

const PhInputField = () => {

    return (
        <View
            style={authStyles.phinput}>

            <TouchableOpacity style={authStyles.ccContainer} onPress={() => handler}>

                <Image source={flagImg} style={authStyles.flag} />

                <Image source={dropdownIcon} style={authStyles.dropdown} />

            </TouchableOpacity>



            <View style={authStyles.phContainer}>

                <Text style={authStyles.ccText}>+91</Text>

                <TextInput placeholder='Enter phone Number' placeholderTextColor={grey}
                    style={authStyles.phInput} />

            </View>

        </View>
    );
};

const ContinueBtn = (props) => {
    return (
        <TouchableOpacity {...props} style={authStyles.btn}>

            <Text style={authStyles.btnText}>

                Continue</Text>

        </TouchableOpacity>
    );
};

const AlternateAuthMeth = () => {
    return (
        <View
            style={authStyles.altAuthMeth}>

            <TouchableOpacity

                style={authStyles.cirBtn}>

                <Image source={googleLogo} style={authStyles.icon} />

            </TouchableOpacity>

            <TouchableOpacity style={authStyles.cirBtn}>

                <Image source={viewmoreIcon} style={authStyles.icon} />

            </TouchableOpacity>

        </View>
    );
};

const TermsOfService = () => {
    return (
        <View>

            <Text style={authStyles.termsandservice}>
                By continuing, you agree to our
            </Text>

            <Text style={[authStyles.termsandservice, authStyles.tsBorder]}>
                Terms of Service Privacy Policy Content Policy
            </Text>

        </View>
    );
};

const OverlayBtns = (props) => {
    return (
        <View style={authStyles.obContainer}>

            <TouchableOpacity activeOpacity={0.8} style={authStyles.overlayBtn}>

                <Image source={languageIcon} style={authStyles.dropdown} />

            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} style={authStyles.overlayBtn} {...props}>

                <Text style={{ color: "white" }}>Skip</Text>

            </TouchableOpacity>

        </View>

    );
};




const authStyles = StyleSheet.create({
    header: {
        flex: 4,
    },

    title: {
        color: secondary,
        margin: 4,
        fontSize: 22,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        width: '90%',
        alignSelf: 'center',
        textAlign: 'center',
    },

    body: {
        flex: 5,
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 28,
    },

    divider: {
        color: darkGrey,
        fontSize: 12,
    },

    phinput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    ccContainer: {
        borderColor: lightGrey,
        height: 46,
        width: 56,
        borderWidth: 1.4,
        borderRadius: 6,
        flexDirection: 'row',
        marginVertical: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },

    phContainer: {
        borderColor: lightGrey,
        height: 46,
        borderWidth: 1.4,
        borderRadius: 6,
        paddingHorizontal: 6,
        flexDirection: 'row',
        marginLeft: 4,
        marginVertical: 4,
        flex: 1,
    },

    flag: {
        height: 18,
        width: 26,
        alignSelf: 'center',
    },

    dropdown: {
        height: 16,
        width: 16,
        marginLeft: 2,
        alignSelf: 'center',
    },
    ccText: {
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: '500',
        color: secondary,
    },

    phInput: {
        color: darkGrey,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 2,
        alignItems: 'center',
    },

    btn: {
        alignItems: 'center',
        paddingVertical: 6,
        marginVertical: 6,
        height: 46,
        justifyContent: 'center',
        borderRadius: 6,
        backgroundColor: primary,
    },
    btnText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },

    altAuthMeth: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    cirBtn: {
        alignItems: 'center',
        padding: 12,
        margin: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: lightGrey,
        borderRadius: 99,
        borderWidth: 1,
    },
    icon: {
        height: 25,
        width: 25,
        alignSelf: 'center',
    },
    termsandservice: {
        color: darkGrey,
        fontSize: 12,
        alignSelf: 'center',
        textAlign: 'center',
    },
    tsBorder: {
        borderStyle: 'dotted',
        borderBottomWidth: 1,
        borderColor: darkGrey,
    },
    obContainer: {
        top: 36,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 36,
    },
    overlayBtn: {
        height: 26,
        width: 52,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.9,
        backgroundColor: '#552720',
    },
});
