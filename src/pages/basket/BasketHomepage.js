import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Text,
    Image,
    I18nManager,
    TextInput,
    ImageBackground,
    ScrollView,
    TouchableHighlight,
} from 'react-native';
import { Container, Button, EmptyPage,SubmitButton } from '../../components/common'
import { verticalScale, scale, width, height, moderateScale } from '../../Helpers'
import strings from '../../strings'
import {
    
} from '../../actions'
import {connect} from 'react-redux'
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    renderers
  } from "react-native-popup-menu";
import PaymentModal from './PaymentModal'


class BasketHomePage extends React.Component {
   state = {paymentModal: false}
    constructor(props){
        super(props)
        this.renderSeparator = this.renderSeparator.bind(this)
        this.renderItem      = this.renderItem.bind(this)
        this.renderPaymentMethod = this.renderPaymentMethod.bind(this)
    }
    componentDidMount(){
       
    }
    renderSeparator(){
        return(
            <View style={styles.separator} />
        )
    }
    renderPaymentMethod({item, index}){
        const {
            paymentContainerStyle,
            selectPaymentContainerStyle,
            selectCircleStyle,
            paymentImageStyle,
            paymentDetailsContainerStyle,
            paymentDetailsTextStyle
        } = styles
        return (
            <View style={paymentContainerStyle}>
                <TouchableOpacity style={[selectPaymentContainerStyle, index == 1 && {borderColor: '#14ACE3'}]}>
                    {
                        index == 1 &&
                        <View style={selectCircleStyle}/>
                    }
                </TouchableOpacity>
                <Image source={require('../../assets/images/hallowen.png')} resizeMode={'cover'} style={paymentImageStyle} />
                <View style={paymentDetailsContainerStyle}>
                    <Text style={paymentDetailsTextStyle} numberOfLines={1}>Naser tamemy</Text>
                    <Text style={paymentDetailsTextStyle} numberOfLines={1}>**************272</Text>
                </View>
            </View>
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
                    <Menu
                        renderer={renderers.Popover}
                        onSelect={value => console.log(value)}
                        rendererProps={{
                            anchorStyle: { opacity: 0, height: 0 },
                            preferredPlacement: "bottom"
                        }}
                    >
                        <MenuTrigger>
                            <View style={[dropdownTriggerContainerStyle]}>
                                <Text style={[dropdownTextStyle]}>1</Text>
                                <Image
                                    source={require("../../assets/icons/other/downarrow.png")}
                                    style={dropdownArrowStyle}
                                />
                            </View>
                        </MenuTrigger>
                        <MenuOptions optionsContainerStyle={optionsContainerStyle}>
                            <MenuOption
                            value={"2"}
                            customStyles={{ optionWrapper: { padding: moderateScale(5) } }}
                            >
                                <Text style={optionTextStyle}>2</Text>
                            </MenuOption>
                            <MenuOption
                            value={"3"}
                            customStyles={{ optionWrapper: { padding: moderateScale(5) } }}
                            >
                                <Text style={optionTextStyle}>3</Text>
                            </MenuOption>
                        </MenuOptions>
                    </Menu>
                    }
                    
                </View>
            </View>  
        )
    }
    
    render() {

        const {
            listContentContainer,
            headerTextStyle,
            hrStyle,
            priceContainerStyle,
            priceSectionContainerStyle,
            priceTypeStyle,
            priceAmountStyle,
            payWithTextStyle,
            addNewPaymentContainerStyle,
            addNewPaymetIconStyle,
            addNewPaymetTextStyle,
            buttonContainerStyle,
            buttonTextStyle
        } = styles
        const {
            navigation
        } = this.props
        return (
            <Container>
                <ScrollView
                showsVerticalScrollIndicator={false}
                style={{flexGrow: 1}}
                contentContainerStyle={{paddingTop: verticalScale(80), alignItems: 'center'}}
                >
                    <View style={{flex: 1, paddingHorizontal: scale(29)}}>
                        <Text style={headerTextStyle}>{strings.yourPurches}</Text>
                        <FlatList 
                            style={{backgroundColor: '#F7F8F8', width: scale(294)}}
                            contentContainerStyle={[listContentContainer, ([1,2,3,4,5].length == 0) && { justifyContent: 'center', width: scale(294)}]}
                            data={[1,2,3]}
                            renderItem={this.renderItem}
                            ItemSeparatorComponent={this.renderSeparator}
                            keyExtractor={(item,index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                        />
                        <View style={hrStyle}/>
                        <View style={priceContainerStyle}>
                            <View style={priceSectionContainerStyle}>
                                <Text style={priceTypeStyle}>{strings.serviceTotal}</Text>
                                <Text style={priceAmountStyle}>102 RS</Text>
                            </View>
                            <View style={priceSectionContainerStyle}>
                                <Text style={priceTypeStyle}>{strings.eventTicketesTotal}</Text>
                                <Text style={priceAmountStyle}>102 RS</Text>
                            </View>
                            <View style={priceSectionContainerStyle}>
                                <Text style={priceTypeStyle}>{strings.orderTotal}</Text>
                                <Text style={priceAmountStyle}>102 RS</Text>
                            </View>
                        </View>
                        <View style={hrStyle}/>
                        <Text style={payWithTextStyle}>{strings.payWith}</Text>
                        <FlatList 
                            style={{backgroundColor: '#F7F8F8', width: scale(294)}}
                            contentContainerStyle={[listContentContainer, ([1,2,3,4,5].length == 0) && { justifyContent: 'center', width: scale(294)}]}
                            data={[1,2]}
                            renderItem={this.renderPaymentMethod}
                            ItemSeparatorComponent={this.renderSeparator}
                            keyExtractor={(item,index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                        />
                        <TouchableOpacity style={addNewPaymentContainerStyle}>
                            <Image style={addNewPaymetIconStyle} source={require('../../assets/icons/other/plus.png')}/>
                            <Text style={addNewPaymetTextStyle}>{strings.addNewPayment}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={buttonContainerStyle} onPress={() => this.setState({paymentModal: true})}>
                            <Text style={buttonTextStyle}>{strings.booking}</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <PaymentModal 
                    opened={this.state.paymentModal}
                    AddReview={() => console.log('add')}
                    keepBrowsing={() => this.setState({paymentModal: false})}
                />
            </Container>
        );
    }
}


const styles = StyleSheet.create({
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
    hrStyle:{
        height: verticalScale(1),
        width: scale(291),
        alignSelf: 'center',
        backgroundColor: 'rgba(185,183,184,0.28)',
        marginTop: verticalScale(10)
    },
    priceContainerStyle:{
        height: verticalScale(131),
        justifyContent: 'space-around',
        paddingHorizontal: scale(5)
    },
    priceSectionContainerStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    priceTypeStyle:{
        fontSize: moderateScale(14),
        color: '#B9B7B8',
        textAlign: 'left'
    },
    priceAmountStyle:{
        fontSize: moderateScale(16),
        color: '#000000',
        textAlign: 'right'
    },
    payWithTextStyle:{
        marginTop: verticalScale(20),
        textAlign: 'left',
        fontSize: moderateScale(18),
        color: '#000'
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
    paymentContainerStyle:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: scale(294),
        paddingHorizontal: scale(12)
    },
    selectPaymentContainerStyle:{
        width: scale(18),
        height: scale(18),
        borderRadius: scale(9),
        borderWidth: scale(1),
        borderColor: '#B9B7B8',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginRight: scale(15)
    },
    selectCircleStyle:{
        width: scale(12.66),
        height: scale(12.66),
        borderRadius: scale(6.33),
        backgroundColor: '#14ACE3'
    },
    paymentImageStyle:{
        width: scale(44),
        height: scale(44),
        borderRadius: scale(22),
        marginRight: scale(21)
    },
    paymentDetailsContainerStyle:{
        justifyContent: 'center'
    },
    paymentDetailsTextStyle:{
        textAlign: 'left',
        fontSize: moderateScale(14),
        color: '#B9B7B8'
    },
    addNewPaymentContainerStyle:{
        paddingHorizontal: scale(12),
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: verticalScale(30)
    },
    addNewPaymetIconStyle:{
        width: scale(10.33),
        height: verticalScale(10.33),
        resizeMode: 'contain',
        tintColor: '#000',
        marginRight: scale(15)
    },
    addNewPaymetTextStyle:{
        textAlign: 'right',
        fontSize: moderateScale(14),
        color: '#000'
    },
    buttonContainerStyle:{
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6B55A3',
        width: scale(175),
        height: verticalScale(44),
        borderRadius: verticalScale(22),
        marginTop: verticalScale(67),
        marginBottom: verticalScale(38)
    },
    buttonTextStyle:{
        textAlign: 'center',
        fontSize: moderateScale(14),
        color: '#fff'
    },
    dropdownTriggerContainerStyle: {
      paddingHorizontal: scale(6),
      flexDirection: "row",
      justifyContent: "space-between",
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
      textAlign: "left",
      fontSize: moderateScale(14),
      marginLeft: scale(6)
    },
})

const mapStateToProps = ({ }) => {
    
    return {
        
    } 
}

export default connect(mapStateToProps,{
    
})(BasketHomePage);