import React, {Component}  from 'react';
import {Text,StatusBar, View, Button,ScrollView, Image, CameraRoll,PermissionsAndroid} from 'react-native';

export default class Form extends Component {
    // static navigationOptions= () => ({
    //   drawerIcon: () => (
    //     <Icon
    //           name="home"
    //           color={tintColor}
    //           size={24}
    //       />
    //   )
    // })
    constructor(props){
      super(props)
      this.state={
        photos : null
      }
    }
    _handleButtonPress = async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          'title': 'Example App',
          'message': 'Example App access to your storage '
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the storage")
       // alert("You can use the storage");
      } else {
        console.log("storage permission denied")
       // alert("storage permission denied");
      }
    
      CameraRoll.getPhotos({
          first: 20,
          assetType: 'Photos',
        })
        .then(r => {
          //alert(r.edges)
          this.setState({ photos: r.edges })
        })
        .catch((err) => {
           //Error Loading Images
           alert(err)
        })
      }
    render() {
      return (
        <View style={{paddingTop:10}}>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#0336FF" translucent = {false}/>
          <Button title="Go to Detail Screen" color="#0336FF" onPress={()=>{
            this.props.navigation.navigate('Detail')
          }}></Button>
          {/* <Button title="Load Images" onPress={this._handleButtonPress} />
       <ScrollView>
         {this.state.photos!==null && this.state.photos.map((p, i) => {
         return (
           <Image
             key={i}
             style={{
               width: '100%',
               height: '100%',
               margin: 10
             }}
             source={{ uri: p.node.image.uri }}
           />
         );
       })}
       </ScrollView> */}
        </View>
      )
    }
  }