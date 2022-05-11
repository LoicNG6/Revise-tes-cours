import React, { useState } from "react";
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { MainContainer, Button } from "../../components/styles/Container";
import SelectDropdown from 'react-native-select-dropdown';
import RegisterDatas from "./RegisterDatas";

export default function Registration() {
  const logoPath = require('../../assets/images/rte-logo.png');

  //Declare all states
  const [is_etudiant, set_is_etudiant] = useState(null);
  const [is_lyceen, set_is_lyceen] = useState(null);

  const [school, setSchool] = useState({
    name: null,
    address: null,
    diploma: null,
    year_of_graduation: null,
  });

  const graduation_year = ["Choisir l'année", "2022", "2023", "2024", "2025", "2026", "2027"]
  const diploma_types = is_lyceen
    ? ["Choisir le diplôme", "Baccalauréat"]
    : is_etudiant ? [
      "Choisir le diplôme",
      "Brevet Technique Supérieur (BTS)",
      "Diplôme universitaire technique (DUT)",
      "License",
      "Master",
      "Doctorat",
    ] : [];

  const [registration_b, setRegistrationB] = useState(false);

  //Modification of states
  const onChangeStatus = (name: string) => {
    if (name == 'lyceen') {
      set_is_etudiant(false)
      set_is_lyceen(true);
    }
    else {
      set_is_lyceen(false);
      set_is_etudiant(true);
    }
  }

  const onChangeSchool = (field, value) => {
    setSchool(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const checkVariables = () => {
    var is_empty = false;
    Object.values(school).map((element => {
      if (element == undefined) {
        is_empty = true;
        return;
      }
    }));

    if ((is_etudiant && is_lyceen) == null && is_empty == false) {
      return;
    }
    return is_empty;
  }

  const goToRegistrationB = () => {
    if (checkVariables() == false) {
      RegisterDatas({
        school: school,
        status: is_etudiant == true ? 'étudiant' : 'lycéen',
      });
    }
  };

  return (
    <View style={{ flex: 1, }}>
      <LinearGradient
        colors={['#CC9644', '#90621C']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[MainContainer.container, { padding: 10, paddingTop: 0 }]}
      >
        <View style={[MainContainer.container]}>
          <View style={[RegisterStyle.main]}>

            <View>
              <Image source={logoPath} style={MainContainer.logo_in_the_app} />
            </View>

            <View style={[
              RegisterStyle.container,
              {
                flex: 0.2,
              }
            ]}>
              <View>
                <Text style={[RegisterStyle.text]}>
                  Informations relatives à mon établissement
                </Text>
              </View>
              <View>
                <Text style={[
                  RegisterStyle.text,
                  { marginTop: 20, marginBottom: 10 }
                ]}>
                  Je suis :
                </Text>
              </View>
              <View style={[RegisterStyle.status_type]}>
                <Pressable
                  onPress={() => onChangeStatus('lyceen')}
                  style={[Button.base, is_lyceen ? Button.pressed : null]}
                >
                  <Text style={is_lyceen ? Button.pressed_text : RegisterStyle.text}>
                    Lycéen(ne)
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => onChangeStatus('')}
                  style={[is_etudiant ? Button.pressed : null, Button.base]}
                >
                  <Text style={is_etudiant ? Button.pressed_text : RegisterStyle.text}>
                    Étudiant(e)
                  </Text>
                </Pressable>
              </View>
            </View>

            <View style={[
              RegisterStyle.container,
              {
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flex: 0.6,
              }
            ]}>
              <View>
                <Text style={[RegisterStyle.label]}>
                  Nom de l'établissement
                </Text>
                <View style={[RegisterStyle.establishment,]}>
                  <TextInput
                    value={school.name}
                    onChangeText={value => onChangeSchool('name', value)}
                    style={{ color: "white", fontSize: 17 }}
                    placeholderTextColor="rgba(20,20,20,0.3)"
                    placeholder="Nom de l'établissement"
                  ></TextInput>
                </View>
              </View>
              <View>
                <Text style={[RegisterStyle.label]}>
                  Adresse de l'établissement
                </Text>
                <View style={RegisterStyle.establishment}>
                  <TextInput
                    value={school.address}
                    onChangeText={value => onChangeSchool('address', value)}
                    style={{ color: "white", fontSize: 17 }}
                    placeholderTextColor="rgba(20,20,20,0.3)"
                    placeholder="N° Rue, Rue, N° Département, Ville"
                  ></TextInput>
                </View>
              </View>
              <View>
                <Text style={[RegisterStyle.label]}>
                  Diplôme préparé
                </Text>
                <SelectDropdown
                  buttonStyle={RegisterStyle.select}
                  buttonTextStyle={{
                    color: !school.diploma || school.diploma == diploma_types[0]
                      ? 'rgba(20,20,20,0.3)' : 'white',
                    fontSize: 17,
                  }}
                  dropdownStyle={{
                    borderWidth: 0,
                    borderRadius: 1,
                  }}
                  defaultButtonText="Choisir le diplôme"
                  data={diploma_types}
                  onSelect={(selectedDiploma, index) => {
                    onChangeSchool('diploma', selectedDiploma != diploma_types[0] ? selectedDiploma : null);
                  }}
                  buttonTextAfterSelection={(selectedDiploma, index) => {
                    return selectedDiploma;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item
                  }}
                />
              </View>
              <View>
                <Text style={[RegisterStyle.label]}>
                  Année d'obtention
                </Text>
                <SelectDropdown
                  buttonStyle={RegisterStyle.select}
                  buttonTextStyle={{
                    color: !school.year_of_graduation || school.year_of_graduation == graduation_year[0]
                      ? 'rgba(20,20,20,0.3)' : 'white',
                    fontSize: 17,
                  }}
                  dropdownStyle={{
                    borderWidth: 0,
                    borderRadius: 1,
                  }}
                  defaultButtonText="Choisir l'année"
                  data={graduation_year}
                  onSelect={(selectedYear, index) => {
                    onChangeSchool('year_of_graduation', selectedYear != graduation_year[0] ? selectedYear : null);
                  }}
                  buttonTextAfterSelection={(selectedYear, index) => {
                    return selectedYear;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item
                  }}
                />
              </View>
            </View>

            <View style={{
              flex: 0.13,
              justifyContent: "center",
            }}>
              <Pressable
                onPress={() => goToRegistrationB()}
                style={[registration_b ? Button.pressed : null, Button.base]}
              >
                <Text style={registration_b ? [Button.pressed_text] : [RegisterStyle.text]}>
                  Suivant
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </LinearGradient >
    </View>
  );
}

const RegisterStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  status_type: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 350,
    marginBottom: 40,
  },
  establishment: {
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: "center",
    alignItems: 'center',
    width: 350,
    height: 50,
  },
  select: {
    borderWidth: 1,
    borderColor: 'white',
    width: 350,
    height: 50,
    backgroundColor: null,
  },
  label: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
})