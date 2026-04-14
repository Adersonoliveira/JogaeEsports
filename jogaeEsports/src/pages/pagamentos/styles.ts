import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },

  label: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 12,
    color: "#777",
  },

  methodButton: {
    flex: 1,
    padding: 12,
    backgroundColor: "#EEE",
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
  },

  methodSelected: {
    backgroundColor: "#34C759",
  },

  methodText: {
    fontWeight: "bold",
    color: "#000",
  },

  qrCode: {
    height: 120,
    backgroundColor: "#DDD",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  pixCode: {
    fontSize: 11,
    marginTop: 10,
  },

  copyButton: {
    marginTop: 10,
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },

  input: {
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },

  payButton: {
    backgroundColor: "#34C759",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  payButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});