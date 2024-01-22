import {StyleSheet, Text, View} from "react-native";
import {JSX, useState} from "react";
import {RadioButton} from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Horizontal layout
  },
  radioOption: {
    flexDirection: 'row', // Horizontal layout for radio button and label
    alignItems: 'center', // Center vertically
    marginRight: 16, // Adjust as needed for spacing
  },
  selectedOption: {
    backgroundColor: 'blue', // Change to your selected color
  },
  radioLabel: {
    marginLeft: 8, // Adjust as needed for spacing between radio button and label
  },
  radioButton: {
    backgroundColor: '#33ff'
  }
});


interface RadioOptionProps {
  text: string,
  value: string,
}

export interface RadioGroupProps {
  options: RadioOptionProps[],
  selectedItem: any,
  setSelectedItem: any, // TODO change to function
}

export default function SmallRadioGroup(props: RadioGroupProps) : JSX.Element {
  const {selectedItem, setSelectedItem, options} = props;
  return (
    <RadioButton.Group
      onValueChange={newValue => setSelectedItem(newValue)}
      value={selectedItem}
    >
      <View  style={styles.container}>
        {options.map(opt => (
          <View key={opt.value} style={styles.radioOption} >
            <View style={styles.radioButton}>
              <RadioButton  value={opt.value} />
            </View>
            <Text style={styles.radioLabel}>{opt.text}</Text>
          </View>
        ))}
      </View>
    </RadioButton.Group>);
}