import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 5
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff"
  },

  dropdown: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    maxHeight: 150,
    backgroundColor: "#fff"
  },

  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },

  itemSelected: {
    backgroundColor: "#5395f7"
  },

  text: {
    color: "#333"
  },

  textSelected: {
    color: "#fff",
    fontWeight: "bold"
  }
});