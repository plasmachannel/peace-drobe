import {BottomNavigation, RadioButton, SegmentedButtons} from "react-native-paper";
import {JSX, useState} from "react";
import {Platform, StyleSheet, Text, View} from "react-native";
import { Appbar } from 'react-native-paper';
import ClothingTypeSelection from "../components/forms/AddClothing";


/*
TODO:

* Fix up the icons so that they can be pressed
* Need to take a more strategic approach to layouts
  * need to do some research into what good layout strategies are
  * flexbox?  grid?  Something else?
 */

const navigationStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
});

const NavigationToolBar = (): JSX.Element => {
  const toolbarHeight = 150;
  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

  return (
    <Appbar>
      <Appbar.Content title="Title" subtitle={'Subtitle'} />
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar>);
}
/*
 <View style={navigationStyle.container}>
        <SearchIcon height={toolbarHeight} width={25}/>
        <RandomLogo height={toolbarHeight} width={180} />
        <FilterIcon height={toolbarHeight} width={25} />
      </View>
 */


const InventoryTabs = (): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState('items');
  return (
    <SegmentedButtons
      value={selectedTab}
      onValueChange={setSelectedTab}
      buttons={[
        {
          value: 'items',
          label: 'Items (0)',
        },
        {
          value: 'outfits',
          label: 'Outfits (0)',
        },
        { value: 'collections', label: 'Collections (0)' },
      ]}
    />);
}

const SomeBody = () : JSX.Element => {
  return <View />;
}


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
});


const AlbumsRoute = () => <Text>wardrobe</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>shop</Text>;

// https://pictogrammers.com/library/mdi/
  // https://callstack.github.io/react-native-paper/docs/guides/icons/
  // https://oblador.github.io/react-native-vector-icons/
const BottomMenu = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'wardrobe', title: 'Wardrobe', focusedIcon: 'wardrobe', unfocusedIcon: 'wardrobe-outline' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    { key: 'shop', title: 'Shop', focusedIcon: 'shopping-search', unfocusedIcon: 'shopping-search' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: ClothingTypeSelection,
    wardrobe: AlbumsRoute,
    recents: RecentsRoute,
    shop: NotificationsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};


const homepageStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
// TODO - figure out an appropriate way to lay things out
const HomeScreen = ({navigation: any}): JSX.Element => {
  return (<>
    <View
      style={homepageStyle.container}
    >

      <NavigationToolBar/>
      <InventoryTabs />
      <SomeBody/>
      <BottomMenu/>
    </View>
  </>);
};

/*
<Button icon="camera" mode="contained" onPress={() => navigation.navigate('Profile', {name: 'Jane'})}>
      Press me
    </Button>
 */

export default HomeScreen;