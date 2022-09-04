import { StyleSheet } from 'react-native';
const primaryColor = '#428c71';
const accentColor = '#ddfff9';
const black = '#000';
const white = '#FFFFFF'

const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginBottom:20,
  },
  wrapper: {
    marginTop: 20,
    marginBottom: 10,
  },
  topSelling: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 25,
    textTransform: 'uppercase'
  },
  card: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 220,
    height: 360,
    backgroundColor: '#e7edeb',
    borderBottomEndRadius: 9,
    borderBottomStartRadius: 9,
    borderTopEndRadius: 9,
    borderTopStartRadius: 9,
    paddingTop: 30,
  },
  cardSplitter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 220,
    height: 108,
    marginTop: 36,
    backgroundColor: primaryColor,
    borderBottomEndRadius: 9,
    borderBottomStartRadius: 9,
    borderTopEndRadius: 9,
    borderTopStartRadius: 9
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 2,
    marginTop: 10,
    marginRight: 72,
    justifyContent: 'space-evenly',
    width: '100%',
  },
  scrollImage: {
    width: 216,
    height: 216,
  },
  cactusText: {
      margin: 15,
      fontSize: 21,
      fontWeight: 'bold',
      color: white,
      textTransform: 'capitalize'
  },
  recent: {
      marginLeft: 15,
      marginRight: 15,
      marginTop: 50,
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  recentText: {
      fontSize: 36,
      color: '#FFF'
  },
  recentContainer: {
      flexDirection: 'row',
  },
  recentSection: {
    flexDirection: 'column',
  },
  recentScrollContainer: {
    flex: 2,
    marginLeft: 0,
    marginRight: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center'
  },
  recentFirsColumn: {
      marginLeft: 15,
      marginTop: 20,
      width: 320,
      height: 180,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: primaryColor,
      borderTopStartRadius: 20,
      borderBottomStartRadius: 20
  },
  recentSecondColumn: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width: 63,
    height: 180,
    marginTop: 20,
    backgroundColor: '#2e6258',
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20
  },
  productCard: {
      width:'100%',
      height: 450,
      backgroundColor: primaryColor,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20
  },
  productContent: {
      marginTop: 25,
      marginLeft: 25
  },
  productTitle: {
      fontSize: 54,
      fontWeight: 'bold',
      color: '#FFF'
  },
  productDes: {
      fontSize: 20,
      paddingTop: 10,
      color: '#FFF'
  },
  productInfo: {
      marginTop: 10,
      fontSize: 20,
      color: '#FFF'
  },
  button: {
    width: '90%',
    height: 63,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: black,
    marginTop: 27
  },
  buttonText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: white,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  priceTagContainer: {
    backgroundColor: accentColor,
    borderRadius: 10
  },
  priceTag: {
    fontSize: 40,
    fontWeight: 'bold',
    padding: 9,
    color: black,
  },
  titleContainer: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
    marginRight: 18,
  }
});

export { styles }
