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
import Carousel from 'react-native-snap-carousel';
import Slider from "react-native-slider";
import LinearGradient from 'react-native-linear-gradient';


const colors = ['#6B55A3', '#2CB895', '#14ACE3', '#E7128C'];

class SongPage extends React.Component {
   state = {index: 0, albumIndex:0, value: 5}
    constructor(props){
        super(props)
        this.renderTopSwiper    = this.renderTopSwiper.bind(this)
        this.renderSeparator    = this.renderSeparator.bind(this)
    }
    componentDidMount(){
       
    }
    renderSeparator(){
        return (
            <View style={{marginRight:scale(15)}}/>
        )
    }
    
    renderTopSwiper({item, index}){
        const {
            topSwiperItemContainerStyle,
            topSwiperImageContainerStyle,
            albumImageStyle,
            bigCircleStyle,
            smallCircleStyle,
            ablumNameStyle
        } = styles
        return (
            <TouchableOpacity style={[topSwiperItemContainerStyle]} onPress={() => this.setState({index})}>
                <ImageBackground style={[topSwiperImageContainerStyle]} imageStyle={albumImageStyle} source={{uri: 'https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg'}}>
                    <View style={[bigCircleStyle, {backgroundColor: colors[index % 4]}]}>
                        <View style={smallCircleStyle}/>
                    </View>
                </ImageBackground>
                <Text style={ablumNameStyle}>name of Album</Text>
            </TouchableOpacity>
        )
    }
    render() {

        const {
            topSwiperContainerStyle,
            centerImageStyle,
            songNameStyle,
            nameOfSingerStyle,
            headerTextStyle,
            playerControllContainerStyle,
            playerNextPrevIconStyle,
            playPauseContainerStyle,
            playPauseIconStyle
        } = styles
        const {
            navigation
        } = this.props
        return (
            <Container>
                <View style={{paddingTop: verticalScale(90),}}>
                    <Text style={headerTextStyle}>{strings.simmilerAlbums}</Text>
                    <View style={[topSwiperContainerStyle, {paddingLeft: scale(20)}]}>
                        <Carousel
                            data={[1,2,3,4]}
                            renderItem={this.renderTopSwiper}
                            sliderWidth={width}
                            itemWidth={scale(80.17)}
                            autoplay={false}
                            ItemSeparatorComponent={this.renderSeparator}
                            inactiveSlideScale={1} 
                            activeSlideAlignment={'start'}
                        />
                    </View>  
                    <Image style={centerImageStyle} source={require('../../assets/icons/other/music-circle.png')}/>
                    <Text style={songNameStyle}>Song name</Text>            
                    <Text style={nameOfSingerStyle}>name of singer or Album</Text>  
                    <View style={{marginTop: verticalScale(15)}}>
                        <Slider
                            value={this.state.value}
                            onValueChange={value => this.setState({ value })}
                            minimumValue={0}
                            maximumValue={10}
                            minimumTrackTintColor={'#6B55A3'}
                            maximumTrackTintColor={'rgba(185,183,184,0.29)'}
                            thumbTintColor={'#AF66A8'}
                            style={{width: scale(266), alignSelf: 'center'}}
                        />
                        <View style={playerControllContainerStyle}>
                            <TouchableOpacity>
                                <Image source={require('../../assets/icons/other/playerBack.png')} style={[playerNextPrevIconStyle, {marginRight: scale(40)}]}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => console.log('play')} style={{marginRight: scale(40)}}>
                                <LinearGradient
                                    colors={['#AF66A8', '#6B55A3']}
                                    start={{ x: 0, y: 1 }}
                                    end={{ x: 1, y: 1 }}
                                    style={playPauseContainerStyle}
                                >
                                    <Image source={require('../../assets/icons/other/play-arrow.png')} style={[playPauseIconStyle]}/>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../../assets/icons/other/playerNext.png')} style={playerNextPrevIconStyle}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Container>
        );
    }
}

const arabicIcon = I18nManager.isRTL ? {transform: [{ rotate: '180deg'}]} : {transform: [{ rotate: '0deg'}]}
const styles = StyleSheet.create({
    topSwiperContainerStyle:{
        width: width,
        height: verticalScale(109),
        marginTop: verticalScale(10),
    },
    topSwiperItemContainerStyle:{
        width: scale(80.17),
        height: verticalScale(109),
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(0,0,0,0.15)',
        shadowOffset: {width: 0, height: 6},
        shadowRadius: 8,
        shadowOpacity: 1,
        elevation: 1
    },
    topSwiperImageContainerStyle:{
        width: scale(80.17),
        height: verticalScale(80.17),
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(0,0,0,0.15)',
        shadowOffset: {width: 0, height: 6},
        shadowRadius: 8,
        shadowOpacity: 1,
        elevation: 1
    },
    albumImageStyle:{
        width: scale(80.17),
        height: verticalScale(80.17),
        borderRadius: verticalScale(80.17 / 2),
        resizeMode: 'cover'
    },
    bigCircleStyle:{
        width: scale(28.16),
        height: scale(28.16),
        borderRadius: scale(28.16 / 2),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6B55A3'
    },
    smallCircleStyle:{
        width: scale(8),
        height: scale(8),
        borderRadius: scale(8 / 2),
        backgroundColor: '#F7F8F8'
    },
    ablumNameStyle:{
        marginTop: verticalScale(11),
        fontSize: moderateScale(10),
        color: '#5C5C5C',
        textAlign: 'center'
    },
    playIconStyle:{
        width: scale(4.04),
        height: verticalScale(5.14),
        resizeMode: 'contain',
        tintColor: '#6B55A3',
        ...arabicIcon
    },
    centerImageStyle:{
        alignSelf: 'center',
        marginTop: verticalScale(13),
        width: scale(167.01),
        height: verticalScale(169.73),
        resizeMode: 'cover'
    },
    songNameStyle:{
        alignSelf: 'center',
        fontSize: moderateScale(20),
        color: '#000000',
        fontWeight: '600',
        textAlign: 'center'
    },
    nameOfSingerStyle:{
        alignSelf: 'center',
        fontSize: moderateScale(14),
        color: '#5C5C5C',
        textAlign: 'center'
    },
    headerTextStyle:{
        alignSelf: 'flex-start',
        marginLeft: scale(20),
        fontSize: moderateScale(16),
        color: '#000000',
        fontWeight: '600',
        textAlign: 'left'
    },
    playerControllContainerStyle:{
        marginTop: verticalScale(14),
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
    },
    playerNextPrevIconStyle:{
        width: scale(9.04),
        height: verticalScale(11.28),
        resizeMode: 'contain',
        tintColor: '#B9B7B8'
    },
    playPauseContainerStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        width: scale(47.21),
        height: scale(47.21),
        borderRadius: scale(47.21 / 2),
    },
    playPauseIconStyle:{
        width: scale(14),
        height: verticalScale(16),
        resizeMode: 'contain',
        tintColor: '#fff',
        alignSelf: 'center'
    }
})

const mapStateToProps = ({ }) => {
    
    return {
        
    } 
}

export default connect(mapStateToProps,{
    
})(SongPage);