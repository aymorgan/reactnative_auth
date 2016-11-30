// Import libraries
import React from 'react';
import { Text, View } from 'react-native';

// Make the component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
      <View style={viewStyle}>
          <Text style={textStyle}>{props.headerText}</Text>
      </View>

  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },

  textStyle: {
    fontSize: 20
  }
};

// Render component - remove the default part as were eare direct exporting from index
export { Header };
