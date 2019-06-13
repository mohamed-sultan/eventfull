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
    getServices,
    refreshServices,
    servicesPagination,
    changeSelected 
} from '../../actions'
import {connect} from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';


class SelectServices extends React.Component {
   state = {selected: ''}
    constructor(props){
        super(props)
        this.renderSeparator = this.renderSeparator.bind(this)
        this.renderItem      = this.renderItem.bind(this)
    }
    componentDidMount(){
       const{
           navigation,
           getServices
       } = this.props
       navigation.getParam(item, undefined)
       if(item){
           getServices(item.id)
       }
    }
    renderSeparator(){
        return(
            <View style={styles.separator} />
        )
    }
    renderItem({item, index}){
        const {
            itemContainerStyle,
            circelContainerStyle,
            serviceImageStyle,
            serviceNameStyle,
            selectedServiceStyle,
            selectedCircleStyle,
            circleTextStyle
        } = styles
        const img = item.img_url ? {uri: item.img_url} : require('../../assets/icons/other/wedding-cake.png')
        let found = this.props.selected.indexOf(item.id)
        return (
            <TouchableOpacity onPress={() => this.props.changeSelected(item.id)} style={[itemContainerStyle, index + 1 % 3 != 0 && {marginRight: scale(12)}]}>
                <View style={[circelContainerStyle, this.state.selected == index && selectedServiceStyle ]}>
                    <Image source={img} style={serviceImageStyle}/>
                    {
                        found >= 0 ? <View style={selectedCircleStyle}>
                            <Text style={circleTextStyle}>{found + 1}</Text>
                        </View>: <View style={{height: 0, width: 0}}/>
                    }
                </View>
                <Text style={serviceNameStyle}>{item.name}</Text>
            </TouchableOpacity>  
        )
    }
    
    render() {

        const {
            headerTextStyle,
            headerImagestyle,
            listContentContainer,
            submitConatinerStyle,
            submitImageStyle
        } = styles
        const {
            navigation,
            data,
            pageLoading,
            pageError,
            pageRefreshing,
            loadingMore,
            thereAreMoreData,
            //actions
            getServices,
            refreshServices,
            servicesPagination 
        } = this.props
        item = navigation.getParam('item', undefined);
        //const img = item.img_url ? {uri: item.img_url} : 
        return (
            <Container>
                <View style={{marginTop: verticalScale(195), alignItems: 'center'}}>
                    <Text style={headerTextStyle}>{strings.selectServiceYouWish}</Text>
                    <Image source={require('../../assets/icons/other/serviceHeader.png')} style={headerImagestyle}/>
                    <FlatList 
                        style={{width, backgroundColor: '#F7F8F8'}}
                        contentContainerStyle={[listContentContainer, (data.length == 0) && { justifyContent: 'center', }]}
                        data={data}
                        numColumns={3}
                        renderItem={this.renderItem}
                        ItemSeparatorComponent={this.renderSeparator}
                        keyExtractor={(item,index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        refreshing={pageRefreshing}
                        onRefresh={!pageLoading ? () => refreshServices(item.id) : console.log('nmm')}
                        onEndReached={!loadingMore && thereAreMoreData ? () =>  servicesPagination(item.id): console.log('mmm')}
                        onEndReachedThreshold={0.5}
                        ListEmptyComponent={() => <EmptyPage loading={pageLoading} error={pageError} onReload={() => getServices(item.id)} text={strings.noServicesFound} />}
                    />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('ProvidersList')} style={submitConatinerStyle}>
                    <Image style={submitImageStyle} source={require('../../assets/icons/other/Checkbox.png')}/>
                </TouchableOpacity>
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
        marginTop: verticalScale(20),
        marginBottom: verticalScale(15)
    },
    listContentContainer:{
        paddingVertical: verticalScale(25),
        paddingHorizontal: scale(16),
        alignItems: 'center'
    },
    circelContainerStyle:{
        width: scale(92),
        height: scale(92),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(46),
        backgroundColor: '#FFFFFF',
        shadowColor: 'rgba(185,183,184,0.46)',
        shadowOffset: {width: 0, height: 0},
        elevation: 2,
        shadowRadius: 6,
        shadowOpacity: 1
    },
    serviceImageStyle:{
        width: scale(35),
        height: verticalScale(35),
        resizeMode: 'contain'
    },
    itemContainerStyle:{
        width: scale(92),
        backgroundColor: 'transparent'
    },
    serviceNameStyle:{
        fontSize: moderateScale(12),
        color: '#000',
        textAlign: 'center',
        marginTop: verticalScale(8)
    },
    separator:{
        height: verticalScale(12)
    },
    selectedServiceStyle:{
        borderWidth: 1,
        borderColor: '#AF66A8',
        shadowColor: 'rgba(175,102,168,0.1)',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 6,
        shadowOpacity: 1
    },
    selectedCircleStyle:{
        backgroundColor: '#AF66A8',
        width: scale(22),
        height: scale(22),
        borderRadius: scale(11),
        position: 'absolute',
        top: scale(1),
        right: verticalScale(1),
        alignItems: 'center',
        justifyContent: 'center'
    },
    circleTextStyle:{
        fontSize: moderateScale(12),
        color: '#fff',
        textAlign: 'center',
    },
    submitConatinerStyle:{
        position: 'absolute',
        bottom: verticalScale(50),
        right: scale(11),
        width: scale(61),
        height: scale(61),
        borderRadius: scale(30.5),
        backgroundColor: '#6B55A3',
        shadowColor: 'rgba(107,85,163,0.2)',
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 12,
        shadowOpacity: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    submitImageStyle:{
        width: scale(21),
        height: verticalScale(15),
        resizeMode: 'contain'
    }
})

const mapStateToProps = ({ services}) => {
    const {
        data,
        pageLoading,
        pageError,
        pageRefreshing,
        loadingMore,
        thereAreMoreData,
        selected,
    } = services
    return {
        data,
        pageLoading,
        pageError,
        pageRefreshing,
        loadingMore,
        thereAreMoreData,
        selected
    } 
}

export default connect(mapStateToProps,{
    getServices,
    refreshServices,
    servicesPagination,
    changeSelected 
})(SelectServices);