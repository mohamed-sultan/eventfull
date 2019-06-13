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


class Notifications extends React.Component {
   
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
            notificationTitleTextStyle,
            notificationHeaderStyle,
            redCircleStyle,
            notificationDetailsStyle,
            buttonContainerStyle,
            buttonTextStyle
        } = styles
        return (
            <View style={itemContainerStyle}>
                <View style={notificationHeaderStyle}>
                    <Text style={notificationTitleTextStyle}>Sunday 12 Nov</Text>
                    {index % 2 == 0 && <View style={redCircleStyle}/>}
                </View>
                <Text style={[notificationDetailsStyle, index % 2 != 0 && {marginBottom: verticalScale(40)}]}>New Event has Added Today</Text>
                {
                    index % 2 == 0 &&
                    <TouchableOpacity style={buttonContainerStyle}>
                        <Text style={buttonTextStyle}>{strings.goTo}</Text>
                    </TouchableOpacity>
                }
            </View>  
        )
    }
    
    render() {

        const {
            listContentContainer,
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
        flexGrow: 1,
    },
    itemContainerStyle:{
        width: scale(300),
        //backgroundColor: '#000'
        marginLeft: scale(30)
    },
    notificationTitleTextStyle:{
        fontSize: moderateScale(18),
        textAlign: 'left',
        color: '#000000'
    },
    notificationHeaderStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    redCircleStyle:{
        width: scale(10),
        height: scale(10),
        borderRadius: scale(5),
        backgroundColor: '#E7128C',
        shadowColor: 'rgba(231,18,140,0.3)',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 8,
        shadowOpacity: 2,
        elevation: 2
    },
    notificationDetailsStyle:{
        fontSize: moderateScale(14),
        textAlign: 'left',
        color: '#C2C2C2',
        marginLeft: scale(35),
        marginTop: verticalScale(13)
    },
    buttonContainerStyle:{
        width: scale(238),
        height: verticalScale(44),
        borderRadius: verticalScale(23),
        backgroundColor: '#6B55A3',
        marginLeft: scale(35),
        marginTop: verticalScale(23),
        marginBottom: verticalScale(40),
        justifyContent:'center',
        alignItems:'center'
    },
    buttonTextStyle:{
        fontSize: moderateScale(14),
        textAlign: 'center',
        color: '#ffffff',
    },
    separator:{
        height: verticalScale(1),
        width: scale(339),
        backgroundColor: 'rgba(0,0,0,0.11)',
        marginBottom: verticalScale(19)
    }
})

const mapStateToProps = ({ }) => {
    
    return {
        
    } 
}

export default connect(mapStateToProps,{
    
})(Notifications);