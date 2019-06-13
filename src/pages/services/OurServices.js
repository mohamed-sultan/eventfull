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
import { Container, Button, EmptyPage,SubmitButton, Spinner } from '../../components/common'
import { verticalScale, scale, width, height, moderateScale } from '../../Helpers'
import strings from '../../strings'
import {
    getCategories,
    refreshCategories,
    cleanCategories,
    categoriesPagination 
} from '../../actions'
import {connect} from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
import ChooseGenderModal from '../../components/ChooseGenderModal'


class OurServices extends React.Component {
   state = {openModal: false}
    constructor(props){
        super(props)
        this.renderSeparator = this.renderSeparator.bind(this)
        this.renderItem      = this.renderItem.bind(this)
        this.renderFooter    = this.renderFooter.bind(this)
    }
    componentDidMount(){
       this.props.getCategories()
    }
    componentWillUnmount(){
        this.props.cleanCategories()
    }
    renderSeparator(){
        return(
            <View style={styles.separator} />
        )
    }
    renderItem({item, index}){
        const {
            itemContainerStyle,
            serviceImageStyle,
            serviceNameStyle,
            imageStyle
        } = styles
        const img = item.img_url ? {uri: item.img_url} : require('../../assets/images/serv.png')
        return (
            <TouchableOpacity onPress={() => index == 0 ? this.props.navigation.navigate('SelectServices', {item})/*this.setState({openModal: true})*/ : this.props.navigation.navigate('SelectServices', {item})} style={itemContainerStyle}>
                <ImageBackground source={img} resizeMode={'cover'} style={serviceImageStyle} imageStyle={imageStyle}>
                </ImageBackground>
            </TouchableOpacity>  
        )
    }
    renderFooter(){
        return this.props.loadingMore ? <Spinner size={'small'}/> : <View style={{width: 0, height: 0}}/>
    }
    render() {

        const {
            welcomeContainerStyle,
            welcomeTextStyle,
            homeMsgStyle,
            headerContainerStyle,
            listContentContainer,
            serviceButtonContainerStyle,
            plusImageStyle,
            buttonTextStyle 
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
            getCategories,
            refreshCategories,
            categoriesPagination 
        } = this.props
        return (
            <Container>
                <FlatList 
                    style={{flex:1, width, backgroundColor: '#F7F8F8', marginTop: verticalScale(80)}}
                    contentContainerStyle={[listContentContainer, (data.length == 0) && { justifyContent: 'center', }]}
                    data={data}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.renderSeparator}
                    keyExtractor={(item,index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    refreshing={pageRefreshing}
                    onRefresh={!pageLoading && refreshCategories}
                    onEndReached={!loadingMore && thereAreMoreData && categoriesPagination}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={this.renderFooter}
                    ListEmptyComponent={() => <EmptyPage loading={pageLoading} error={pageError} onReload={getCategories} text={strings.noFavSaloons} />}
                />
                <SubmitButton 
                    showIcon={true}
                    icon={require('../../assets/icons/other/plus.png')}
                    buttonText={strings.specialOffer}
                    onPress={() => navigation.navigate('SpecialOffer')}
                />
                <ChooseGenderModal 
                    opened={this.state.openModal}
                    openService={() => navigation.navigate('SelectServices')}
                    keepBrowsing={() => this.setState({openModal: false})}
                    gender={2}
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
        height: verticalScale(15)
    },
    headerContainerStyle:{
        marginTop: verticalScale(63),
        alignSelf: 'flex-start',
        paddingHorizontal: scale(33)
    },
    welcomeContainerStyle:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    welcomeTextStyle:{
        fontSize: moderateScale(35),
        fontWeight: '600',
        color: '#000',
        textAlign: 'left'
    },
    usernameTextStyle:{
        fontSize: moderateScale(25),
        color: '#5C5C5C',
        textAlign: 'right',
        marginLeft: scale(10),
        marginTop: verticalScale(3)
    },
    homeMsgStyle:{
        fontSize: moderateScale(14),
        color: 'rgba(0,0,0,0.46)',
        textAlign: 'left',
        marginBottom: verticalScale(15)
    },
    serviceImageStyle:{
        width: scale(328),
        height: verticalScale(120),
        justifyContent: 'center',
        paddingHorizontal: scale(30)
    },
    imageStyle:{
        borderRadius: moderateScale(10),
        width: scale(328),
        height: verticalScale(120),
        resizeMode: 'cover'
    },
    itemContainerStyle:{
        width: scale(328),
        height: verticalScale(120),
        //backgroundColor: '#000'
    },
    serviceNameStyle:{
        fontSize: moderateScale(24),
        color: '#fff',
        fontWeight: '600',
        textAlign: 'right'
    }
})

const mapStateToProps = ({ categories}) => {
    const {
        data,
        pageLoading,
        pageError,
        pageRefreshing,
        loadingMore,
        thereAreMoreData,
    } = categories
    return {
        data,
        pageLoading,
        pageError,
        pageRefreshing,
        loadingMore,
        thereAreMoreData,
    } 
}

export default connect(mapStateToProps,{
    getCategories,
    refreshCategories,
    cleanCategories,
    categoriesPagination 
})(OurServices);