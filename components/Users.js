import React, {Component} from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'

import { USERS_FETCH_REQUESTED } from '../REDUX_CONSTANTS'
import { styles } from './Users.style'

const Item = ({ name, id, onPress }) => (
  <TouchableOpacity onPress={() => onPress(id)} underlayColor="white">
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
    </View>
  </TouchableOpacity>
);

class Users extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchUsers()
  }
  
  onPress(id){
    console.log('press ', id)
  }

  render () {
    return (
      <View style={styles.container}>
        <FlatList
            data={this.props.users}
            renderItem={({item, index}) => <Item name={item.name} id={item.id} onPress={this.onPress}/>}
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