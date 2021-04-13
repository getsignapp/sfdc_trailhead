({
    doInit: function(component, event, helper) {
        helper.onInit(component, event,helper);
    }
    ,
    onRecordUpdated : function(component, event, helper) {
    }
    ,
    onSave : function(component, event, helper) {
        var boat = component.get("v.boat");
        var boatReview = component.get("v.boatReview");
        component.set("v.boatReview.Boat__c",boat.Id);
        console.log("....");
        component.find("service").saveRecord(function(saveResult){
            if(saveResult.state==="SUCCESS" || saveResult.state === "DRAFT")
            {
               var resultsToast = $A.get("e.force:showToast");
                if(resultsToast)
                {
                    resultsToast.setParams({
                        "title": "Saved",
                        "message": "Boat Review Created"
                    });
                    resultsToast.fire(); 
                }
                else
                {alert('Boat Review Created');}
            }
            else if (saveResult.state === "ERROR") {
                var errMsg='';
                console.log('Problem saving record, error: ' + JSON.stringify(saveResult.error));
                for (var i = 0; i < saveResult.error.length; i++) {
                    errMsg += saveResult.error[i].message + "\n";
                }
                component.set("v.recordError", errMsg);
            }
            
            var BoatReviewAddedUpdate=component.getEvent("BoatReviewAdded");
            BoatReviewAddedUpdate.fire();
            
            helper.onInit(component,event,helper);
        });
    }
})