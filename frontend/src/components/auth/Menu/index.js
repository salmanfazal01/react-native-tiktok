import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function AuthMenu({ authPage, setAuthPage, setDetailsPage }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerMain}>
        <Text style={styles.headerText}>
          {authPage == 0 ? "sign in" : "sign up"}
        </Text>
        <TouchableOpacity
          style={styles.providerButton}
          onPress={() => setDetailsPage(true)}
        >
          <Feather name="user" size={24} color="black" />
          <Text style={styles.providerButtonText}>Use Email</Text>
          <View />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.containerBottomButton}
        onPress={() => (authPage == 0 ? setAuthPage(1) : setAuthPage(0))}
      >
        {authPage == 0 ? (
          <Text>
            Don't have an account?{" "}
            <Text style={styles.bottomButtonText}>Sign up</Text>
          </Text>
        ) : (
          <Text>
            Already have an account?{" "}
            <Text style={styles.bottomButtonText}>Sign in</Text>
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerMain: {
    padding: 30,
    flex: 1,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 25,
    color: "darkslategray",
    textAlign: "center",
  },
  providerButton: {
    borderColor: "lightgray",
    borderWidth: 1,
    borderStyle: "solid",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  providerButtonText: {
    paddingRight: 20,
  },

  containerBottomButton: {
    backgroundColor: "ghostwhite",
    padding: 20,
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "lightgray",
  },
  bottomButtonText: {
    fontWeight: "bold",
    color: "red",
  },
});
