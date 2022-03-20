import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios'
const FormData = require("form-data");
// const fs = require("fs");
// const https = require("https");
// var axios = require('axios');

// var form = new FormData();
// form.append('image', fs.createReadStream('assets/images/pizzahut.jpeg'));
// var headers = form.getHeaders();
// headers['Authorization'] = 'Bearer 094a9f5a8d8c2d60bf272860d6c6acdd7be67c0d';

// const options ={
//     hostname: 'api.logmeal.es',
//     path: '/v2/recognition/dish',
//     method: 'POST',
//     headers: headers,
// };
// console.log(form.boundary);
// const req = https.request(options,(res) => {
//     res.on('data', (d) => {
//         process.stdout.write(d);
//     });
// });
// form.pipe(req);
// req.end();
// ----------------------------------------------------------------------------------

// let data = new FormData();
// data.append('image', fs.createReadStream('4jD0tsayk/pizzahut.jpeg'));

// let config = {
//   method: 'post',
//   url: 'https://api.logmeal.es/v2/recognition/dish',
//   headers: { 
//     'Authorization': 'Bearer 094a9f5a8d8c2d60bf272860d6c6acdd7be67c0d', 
//     ...data.getHeaders()
//   },
//   data : data
// };

// axios(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });

// ------------------------------------------------------------------------------------

// var myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer 094a9f5a8d8c2d60bf272860d6c6acdd7be67c0d");

// var formdata = new FormData();
// formdata.append("image", fileInput.files[0], "[PROXY]");

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: formdata,
//   redirect: 'follow'
// };

// fetch("https://api.logmeal.es/v2/recognition/dish", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

// ------------------------------------------------------------------------------------

const ScanMeal = ({route}) => {
    const {foodImage} = route.params;
    const [ foodName, setFoodName] = useState('');
    
    const getResults = async () => {
        console.log("------here------");
        console.log({uri: foodImage});
        // formdata.append('image', {uri: photo.uri, name: 'assets/images/pizzahut.jpeg', type: 'image/jpeg'});
        var formdata = new FormData();
        formdata.append('image', {
            image: foodImage,
            // type: "image/jpeg",
            name: "food"
        });
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer 3a1d81b88fcdb7848d9eabfb68d23c6ae3606b64");

        myHeaders.append("Content-Type", "image/jpeg");

        var file = {uri: foodImage};

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        await fetch("https://api.logmeal.es/v2/image/recognition/complete", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    useEffect(()=> {
        
        getResults();
    },[])
    return(
        <View style={styles.InnerContainer}>
            <Text>hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    InnerContainer: {
        flex:1,
        padding : 45,
        width: '100%',
        alignContent: 'center',
    },
})

export default ScanMeal;