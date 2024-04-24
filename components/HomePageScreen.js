import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ProgressBar, Switch } from 'react-native-paper';

const HomePageScreen = () => {
  const [soilMoisture, setSoilMoisture] = useState(0.4); // Giả sử độ ẩm đất là 40%
  const [isPumpOn, setIsPumpOn] = useState(false); // Trạng thái ban đầu của máy bơm

  const togglePump = () => setIsPumpOn(!isPumpOn);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Soil Moisture</Text>
      <ProgressBar progress={soilMoisture} color="#87ceeb" style={styles.progressBar} />
      <Text style={styles.percentage}>{`${soilMoisture * 100}%`}</Text>
      <View style={styles.pumpContainer}>
        <Text style={styles.pumpLabel}>Water Pump:</Text>
        <Switch value={isPumpOn} onValueChange={togglePump} />
      </View>
    </View>
  );
};
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    textAlign: 'center',
  },
  progressBar: {
    height: 20,
    marginBottom: 20,
  },
  percentage: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 50,
  },
  pumpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pumpLabel: {
    fontSize: 18,
    marginRight: 10,
  },
});

export default HomePageScreen;
