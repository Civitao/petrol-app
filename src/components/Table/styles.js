
import { StyleSheet } from 'react-native'

export const styles = new StyleSheet.create({
  container: {
   width: '100%',
   height: 362,
   backgroundColor: '#facc15',
   justifyContent: 'center',
   paddingHorizontal: 16,
   flexDirection: 'row',
   
  },
  petrolValueContainer: {
   width: 120,
   height: 100,
   borderRadius: 10,
   zIndex: 4,
   backgroundColor: '#27272a',
   paddingVertical: 2.5,

  },
  petrolValueInput: {
    color: '#facc15',
    backgroundColor: '#FFFFFF',
    fontSize: 22,  
    width: 120,
    height: 45,
  },
  petrolValueText: {
    color: '#facc15',
    fontSize: 22,  
    width: 120,
    height: 45,
  },
  calcKmCostButton:{
    width: 70,
    height: 35,
    backgroundColor: '#000000',
    borderRadius: 15
  }
})