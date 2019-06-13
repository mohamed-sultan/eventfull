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


class ProvidersList extends React.Component {
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
            providerPicStyle,
            providerNameStyle,
            providerServiceStyle,
            viewProfileStyle,
            viewProfileTextStyle
        } = styles
        return (
            <View  style={[itemContainerStyle, index + 1 % 2 != 0 && {marginRight: scale(12)}]}>
                <Image style={providerPicStyle} source={require('../../assets/images/serviceTest4.png')}/>
                <View>
                    <Text style={providerNameStyle}>Provider name</Text>
                    <Text style={providerServiceStyle}>Wedding Procession</Text>
                </View>
                <TouchableOpacity style={viewProfileStyle} onPress={() => this.props.navigation.navigate('ProviderProfile', index == 0 && {music: true})}>
                    <Text style={viewProfileTextStyle}>{strings.viewProfile}</Text>
                </TouchableOpacity>
            </View>  
        )
    }
    
    render() {

        const {
            headerTextStyle,
            headerImagestyle,
            listContentContainer
        } = styles
        const {
            navigation
        } = this.props
        return (
            <Container>
                <View style={{marginTop: verticalScale(90), alignItems: 'center'}}>
                    <Image source={require('../../assets/icons/other/providerHeader.png')} style={headerImagestyle}/>
                    <FlatList 
                        style={{width, backgroundColor: '#F7F8F8'}}
                        contentContainerStyle={[listContentContainer, ([1,2,3,4,5].length == 0) && { justifyContent: 'center', }]}
                        data={[1,2,3,4,5,6,7,8]}
                        numColumns={2}
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
                </View>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    headerTextStyle:{
        fontSize: moderateScale(16),
        textAlign: 'center',
        color: '#000'
    },
    headerImagestyle:{
        width: scale(78),
        height: verticalScale(18),
        resizeMode: 'contain',
        //marginTop: verticalScale(20),
        marginBottom: verticalScale(15)
    },
    listContentContainer:{
        paddingVertical: verticalScale(15),
        paddingHorizontal: scale(20),
        alignItems: 'center'
    },
    serviceImageStyle:{
        width: scale(35),
        height: verticalScale(35),
        resizeMode: 'contain'
    },
    itemContainerStyle:{
        width: scale(160),
        height: verticalScale(200),
        backgroundColor: '#fff',
        borderRadius: moderateScale(10),
        shadowColor: 'rgba(185,183,184,0.46)',
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 6,
        shadowOpacity: 1,
        elevation: 2,
        alignItems: 'center',
        //paddingVertical: verticalScale(10),
        justifyContent: 'space-around'
    },
    serviceNameStyle:{
        fontSize: moderateScale(12),
        color: '#000',
        textAlign: 'center',
        marginTop: verticalScale(8)
    },
    separator:{
        height: verticalScale(15)
    },
    providerPicStyle:{
        width: scale(85),
        height: scale(85),
        borderRadius: scale(42.5),
        //marginTop: verticalScale(7),
        resizeMode: 'cover',
        marginBottom: verticalScale(8)
    },
    providerNameStyle:{
        fontSize: moderateScale(18),
        color: '#000',
        textAlign: 'center',
    },
    providerServiceStyle:{
        fontSize: moderateScale(12),
        color: '#B9B7B8',
        textAlign: 'center',
        marginBottom: verticalScale(12)
    },
    viewProfileStyle:{
        height: verticalScale(38),
        width: scale(139),
        borderRadius: moderateScale(19),
        borderWidth: scale(1),
        borderColor: '#6B55A3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewProfileTextStyle:{
        fontSize: moderateScale(12),
        color: '#6B55A3',
        textAlign: 'center',
    }
    
})

const mapStateToProps = ({ }) => {
    
    return {
        
    } 
}

export default connect(mapStateToProps,{
    
})(ProvidersList);