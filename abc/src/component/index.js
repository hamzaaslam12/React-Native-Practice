import React, {Component} from 'react';
import {StyleSheet,Text, View, Button,TextInput} from 'react-native';
import {connect} from 'react-redux';
import {changeUserName, deleteItem} from '../store/action/action';


 class Todo extends Component{
constructor(){
          super();
          this.state = {
          text: '',
          }
}



_changeData = () => {
// console.log('event called');
this.props.abc(this.state.text);
}

del = (index) => {
console.log('row ', index);
this.props.ghj(index);
}


render() {
  console.log(this.props.xyz)
            return (
              <View>
     <Text style={styles.blue}>MY FIRST REACT NATIVE APP</Text>
               <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />

                <Button
  onPress={this._changeData}
  title="Learn"
  color="red"
  width="100"
  accessibilityLabel="Learn more about this purple button"
/>

{this.props.xyz.map((row, index) => {
  return(

<View>
    <Text key={index}>{row}</Text>

    <Text
    onPress={() => this.del(index)}
    style={{width: 70, height: 30, backgroundColor: 'pink', textAlign: 'center'}}
    >
        DELETE
      </Text>
  </View>
)
})}


        </View>
            );
          }
        }
        
        const styles = StyleSheet.create({
          red: {
                    color: 'red',
                  },
          blue: {
          color: 'blue',
},
});

 function mapStateToProp(state){
          console.log('mapStateToProp ', state.root)
          return({
              xyz: state.root.userName
          })
        } 

      function mapDispatchToProp(dispatch){
                console.log('mapDispatchToProp ', mapDispatchToProp)
          return({
              abc: (name) => { dispatch(changeUserName(name)) },
              ghj: (id) => {dispatch(deleteItem(id))}
          })
      }

// export default Todo;
export default connect(mapStateToProp,mapDispatchToProp)(Todo);
