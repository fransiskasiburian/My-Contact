import {StyleSheet} from 'react-native'
import {
  Colors,
  horizontalScale,
  verticalScale,
  moderateScale,
  Fonts,
  windowHeight,
} from '~/utils'

export const styles = StyleSheet.create({
  image: {
    width: horizontalScale(150),
    height: verticalScale(150),
    borderRadius: moderateScale(75),
    alignSelf: 'center',
  },
  name: {
    fontFamily: Fonts.bold,
    fontSize: moderateScale(30),
    textAlign: 'center',
    marginTop: verticalScale(20),
    color: Colors.defaultBlack,
  },
  containerDetail: {
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(15),
    marginHorizontal: horizontalScale(20),
    marginVertical: verticalScale(30),
    backgroundColor: Colors.antiflashWhite,
    borderRadius: moderateScale(15),
  },
  label: {
    fontSize: moderateScale(14),
    color: Colors.eerieBlack,
  },
  value: {
    fontSize: moderateScale(20),
    color: Colors.defaultBlack,
    fontFamily: Fonts[700],
    marginBottom: verticalScale(20),
  },
  buttonContainer: {
    flexDirection: 'row',
    bottom: verticalScale(15),
    justifyContent: 'space-around',
  },
  editButton: {
    width: horizontalScale(180),
    paddingVertical: verticalScale(10),
    backgroundColor: Colors.defaultWhite,
    elevation: 3,
    borderRadius: moderateScale(10),
    alignItems: 'center',
  },
  deleteButton: {
    width: horizontalScale(180),
    paddingVertical: verticalScale(10),
    backgroundColor: Colors.red,
    borderRadius: moderateScale(10),
    alignItems: 'center',
    elevation: 3,
  },
  buttonIcon: {marginRight: verticalScale(5), alignSelf: 'center'},
  marginStyle: {
    marginTop: verticalScale(30),
    marginLeft: horizontalScale(20)
  },
})
