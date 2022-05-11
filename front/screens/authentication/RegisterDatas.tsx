import React from "react";
import { View } from "react-native";

var user = {
    school: null,
    status: null,
    information: null,
};

const logo_path = require('../../assets/images/rte-logo.png');

//To get datas
function RegisterDatas(props) {

    if (props.school) user.school = props.school;
    if (props.status) user.status = props.status;
    if (props.information) user.information = props.information;

    console.log(user);

    return (
        <View></View>
    );
}

export { RegisterDatas, logo_path };