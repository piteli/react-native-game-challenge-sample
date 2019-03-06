import { Platform, StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({

  container: {
  flex : 1,
  flexDirection : 'column',
  justifyContent : 'center',
  alignItems : 'center'
  },
  sectionTop : {
    flex : 0.25,
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center'
  },
  sectionCenter : {
    flex : 0.5,
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center'
  },
  sectionBottom : {
    flex : 0.25,
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center'
  },
  listView : {
    borderBottomWidth: 1,
    borderBottomColor : 'black'
  }
});
