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
    fetchEvents
} from '../../actions'
import {connect} from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-snap-carousel';


class EventsHomepage extends React.Component {
   
    constructor(props){
        super(props)
        this.renderTopSwiper    = this.renderTopSwiper.bind(this)
        this.renderRecently     = this.renderRecently.bind(this)
        this.renderSeparator    = this.renderSeparator.bind(this)
        this.renderRecently2    = this.renderRecently2.bind(this)
    }
    componentDidMount(){
       this.props.fetchEvents()
    }
    renderSeparator(){
        return (
            <View style={{marginRight:scale(9)}}/>
        )
    }
    renderRecently2({item,index}){
        const {
            sectionSwiperContainerStyle,
            sectionImageStyle,
            TextDeatilsStyle,
            eventNameTextStyle,
            eventDateTextStyle,
            locIconStyle,
            dateContainerStyle,
            dateTextStyle
        } = styles
        return(
            <TouchableOpacity style={[sectionSwiperContainerStyle]} onPress={() => this.props.navigation.navigate('EventDetails')}>
                <Image source={require('../../assets/images/hallowen.png')} style={sectionImageStyle}/>
                <View>
                    <Text style={eventNameTextStyle} numberOfLines={1}>Halloween Party</Text>
                    <View style={TextDeatilsStyle}>
                        <Image source={require('../../assets/icons/other/location.png')} style={locIconStyle}/>
                        <Text style={eventDateTextStyle}>KSA-Dammam</Text>
                    </View>
                </View>
                <LinearGradient
                    colors={['#2CB895', '#14ACE3']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    style={dateContainerStyle}
                >
                    <Text style={dateTextStyle}>2 Oct 2019</Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }
    renderRecently({item,index}){
        const {
            sectionSwiperContainerStyle,
            sectionImageStyle,
            TextDeatilsStyle,
            eventNameTextStyle,
            eventDateTextStyle,
            locIconStyle,
            dateContainerStyle,
            dateTextStyle
        } = styles
        return(
            <TouchableOpacity style={[sectionSwiperContainerStyle]} onPress={() => this.props.navigation.navigate('EventDetails')}>
                <Image source={require('../../assets/images/hallowen.png')} style={sectionImageStyle}/>
                <View>
                    <Text style={eventNameTextStyle} numberOfLines={1}>Halloween Party</Text>
                    <View style={TextDeatilsStyle}>
                        <Image source={require('../../assets/icons/other/location.png')} style={locIconStyle}/>
                        <Text style={eventDateTextStyle}>KSA-Dammam</Text>
                    </View>
                </View>
                <LinearGradient
                    colors={['#2CB895', '#14ACE3']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    style={dateContainerStyle}
                >
                    <Text style={dateTextStyle}>2 Oct 2019</Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }
    renderTopSwiper({item, index}){
        const {
            topSwiperItemContainerStyle,
            topSwiperImageStyle,
            TopSwiperBottomContainerStyle,
            SwiperTitleStyle,
            topSwiperIconStyle,
            topSwiperTextStyle,
            topSwiperBottomStyle,
            swiperEventDescStyle,
            likeTopSwiperContainerStyle,
            likeTopSwiperIconStyle,
            numOfLikesStyle,
        } = styles
        const img = item.img_url ? {uri: item.img_url } : {uri: 'https://producer.musicradiocreative.com/wp-content/uploads/2016/12/shutterstock_404283955-600x300.jpg'}
        return (
            <TouchableOpacity style={[topSwiperItemContainerStyle]} onPress={() => this.props.navigation.navigate('EventDetails', {item})}>
                <ImageBackground style={[topSwiperItemContainerStyle, topSwiperImageStyle]} imageStyle={{borderRadius: moderateScale(9), resizeMode: 'cover'}} source={img}>
                    <LinearGradient
                        colors={['rgba(175,102,168,0.78)', 'rgba(107,85,163,0.71)']}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                        style={TopSwiperBottomContainerStyle}
                    >
                        <Text style={SwiperTitleStyle}>{item.name}</Text>
                        <Text style={swiperEventDescStyle} numberOfLines={4}>{item.description}</Text>
                        <View style={topSwiperBottomStyle}>
                            <Image style={[topSwiperIconStyle, {width: scale(8.2)}]} source={require('../../assets/icons/other/location.png')}/>
                            <Text style={topSwiperTextStyle}>{item.address}</Text>
                            <Image style={[topSwiperIconStyle, { marginLeft: scale(6)}]} source={require('../../assets/icons/other/calender.png')}/>
                            <Text style={topSwiperTextStyle}>{item.event_date ? item.event_date : ''}</Text>
                        </View>
                        <View style={likeTopSwiperContainerStyle}>
                            <Image source={require('../../assets/icons/other/Heart.png')} style={likeTopSwiperIconStyle}/>
                            <Text style={numOfLikesStyle}>{item.likes}</Text>
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
    render() {

        const {
            headerContainerStyle,
            headerMainTextStyle,
            headerSecTextStyle,
            topSwiperContainerStyle,
            recentlyContainerStyle,
            sectionTextStyle,
            recentlySwiperStyle,
        } = styles
        const {
            navigation,
            pageLoading,
            pageError,
            data,
            fetchEvents
        } = this.props
        if(pageLoading || pageError){
            return(
                <Container>
                    <EmptyPage loading={pageLoading} error={pageError} onReload={fetchEvents}/>
                </Container>
            )
        }
        return (
            <Container>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{flex:1, marginTop: verticalScale(55)}}
                    contentContainerStyle={{marginTop: verticalScale(20), alignItems: 'flex-start'}}
                >
                    <View style={headerContainerStyle}>
                        <Text style={headerMainTextStyle}>{strings.events}</Text>
                        <Text style={headerSecTextStyle}>{strings.eventsPhase}</Text>
                    </View>
                    <View style={topSwiperContainerStyle}>
                        <Carousel
                            data={data}
                            renderItem={this.renderTopSwiper}
                            sliderWidth={width}
                            itemWidth={scale(297)}
                            autoplay={true}
                            loop
                            activeAnimationType={'timing'}
                            lockScrollWhileSnapping
                            enableMomentum={false}
                            autoplayInterval={3000}
                            autoplayDelay={2000}
                        />
                    </View>
                    <View style={recentlyContainerStyle}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={sectionTextStyle}>{strings.eventsRecently}</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('EventsList')} style={{marginRight: verticalScale(36)}}>
                                <Text style={[sectionTextStyle, {fontWeight: '200'}]}>{strings.seeAll}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={recentlySwiperStyle}>
                            <Carousel
                                data={[1,2,3,4]}
                                renderItem={this.renderRecently}
                                sliderWidth={scale(345)}
                                itemWidth={scale(208)}
                                activeSlideAlignment={'start'}
                                inactiveSlideScale={1} 
                                ItemSeparatorComponent={this.renderSeparator}
                            />
                        </View>
                    </View>
                    <View style={[recentlyContainerStyle, {marginBottom: verticalScale(35)}]}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={sectionTextStyle}>{strings.musicParty}</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('EventsList')} style={{marginRight: verticalScale(36)}}>
                                <Text style={[sectionTextStyle, {fontWeight: '200'}]}>{strings.seeAll}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={recentlySwiperStyle}>
                            <Carousel
                                data={[1,2,3,4]}
                                renderItem={this.renderRecently2}
                                sliderWidth={scale(345)}
                                itemWidth={scale(208)}
                                activeSlideAlignment={'start'}
                                inactiveSlideScale={1} 
                                ItemSeparatorComponent={this.renderSeparator}
                            />
                        </View>
                    </View>                       
                </ScrollView>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    headerContainerStyle:{
        paddingHorizontal: scale(20),
        alignItems: 'flex-start',
        alignSelf: 'flex-start'
    },
    headerMainTextStyle:{
        fontSize: moderateScale(35),
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'left',
        marginLeft: scale(3)
    },
    headerSecTextStyle:{
        fontSize: moderateScale(14),
        color: 'rgba(0,0,0,0.46)',
        textAlign: 'left',
        marginTop: verticalScale(5)
    },
    topSwiperContainerStyle:{
        flex: 1,
        width: width,
        height: verticalScale(242),
        marginTop: verticalScale(25)
    },
    topSwiperItemContainerStyle:{
        width: scale(297),
        height: verticalScale(242),
        borderRadius: moderateScale(9)
    },
    topSwiperImageStyle:{
        
    },
    TopSwiperBottomContainerStyle:{
        width: scale(297),
        height: verticalScale(242),
        paddingHorizontal: scale(22),
        paddingVertical: verticalScale(19),
        borderRadius: moderateScale(9),
        flexWrap: 'wrap'
    },
    SwiperTitleStyle:{
        color: '#fff',
        fontSize: moderateScale(25),
        fontWeight: 'bold',
        textAlign: 'left',
        opacity: 1,
        marginTop: verticalScale(26)
    },
    swiperEventDescStyle:{
        color: '#fff',
        fontSize: moderateScale(8),
        fontWeight: '200',
        textAlign: 'left',
        opacity: 1,
        marginTop: verticalScale(4),
        minHeight: verticalScale(50),
        maxHeight:verticalScale(50)
        //flex: 1
    },
    topSwiperIconStyle:{
        width: scale(10),
        height: verticalScale(10),
        resizeMode: 'contain',
        opacity: 1
    },
    topSwiperBottomStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: verticalScale(8)
    },
    topSwiperTextStyle:{
        color: '#fff',
        fontSize: moderateScale(8),
        marginLeft: scale(7),
        opacity: 1
    },
    recentlyContainerStyle:{
        marginTop: verticalScale(30),
    },
    sectionTextStyle:{
        color: '#B9B7B8',
        fontSize: moderateScale(12),
        textAlign: 'left',
        marginLeft: scale(18)
    },
    recentlySwiperStyle:{
        marginTop: verticalScale(18),
        height: verticalScale(226.54),
        paddingLeft: scale(18)
    },
    sectionSwiperContainerStyle:{
        height: verticalScale(226.54),
        width: scale(208),
        borderRadius: moderateScale(5),
        backgroundColor: 'transparent',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    sectionImageStyle:{
        width: scale(208),
        height: verticalScale(180),
        borderRadius: moderateScale(5),
        resizeMode: 'cover',
    },
    TextDeatilsStyle:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    eventNameTextStyle: {
        color: '#6B55A3',
        fontSize: moderateScale(16),
        textAlign: 'left',
    },
    eventDateTextStyle:{
        color: '#000',
        fontSize: moderateScale(12),
        textAlign: 'right'
    },
    locIconStyle:{
        width: scale(6),
        height: verticalScale(7.5),
        resizeMode: 'contain',
        tintColor: '#000',
        marginRight: scale(5)
    },
    likesContainerStyle:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    likesLabelStyle:{
        width: scale(46),
        height: verticalScale(16),
        borderRadius: verticalScale(8),
        backgroundColor: 'rgba(231, 18, 140,0.19)',
        flexDirection:'row',
        alignItems: 'center'
    },
    likesIconStyle:{
        marginLeft: scale(3),
        tintColor: '#E7128C',
        width: scale(7.3),
        height: verticalScale(7.3),
        resizeMode: 'contain'
    },
    likesTextStyle:{
        color: '#E7128C',
        fontSize: moderateScale(8),
        fontWeight: '200',
        textAlign: 'right',
        marginLeft: scale(2)
    },
    buttonContainerStyle:{
        width: scale(110),
        height: verticalScale(30),
        borderRadius: verticalScale(19),
    },
    buttonColorsStyle:{
        width: scale(110),
        height: verticalScale(30),
        borderRadius: verticalScale(19),
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonTextStyle:{
        color: '#fff',
        fontSize: moderateScale(12),
        fontWeight: '200',
        textAlign: 'center',
    },
    likeTopSwiperContainerStyle:{
        position: 'absolute',
        bottom: verticalScale(30),
        left: scale(22),
        flexDirection: 'row',
        alignItems: 'center'
    },
    likeTopSwiperIconStyle:{
        width: scale(17),
        height: verticalScale(15),
        tintColor: '#fff',
        resizeMode: 'contain'
    },
    numOfLikesStyle:{
        color: '#fff',
        fontSize: moderateScale(12),
        fontWeight: '200',
        textAlign: 'right',
        marginLeft: scale(10)
    },
    dateContainerStyle:{
        position: 'absolute',
        bottom: verticalScale(33),
        right: scale(12),
        height: verticalScale(28),
        width: scale(63),
        borderRadius: moderateScale(4),
        alignItems: 'center',
        justifyContent: 'center'
    },
    dateTextStyle:{
        color: '#fff',
        fontSize: moderateScale(10),
        fontWeight: '200',
        textAlign: 'center',
    }
})

const mapStateToProps = ({ events}) => {
    const {
        pageLoading,
        pageError,
        data
    } = events
    return {
        pageLoading,
        pageError,
        data
    } 
}

export default connect(mapStateToProps,{
    fetchEvents
})(EventsHomepage);