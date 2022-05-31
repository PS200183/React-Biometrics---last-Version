import { StyleSheet, Text, View, TextInput, Button, FlatList, Alert } from 'react-native'
import React, { useState } from 'react';

const DetailScreen = (props) => {
    const [naam, setname] = useState('');
    const [score, setscore] = useState(0);
    const [id, setid] = useState(1);
    const [student, Setstudent] = useState([]);


    const del = (item) => {
        Setstudent(student.filter(items => items.id !== item.id));
    }



    const values = student.map(item => {
        return item.score;
    });




    const onChangeName = (value) => {
        setname(value);
    };

    const onChangescore = (value) => {
        if (value < 11) {
            setscore(value);

        }
        else {
            alert("score mag niet hoger dan 10 zijn");
            Alert.alert("score mag niet hoger dan 10 zijn");
            setscore(0);
        }

    };

    const make = () => {

        const average = values.reduce((a, b) => a + b) / values.length;
        props.navigation.push('stList', { student: student, average: average });
    }
    const add = () => {
        Setstudent([...student, { id: id, naam: naam, score: Number(score) }]);
        setid(id + 1);
        setname('');
        setscore(0);


    }

    const item = (item) => {
        return (

            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 100, backgroundColor: 'red' }}>
                    <Text >{item.item.naam}</Text>
                </View>
                <View style={{ width: 100, backgroundColor: 'red' }}>
                    <Text>{item.item.score}</Text>
                </View>
                <View style={{ width: 100, backgroundColor: 'red' }}>
                    <Button title="Del" onPress={() => del(item.item)} />
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <View style={{ width: 100, backgroundColor: "red" }}>
                    <Text style={{ width: 100, color: "black" }}>name</Text>
                </View>
                <View style={{ width: 100, backgroundColor: "red" }}>
                    <Text>params</Text>
                </View>
                <View style={{ width: 100, backgroundColor: "red" }}></View>
            </View>
            <FlatList
                data={student}
                renderItem={item}
                keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ width: 100, color: "black" }}>student naam</Text>
                    <TextInput
                        style={styles.inpout}
                        value={naam}
                        onChangeText={(value) => onChangeName(value)}
                    />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ width: 100, color: "black" }}>score</Text>
                    <TextInput
                        style={styles.inpout}
                        value={score}
                        onChangeText={(value) => onChangescore(value)}
                    />
                </View>
                <View style={{ width: 200, backgroundColor: "red" }}>
                    <Button title="Add to table" onPress={() => add()} />
                </View>
                <View style={{ width: 200, backgroundColor: "red" }}>
                    <Button title="Make chart" onPress={() => make()} />
                </View>
            </View>
        </View>
    );

}

export default DetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%',
    },
    container1: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '50% ',
    },
    inpout: {
        width: 100,
        height: 40,
        backgroundColor: '#7f7f',
        background: '#7f7f',
        border: '4px solid #7f7f',
    },
});