import React, { Component} from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { Input } from 'react-native-elements'
import MapView , {PROVIDER_GOOGLE, Marker} from 'react-native-maps'
import { Dimensions } from 'react-native'

class Details extends Component{

    constructor(props){
        super(props)
    }

    render(){
        const user = this.props.route?.params?.user
        console.log(user.address.geo)
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Input value={user.name} disabled label="Nombre"/>
            <Input value={user.company.name} disabled label="Compañia"/>
            <Input value={user.email} disabled label="Correo Electronico"/>
            <Input value={user.phone} disabled label="Telefono"/>
            <Input value={user.website} disabled label="Sitio Web"/>
            <MapView
              style={{width: Dimensions.get('screen').width, height: 200}}
              provider={PROVIDER_GOOGLE}
              region={{
                latitude: Number(user.address.geo.lat),
                longitude: Number(user.address.geo.lng),
                latitudeDelta: 0.02,
                longitudeDelta: 0,
              }}
            >
              <Marker 
                coordinate={{latitude: Number(user.address.geo.lat), longitude: Number(user.address.geo.lng)}}
                title="Tu estás aquí"
                description="Tu ubicación actual"
                />
            </MapView>
        </View>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users
})

export default connect(mapStateToProps, null)(Details)