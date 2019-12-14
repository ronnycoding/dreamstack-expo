"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var expo_linear_gradient_1 = require("expo-linear-gradient");
var react_navigation_hooks_1 = require("react-navigation-hooks");
var colors_1 = require("../../theme/colors");
var BottomButton_1 = require("../../components/BottomButton");
var keys_1 = require("../navigation/UnauthenticatedStackNavigator/keys");
var gradientColors = {
    top: colors_1["default"].flatPurple.dark,
    bottom: colors_1["default"].flatMagenta.light
};
var styles = react_native_1.StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    gradientStyle: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoStyle: {
        width: 150,
        height: 150,
        padding: 20
    },
    heading: {
        fontSize: 32,
        color: '#fff',
        marginTop: 16
    },
    subtitle: {
        color: '#fff',
        fontSize: 16,
        marginTop: 8
    },
    slogan: {
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center',
        fontSize: 16,
        color: '#fff',
        marginTop: 48
    }
});
var Welcome = function () {
    var navigate = react_navigation_hooks_1.useNavigation().navigate;
    var navigateToAuthenticateScreen = function () {
        navigate(keys_1.CREATE_PIN);
    };
    return (<>
      <expo_linear_gradient_1.LinearGradient colors={Object.values(gradientColors)} style={styles.gradientStyle}>
        <react_native_1.SafeAreaView style={styles.containerStyle}>
          <react_native_1.Image source={require('../../assets/logo.png')} resizeMode="contain" style={styles.logoStyle}/>
          <react_native_1.Text style={styles.heading}>
            <react_native_1.Text style={{ fontFamily: 'Montserrat-Bold' }}>EXPO</react_native_1.Text>
            <react_native_1.Text style={{ fontFamily: 'Montserrat-Regular' }}> Starter</react_native_1.Text>
          </react_native_1.Text>
          <react_native_1.Text style={styles.subtitle}>
            By{' '}
            <react_native_1.Text style={{ fontFamily: 'Montserrat-Bold' }}>
              Telos Dream Stack
            </react_native_1.Text>
          </react_native_1.Text>
          <react_native_1.Text style={styles.slogan}>
            Explore all the features{'\n'}of the Telos Dream Stack
          </react_native_1.Text>
          <BottomButton_1["default"] title="ALRIGHT, LET'S GO" onPress={navigateToAuthenticateScreen} disabled={false}/>
        </react_native_1.SafeAreaView>
      </expo_linear_gradient_1.LinearGradient>
    </>);
};
Welcome.navigationOptions = {
    header: null
};
exports["default"] = Welcome;
