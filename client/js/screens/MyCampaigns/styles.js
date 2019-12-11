import {StyleSheet} from 'react-native';
import {THEME} from '../../config';
const {
  colors: {black, darkGrey, white},

  typography: {
    headerFont,
    hugeText,
    contentText,
    mainFont,
    subHeaderText,
    smallText,
    italicFont,
  },
} = THEME;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  pageTitle: {
    fontSize: hugeText,
    fontFamily: headerFont,
    margin: 20,
  },
  item: {
    backgroundColor: darkGrey,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: contentText,
    fontFamily: mainFont,
    color: white,
  },
  category: {
    fontSize: smallText,
    color: white,
    fontFamily: italicFont,
  },
  panel: {
    borderRadius: 5,

    height: '100%',
    width: '100%',
  },
});
export default styles;
