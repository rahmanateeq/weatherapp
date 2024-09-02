import React, {useEffect,useState, useMemo} from 'react';
import {TextInput, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import WeatherServices from './Environment/services/weather';
const Weather = () => {
    const [weather, setWeather] = useState({});
    const [location, setLocation] = useState("noida");

    useEffect(() => { handleSearch()}, []);
    const icon = useMemo(() => {
        if(weather){
            return weather?.weather
        }

    }, [weather]);
    const handleSearch = async () => {
        try {
          const weatherData = await WeatherServices.getWeather(location);
          setWeather(weatherData);
        } catch (error) {
          if (error.response && error.response.status === 404) {
            alert(`Oops, Wrong location ${location}`);
          } else {
            alert(error.message);
          }
        }
      };
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.searchContainer}>
                    <TextInput
                        value={location}
                        onChangeText={(text) => setLocation(text)}
                        placeholder="Enter location"
                        style={styles.input}
                    />
                    <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
                        <Text style={styles.searchButtonText}>Search</Text>
                    </TouchableOpacity>
                </View>
             <View style={styles.resultComponent}>
             <Text style={styles.header}>{weather?.name}</Text>

                    <View style={styles.infoContainer}>
                        <View>
                            <Text style={styles.tempText}>Current Temp: {weather?.main?.temp}°C</Text>
                            <Text style={styles.tempText}>Feel Like: {weather?.main?.feels_like}°C</Text>
                            <Text style={styles.tempText}>Humidity: {weather?.main?.humidity}%</Text>
                            <Text style={styles.tempText}>Wind: {weather?.wind?.speed} km/h</Text>
                        </View>
                        <View>
                            <Text style={styles.tempText}>Max: {weather?.main?.temp_max}°C</Text>
                           
                            <Text style={styles.tempText}>Min: {weather?.main?.temp_min}°C</Text>
                            {icon && (
                                <>
                                <Image
                                    style={styles.icon}
                                    source={{ uri: `http://openweathermap.org/img/w/${icon[0].icon}.png` }}
                                />
                                <Text style={styles.tempText}>{icon[0].main}</Text>
                                </>
                            )}
                        </View>
                    </View>
            </View > 
                
            </View>
            
        </View>
    );
};


export default Weather;

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      tempText: {
        fontSize: 16,
        marginBottom: 5,
      },
      icon: {
        height: 80,
        width: 80,
        marginTop: 10,
      },
      infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
      },
      tempText: {
        fontSize: 16,
        marginBottom: 5,
      },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0F7FA', // Light blue background color
        padding: 16,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        marginTop:4,
      },
    searchButton: {
        width:"25%",
        backgroundColor: '#108BBB',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginLeft: 5,
      },
      resultComponent:{
        flex:1,
        borderRadius: 10,
        marginHorizontal:6,
        marginVertical:12,
        width:"96%",
        backgroundColor: 'lightcyan',
        height:556,
      },
      searchButtonText: {
        color: 'white',
        fontWeight: 'bold',
      },
    input: {
        width:"73%",
        height: 40,
        borderColor: 'black',
        borderWidth: 2,
        paddingLeft: 8,
        marginTop:3,
        borderRadius: 10,
      },
    innerContainer: {
        height:"98%",
        width:'100%',
        borderRadius: 5,     // Set the border radius to 5
        borderColor: 'lightcyan', // Set the border color to light cyan
        backgroundColor:'#167986',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        // color: '#00796B', // Dark teal text color
    },
});