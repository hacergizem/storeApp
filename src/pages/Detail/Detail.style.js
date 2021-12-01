import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  body_container: {
    width: deviceSize.width,
    padding: 15,
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#f8e9ff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 10,
  },
  image: {
    marginTop: 10,
    width: deviceSize.width - 20,
    height: deviceSize.height / 3,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
    textAlign: 'justify',
  },
  desc: {
    marginTop: 15,
    textAlign: 'justify',
  },
  price: {
    marginTop: 10,
    color: '#a93226',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});
