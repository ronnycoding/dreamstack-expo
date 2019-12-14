"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_virtual_keyboard_1 = require("react-native-virtual-keyboard");
var Haptics = require("expo-haptics");
var react_navigation_hooks_1 = require("react-navigation-hooks");
var PinDot_1 = require("../../components/PinDot");
var usePinSetup_1 = require("../../lib/hooks/usePinSetup");
var keys_1 = require("../navigation/UnauthenticatedStackNavigator/keys");
var styles = react_native_1.StyleSheet.create({
    viewStyle: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 32,
        marginTop: 32
    },
    dotContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: 250,
        marginTop: 32
    },
    virtualKeyboardContainer: {
        width: '100%',
        height: 300,
        position: 'absolute',
        bottom: 32,
        flex: 1,
        alignItems: 'center'
    },
    grayLine: {
        width: '80%',
        backgroundColor: '#bbb',
        marginVertical: 16,
        height: 0.5
    }
});
var CreatePin = function () {
    var navigate = react_navigation_hooks_1.useNavigation().navigate;
    var pin = usePinSetup_1.usePinSetup().pin;
    var setPin = usePinSetup_1.usePinSetupActions().setPin;
    var handleCompletion = function () {
        navigate(keys_1.CONFIRM_PIN);
    };
    var handleVirtualKeyboard = function (val) {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        var newPin = pin;
        if (val === 'back') {
            newPin = newPin.substr(0, newPin.length - 1);
        }
        else {
            newPin = "" + newPin + val;
        }
        setPin(newPin);
        if (newPin.length === 6)
            handleCompletion();
    };
    return (<react_native_1.SafeAreaView style={styles.viewStyle}>
      <react_native_1.Text style={styles.title}>Set a Pin</react_native_1.Text>
      <react_native_1.View style={styles.dotContainer}>
        <PinDot_1["default"] active={pin.length >= 1}/>
        <PinDot_1["default"] active={pin.length >= 2}/>
        <PinDot_1["default"] active={pin.length >= 3}/>
        <PinDot_1["default"] active={pin.length >= 4}/>
        <PinDot_1["default"] active={pin.length >= 5}/>
        <PinDot_1["default"] active={pin.length >= 6}/>
      </react_native_1.View>
      <react_native_1.View style={styles.virtualKeyboardContainer}>
        <react_native_1.View style={styles.grayLine}/>
        <react_native_virtual_keyboard_1["default"] pressMode="char" color="#000" onPress={handleVirtualKeyboard}/>
      </react_native_1.View>
    </react_native_1.SafeAreaView>);
};
CreatePin.navigationOptions = {
    title: 'Create Pin'
};
exports["default"] = CreatePin;
