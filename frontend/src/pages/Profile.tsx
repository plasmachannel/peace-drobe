import {Text} from "react-native";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Place: { placeId: number };
};

// export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;
export default function ProfileScreen ({navigation: any, route}): JSX.Element {
  return <Text>This is {route.params.name}'s profile</Text>;
};
