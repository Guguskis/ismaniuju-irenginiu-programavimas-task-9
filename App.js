import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiZ3VndXNraXMiLCJhIjoiY2toemdnb2wyMGY3cjJ5cWgydGE0aDl2NiJ9.tCDtVfSXdUZQ7hLBmbrXKw',
);

const App = () => {

  const [markers, setMarkers] = useState([{"id": "456.9433288574219", "location": [-94.66654422241318, 39.24922032675036]}, {"id": "660.234375", "location": [-94.45383738017048, 39.451179339797534]}, {"id": "752.255859375", "location": [-94.35606463196027, 39.21075366818161]}, {"id": "552.392578125", "location": [-94.5651849835968, 38.994283761489896]}, {"id": "420.8203125", "location": [-94.70285128778927, 39.369296292681184]}, {"id": "282.392578125", "location": [-94.84769057318151, 39.17470526175825]}, {"id": "623.84765625", "location": [-94.49042033589284, 39.2136667225472]}, {"id": "659.70703125", "location": [-94.45290004590287, 39.723384151032946]}, {"id": "860.625", "location": [-94.24429495179768, 39.147134132087956]}, {"id": "439.8046875", "location": [-94.68346628088969, 39.34518331994431]}]);


  const onPressPutMarker = (event) => {

    setMarkers( markers => [...markers, 
      {
        id: event.properties.screenPointX.toString(),
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