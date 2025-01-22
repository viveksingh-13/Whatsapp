import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import fontSizes from "@/src/fontSizes";
import imagePath from "@/src/constants/imagePath";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { useFocusEffect } from "@react-navigation/native";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      // Reset isLoading state whenever the screen is focused
      setIsLoading(false);
      const loadingTimeout = setTimeout(() => {
        setIsLoading(true); // Show the loading state after 2 seconds
      }, 2000);

      const navigationTimeout = setTimeout(() => {
        router.push("/terms_agree");
      }, 3000);

      return () => {
        clearTimeout(loadingTimeout);
        clearTimeout(navigationTimeout);
      };
    }, [])
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Image
          source={imagePath.logo}
          style={styles.logo_style}
          resizeMode="contain"
        />
        <Text style={styles.whatsapp_text}>WhatsApp</Text>
      </View>
      <View style={styles.footer}>
        {isLoading ? (
          <>
            <ActivityIndicator size={moderateScale(48)} color={"#0CCC83"} />
            <Text style={styles.loading_text}>Loading...</Text>
          </>
        ) : (
          <>
            <Text style={styles.from_text}>From</Text>
            <Text style={styles.facebook_text}>FACEBOOK</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(50),
  },
  header: {},
  body: {
    alignItems: "center",
    gap: verticalScale(10),
  },
  logo_style: {
    height: verticalScale(50),
    width: scale(50),
    borderRadius: 10,
  },
  whatsapp_text: {
    fontSize: moderateScale(35),
    color: "#000000",
    fontWeight: "bold",
  },
  footer: {
    alignItems: "center",
    height: verticalScale(80),
    justifyContent: "flex-end",
  },
  from_text: {
    fontSize: moderateScale(fontSizes.small),
    color: "#867373",
  },
  facebook_text: {
    fontSize: moderateScale(15),
    color: "#000000",
    fontWeight: 500,
  },
  loading_text: {
    fontSize: moderateScale(20),
    color: "#000000",
    fontWeight: "bold",
    marginTop: verticalScale(15),
  },
});
