import React, { useState, useRef } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    Pressable
} from "react-native";
import MainContainer from "../../components/styles/Container";
import { Picker } from '@react-native-picker/picker';


export default function Registration() {

    const [selectedValue, setSelectedValue] = useState("java");
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    );
    // const logoPath = require('../../assets/images/rte-logo.png');

    // const [is_etudiant, set_is_etudiant] = useState(false);
    // const [is_lyceen, set_is_lyceen] = useState(false);

    // const select_type = (name: string) => {
    //     if (name == 'lyceen') {
    //         set_is_etudiant(false)
    //         set_is_lyceen(!is_lyceen);
    //     }
    //     else {
    //         set_is_lyceen(false);
    //         set_is_etudiant(!is_etudiant);
    //     }
    // }

    // const [diploma, setDiploma] = useState("none");

    // return (
    //     <View style={[MainContainer.container, RegisterStyle.container]}>
    //         <View style={[RegisterStyle.main]}>
    //             <Image source={logoPath} style={MainContainer.logo_in_the_app} />
    //             <Text style={[RegisterStyle.text]}>
    //                 Informations relatives à mon établissement :
    //             </Text>
    //             <Text style={[RegisterStyle.text]}>
    //                 Je suis :
    //             </Text>
    //             <View style={{ borderWidth: 1, flexDirection: "row", justifyContent: "space-between", width: "90%" }}>
    //                 <Pressable
    //                     onPress={() => select_type('lyceen')}
    //                     style={is_lyceen ? RegisterStyle.pressed : RegisterStyle.button}
    //                 >
    //                     <Text style={is_lyceen ? RegisterStyle.pressed_text : RegisterStyle.text}>
    //                         Lycéen(ne)
    //                     </Text>
    //                 </Pressable>
    //                 <Pressable
    //                     onPress={() => select_type('')}
    //                     style={is_etudiant ? RegisterStyle.pressed : RegisterStyle.button}
    //                 >
    //                     <Text style={is_etudiant ? RegisterStyle.pressed_text : RegisterStyle.text}>
    //                         Étudiant(e)
    //                     </Text>
    //                 </Pressable>
    //             </View>
    //             <View style={{ borderWidth: 1, flexDirection: "column", justifyContent: "space-between", width: "90%" }}>
    //                 <TextInput
    //                     style={{ borderWidth: 1, color: "white" }}
    //                     placeholder="Nom de l'établissement"
    //                 ></TextInput>
    //                 <TextInput
    //                     style={{ borderWidth: 1, color: "white" }}
    //                     placeholder="Adresse (complète) de l'établissement"
    //                 ><Picker
    //                     style={{ color: "white" }}
    //                     selectedValue={diploma}
    //                     onValueChange={(itemValue, itemIndex) =>
    //                         setDiploma(itemValue)
    //                     }>
    //                         <Picker.Item label="None" value="None" />
    //                         <Picker.Item label="Dut" value="Dut" />
    //                         <Picker.Item label="Bts" value="Bts" />
    //                         <Picker.Item label="Licence" value="License" style={{ color: "white" }} />
    //                         <Picker.Item label="Master" value="Master" />
    //                         <Picker.Item label="Doctora" value="Doctora" />
    //                     </Picker>
    //                 </TextInput>

    //                 <Picker
    //                     style={{ color: "white" }}
    //                     selectedValue={diploma}
    //                     onValueChange={(itemValue, itemIndex) =>
    //                         setDiploma(itemValue)
    //                     }>
    //                     <Picker.Item label="None" value="None" />
    //                     <Picker.Item label="Dut" value="Dut" />
    //                     <Picker.Item label="Bts" value="Bts" />
    //                     <Picker.Item label="Licence" value="License" style={{ color: "white" }} />
    //                     <Picker.Item label="Master" value="Master" />
    //                     <Picker.Item label="Doctora" value="Doctora" />
    //                 </Picker>

    //             </View>
    //         </View>
    //     </View>
    // );
}

const styles = StyleSheet.create({
    container: {
      
      paddingTop: 10,
      alignItems: "center",
      borderWidth:1,
      width:'50%',
    }
  });
const RegisterStyle = StyleSheet.create({
    container: {
        backgroundColor: '#90621C',
    },
    main: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: '98%',
        borderWidth: 1
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        borderWidth: 1,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 50,
        elevation: 3,
        borderWidth: 2,
        borderColor: 'white',
    },
    pressed: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 50,
        elevation: 3,
        borderColor: 'white',
        backgroundColor: 'rgb(250, 250, 255)',
    },
    pressed_text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },

})