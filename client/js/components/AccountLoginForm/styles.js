import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 20,
    alignSelf: 'flex-start',
    borderBottomWidth: 1,
    marginTop: 30,
  },
  AccountLoginContainer: {
    // flex: 1,
    justifyContent: 'space-between',
  },
  formHolder: {
    paddingBottom: 20,
    width: '90%',
  },
  termsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  checkboxTerms: {
    alignItems: 'center',
    paddingTop: 30,
    justifyContent: 'center',
    flexDirection: 'row',
    paddingRight: 30,
  },
  buttonImage: {
    justifyContent: 'center',
    resizeMode: 'contain',
    alignItems: 'center',
    height: 45,
    width: 250,
    borderRadius: 40,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    borderRadius: 40,
    height: 40,
    width: 260,
    // backgroundColor: 'red',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    // paddingTop: 5,
  },
  buttonHolder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 40,
  },
});

export default styles;
