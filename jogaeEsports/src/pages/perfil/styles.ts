import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 16,
  },

  header: {
    alignItems: "center",
    marginBottom: 20,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
  },

  email: {
    fontSize: 14,
    color: "#666",
  },

  card: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },

  label: {
    fontSize: 12,
    color: "#888",
    marginTop: 10,
  },

  value: {
    fontSize: 16,
    fontWeight: "500",
  },

  actions: {
    marginTop: 10,
  },

  button: {
    backgroundColor: "#1E90FF",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },

  logoutButton: {
    backgroundColor: "#FF3B30",
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});