import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'

import { USERS_FETCH_REQUESTED } from '../REDUX_CONSTANTS'
import { styles } from './Users.style'

const Item = ({ name, user, onPress }) => (
  <TouchableOpacity onPress={() => onPress(user)} underlayColor="white">
      <ListItem 
        key={user.id}
        title={name}
        subtitle={user.company.name}
        subtitleStyle={{color: '#65D9E4'}}
        bottomDivider
        chevron
      />
  </TouchableOpacity>
);
// <Text style={styles.title}>{name}</Text>
class Users extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchUsers()
    this.onPress = this.onPress.bind(this)
  }
  
  onPress( user ){
    this.props.navigation.navigate('Details', { user })
  }

  render () {
    return (
      <View style={styles.container}>
        <FlatList
            data={this.props.users}
            renderItem={({item, index}) => <Item name={item.name} user={item} onPress={this.onPress}/>}
            keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch({type: USERS_FETCH_REQUESTED})
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)