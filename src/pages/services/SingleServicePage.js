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
import LinearGradient from 'react-native-linear-gradient';
import StarRating from 'react-native-star-rating';
import AddToCardModal from '../../components/AddToCardModal';
import ShareModal     from '../../components/ShareModal';
import AddReviewModal from '../../components/AddReviewModal'


class SingleServicePage extends React.Component {
   state = {selected: '', openModal: false, shareModal: false, addReview: false}
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
            itemServiceContainerStyle,
            
        } = styles
        return (
            <TouchableOpacity onPress={() => console.log('service')} style={[itemServiceContainerStyle, index+1%3 != 0 &&{marginRight: scale(7)}]}>
                <Image source={require('../../assets/images/serviceTest4.png')} style={itemServiceContainerStyle} resizeMode={'cover'}/>
            </TouchableOpacity>  
        )
    }

    renderReview({item, index}){
        const { 
            ReviewContainerStyle,
            reviewUserImgStyle,
            reviewUserContainerStyle,
            reviewUserDetailsContainerStyle,
            reviewUserNameTextStyle,
            reviewCommentTextStyle
        } = styles
        return (
            <View>
                <View style={ReviewContainerStyle}>
                    <View style={reviewUserContainerStyle}>
                        <Image source={require('../../assets/images/hallowen.png')} style={reviewUserImgStyle}/>
                    </View>
                    <View style={reviewUserDetailsContainerStyle}>
                        <Text style={reviewUserNameTextStyle}>User Name</Text>
                        <StarRating
                            disabled={true}
                            maxStars={5}
                            rating={3}
                            selectedStar={(rating) => console.log(rating)}
                            fullStar={require('../../assets/icons/other/fullStar.png')}
                            emptyStar={require('../../assets/icons/other/emptyStar.png')}
                            starSize={scale(12)}
                            starStyle={{width: scale(12), height: verticalScale(12)}}
                        />
                    </View>
                </View>
                <Text style={reviewCommentTextStyle}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est eopksio laborum.</Text>
            </View>
           
        )
    }

    renderReviewSeprator(){
        return(
            <View style={styles.reviewSeprator} />
        )
    }
    
    render() {

        const {
            headerTextStyle,
            listContentContainer,
            starContainerStyle,
            starTextStyle,
            ProviderDataTextStyle,
            providerDataContainerStyle,
            phoneAndBranchContainerStyle,
            phoneContainerStyle,
            phoneIconStyle,
            phoneTextStyle,
            branchIconStyle,
            branchTextStyle,
            locationContainerStyle,
            mainLocationTextStyle,
            secLocationTextStyle,
            locationTextContainer,
            locationImageStyle,
            emailContainerStyle,
            emailIconStyle,
            emailTextStyle,
            detailsContainerStyle,
            detailsTextStyle,
            serviceListContainerStyle,
            serviceTextStyle,
            locationMapStyle,
            locationHeaderStyle,
            locationAddressTextStyle,
            locationGetDirectionTextStyle,
            priceTagImageStyle,
            stickFooterContainerStyle,
            stickFooterButtonStyle,
            stickFooterContentStyle,
            shareButtonContainerStyle,
            shareIconStyle,
            heartIconStyle,
            commentsHeaderTextStyle,
            commentsHeaderContainerTextStyle,
            addReviewButtonContainer,
            addReviewStyle,
            plusIconStyle
        } = styles
        const {
            navigation
        } = this.props
        return (
            <Container>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{flexGrow: 1}}
                    contentContainerStyle={{paddingTop: verticalScale(195), alignItems: 'center', paddingHorizontal: scale(25)}}
                >
                <View style={{flex: 1}}>
                    <Text style={headerTextStyle}>Service Name</Text>
                        <View style={starContainerStyle}>
                            <StarRating
                                disabled={true}
                                maxStars={5}
                                rating={3}
                                selectedStar={(rating) => console.log(rating)}
                                fullStar={require('../../assets/icons/other/fullStar.png')}
                                emptyStar={require('../../assets/icons/other/emptyStar.png')}
                                starSize={scale(12)}
                                starStyle={{width: scale(12), height: verticalScale(12)}}
                            />
                            <Text style={starTextStyle}>(3.0)</Text>
                        </View>
                        <Text style={ProviderDataTextStyle}>{strings.serviceData}</Text>
                        <View style={providerDataContainerStyle}>
                            <View style={phoneAndBranchContainerStyle}>
                                <View style={[locationContainerStyle, {marginTop: 0}]}>
                                    <Image style={priceTagImageStyle} source={require('../../assets/icons/other/priceTag.png')}/>
                                    <View style={locationTextContainer}>
                                        <Text style={mainLocationTextStyle}>10,200 RS</Text>
                                        <Text style={secLocationTextStyle}>For Per Night</Text>
                                    </View>
                                </View>
                                <View style={phoneContainerStyle}>
                                    <Image source={require('../../assets/icons/other/phone.png')} style={phoneIconStyle}/>
                                    <Text style={phoneTextStyle}>10928664 - 05915328</Text>
                                </View>
                            </View>
                            <View style={locationContainerStyle}>
                                <Image style={locationImageStyle} source={require('../../assets/icons/other/location.png')}/>
                                <View style={locationTextContainer}>
                                    <Text style={mainLocationTextStyle}>Main branch</Text>
                                    <Text style={secLocationTextStyle}>KSA -Dammam - elbadia str - NL 2356289</Text>
                                </View>
                            </View>
                        </View>
                        <View style={detailsContainerStyle}>
                            <Text style={ProviderDataTextStyle}>{strings.location}</Text>
                            <View style={locationHeaderStyle}>
                                <Text style={locationAddressTextStyle}>Seraton Hotel 5 stars</Text>
                                <Text style={locationGetDirectionTextStyle} onPress={() => console.log('get direction')}>{strings.getDirection}</Text>
                            </View>
                            <View style={locationMapStyle} />
                        </View>
                        <View style={detailsContainerStyle}>
                            <Text style={ProviderDataTextStyle}>{strings.details}</Text>
                            <Text style={detailsTextStyle}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est eopksio laborum. Sed ut perspiciatis unde omnis istpoe natus error sit</Text>
                        </View>
                        <View style={serviceListContainerStyle}>
                            <Text style={ProviderDataTextStyle}>{strings.photos}</Text>
                            <FlatList 
                                style={{backgroundColor: '#F7F8F8', marginBottom: 0}}
                                contentContainerStyle={[listContentContainer, ([1,2,3,4,5].length == 0) && { justifyContent: 'center', }]}
                                data={[1,2,3,4,5,6]}
                                renderItem={this.renderItem}
                                ItemSeparatorComponent={this.renderSeparator}
                                keyExtractor={(item,index) => index.toString()}
                                showsVerticalScrollIndicator={false}
                                numColumns={3}
                            />
                        </View>
                        <View style={{flex: 1}}>
                            <View style={commentsHeaderContainerTextStyle}>
                                <Text style={[ProviderDataTextStyle, {marginTop: 0}]}>{strings.reviews}</Text>
                                <Text style={commentsHeaderTextStyle}>{strings.formatString(strings.numOfComments, '2')}</Text>
                            </View>
                            <FlatList 
                                style={{ backgroundColor: '#F7F8F8', marginTop: 0}}
                                contentContainerStyle={[listContentContainer, ([1,2,3,4,5].length == 0) && { justifyContent: 'center', }]}
                                data={[1,2]}
                                renderItem={this.renderReview}
                                ItemSeparatorComponent={this.renderReviewSeprator}
                                keyExtractor={(item,index) => index.toString()}
                                showsVerticalScrollIndicator={false}
                            />
                            <TouchableOpacity style={addReviewButtonContainer} onPress={() => this.setState({addReview: true})}>
                                <Image style={plusIconStyle} source={require('../../assets/icons/other/plus.png')}/> 
                                <Text style={addReviewStyle}>{strings.addReview}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <LinearGradient
                    colors={["rgba(247,248,248,0.1)", "#F7F8F8"]}
                    style={stickFooterContainerStyle}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                >
                    <View style={stickFooterContentStyle}>
                        <TouchableOpacity style={shareButtonContainerStyle}>
                            <Image source={require('../../assets/icons/other/Heart.png')} style={heartIconStyle}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={shareButtonContainerStyle} onPress={() => this.setState({shareModal: true})}>
                            <Image source={require('../../assets/icons/other/ic_share.png')} style={shareIconStyle}/>
                        </TouchableOpacity>
                        <SubmitButton 
                            containerStyle={stickFooterButtonStyle}
                            buttonText={strings.booking}
                            onPress={() => this.setState({openModal: true})}
                        />
                    </View>
                </LinearGradient>
                <AddToCardModal 
                    opened={this.state.openModal}
                    openBasket={() => navigation.navigate('BasketHomePage')}
                    keepBrowsing={() => this.setState({openModal: false})}
                />
                <ShareModal 
                    opened={this.state.shareModal}
                    openBasket={() => navigation.navigate('BasketHomePage')}
                    keepBrowsing={() => this.setState({shareModal: false})}
                />
                 <AddReviewModal 
                    opened={this.state.addReview}
                    AddReview={() => console.log('add')}
                    keepBrowsing={() => this.setState({addReview: false})}
                />
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    headerTextStyle:{
        fontSize: moderateScale(35),
        textAlign: 'center',
        color: '#5C5C5C',
        fontWeight: 'bold'
    },
    listContentContainer:{
        paddingVertical: verticalScale(25),
        alignItems: 'center',
        flexGrow: 1
    },
    separator:{
        height: verticalScale(8)
    },
    starContainerStyle: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    starTextStyle:{
        fontSize: moderateScale(12),
        textAlign: 'right',
        color: '#5C5C5C',
        marginLeft: scale(6)
    },
    ProviderDataTextStyle:{
        fontSize: moderateScale(18),
        textAlign: 'left',
        color: '#5C5C5C',
        fontWeight: 'bold',
        marginTop: verticalScale(25),
        alignSelf: 'flex-start'
    },
    providerDataContainerStyle:{
        paddingHorizontal: scale(8),
        marginTop: verticalScale(24),
        alignSelf: 'flex-start'
    },
    phoneAndBranchContainerStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width-scale(70)
    },
    phoneContainerStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: scale(15)
    },
    phoneIconStyle:{
        width: scale(15),
        height: verticalScale(15),
        resizeMode: 'contain'
    },
    phoneTextStyle:{
        fontSize: moderateScale(14),
        textAlign: 'right',
        color: '#000',
        marginLeft: scale(10)
    },
    branchIconStyle:{
        width: scale(12.5),
        height: verticalScale(12.5),
        resizeMode: 'contain'
    },
    branchTextStyle:{
        fontSize: moderateScale(14),
        textAlign: 'right',
        color: '#5C5C5C',
        marginLeft: scale(10)
    },
    locationContainerStyle:{
        marginTop: verticalScale(20),
        flexDirection: 'row',
        alignItems: 'center',
    },
    mainLocationTextStyle:{
        fontSize: moderateScale(14),
        textAlign: 'left',
        color: '#000',
    },
    secLocationTextStyle:{
        fontSize: moderateScale(12),
        textAlign: 'left',
        color: '#5C5C5C',
        fontWeight: '200'
    },
    locationImageStyle:{
        width: scale(12.5),
        height: verticalScale(15),
        resizeMode: 'contain',
        marginRight: scale(10)
    },
    emailContainerStyle:{
        marginTop: verticalScale(20),
        flexDirection: 'row',
        alignItems: 'center'
    },
    emailIconStyle:{
        width: scale(14.5),
        height: verticalScale(13.5),
        resizeMode: 'contain',
        marginRight: scale(10)
    },
    emailTextStyle:{
        fontSize: moderateScale(14),
        textAlign: 'right',
        color: '#000',
    },
    detailsContainerStyle:{
        marginTop: verticalScale(25),
        width: width - scale(50)
    },
    detailsTextStyle:{
        marginTop: verticalScale(14),
        fontSize: moderateScale(14),
        textAlign: 'left',
        color: '#7F7F7F',
    },
    locationMapStyle: {
        marginTop: verticalScale(14),
        height:verticalScale(114),
        //width: scale(327),
        backgroundColor: 'gray'
    },
    serviceListContainerStyle:{
        flex: 1,
        marginTop: verticalScale(20),
        alignSelf: 'flex-start',
    },
    itemServiceContainerStyle:{
        width: scale(98),
        height: scale(98),
        borderRadius: scale(49)
    },
    priceTagIconStyle:{
        width: scale(13.69),
        height: verticalScale(10.71),
        resizeMode: 'contain',
        marginRight: scale(5),
        alignSelf: 'center'
    },
    priceRangeValueStyle:{
        fontSize: moderateScale(14),
        color: '#14ACE3',
        textAlign: 'right',
        marginLeft: scale(5)
    },
    priceRangeTextStyle:{
        fontSize: moderateScale(12),
        color: '#000',
    },
    locationHeaderStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: verticalScale(12)
    },
    locationAddressTextStyle:{
        fontSize: moderateScale(14),
        color: '#5C5C5C',
        textAlign: 'left',
    },
    locationGetDirectionTextStyle:{
        fontSize: moderateScale(14),
        color: '#6B55A3',
        textAlign: 'right',
        textDecorationLine: 'underline'
    },
    priceTagImageStyle:{
        width: scale(16),
        height: verticalScale(16),
        resizeMode: 'contain',
        marginRight: scale(10)
    },
    stickFooterContainerStyle:{
        position: 'absolute',
        bottom: 0,
        height: verticalScale(87),
        width: scale(360),
    },
    stickFooterButtonStyle:{
        position: 'relative',
        bottom: 0
    },
    stickFooterContentStyle:{
        position: 'absolute',
        bottom: verticalScale(20),
        width: scale(360),
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    shareButtonContainerStyle:{
        height: scale(44),
        width: scale(44),
        borderRadius: scale(44),
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(185,183,184,0.46)',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 12,
        shadowOpacity: 1
    },
    heartIconStyle:{
        width: scale(17),
        height: verticalScale(15),
        resizeMode: 'contain'
    },
    shareIconStyle:{
        width: scale(15),
        height: verticalScale(18),
        resizeMode: 'contain'
    },
    commentsHeaderContainerTextStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginTop: 0
    },
    commentsHeaderTextStyle:{
        fontSize: moderateScale(12),
        color: '#B9B7B8',
        textAlign: 'right',
    },
    ReviewContainerStyle:{
        height: verticalScale(74),
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    reviewUserContainerStyle:{
        height: scale(74),
        width: scale(74),
        borderRadius: scale(37),
        borderWidth: scale(2),
        borderColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    reviewUserImgStyle:{
        height: scale(74),
        width: scale(74),
        borderRadius: scale(37),
        resizeMode: 'cover'
    },
    reviewUserDetailsContainerStyle:{
        height: verticalScale(74),
        marginLeft: scale(18),
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },
    reviewUserNameTextStyle:{
        fontSize: moderateScale(15),
        textAlign: 'left',
        color: '#000',
    },
    reviewCommentTextStyle:{
        fontSize: moderateScale(14),
        textAlign: 'left',
        color: '#7F7F7F',
        marginTop: verticalScale(15)
    },
    reviewSeprator:{
        marginTop:verticalScale(15),
        marginBottom: verticalScale(15),
        height: verticalScale(1),
        backgroundColor: '#B9B7B8'
    },
    addReviewButtonContainer:{
        width: scale(175),
        height: verticalScale(44),
        borderRadius: verticalScale(22),
        marginTop: verticalScale(40),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: scale(1),
        borderColor: '#6B55A3',
        alignSelf: 'center',
        marginBottom: verticalScale(80)
    },
    addReviewStyle:{
        fontSize: moderateScale(15),
        textAlign: 'right',
        color: '#6B55A3',
    },
    plusIconStyle:{
        marginLeft: scale(26),
        width: scale(13.51),
        height:verticalScale(13.51),
        resizeMode: 'contain',
        tintColor: '#6B55A3',
        marginRight: scale(12)
    }

})

const mapStateToProps = ({ }) => {
    
    return {
        
    } 
}

export default connect(mapStateToProps,{
    
})(SingleServicePage);