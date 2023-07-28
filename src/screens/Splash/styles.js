import { StyleSheet } from 'react-native'
import {Colors, Fonts, horizontalScale, moderateScale, verticalScale } from '~/utils'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: verticalScale(380),
        width: horizontalScale(380),
        marginLeft: horizontalScale(10),
        marginTop: -verticalScale(80)
    },
    text: {
        fontFamily: Fonts[700],
        fontSize: moderateScale(32),
        color: Colors.defaultBlack,
        textAlign: 'center',
        position: 'absolute',
        bottom: verticalScale(380)
    }
})

export default styles