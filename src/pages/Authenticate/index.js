"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var colors_1 = require("../../theme/colors");
var useRegisterForPushNotifications_1 = require("../../lib/hooks/useRegisterForPushNotifications");
var Separator_1 = require("../../components/Separator");
var BottomButton_1 = require("../../components/BottomButton");
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 20
    },
    caption: {
        fontFamily: 'Montserrat-Regular',
        color: colors_1["default"].flatBlack.light
    },
    textField: {
        color: colors_1["default"].flatBlack.dark,
        backgroundColor: colors_1["default"].flatWhite.light,
        width: '100%',
        height: 50,
        fontFamily: 'Montserrat-Regular',
        paddingHorizontal: 20
    }
});
var Authenticate = function () {
    var _a = react_1.useState(''), privateKey = _a[0], setPrivateKey = _a[1];
    var _b = useRegisterForPushNotifications_1["default"](privateKey), register = _b[0], isRegistering = _b[1], registerError = _b[2];
    var privateKeyInputHandler = function (enteredText) {
        setPrivateKey(enteredText);
    };
    var handleContinueButtonPress = function () {
        // register()
    };
    return (<>
      <react_native_1.KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <react_native_1.Text style={styles.caption}>Private Key</react_native_1.Text>
        <Separator_1["default"] marginVertical={20}/>
        <react_native_1.TextInput editable={!isRegistering} placeholder="Paste your Private Key here" placeholderTextColor={colors_1["default"].flatWhite.dark} style={styles.textField} onChangeText={privateKeyInputHandler}/>
        <Separator_1["default"] marginVertical={20}/>
        <react_native_1.Text style={styles.caption}>
          You can import your TELOS account, just be sure to use the active
          private key. This private key will be securely stored on the phone and
          can be only accessed with the PIN you set up
        </react_native_1.Text>
        <Separator_1["default"] marginVertical={5}/>
        {isRegistering && (<>
            <Separator_1["default"] marginVertical={5}/>
            <react_native_1.ActivityIndicator size="large"/>
          </>)}
        {registerError && (<>
            <Separator_1["default"] marginVertical={5}/>
            <react_native_1.Text>{registerError.message}</react_native_1.Text>
          </>)}
      </react_native_1.KeyboardAvoidingView>
      <BottomButton_1["default"] title="CONTINUE" onPress={handleContinueButtonPress} disabled={privateKey.length < 1}/>
    </>);
};
Authenticate.navigationOptions = {
    title: 'Add your Private Key'
};
exports["default"] = Authenticate;
