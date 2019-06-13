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

const colors = ['#6B55A3', '#2CB895', '#14ACE3', '#E7128C'];
const dummyData = {0: [1,2,3], 1: [1,2,3,4,5], 2:[1,2], 3:[1,2,3,1,2,3,1,2,3]}

class AlbumPage extends React.Component {
   state = {index: 0, albumIndex:0}
    constructor(props){
        super(props)
        this.renderTopSwiper    = this.renderTopSwiper.bind(this)
        this.renderSeparator    = this.renderSeparator.bind(this)
        this.renderSong         = this.renderSong.bind(this)
        this.renderSongSeparator= this.renderSongSeparator.bind(this)
    }
    componentDidMount(){
       
    }
    renderSeparator(){
        return (
            <View style={{marginRight:scale(10)}}/>
        )
    }
    renderSongSeparator(){
        return (
            <View style={{height: verticalScale(20)}}/>
        )
    }
    
    renderTopSwiper({item, index}){
        const {
            topSwiperItemContainerStyle,
            albumImageStyle,
            bigCircleStyle,
            smallCircleStyle
        } = styles
        return (
            <TouchableOpacity style={[topSwiperItemContainerStyle]} onPress={() => this.setState({index})}>
                <ImageBackground style={[topSwiperItemContainerStyle]} imageStyle={albumImageStyle} source={{uri: 'https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg'}}>
                    <View style={[bigCircleStyle, {backgroundColor: colors[index % 4]}]}>
                        <View style={smallCircleStyle}/>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
    renderSong({item, index}){
        const {
            ItemSongContainerStyle,
            songNameStyle,
            songTimeStyle,
            playedSongStyle,
            playIconStyle
        } = styles
        return(
            <TouchableOpacity style={ItemSongContainerStyle} onPress={() => this.props.navigation.navigate('SongPage')}>
                {index != 2 ? <Text style={songNameStyle}>Music name here </Text> :
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                        <View style={playedSongStyle}>
                            <Image source={require('../../assets/icons/other/play-arrow.png')} style={playIconStyle}/>
                        </View>
                        <Text style={[songNameStyle, {fontWeight: '600'}]}>Music name here </Text>
                    </View>
                }
                <Text style={[songTimeStyle, index == 2 && {fontWeight: '600'}]}>5:12</Text>
            </TouchableOpacity>
        )
    }
    render() {

        const {
            topSwiperContainerStyle,
            albumNameStyle,
            singerNameStyle,
            songContainerStyle,
            listContentContainer
        } = styles
        const {
            navigation
        } = this.props
        return (
            <Container>
                <View style={{paddingTop: verticalScale(90),}}>
                    <View style={topSwiperContainerStyle}>
                        <Carousel
                            data={[1,2,3,4]}
                            renderItem={this.renderTopSwiper}
                            sliderWidth={width}
                            itemWidth={scale(195)}
                            autoplay={false}
                            lockScrollWhileSnapping
                            enableMomentum={false}
                            inactiveSlideScale={0.8} 
                            onSnapToItem={(index) => this.setState({albumIndex: index})}
                        />
                    </View>
                    <Text style={albumNameStyle}>Album Name</Text>
                    <Text style={singerNameStyle}>name of singer or Album</Text>
                    <View style={songContainerStyle}>
                        <FlatList 
                            style={{backgroundColor: '#F7F8F8', marginBottom: 0}}
                            contentContainerStyle={[listContentContainer, ([1,2,3,4,5].length == 0) && { justifyContent: 'center', }]}
                            data={dummyData[this.state.albumIndex]}
                            renderItem={this.renderSong}
                            ItemSeparatorComponent={this.renderSongSeparator}
                            keyExtractor={(item,index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                        />     
                    </View>                     
                </View>
            </Container>
        );
    }
}

const arabicIcon = I18nManager.isRTL ? {transform: [{ rotate: '180deg'}]} : {transform: [{ rotate: '0deg'}]}
const styles = StyleSheet.create({
    topSwiperContainerStyle:{
        flex: 1,
        width: width,
        height: verticalScale(188.19),
        marginTop: verticalScale(10)
    },
    topSwiperItemContainerStyle:{
        width: scale(195.22),
        height: verticalScale(188.19),
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
        width: scale(195.22),
        height: verticalScale(188.19),
        borderRadius: verticalScale(188.18 / 2),
        resizeMode: 'cover'
    },
    bigCircleStyle:{
        width: scale(56.48),
        height: scale(56.48),
        borderRadius: scale(56.48 / 2),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6B55A3'
    },
    smallCircleStyle:{
        width: scale(25),
        height: scale(25),
        borderRadius: scale(25 / 2),
        backgroundColor: '#F7F8F8'
    },
    albumNameStyle:{
        marginTop: verticalScale(18),
        textAlign: 'center',
        fontSize: moderateScale(20),
        color: '#000000',
        fontWeight: '600',
        alignSelf: 'center'
    },
    singerNameStyle:{
        marginTop: verticalScale(8),
        textAlign: 'center',
        fontSize: moderateScale(14),
        color: '#5C5C5C',
        alignSelf: 'center'
    },
    songContainerStyle:{
        flex:1,
        marginTop: verticalScale(20),
        alignSelf: 'flex-start',
    },
    listContentContainer:{
        paddingVertical: verticalScale(25),
        alignItems: 'center',
        flexGrow: 1
    },
    ItemSongContainerStyle:{
        width: width,
        paddingHorizontal: scale(27),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    songNameStyle:{
        textAlign: 'left',
        fontSize: moderateScale(16),
        fontWeight: '200',
        color: '#000000',
    },
    songTimeStyle:{
        textAlign: 'right',
        fontSize: moderateScale(12),
        fontWeight: '200',
        color: '#000000',
    },
    playedSongStyle:{
        width: scale(16.20),
        height: scale(16.20),
        borderRadius: scale(16.2 / 2),
        backgroundColor: 'rgba(175,102,168,0.26)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: scale(7)
    },
    playIconStyle:{
        width: scale(4.04),
        height: verticalScale(5.14),
        resizeMode: 'contain',
        tintColor: '#6B55A3',
        ...arabicIcon
    }
})

const mapStateToProps = ({ }) => {
    
    return {
        
    } 
}

export default connect(mapStateToProps,{
    
})(AlbumPage);