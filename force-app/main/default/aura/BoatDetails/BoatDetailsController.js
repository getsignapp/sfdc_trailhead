({
    onBoatSelected : function(component, event, helper) {
        var item = event.getParam("boat");
        console.log(JSON.stringify(item));
        console.log('>>>>>' + item.Id);
        component.set("v.id", item.Id);
        component.find("service").reloadRecord() ;
    }
    ,
    onRecordUpdated : function(component, event, helper) {
        var boatReaviewComp = component.find("boatReviewIdx");
        if(boatReaviewComp != undefined){
        var ret = boatReaviewComp.refresh();
        }
    }
    ,
    onBoatReviewAdded : function(component, event, helper) {
        component.find("detailTab").set("v.selectedTabId", "boatreviewtab");
        var boatReaviewComp = component.find("boatReviewIdx");
        if(boatReaviewComp != undefined){
        var ret = boatReaviewComp.refresh();
        }
        
    }
})