import { StyleSheet, Text, View, TextInput, Dimensions, Button, FlatList, Alert } from 'react-native'
import React, { useState } from 'react';
import {

    LineChart, BarChart
} from 'react-native-chart-kit';

const ListScreen = (props) => {
    console.log(props);
    console.log(props.route.params);
    const average = props.route.params.average;
    const Setstudenten = props.route.params.student;
    console.log(average);
    console.log(Setstudenten);
    const labels = Setstudenten.map(item => {
        return item.naam;
    });

    const values = Setstudenten.map(item => {
        return item.score;
    });


    console.log(values);
    console.log(labels);

    return (
        <View style={styles.container}>
            <LineChart
                data={{
                    labels: labels,
                    datasets: [
                        {
                            data: values,
                        },

                        {
                            data: [average], //highest graph value
                            withDots: true, //a flage to make it hidden
                            color: (opacity = 5) => `rgba(25, 150, 25, ${opacity})`,
                            strokeWidth: 4,
                            strokeColor: "#ff0000",
                            fillColor: "#ff0000",
                            fillAlpha: 0.5,
                        },

                        {
                            data: [10], //highest graph value
                            withDots: false, //a flage to make it hidden
                        },
                        {
                            data: [average], //highest graph value
                            withDots: false, //a flage to make it hidden
                        },
                        {
                            data: [0], //highest graph value
                            withDots: false, //a flage to make it hidden
                        },
                    ],
                }}
                width={Dimensions.get("window").width - 16} // from react-native
                height={220}
                // yAxisLabel={'Rs'}
                chartConfig={{
                    backgroundColor: "#1cc910",
                    backgroundGradientFrom: "#eff3ff",
                    backgroundGradientTo: "#efefef",
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
            <Text> het gemiddelde is: {average}</Text>
        </View>
    );
}

export default ListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
