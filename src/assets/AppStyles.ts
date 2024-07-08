import { StyleSheet} from 'react-native';

const appColors = {
  black: "#2b2b2b",
  darkPurple: "#9477ab",
  lightPurple: "#7e7db6",
  blue: "#a0c5d8",
  pink: "#dfcbc9",
  yellow: "#e1ddd0",
  white: "#ffffff",
  grey: "#aaaaaa",
  brown: "#854D39",
  orange: "#D17F61",
  green: "#A2BDA8",
  ashGreen: "#C3D5C8",
  cambridge: "#88AA8F",
  reseda: "#5D8364"
}

const styles = StyleSheet.create({
  title: {
    fontSize: 100, 
    fontFamily: 'DM-Sans-black', 
  },

  h1: {
    fontSize: 60, 
    fontFamily: 'DM-Sans-bold', 
  },

  h2: {
    fontSize: 25, 
    fontFamily: 'DM-Sans-normal', 
  },

  h3: {
    fontSize: 20, 
    fontFamily: 'DM-Sans-normal', 
  },

  h4: {
    fontFamily: "DM-Sans-normal",
    fontSize: 40, 
  },

  normal: {
    fontSize: 15, 
    fontFamily: 'DM-Sans-normal', 

  },

  bold: {
    fontSize: 15, 
    fontFamily: 'DM-Sans-bold', 

  },

  //Root
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  box: {
    padding: 20,
    marginVertical: 10,

    borderRadius: 20,
  },

  squareBox: {
    width: 120,
    height: 120,

    margin: 20,
    justifyContent: "center",
    textAlign: "center",
    verticalAlign: "middle",
    alignItems: "center",

    borderRadius: 20
    
  },

  flexContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    margin: 20
  },

  flexRow: {
    flexDirection: "row",
  },

  navBar: {
    fontFamily: 'DM-Sans-black',

    textAlignVertical: 'top',

    height: 80,
  },

  container: {
    marginTop: 40,
    padding: 12,
  },

  centeredContainer: {
    alignItems: "center"
  },

  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },

  //Buttons
  defaultButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 5,
    marginVertical: 10,
    borderRadius: 30,
  },

  plusButton: {
    width: 50,
    height: 50,

    justifyContent: "center",
    textAlign: "center",
    verticalAlign: "middle",
    alignItems: "center",

    borderRadius: 50
  },

  colorButton: {
    height: 40, 
    width: 40,

    borderRadius: 30,

    margin: 20
  },

  dateButton: {
    borderRadius: 50,
  },

  windowedOption: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 22,

    borderRadius: 35,
    borderWidth: 1,

  },

  priorityButton: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    margin: 10,
    borderRadius: 10
  },

  //Inputs
  defaultInput: {
    backgroundColor: "#ffffff",

    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,

    borderRadius: 30,

    shadowColor: appColors.black,
    shadowRadius: 40,
    shadowOpacity: 0.4,
    elevation: 4,
  },

  //Dropdowns
  basicDropdown: {
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10
  }
})


export {styles, appColors};