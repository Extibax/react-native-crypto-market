import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CoinItem = ({ coin }) => {
  return (
    <View style={styles.containerItem}>
      <View style={styles.coinName}>
        <Image style={styles.image} source={{ uri: coin.image }} />
        <View style={styles.containerNames}>
          <Text style={styles.text}>{coin.name}</Text>
          <Text style={styles.textSymbol}>{coin.symbol}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.textPrice}>${coin.current_price}</Text>
        <Text
          style={[
            styles.pricePercentage,
            coin.price_change_percentage_24h > 0
              ? styles.priceUp
              : styles.priceDown,
          ]}
        >
          {coin.price_change_percentage_24h}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#121212",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  coinName: {
    flexDirection: "row",
  },
  containerNames: {
    marginLeft: 10,
  },
  image: { width: 30, height: 30 },
  text: { color: "#fff" },
  textPrice: { color: "#fff", textAlign: "right" },
  textSymbol: { color: "#434343", textTransform: "uppercase" },
  pricePercentage: {
    color: "#fff",
    textAlign: "right",
  },
  priceUp: { color: "#00b5b9" },
  priceDown: { color: "#fc4422" },
});

export default CoinItem;
