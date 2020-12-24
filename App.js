import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiZ3VndXNraXMiLCJhIjoiY2toemdnb2wyMGY3cjJ5cWgydGE0aDl2NiJ9.tCDtVfSXdUZQ7hLBmbrXKw',
);

const App = () => {

  const [markers, setMarkers] = useState([{"id": "305.0683593751458.0546875", "location": [-94.8224388617985, 38.862650829450075]}, {"id": "321.152343751170.359375", "location": [-94.80678656681357, 39.09671759122668]}, {"id": "303.75849.265625", "location": [-94.82495837005594, 39.35690964181242]}, {"id": "329.589843751263.5234375", "location": [-94.79985289390461, 39.020485764885166]}, {"id": "342.5097351074219960.0078125", "location": [-94.78640770369495, 39.26684741822504]}, {"id": "432.9491882324219954.734375", "location": [-94.69492374969117, 39.27111908051802]}, {"id": "540.2636718751060.7890625", "location": [-94.58173803679209, 39.1836718962756]}, {"id": "616.9921875985.7890625", "location": [-94.5033868565481, 39.24542207799823]}, {"id": "673.154296875892.625", "location": [-94.44765824117782, 39.319924965867244]}, {"id": "722.197265625777.1953125", "location": [-94.39606784320543, 39.41377093365884]}, {"id": "755.947265625932.46875", "location": [-94.3646901370765, 39.288140411659725]}, {"id": "759.3751025.6328125", "location": [-94.3622072258102, 39.21407878136466]}, {"id": "762.01177978515621109.421875", "location": [-94.36110362852384, 39.14516928618531]}, {"id": "765.70318603515621196.140625", "location": [-94.35979732888856, 39.07577941577918]}, {"id": "766.23040771484381298.6796875", "location": [-94.36090093815747, 38.99387041613579]}, {"id": "764.64843751366.0625", "location": [-94.36448738686964, 38.94054640472734]}, {"id": "789.1699218751407.6640625", "location": [-94.33800247701248, 38.90614170592892]}]);

  const onPressPutMarker = (event) => {

    setMarkers( markers => [...markers, 
      {
        id: event.properties.screenPointX.toString() + event.properties.screenPointY.toString(),
        location: event.geometry.coordinates
      }]
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <MapboxGL.MapView
            style={styles.map}
            onPress={onPressPutMarker}
            >
            <MapboxGL.Camera
              zoomLevel={8}
              centerCoordinate={[-94.5786, 39.0997]}
            />
            {
              markers.map(marker =>
                <MapboxGL.PointAnnotation
                  id={marker.id}
                  coordinate={marker.location}
                  />
              )
            }
          </MapboxGL.MapView>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  map: {
    flex: 1,
    color: 'red'
  },
});

export default App;