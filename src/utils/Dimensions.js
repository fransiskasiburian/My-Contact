import { Dimensions, PixelRatio } from "react-native";

const guidelineBaseWidth = 414;
const guidelineBaseHeight = 896;

export const windowWidth = Dimensions.get('window').width

export const windowHeight = Dimensions.get('window').height

export const screenWidth = Dimensions.get('screen').width

export const screenHeight = Dimensions.get('screen').height

const pixelRatio = PixelRatio.get();

export const horizontalScale = (size) => (windowWidth / guidelineBaseWidth) * size;

export const verticalScale = (size) => (windowHeight / guidelineBaseHeight) * size;

export const moderateScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor;