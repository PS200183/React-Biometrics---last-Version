import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View, Dimensions,
} from "react-native";
import { Gyroscope } from "expo-sensors";
// import { BarChart } from "react-native-gifted-charts";
import {
  PieChart,
  LineChart,
} from 'react-native-chart-kit';
const HomeScreen = () => {
  const [data, setData] = useState({
    x: 1,
    y: 1,
    z: 1,
  });


  const [subscription, setSubscription] = useState(null);

  const _slow = () => {
    Gyroscope.setUpdateInterval(1000);
  };

  const _fast = () => {
    Gyroscope.setUpdateInterval(500);
  };
  const { x, y, z } = data;
  const _subscribe = () => {

    setSubscription(
      Gyroscope.addListener((gyroscopeData) => {

        setData(gyroscopeData);

      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);





  return (
    <View style={styles.container}>


      <Text style={styles.text}>Gyroscope:</Text>
      <>
        <Text style={styles.header}>Bezier Line Chart</Text>
        <LineChart
          data={{
            labels: [],
            datasets: [
              {
                data: [

                  data.x,
                  data.y,
                  data.z,
                  data.x,
                  data.y,
                  data.z,
                ]
              },
              {
                data: [1], //highest graph value
                withDots: false, //a flage to make it hidden
              },
              {
                data: [0], //highest graph value
                withDots: false, //a flage to make it hidden
              },
              {
                data: [-1], //highest graph value
                withDots: false, //a flage to make it hidden
              },

            ],
          }}
          width={Dimensions.get('window').width - 16} // from react-native
          height={220}
          // yAxisLabel={'Rs'}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          // bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </>
      <Text style={styles.text}>
        x: {round(x)} y: {round(y)} z: {round(z)}
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={subscription ? _unsubscribe : _subscribe}
          style={styles.button}
        >
          <Text>{subscription ? "On" : "Off"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={_slow}
          style={[styles.button, styles.middleButton]}
        >
          <Text>Slow</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_fast} style={styles.button}>
          <Text>Fast</Text>
        </TouchableOpacity>
      </View>
    </View>


    //     <>
    //       <Text style={styles.header}>Line Chart</Text>
    //       <LineChart
    //         data={{
    //           labels: ['January', 'February', 'March'],
    //           datasets: [
    //             {
    //               data: [date1, date2, date3],
    //               strokeWidth: 2,
    //             },
    //           ],
    //         }}
    //         width={Dimensions.get('window').width - 16}
    //         height={220}
    //         chartConfig={{
    //           backgroundColor: '#1cc910',
    //           backgroundGradientFrom: '#eff3ff',
    //           backgroundGradientTo: '#efefef',
    //           decimalPlaces: 2,
    //           color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    //           style: {
    //             borderRadius: 16,
    //           },
    //         }}
    //         style={{
    //           marginVertical: 8,
    //           borderRadius: 16,
    //         }}
    //       />
    //     </>
    //   );
    // };


  );
};





function round(n) {
  if (!n) {
    return 0;
  }
  return Math.floor(n * 100) / 100;
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  text: {
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#ccc",
  },
});
