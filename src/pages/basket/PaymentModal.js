import React from 'react';
import {
    Image,
    View,
    TouchableOpacity,
    Text,
    I18nManager,
    TextInput,
    ScrollView,
    FlatList
} from 'react-native';
import { width, verticalScale, scale, moderateScale, height } from '../../Helpers'
import strings from '../../strings'
import Modal from 'react-native-modalbox'
import LinearGradient from 'react-native-linear-gradient';
import Dash from 'react-native-dash';



export default class PaymentModal extends React.Component {
    constructor(props){
        super(props)
        this.renderSeparator = this.renderSeparator.bind(this)
        this.renderItem      = this.renderItem.bind(this)
    }
    componentDidMount(){
       
    }
    renderSeparator(){
        return(
            <View style={styles.separator} />
        )
    }
    renderItem({item, index}){
        const {
            itemContainerStyle,
            itemImageStyle,
            serviceStlye,
            providerTextStyle,
            priceItemContainerStyle,
            priceTageIconStyle,
            itemPriceTextStyle,
            dropdownTriggerContainerStyle,
            dropdownTextStyle,
            dropdownArrowStyle,
            optionsContainerStyle,
            optionTextStyle,
            dropdownSeparator,
        } = styles
        return (
            <View style={itemContainerStyle}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../../assets/images/hallowen.png')} resizeMode={'cover'} style={itemImageStyle} />
                    <View style={{justifyContent: 'space-around'}}>
                        <Text style={serviceStlye} numberOfLines={1}>Service name</Text>
                        <Text style={providerTextStyle} numberOfLines={1}>Provider Name</Text>
                    </View>
                </View>
                <View style={{height: verticalScale(56), justifyContent: index == 1 ? 'space-around' : 'center'}}>
                    <View style={priceItemContainerStyle}>
                        <Image source={require('../../assets/icons/other/priceTag.png')} style={priceTageIconStyle}/>
                        <Text style={itemPriceTextStyle}>102 RS</Text>
                    </View>
                    {
                        index == 1 && 
                        <View style={[dropdownTriggerContainerStyle]}>
                            <Text style={[dropdownTextStyle]}>1</Text>
                        </View>
                    }
                    
                </View>
            </View>  
        )
    }
    
    render(){
        const {
            opened,
            AddReview,
            keepBrowsing
        } = this.props
        const {
            modalContainerStyle,
            modalInnerContainer,
            whiteCircleContainerStyle,
            paymentChickStyle,
            headerTextStyle,
            headerSuccessStyle,
            dashedLineStyle,
            headerListTextStyle,
            listContentContainer,
            billDetailsContainerStyle,
            billDateContainerStyle,
            billDateStyle,
            billDateValueStyle,
            totalContainerStyle,
            priceTextStlye,
            qrCodeImageStyle,
            GotoButtonContainerStyle,
            buttonTextStyle,
            keepContainerStyle,
            keepTextStyle
        } = styles
        return(
            <Modal
                isOpen={opened}
                //backButtonClose={true}
                position={"top"}
                onClosed={keepBrowsing}
                swipeToClose={false}
                backdropPressToClose={true}
                style={modalContainerStyle}
                backdropOpacity={0.15}
                coverScreen={true}
            >
                <ScrollView style={modalInnerContainer} contentContainerStyle={{alignItems: 'center', paddingVertical: verticalScale(42),}}>
                    <Text style={headerTextStyle}>{strings.thankYou}</Text>
                    <Text style={headerSuccessStyle}>{strings.successProcess}</Text>
                    <Dash style={dashedLineStyle} dashThickness={scale(1)} dashColor={'rgba(185,183,184,0.28)'} dashGap={scale(10)} dashLength={scale(10)}/>
                    <Text style={headerListTextStyle}>{strings.yourPurches}</Text>
                    <FlatList 
                        style={{backgroundColor: '#FFF', width: scale(294)}}
                        contentContainerStyle={[listContentContainer, ([1,2,3,4,5].length == 0) && { justifyContent: 'center', width: scale(294)}]}
                        data={[1,2,3]}
                        renderItem={this.renderItem}
                        ItemSeparatorComponent={this.renderSeparator}
                        keyExtractor={(item,index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                    />
                    <Dash style={dashedLineStyle} dashThickness={scale(1)} dashColor={'rgba(185,183,184,0.4)'} dashGap={scale(10)} dashLength={scale(10)}/>
                    <View style={billDetailsContainerStyle}>
                        <View style={billDateContainerStyle}>
                            <Text style={billDateStyle}>{strings.billDate}</Text>
                            <Text style={billDateValueStyle}>12 NOV 2019</Text>
                        </View>
                        <View style={[billDateContainerStyle, {marginLeft: scale(37)}]}>
                            <Text style={billDateStyle}>{strings.time}</Text>
                            <Text style={billDateValueStyle}>3:23 pm</Text>
                        </View>
                    </View>
                    <View style={totalContainerStyle}>
                        <Text style={billDateStyle}>{strings.total}</Text>
                        <Text style={[billDateStyle, {marginTop: verticalScale(12)}]}><Text style={priceTextStlye}>102</Text> RS</Text>
                    </View>
                    <Dash style={dashedLineStyle} dashThickness={scale(1)} dashColor={'rgba(185,183,184,0.4)'} dashGap={scale(10)} dashLength={scale(10)}/>
                    <View style={billDetailsContainerStyle}>
                        <Image style={qrCodeImageStyle} source={require('../../assets/images/qrCode.png')}/>
                        <View>
                            <Text style={billDateStyle}>{strings.oprationNum}</Text>
                            <Text style={billDateValueStyle}>12132KAHIERT</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={keepContainerStyle} onPress={keepBrowsing}>
                        <Text style={keepTextStyle}>{strings.cancel}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={GotoButtonContainerStyle} onPress={AddReview}>
                    <LinearGradient
                        colors={['#2CB895', '#14ACE3']}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                        style={GotoButtonContainerStyle}
                    >
                        <Text style={buttonTextStyle}>{strings.done}</Text>
                    </LinearGradient>
                </TouchableOpacity>
                </ScrollView>
                <View style={whiteCircleContainerStyle}>
                    <Image style={paymentChickStyle} source={require('../../assets/icons/other/paymentChick.png')}/>
                </View>
            </Modal>
        )
    }
}

const styles = {
    modalContainerStyle: {
        flex:1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height,
    },
    modalInnerContainer: {
        position: 'absolute',
        top: verticalScale(135.5),
        width: scale(313),
        height: verticalScale(450),
        backgroundColor: '#fff',
        paddingTop: verticalScale(13),
        marginBottom: verticalScale(10)
    },
    whiteCircleContainerStyle:{
        position: 'absolute',
        top: verticalScale(80),
        width: scale(111),
        height: scale(111),
        borderRadius: scale(55.5),
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paymentChickStyle:{
        width: scale(74.81),
        height: scale(74.81),
        borderRadius: scale(74.81 / 2),
        resizeMode: 'cover',
        alignSelf: 'center'
    },
    headerTextStyle:{
        fontSize: moderateScale(35),
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center'
    },
    headerSuccessStyle:{
        fontSize: moderateScale(14),
        color: '#000',
        textAlign: 'center',
        marginTop: verticalScale(10)
    },
    dashedLineStyle:{
        marginTop: verticalScale(19),
        width: scale(310),
        height: verticalScale(1),
        marginBottom: verticalScale(28)
    },
    listContentContainer: {
        alignItems: 'center',
        paddingVertical: verticalScale(25),
        flexGrow: 1,
        flex: 1
    },
    separator:{
        height: verticalScale(15)
    },
    headerTextStyle:{
        fontSize: moderateScale(18),
        color: '#000000',
        textAlign: 'left'
    },
    itemContainerStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: scale(294)
    },
    itemImageStyle:{
        width: scale(56),
        height: scale(56),
        borderRadius: scale(28),
        marginRight: scale(13)
    },
    serviceStlye:{
        textAlign: 'left',
        fontSize: moderateScale(14),
        fontWeight: 'bold',
        color: '#000'
    },
    providerTextStyle:{
        textAlign: 'left',
        fontSize: moderateScale(10),
        color: '#5C5C5C'
    },
    priceItemContainerStyle:{
        flexDirection: 'row',
        alignSelf: 'flex-start'
    },
    priceTageIconStyle:{
        width: scale(10),
        height: verticalScale(10),
        marginRight: scale(6)
    },
    itemPriceTextStyle:{
        textAlign: 'right',
        fontSize: moderateScale(12),
        fontWeight: 'bold',
        color: '#000'
    },
    dropdownTriggerContainerStyle: {
      paddingHorizontal: scale(6),
      flexDirection: "row",
      justifyContent: "center",
      width: scale(50),
      height: verticalScale(32),
      borderRadius: verticalScale(5),
      borderColor: "rgba(185,184,183,.28)",
      borderWidth: scale(1),
      backgroundColor: "#fff",
      alignItems: "center",
      alignSelf: 'flex-end'
    },
    optionsContainerStyle: {
      width: scale(50),
      backgroundColor: "#fff"
    },
    optionTextStyle: {
      color: "#000",
      fontSize: moderateScale(14),
      textAlign: "center"
    },
    dropdownSeparator: {
      height: verticalScale(1),
      backgroundColor: "#707070",
      opacity: 0.47
    },
    dropdownArrowStyle: {
      height: verticalScale(9.67),
      width: scale(5.99),
      resizeMode: "contain"
    },
    dropdownTextStyle: {
      textAlign: "center",
      fontSize: moderateScale(14),
    },
    headerListTextStyle:{
        fontSize: moderateScale(18),
        color: '#000000',
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginLeft: scale(23)
    },
    billDetailsContainerStyle:{
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: scale(33)
    },
    billDateContainerStyle:{
        
    },
    billDateStyle:{
        fontSize: moderateScale(18),
        color: '#5C5C5C',
        textAlign: 'left',
    },
    billDateValueStyle:{
        fontSize: moderateScale(14),
        color: '#5C5C5C',
        textAlign: 'left',
        marginTop: verticalScale(6)
    },
    totalContainerStyle: {
        alignSelf: 'flex-start',
        alignItems: 'flex-start',
        paddingHorizontal: scale(33),
        marginTop: verticalScale(24)
    },
    priceTextStlye:{
        fontSize: moderateScale(35),
        fontWeight: 'bold',
        color: '#AF66A8',
        textAlign: 'left'
    },
    qrCodeImageStyle:{
        width: scale(99),
        height: verticalScale(99),
        resizeMode: 'cover',
        marginRight: scale(8)
    },
    GotoButtonContainerStyle:{
        width: scale(173),
        height: verticalScale(44),
        borderRadius: moderateScale(22),
        marginTop: verticalScale(22),
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(44,184,149,0.5)',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 20,
        shadowOpacity: 1,
        marginBottom: verticalScale(20)
        //elevation: 1
    },
    buttonTextStyle:{
        fontSize: moderateScale(14),
        color: '#fff',
        textAlign: 'center',
    },
    keepContainerStyle:{
        marginTop: verticalScale(21),
    },
    keepTextStyle:{
        fontSize: moderateScale(14),
        color: '#B9B7B8',
        textAlign: 'center',
    }
}