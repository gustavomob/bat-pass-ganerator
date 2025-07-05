import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',   
    backgroundColor:"#121212"
  },
  content:{
    paddingVertical: 20,
    paddingHorizontal:0,
    backgroundColor: "#212121",    
    marginBottom: 20,
  },
  title:{
    fontSize: 20,
    fontWeight: '700',
    color:"rgb(229, 150, 60)",
    textAlign: "center"
  },  
  logo:{
    height: 180,
    resizeMode:"contain", 
  },
  inputPasswd:{
    textAlign: "center",
    color:"EEE"  },   
});