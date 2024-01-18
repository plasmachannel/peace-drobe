import {Button, Menu} from "react-native-paper";
import {JSX} from "react";
import {StyleSheet, Text, View} from "react-native";
import SearchIcon from "../icons/SearchIcon";
import RandomLogo from "../icons/RandomLogo";
import FilterIcon from "../icons/FilterIcon";
import {getExpressTestInfo} from "../service-clients/firstRequest";


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
  return (<View style={navigationStyle.container}>
      <SearchIcon height={toolbarHeight} width={25}/>
      <RandomLogo height={toolbarHeight} width={180} />
      <FilterIcon height={toolbarHeight} width={25} />
  </View>);
}


const inventoryTabStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
const InventoryTabs = (): JSX.Element => {
  return (<View
    style={inventoryTabStyle.container}
  >
      <Button
        mode="text"
        onPress={() => {console.log(getExpressTestInfo().then(data => console.log(data)))}}
      >
        Items (0)
      </Button>
      <Button
        mode="text"
        onPress={() => {console.log('hello')}}
      >
        Outfits (0)
      </Button>
      <Button
        mode="text"
        onPress={() => {console.log('hello')}}
      >
        Collections (0)
      </Button>
    </View>);
}

const SomeBody = () : JSX.Element => {
  return <View/>;
}


const MenuSelect = () : JSX.Element => {
  return <View></View>;
}


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
const HomeScreen = ({navigation}): JSX.Element => {
  return (<>
    <View
      style={homepageStyle.container}
    >
      <NavigationToolBar/>
      <InventoryTabs />
      <SomeBody/>
      <MenuSelect/>
    </View>
  </>);
};

/*
<Button icon="camera" mode="contained" onPress={() => navigation.navigate('Profile', {name: 'Jane'})}>
      Press me
    </Button>
 */

export default HomeScreen;