import {StyleSheet} from 'react-native'
import React from 'react'
import {
  Colors,
  horizontalScale,
  verticalScale,
  moderateScale,
  Fonts,
} from '~/utils'

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.violetsBlue,
    flexDirection: 'row',
    paddingVertical: verticalScale(20),
    paddingHorizontal: verticalScale(10),
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: moderateScale(20),
    fontFamily: Fonts[500],
    color: Colors.defaultWhite,
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  item: {
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(5),
    backgroundColor: Colors.defaultWhite,
  },
  head: {
    paddingHorizontal: horizontalScale(5),
    paddingVertical: verticalScale(5),
    backgroundColor: Colors.antiflashWhite,
    marginBottom: verticalScale(10),
  },
  itemTxt: {
    fontSize: moderateScale(18),
    color: Colors.eerieBlack,
  },
  headTxt: {
    fontSize: moderateScale(20),
    fontWeight: Fonts.bold,
  },
  image: {
    width: horizontalScale(40),
    height: verticalScale(40),
    borderRadius: moderateScale(20),
  },
  column: {
    flexDirection: 'column',
    marginLeft: horizontalScale(10),
  },
  inputContainer: {
    alignSelf: 'center',
    width: horizontalScale(400),
    height: verticalScale(45),
    marginVertical: verticalScale(10)
  },
  emptyText: {
    fontSize: moderateScale(16),
    fontFamily: Fonts[500],
    color: Colors.gray,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: verticalScale(30),
    width: horizontalScale(300),
    lineHeight: verticalScale(24)
  },
})
