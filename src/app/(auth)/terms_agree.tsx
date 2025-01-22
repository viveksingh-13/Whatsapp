import { View, Text, StyleSheet, Image, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import fontSizes from "@/src/fontSizes";
import imagePath from "@/src/constants/imagePath";
import ButtonComp from "@/src/components/atoms/ButtonComp";
import { router } from "expo-router";

const TermsAgree = () => {
  const onpress = () => {
    router.push("/login");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome_text}>Welcome To WhatsaApp</Text>
        <Image
          style={styles.terms_image}
          source={imagePath.terms}
          resizeMode="contain"
        />
        <Text style={styles.terms_text}>
          Read our <Text style={styles.blue_text}>Privacy Policy.</Text> Tap
          “Agree and continue” to accept the{" "}
          <Text style={styles.blue_text}>Teams of Service.</Text>
        </Text>
        <View
          style={{
            width: moderateScale(300),
          }}
        >
          <ButtonComp title="Agree And Continue" onpress={onpress} />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.from_text}>From</Text>
        <Text style={styles.facebook_text}>FACEBOOK</Text>
      </View>
    </SafeAreaView>
  );
};

export default TermsAgree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(70),
    paddingHorizontal: scale(30),
  },
  header: {
    alignItems: "center",
    gap: moderateScale(30),
  },
  welcome_text: {
    fontWeight: 700,
    color: "#000000",
    fontSize: moderateScale(28),
    marginBottom: verticalScale(20),
  },
  terms_text: {
    fontWeight: 400,
    fontSize: moderateScale(13),
    textAlign: "center",
  },
  terms_image: {
    height: verticalScale(250),
    width: scale(250),
    marginBottom: moderateScale(20),
  },
  footer: {
    alignItems: "center",
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
  blue_text: {
    color: "#0C42CC",
  },
});
