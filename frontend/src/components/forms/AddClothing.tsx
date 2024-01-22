import {JSX, useState} from "react";
import { Text } from 'react-native-paper';

import SmallRadioGroup, {RadioGroupProps} from "../SmallRadioGroup";
import {Formik, useFormik} from 'formik';
import {View} from "react-native";
import {Button, TextInput} from "react-native-paper";

// TODO - look up formik typescript


export function ClothingTypeSelection({clothingTypeSelection, onClothingTypeSelection}) : JSX.Element {
  const [itemType, setItemType] = useState('shirt');

  const props : RadioGroupProps = {
    options: [{
      text: 'Shirt',
      value: 'shirt',
    },
      {
        text: 'Pants',
        value: 'pants',
      },
      {
        text: 'Accessory',
        value: 'accessory',
      },

    ], selectedItem: clothingTypeSelection, setSelectedItem: onClothingTypeSelection
  }
  return <SmallRadioGroup {...props} />;
}
const AddClothingForm = props => {
  return (<Formik
    initialValues={{ email: '', clothingType: '' }}
    onSubmit={values => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <ClothingTypeSelection
          clothingTypeSelection={values.clothingType}
          onClothingTypeSelection={handleChange('clothingType')} />
        <TextInput
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
        />
        <Button className="bg-red-900" onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>);
}
export default AddClothingForm;
