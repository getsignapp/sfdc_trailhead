({
    doSearch : function(component, event, helper) {
        var params = event.getParam('arguments');
        component.set("v.boatTypeId" , params.bId);
        helper.onSearch(component,event);
    }
    ,
    onBoatSelect : function(component, event, helper) {
        var params = event.getParam("boatId");
        console.log(params);
        component.set("v.selectedBoatId" , params);
    }
})