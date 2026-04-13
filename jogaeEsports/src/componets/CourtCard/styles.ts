import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: themas.Colors.secondary,
    borderRadius: 12,
    marginBottom: 16,
    marginHorizontal: 16,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  image: {
    width: "100%",
    height: 180,
    backgroundColor: themas.Colors.lightGray,
  },
  ratingBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: themas.Colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  ratingText: {
    color: themas.Colors.secondary,
    fontWeight: "600",
    fontSize: 12,
  },
  content: {
    padding: 16,
  },
  courtName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  sport: {
    fontSize: 13,
    color: themas.Colors.primary,
    fontWeight: "600",
    backgroundColor: `${themas.Colors.primary}15`,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    overflow: "hidden",
  },
  city: {
    fontSize: 13,
    color: themas.Colors.gray,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: themas.Colors.lightGray,
    paddingTop: 12,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: themas.Colors.primary,
  },
  cta: {
    fontSize: 12,
    color: themas.Colors.primary,
    fontWeight: "600",
  },
});
