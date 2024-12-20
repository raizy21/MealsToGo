import { Platform } from "react-native";

const liveHost = "https://us-central1-mealstogo-df0f9.cloudfunctions.net";

/** 
 * @remember !!Android only liveHost! Android by default http you URLs do not work. It will only work if it's an https URL 
 **/ 
const localHost = "http://localhost:5001/mealstogo-df0f9/us-central1";

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";

export const isMock = false;
export const host = !isDevelopment || isAndroid ? liveHost : localHost;