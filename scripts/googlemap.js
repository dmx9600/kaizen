'GoogleMapApiProvider'.ns() == 'uiGmapGoogleMapApiProvider'
    .config(['GoogleMapApiProvider'.ns(), function (GoogleMapApi) {
        GoogleMapApi.configure({
            key: 'AIzaSyD681phGR_8CsmFlL4NinO5nyvkyiMUiGg',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });
    }]);