import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#ece1ef',
    backgroundColor: '#fff',
    margin: 10,
    flexDirection: 'row',
    borderRadius: 20,
  },
  body_container: {
    padding: 5,
    flex: 1,
    justifyContent: 'space-between',
    borderRadius: 20,
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  price: {
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#a93226',
    paddingRight: 10,
    fontSize: 18,
  },
});
