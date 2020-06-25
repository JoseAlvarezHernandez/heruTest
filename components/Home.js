import PropTypes from 'prop-types'
import React, {Component} from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { Header } from 'react-native-elements'
import MapView , {PROVIDER_GOOGLE, Marker} from 'react-native-maps'
import { Dimensions } from 'react-native'
import Geolocation from '@react-native-community/geolocation'

class Home extends Component {
  PropTypes = {
    navigation: PropTypes.object
  }

  constructor(props){
    super(props)
    
    this.state = {
      time: '0', 
      timeInterval: () => {},
      position: {
        latitude: 23.634501,
        longitude: -102.552784
      },
    }

    this.getTime = this.getTime.bind(this)
  }

  componentDidMount(){
    this.setState(state => ({...state, timeInterval: setInterval(this.getTime, 1000)})) 
    this.findCoordinates()
  }

  componentWillUnmount(){
    clearInterval(this.state.timeInterval)
  }

  getTime() {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds();
    const time = `${hours}:${minutes}:${seconds}`
    this.setState(state => ({...state, time}))
  }

  findCoordinates(){
    Geolocation.getCurrentPosition(
      position => 
      this.setState( state => ({...state, position: position.coords}))
      ,error => console.log(error)
    )
  }
  
  render () {
    return (
      <>
        <Header 
          barStyle="dark-content"
          centerComponent={{text: 'Bienvenido', style:{ fontSize: 24, color: '#65D9E4'} }}
          rightComponent={{text: this.state.time, style:{color: '#65D9E4'}}}
          containerStyle={{ backgroundColor: '#2D2C3C'}}
          />
          <View>
            <MapView
              style={{width: Dimensions.get('screen').width, height: Dimensions.get('screen').height - 150}}
              provider={PROVIDER_GOOGLE}
              region={{
                latitude: this.state.position.latitude,
                longitude: this.state.position.longitude,
                latitudeDelta: 0.02,
                longitudeDelta: 0,
              }}
            >
              <Marker 
                coordinate={this.state.position} 
                title="Tu estás aquí"
                description="Tu ubicación actual"
                />
            </MapView>
          </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
});

export default Home;