({
    onBoatClick : function(component, event, helper) {
        var updateEvent = component.getEvent("BoatSelect");
        var lboatId = component.get("v.boat").Id;
        console.log(lboatId);
        updateEvent.setParams({ "boatId": lboatId });
        updateEvent.fire();

        var lboat = component.get("v.boat");
        console.log(JSON.stringify(lboat));
        var updateBoatEvent = $A.get("e.c:BoatSelected");
        updateBoatEvent.setParams({ "boat": lboat});
        updateBoatEvent.fire();

        var ploatMap = $A.get("e.c:PlotMapMarker");
        ploatMap.setParams({
            "sObjectId": lboat.Id,
            "lat": lboat.Geolocation__Latitude__s,
            "long": lboat.Geolocation__Longitude__s,
            "label":lboat.Name
        });
        ploatMap.fire(); 
    }
})