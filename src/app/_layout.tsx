import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Redirect, Stack } from "expo-router";
import * as splashScreen from "expo-splash-screen";
splashScreen.preventAutoHideAsync();
const RootNavigation = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    splashScreen.hideAsync();
  }, []);
  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      {isLogin ? <Redirect href="/(main)" /> : <Redirect href="/(auth)" />}
    </>
  );
};

export default RootNavigation;
