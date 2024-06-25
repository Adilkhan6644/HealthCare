import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { FontAwesome } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.box}>
        <View style={styles.innerBox}>
          <Text style={styles.txt}>HELLO GUEST</Text>
          <Text>Current city: Lahore</Text>
        </View>
        {/*Search Bar Section */}
        <View style={styles.searchbarContainer}>
          <TextInput placeholder="Search" style={styles.TextInput} />
          <FontAwesome
            name="search"
            style={styles.searchbtn}
            size={24}
            color={Colors.PRIMARY}
          />
        </View>
      </View>
      <View
        style={styles.green}
        onTouchEnd={() => {
          navigation.navigate("Order");
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 30, marginLeft: 5 }}>
          Order Medicine:
        </Text>
        <Text
          style={{ fontSize: 20, marginLeft: 5, width: 400, marginTop: 10 }}
        >
          Get them delivered to your doorstep at UPTO 10% OFF!
        </Text>
        <TouchableOpacity>
          <Text>
            <EvilIcons
              style={{ marginTop: 10 }}
              name="arrow-right"
              size={60}
              color="black"
            />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.doctor}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Categories");
          }}
        >
          <View style={styles.left}>
            <Text style={styles.heading1}>Find Doctor</Text>
            <Text style={{ width: 100, marginLeft: 90 }}>
              Book appointments with ease.
            </Text>
            <Image
              style={{ height: 400, width: 200, marginTop: 0, marginLeft: 70 }}
              source={require("./doctor-anti2.png")}
            />
            <Text>
              <AntDesign
                style={{ marginLeft: 400 }}
                name="arrowright"
                size={30}
                color="black"
              />
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.right}>
          <Text style={styles.heading2}>Online Doctor</Text>
          <Text style={{ width: 100, marginLeft: 10, marginTop: 5 }}>
            Get instant consultation via video and live
          </Text>
          <TouchableOpacity>
            <Text style={{ marginLeft: 140 }}>
              <AntDesign name="arrowright" size={40} color="black" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: 100,
          width: "100%",
          backgroundColor: "#F2D9FB",
          marginTop: 20,
          zIndex: -1,
        }}
        onTouchEnd={() => {
          navigation.navigate("Diet");
        }}
      >
        <Text style={{ textAlign: "center", marginTop: 20 }}>Diet Plan</Text>
        <Text style={{ textAlign: "center", marginLeft: 110 }}>
          Find perfect for your body
        </Text>
        <TouchableOpacity>
          <Text style={{ marginLeft: 320 }}>
            <AntDesign name="arrowright" size={30} color="black" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    height: 200,
    width: "100%",
    backgroundColor: "#F2D9FB",
    borderRadius: 30,
  },
  innerBox: {
    flex: 1,
    marginTop: 50,
    paddingLeft: 10,
  },
  TextInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    width: "85%",
    fontSize: 16,
  },
  searchbarContainer: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
    borderWidth: 1,
    width: "90%",
    margin: "auto",
    borderRadius: 10,
  },
  searchbtn: {
    backgroundColors: Colors.WHITE,
    padding: 10,
    borderRadius: 8,
  },
  txt: {
    fontSize: 30,
  },
  green: {
    height: 200,
    width: "100%",
    backgroundColor: "#7DF882",
    marginTop: 20,
    borderRadius: 30,
  },
  doctor: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: 5,
  },
  left: {
    display: "flex",
    alignItems: "center",
    height: 150,
    width: "90%",
    backgroundColor: "white",
    margin: 5,
    borderRadius: 20,
  },
  heading1: {
    // zIndex:10
    // position:"absolute",
    // zIndex:10,
    marginLeft: 100,
    fontSize: 20,
  },
  right: {
    height: 150,
    width: "90%",
    backgroundColor: "#B3C9F3",
    borderRadius: 20,
  },
  heading2: {
    fontSize: 20,
    marginLeft: 10,
  },
});
