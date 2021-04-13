({
    doInit: function (component, event, helper) {
    }
    ,
    onPlotMapMarker: function(component,event,helper) {
    	var latitude = event.getParam('lat');
    	var longitude = event.getParam('long');
    	var label = event.getParam('label');
		var location = {Latitude: latitude,	Longitude: longitude};
		component.set("v.location" , location);
		component.set('v.mapMarkers', [
            {
                location: location,
                title: label,
                description: label
            }
        ]);

    } 
})