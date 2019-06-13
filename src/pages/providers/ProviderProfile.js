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
import StarRating from 'react-native-star-rating'
import AddReviewModal from '../../components/AddReviewModal'

class ProviderProfile extends React.Component {
   state = {selected: '', addReview: false}
    constructor(props){
        super(props)
        this.renderSeparator = this.renderSeparator.bind(this)
        this.renderItem      = this.renderItem.bind(this)
        this.renderReview    = this.renderReview.bind(this)
        this.renderAlbum     = this.renderAlbum.bind(this)
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
            itemServiceDataStyle,
            itemServiceImageStyle,
            starContainerStyle,
            starTextStyle,
            priceRangeContainerStyle,
            serviceNameTextStyle,
            priceTagIconStyle,
            priceRangeValueStyle,
            priceRangeTextStyle,
        } = styles
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SingleServicePage')} style={itemServiceContainerStyle}>
                <Image source={{uri: 'https://media.brides.com/photos/5b8038a9a3f22572fe06f360/1:1/w_854/julianne-and-kristian-wedding01.jpg'}} style={itemServiceImageStyle}/>
                <View style={itemServiceDataStyle}>
                    <Text style={serviceNameTextStyle}>Service Name</Text>
                    <View style={[starContainerStyle, {alignSelf: 'flex-start', alignItems: 'flex-start'}]}>
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
                    <View style={priceRangeContainerStyle}>
                        <Image source={require('../../assets/icons/other/tag.png')} style={priceTagIconStyle}/>
                        <Text style={priceRangeTextStyle}>{strings.priceRange}</Text>
                        <Text style={priceRangeValueStyle}>12 RS - 80 RS</Text>
                    </View>
                </View>
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
    renderAlbum({item, index}){
        const {
            albumContainerStyle,
            albumImageStyle,
            playContainerStyle,
            playIconStyle,
            albumTextStyle
        } = styles
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('AlbumPage')} style={[albumContainerStyle, index+1%3 != 0 &&{marginRight: scale(7)}]}>
                <ImageBackground source={require('../../assets/images/serviceTest4.png')} style={albumImageStyle} resizeMode={'cover'}>
                    <View style={playContainerStyle}>
                        <Image style={playIconStyle} source={require('../../assets/icons/other/play-arrow.png')}/>
                    </View>
                </ImageBackground>
                <Text style={albumTextStyle} numberOfLines={1}>Music name</Text>
            </TouchableOpacity>  
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
            commentsHeaderTextStyle,
            commentsHeaderContainerTextStyle,
            headerImageStickContainerStyle,
            headerImageStickStyle,
            addReviewButtonContainer,
            addReviewStyle,
            plusIconStyle
        } = styles
        const {
            navigation
        } = this.props
        let musicanProvider = navigation.getParam('music', false);
        return (
            <Container>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{flexGrow: 1}}
                    contentContainerStyle={{paddingTop: verticalScale(195), alignItems: 'center', paddingHorizontal: scale(25)}}
                >
                    <View style={{flex: 1}}>
                        <Text style={headerTextStyle}>Nasar hamad</Text>
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
                        <Text style={ProviderDataTextStyle}>{strings.providerData}</Text>
                        <View style={providerDataContainerStyle}>
                            <View style={phoneAndBranchContainerStyle}>
                                <View style={phoneContainerStyle}>
                                    <Image source={require('../../assets/icons/other/phone.png')} style={phoneIconStyle}/>
                                    <Text style={phoneTextStyle}>10928664 - 05915328</Text>
                                </View>
                                <View style={phoneContainerStyle}>
                                    <Image source={require('../../assets/icons/other/branch.png')} style={branchIconStyle}/>
                                    <Text style={branchTextStyle}>12 Branchs</Text>
                                </View>
                            </View>
                            <View style={locationContainerStyle}>
                                <Image style={locationImageStyle} source={require('../../assets/icons/other/location.png')}/>
                                <View style={locationTextContainer}>
                                    <Text style={mainLocationTextStyle}>Main branch</Text>
                                    <Text style={secLocationTextStyle}>KSA -Dammam - elbadia str - NL 2356289</Text>
                                </View>
                            </View>
                            <View style={emailContainerStyle}>
                                <Image style={emailIconStyle} source={require('../../assets/icons/other/sent-mail.png')}/>
                                <Text style={emailTextStyle}>Naser@gmail.com</Text>
                            </View>
                        </View>
                        <View style={detailsContainerStyle}>
                            <Text style={ProviderDataTextStyle}>{strings.details}</Text>
                            <Text style={detailsTextStyle}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est eopksio laborum. Sed ut perspiciatis unde omnis istpoe natus error sit</Text>
                        </View>
                        {
                            musicanProvider ? 
                        <View style={serviceListContainerStyle}>
                            <Text style={ProviderDataTextStyle}>{strings.audioList}</Text>
                            <FlatList 
                                style={{backgroundColor: '#F7F8F8', marginBottom: 0}}
                                contentContainerStyle={[listContentContainer, ([1,2,3,4,5].length == 0) && { justifyContent: 'center', }]}
                                data={[1,2,3,1,2,3,1,2,3]}
                                renderItem={this.renderAlbum}
                                numColumns={3}
                                ItemSeparatorComponent={this.renderSeparator}
                                keyExtractor={(item,index) => index.toString()}
                                showsVerticalScrollIndicator={false}
                            />     
                        </View>:
                        <View style={serviceListContainerStyle}>
                            <Text style={ProviderDataTextStyle}>{strings.services}</Text>
                            <FlatList 
                                style={{backgroundColor: '#F7F8F8', marginBottom: 0}}
                                contentContainerStyle={[listContentContainer, ([1,2,3,4,5].length == 0) && { justifyContent: 'center', }]}
                                data={[1,2,3]}
                                renderItem={this.renderItem}
                                ItemSeparatorComponent={this.renderSeparator}
                                keyExtractor={(item,index) => index.toString()}
                                showsVerticalScrollIndicator={false}
                            />     
                        </View>
                        }
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
        justifyContent: 'space-between'
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
        alignItems: 'center'
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
    },
    detailsTextStyle:{
        marginTop: verticalScale(14),
        fontSize: moderateScale(14),
        textAlign: 'left',
        color: '#7F7F7F',
    },
    serviceListContainerStyle:{
        flex:1,
        marginTop: verticalScale(20),
        alignSelf: 'flex-start',
    },
    itemServiceContainerStyle:{
        flexDirection:'row',
        backgroundColor: '#fff',
        width: scale(308),
        height: verticalScale(103),
        paddingHorizontal: scale(7),
        paddingVertical: verticalScale(7),
        borderRadius: moderateScale(8)
    },
    itemServiceDataStyle:{
        justifyContent: 'space-between',
        marginLeft: scale(10),
    },
    itemServiceImageStyle:{
        width: scale(105),
        height: verticalScale(87),
        borderRadius: moderateScale(8),
        resizeMode: 'cover'
    },
    priceRangeContainerStyle:{
        flexDirection:'row'
    },
    serviceNameTextStyle:{
        fontSize: moderateScale(16),
        textAlign: 'left',
        color: '#000',
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
        color: '#2CB895',
        textAlign: 'right',
        marginLeft: scale(5)
    },
    priceRangeTextStyle:{
        fontSize: moderateScale(12),
        color: '#000',
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    reviewUserImgStyle:{
        height: scale(72),
        width: scale(72),
        borderRadius: scale(36),
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
    headerImageStickContainerStyle:{
        position: 'absolute',
        top: verticalScale(90),
        backgroundColor: '#fff',
        alignSelf: 'center',
        height:scale(98),
        width: scale(98),
        borderRadius: scale(49),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: scale(1),
        borderColor: '#AF66A8',
        zIndex:9999
    },
    headerImageStickStyle:{
        width: scale(92),
        height: scale(92),
        borderRadius: scale(46),
        resizeMode: 'cover'
    },
    albumContainerStyle:{
        width: scale(98),
        height: verticalScale(123),
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'wrap'
    },
    albumImageStyle:{
        width: scale(98),
        height: scale(99),
        borderRadius: scale(53),
        justifyContent: 'center',
        alignItems: 'center'
    },
    playContainerStyle:{
        width: scale(47.21),
        height: scale(47.21),
        borderRadius: scale(47.21 / 2),
        backgroundColor: 'rgba(39,44,59,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    playIconStyle:{
        width: scale(11.76),
        height: verticalScale(14.97),
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    albumTextStyle:{
        fontSize: moderateScale(15),
        textAlign: 'center',
        color: '#5C5C5C',
        marginTop: verticalScale(8),
        flex: 1
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
        marginBottom: verticalScale(20)
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
    
})(ProviderProfile);