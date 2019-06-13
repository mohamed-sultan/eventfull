import React from 'react';
import {
    Image,
    View,
    TouchableOpacity,
    Text,
    I18nManager,
    TextInput,
} from 'react-native';
import { width, verticalScale, scale, moderateScale, height } from '../Helpers'
import strings from '../strings'
import Modal from 'react-native-modalbox'
import LinearGradient from 'react-native-linear-gradient';
import StarRating from 'react-native-star-rating'


export default AddReviewModal = (props) => {
    const {
        opened,
        AddReview,
        keepBrowsing
    } = props
    const {
        modalContainerStyle,
        modalInnerContainer,
        almostDoneTextStyle,
        phaseTextStyle,
        reviewContainerStyle,
        inputLabelStyle,
        GotoButtonContainerStyle,
        buttonTextStyle,
        keepTextStyle,
        keepContainerStyle
    } = styles
    return(
        <Modal
            isOpen={opened}
            //backButtonClose={true}
            position={"center"}
            onClosed={keepBrowsing}
            swipeToClose={false}
            backdropPressToClose={true}
            style={modalContainerStyle}
            backdropOpacity={0.15}
            coverScreen={true}
        >
            <View style={modalInnerContainer} >
                <Text style={almostDoneTextStyle}>{strings.giveReview}</Text>
                <Text style={phaseTextStyle}>{strings.reviewPhase}</Text>
                <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={3}
                    selectedStar={(rating) => console.log(rating)}
                    fullStar={require('../assets/icons/other/fullStar.png')}
                    emptyStar={require('../assets/icons/other/emptyStar.png')}
                    starSize={scale(38.92)}
                    starStyle={{width: scale(38.92), height: verticalScale(36.98)}}
                    reversed={I18nManager.isRTL ? true: false}
                    containerStyle={{marginTop: verticalScale(18), alignSelf: 'center'}}
                />
                <View style={reviewContainerStyle}>
                    <Text style={inputLabelStyle}>{strings.reviewLabel}</Text>
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={[ styles.inputStyle]}
                        placeholder={ strings.writeComment }
                        placeholderTextColor={'rgba(185,183,184,0.46)'}
                        autoCorrect={false}
                        onChangeText={(value) => console.log('mm')}
                        value={ '' }
                        autoCapitalize='none'
                        enablesReturnKeyAutomatically={true}
                    />   
                </View>
                <TouchableOpacity style={GotoButtonContainerStyle} onPress={AddReview}>
                    <LinearGradient
                        colors={['#2CB895', '#14ACE3']}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                        style={GotoButtonContainerStyle}
                    >
                        <Text style={buttonTextStyle}>{strings.submit}</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={keepContainerStyle} onPress={keepBrowsing}>
                    <Text style={keepTextStyle}>{strings.cancel}</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

const styles = {
    modalContainerStyle: {
        flex:1,
        backgroundColor: 'rgba(0,0,0,.6)',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height,
        paddingTop: verticalScale(65),
        zIndex: 1000
    },
    modalInnerContainer: {
        width: scale(329),
        height: verticalScale(441.42),
        borderRadius: moderateScale(10),
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: verticalScale(42),
        zIndex: 1000
    },
    almostDoneTextStyle:{
        fontSize: moderateScale(35),
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center'
    },
    phaseTextStyle:{
        fontSize: moderateScale(14),
        color: '#000',
        textAlign: 'center',
        marginTop: verticalScale(12)
    },
    reviewContainerStyle:{
        marginTop: verticalScale(43),
        alignSelf: 'flex-start',
        paddingHorizontal: scale(32),
        alignItems: 'flex-start'
    },
    inputLabelStyle:{
        fontSize: moderateScale(16),
        color: '#5C5C5C',
        textAlign: 'left',
        fontWeight: '600'
    },
    inputStyle:{
        width: scale(261),
        height: verticalScale(30),
        borderBottomColor: 'rgba(185,183,184,0.46)',
        borderBottomWidth: scale(1),
        paddingLeft: scale(7),
        marginTop: verticalScale(14)
    },
    GotoButtonContainerStyle:{
        width: scale(173),
        height: verticalScale(44),
        borderRadius: moderateScale(22),
        marginTop: verticalScale(30),
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(44,184,149,0.5)',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 20,
        shadowOpacity: 1,
        //elevation: 1
    },
    buttonTextStyle:{
        fontSize: moderateScale(14),
        color: '#fff',
        textAlign: 'center',
    },
    keepContainerStyle:{
        marginTop: verticalScale(28),
    },
    keepTextStyle:{
        fontSize: moderateScale(14),
        color: '#B9B7B8',
        textAlign: 'center',
        marginTop: verticalScale(28),
    }
}