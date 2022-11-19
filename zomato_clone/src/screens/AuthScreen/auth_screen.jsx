import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { authStyles, dropdownIcon, flagImg, googleLogo, headerImg, viewmoreIcon, languageIcon } from './auth_styles';
import { React } from 'react';
import Wrapper from '../../Components/Common/Wrapper';
import { darkGrey, grey, lightGrey } from '../../constants';
import Divider from 'react-native-divider';
import { commonStyles } from '../common_styles';

const AuthScreen = (props) => {

    return (

        <Wrapper>

            <View style={commonStyles.container}>

                <HeaderImg onPress={() => props.navigation.navigate("tabcontroller")} />

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