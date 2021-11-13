import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AuthDetails from "../../components/auth/Details";
import AuthMenu from "../../components/auth/Menu";

export default function AuthScreen() {
  const [authPage, setAuthPage] = useState(0);
  const [detailsPage, setDetailsPage] = useState(false);

  return (
    <View style={styles.container}>
      {detailsPage ? (
        <AuthDetails setDetailsPage={setDetailsPage} />
      ) : (
        <AuthMenu
          authPage={authPage}
          setAuthPage={setAuthPage}
          setDetailsPage={setDetailsPage}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 30 },
});
