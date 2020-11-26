import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiZ3VndXNraXMiLCJhIjoiY2toemdnb2wyMGY3cjJ5cWgydGE0aDl2NiJ9.tCDtVfSXdUZQ7hLBmbrXKw',
);

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map}>
            <MapboxGL.Camera
              zoomLevel={8}
              centerCoordinate={[-94.5786, 39.0997]}
            />
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