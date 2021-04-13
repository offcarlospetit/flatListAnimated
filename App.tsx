/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Animated,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { AppearanceProvider } from 'react-native-appearance';
import { ThemeProvider } from './Theme/ThemeProvider';

const data = [
  { "id": 1, "first_name": "Elyssa", "last_name": "Cabrera", "email": "ecabrera0@xinhuanet.com", "gender": "Non-binary", "ip_address": "71.243.72.159", "image": "http://dummyimage.com/203x100.png/cc0000/ffffff" },
  { "id": 2, "first_name": "Channa", "last_name": "Noto", "email": "cnoto1@hexun.com", "gender": "Genderqueer", "ip_address": "217.167.72.217", "image": "http://dummyimage.com/134x100.png/dddddd/000000" },
  { "id": 3, "first_name": "Adrian", "last_name": "Woodeson", "email": "awoodeson2@nps.gov", "gender": "Bigender", "ip_address": "254.47.69.48", "image": "http://dummyimage.com/159x100.png/5fa2dd/ffffff" },
  { "id": 4, "first_name": "Mario", "last_name": "Matevosian", "email": "mmatevosian3@sphinn.com", "gender": "Bigender", "ip_address": "66.23.242.12", "image": "http://dummyimage.com/164x100.png/cc0000/ffffff" },
  { "id": 5, "first_name": "Isidor", "last_name": "Vacher", "email": "ivacher4@blogs.com", "gender": "Genderfluid", "ip_address": "244.146.10.67", "image": "http://dummyimage.com/180x100.png/cc0000/ffffff" },
  { "id": 6, "first_name": "Alvie", "last_name": "Hankey", "email": "ahankey5@wired.com", "gender": "Genderfluid", "ip_address": "225.138.118.66", "image": "http://dummyimage.com/237x100.png/cc0000/ffffff" },
  { "id": 7, "first_name": "Diahann", "last_name": "Tabb", "email": "dtabb6@sun.com", "gender": "Bigender", "ip_address": "13.78.17.64", "image": "http://dummyimage.com/248x100.png/dddddd/000000" },
  { "id": 8, "first_name": "Wayland", "last_name": "Shewry", "email": "wshewry7@vinaora.com", "gender": "Genderqueer", "ip_address": "98.194.40.178", "image": "http://dummyimage.com/155x100.png/cc0000/ffffff" },
  { "id": 9, "first_name": "Emmett", "last_name": "Moreby", "email": "emoreby8@nytimes.com", "gender": "Male", "ip_address": "200.211.81.233", "image": "http://dummyimage.com/163x100.png/5fa2dd/ffffff" },
  { "id": 10, "first_name": "Margie", "last_name": "Marlowe", "email": "mmarlowe9@geocities.com", "gender": "Male", "ip_address": "124.218.15.210", "image": "http://dummyimage.com/117x100.png/5fa2dd/ffffff" },
  { "id": 11, "first_name": "Kevyn", "last_name": "Castiglione", "email": "kcastiglionea@youku.com", "gender": "Non-binary", "ip_address": "243.39.22.39", "image": "http://dummyimage.com/248x100.png/dddddd/000000" },
  { "id": 12, "first_name": "Serge", "last_name": "Wornum", "email": "swornumb@qq.com", "gender": "Male", "ip_address": "87.159.99.161", "image": "http://dummyimage.com/109x100.png/cc0000/ffffff" },
  { "id": 13, "first_name": "Chrisse", "last_name": "Stuckes", "email": "cstuckesc@netscape.com", "gender": "Bigender", "ip_address": "88.231.142.111", "image": "http://dummyimage.com/115x100.png/5fa2dd/ffffff" },
  { "id": 14, "first_name": "Theresita", "last_name": "Longhorne", "email": "tlonghorned@hostgator.com", "gender": "Bigender", "ip_address": "231.39.57.126", "image": "http://dummyimage.com/233x100.png/dddddd/000000" },
  { "id": 15, "first_name": "Ken", "last_name": "Darrigrand", "email": "kdarrigrande@miibeian.gov.cn", "gender": "Genderqueer", "ip_address": "18.9.28.233", "image": "http://dummyimage.com/138x100.png/ff4444/ffffff" },
  { "id": 16, "first_name": "Erin", "last_name": "Boerderman", "email": "eboerdermanf@apache.org", "gender": "Male", "ip_address": "54.20.122.142", "image": "http://dummyimage.com/223x100.png/5fa2dd/ffffff" },
  { "id": 17, "first_name": "Flory", "last_name": "Raw", "email": "frawg@berkeley.edu", "gender": "Male", "ip_address": "168.101.163.43", "image": "http://dummyimage.com/178x100.png/ff4444/ffffff" },
  { "id": 18, "first_name": "Cherin", "last_name": "Salmon", "email": "csalmonh@ameblo.jp", "gender": "Agender", "ip_address": "254.124.240.230", "image": "http://dummyimage.com/197x100.png/cc0000/ffffff" },
  { "id": 19, "first_name": "Alec", "last_name": "Roels", "email": "aroelsi@freewebs.com", "gender": "Male", "ip_address": "239.28.187.82", "image": "http://dummyimage.com/154x100.png/cc0000/ffffff" },
  { "id": 20, "first_name": "Mitchael", "last_name": "Wrinch", "email": "mwrinchj@wikimedia.org", "gender": "Male", "ip_address": "188.122.185.183", "image": "http://dummyimage.com/249x100.png/5fa2dd/ffffff" }]


const spacing = 20
const avatarSize = 70
const itemSize = avatarSize + spacing * 3

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const App = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current
  return (
    <AppearanceProvider>
      <ThemeProvider>
        {/* <SafeAreaView style={{ flex: 1 }}> */}
        <Image source={{ uri: "https://www.itl.cat/pngfile/big/2-28409_cellphone-background-wallpaper-art-wallpaper-hd-portrait.jpg" }} blurRadius={80} style={StyleSheet.absoluteFillObject} />
        <View style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center' }}>
          <Animated.FlatList
            data={data}
            contentContainerStyle={{ padding: spacing, paddingTop: StatusBar.currentHeight || 42 }}
            renderItem={({ item, index, separators }) => {
              const inputRange = [-1, 0, (itemSize * index), (itemSize * (index + 2))]
              const opacityInputRange = [-1, 0, (itemSize * index), (itemSize * (index + 1))]
              const scale = scrollY.interpolate({ inputRange, outputRange: [1, 1, 1, 0] })
              const opacity = scrollY.interpolate({ inputRange: opacityInputRange, outputRange: [1, 1, 1, 0] })
              return (
                <Animated.View style={[styles.item, { transform: [{ scale }], opacity }]} >
                  <Image style={{ width: avatarSize, height: avatarSize, borderRadius: avatarSize, marginRight: spacing / 2 }} source={{ uri: "https://picsum.photos/id/870/200/300?grayscale&blur=2" }} />
                  <View>
                    <Text style={{ fontSize: 22, fontWeight: '700' }}>{item.first_name}</Text>
                    <Text style={{ fontSize: 18, opacity: 0.7 }}>{item.email}</Text>
                    <Text style={{ fontSize: 12, opacity: 0.8 }}>{item.ip_address}</Text>
                  </View>
                </Animated.View >
              )
            }}
            keyExtractor={(item) => item.id.toString()}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: true }
            )
            }
          />
        </View>
        {/* </SafeAreaView> */}
      </ThemeProvider>
    </AppearanceProvider>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: spacing,
    marginBottom: spacing,
    backgroundColor: 'rgba(255,255,255, 0.8)',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: .2,
    shadowRadius: 20,
    borderRadius: 12
    // padding: 20,
    // marginVertical: 8,
    // marginHorizontal: 16,
  },
  // title: {
  //   fontSize: 32,
  // },
});

export default App;
