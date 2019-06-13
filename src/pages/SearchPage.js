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
import { Container, Button, EmptyPage,SubmitButton } from '../components/common'
import { verticalScale, scale, width, height, moderateScale } from '../Helpers'
import strings from '../strings'
import {
    
} from '../actions'
import {connect} from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';


class SearchPage extends React.Component {
   
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
            itemDetailsContainerStyle,
            itemNameLikesContainerStyle,
            itemNameStyle,
            likeStyle,
            heartStyle,
            numOfLikesStyle,
            locContainerStyle,
            locStyle,
            locTextStyle,
            itemDescStyle,
            DateTextStyle,
            ButtonContainerStyle,
            ButtonTextStyle
        } = styles
        return (
            <TouchableOpacity onPress={() => console.log('mmm')} style={itemContainerStyle}>
                <Image source={require('../assets/images/hallowen.png')} style={itemImageStyle}/>
                <View style={itemDetailsContainerStyle}>
                    <View style={itemNameLikesContainerStyle}>
                        <Text style={itemNameStyle} numberOfLines={1}>Halloween Party</Text>
                        <View style={likeStyle}>
                            <Image source={require('../assets/icons/other/colorHeart.png')} style={heartStyle}/>
                            <Text style={numOfLikesStyle}>12,857</Text>
                        </View>
                    </View>
                    <View style={locContainerStyle}>
                        <Image source={require('../assets/icons/other/location.png')} style={locStyle}/>
                        <Text style={locTextStyle} numberOfLines={1}>KSA-Dammam</Text>
                    </View>
                    <Text style={itemDescStyle} numberOfLines={3}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</Text>
                    <View style={itemNameLikesContainerStyle}>
                        <Text style={DateTextStyle} numberOfLines={1}>2 Oct 2019 </Text>
                        <TouchableOpacity style={ButtonContainerStyle}>
                            <Text style={ButtonTextStyle}>{strings.book}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>  
        )
    }
    
    render() {

        const {
            listContentContainer,
            headerContainerStyle
        } = styles
        const {
            navigation
        } = this.props
        return (
            <Container>
                <FlatList 
                    style={{flex:1, width, backgroundColor: '#F7F8F8', marginTop: verticalScale(80)}}
                    contentContainerStyle={[listContentContainer, ([1,2,3,4,5].length == 0) && { justifyContent: 'center', }]}
                    data={[1,2,3,4,5,6,7,8]}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.renderSeparator}
                    keyExtractor={(item,index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    //refreshing={pageRefreshing}
                    //onRefresh={!pageLoading && refreshFavList}
                    //onEndReached={!loadingMore && thereAreMoreData && SaloonFavPagination}
                    //onEndReachedThreshold={0.5}
                    //ListFooterComponent={this.renderFooter}
                    //ListEmptyComponent={() => <EmptyPage loading={pageLoading} error={pageError} onReload={getFavList} text={strings.noFavSaloons} />}
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
    },
    separator:{
        height: verticalScale(18)
    },
    itemContainerStyle:{
        width: scale(321),
        height: verticalScale(126),
        backgroundColor: '#FFF',
        borderRadius: moderateScale(5),
        paddingHorizontal: scale(6),
        paddingVertical: verticalScale(8),
        flexDirection: 'row',
        shadowColor: 'rgba(185,183,184,0.28)',
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 20,
        shadowOpacity: 1,
        elevation: 2
    },
    itemImageStyle:{
        width: scale(105),
        height:verticalScale(105),
        resizeMode: 'cover',
        borderRadius: moderateScale(5),
        marginRight: verticalScale(10)
    },
    serviceNameStyle:{
        fontSize: moderateScale(24),
        color: '#fff',
        fontWeight: '600',
        textAlign: 'right'
    },
    itemDetailsContainerStyle:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        //width: scale(180)
    },
    itemNameLikesContainerStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    itemNameStyle:{
        fontSize: moderateScale(16),
        color: '#000',
        textAlign: 'left',
        flex: 1
    },
    likeStyle:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    heartStyle:{
        width: scale(10.73),
        height:verticalScale(9.47),
        resizeMode: 'contain',
        marginRight: scale(3)
    },
    numOfLikesStyle:{
        fontSize: moderateScale(8),
        color: '#000',
        fontWeight: '200',
        textAlign: 'right'
    },
    locContainerStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        flexWrap: 'wrap',
        marginTop: verticalScale(9),
        marginBottom: verticalScale(6)
    },
    locStyle:{
        width: scale(6),
        height:verticalScale(7.28),
        resizeMode: 'contain',
        marginRight: scale(5),
        tintColor: '#B9B7B8'
    },
    locTextStyle:{
        fontSize: moderateScale(8),
        color: '#B9B7B8',
        textAlign: 'left',
        flex: 1
    },
    itemDescStyle:{
        fontSize: moderateScale(8),
        color: '#B9B7B8',
        fontWeight: '200',
        textAlign: 'left',
        flex: 1
    },
    DateTextStyle:{
        fontSize: moderateScale(10),
        color: '#000',
        fontWeight: '200',
        textAlign: 'left',
        flex: 1
    },
    ButtonContainerStyle:{
        width: scale(83),
        height: verticalScale(30),
        borderRadius: verticalScale(19),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: scale(1),
        borderColor: '#6B55A3'
    },
    ButtonTextStyle:{
        fontSize: moderateScale(12),
        color: '#6B55A3',
        fontWeight: '200',
        textAlign: 'center',
    }
})

const mapStateToProps = ({ }) => {
    
    return {
        
    } 
}

export default connect(mapStateToProps,{
    
})(SearchPage);