import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF"
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20
  },

  subtitle: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "600"
  },

  sportsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10
  },

  sportBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20
  },

  sportBoxSelected: {
    backgroundColor: "#5395f7",
    borderColor: "#5395f7"
  },

  sportText: {
    color: "#333"
  },

  sportTextSelected: {
    color: "#fff",
    fontWeight: "bold"
  },

  buttonWrapper: {
    marginTop: 60,
    alignItems: "center",
    justifyContent: "center"
  }
});