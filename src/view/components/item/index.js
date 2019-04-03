import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {Text, Card, FlatList} from 'react-native';
import {connect} from 'react-redux';
import ItemStyles from './style';


class TasklItem extends React.Component {

  render() {
    return (
        <TouchableWithoutFeedback>
          <Card style={ItemStyles.card}
                containerStyle={ItemStyles.container}
                elevation={7}
                width={170}
                height={170}
                borderRadius={0}>

            <Text>
              hue
            </Text>
            
          </Card>
        </TouchableWithoutFeedback>
    )
  }
}

function mapDispatchToProps(dispatch) {
 
}

export default connect(null, mapDispatchToProps)(TasklItem);
