({
    doInit: function(component, event, helper) {
        var isEnabled = $A.get("e.force:createRecord");
        component.set("v.displayNew", isEnabled);
        
        var action = component.get("c.getBoatType");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.btypeOption", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
        
    }
    ,
    createNewBoat : function(component, event) {
        var item = component.get("v.btypeSelected");

        var createBoatEvt = $A.get("e.force:createRecord");
        createBoatEvt.setParams({
            'entityApiName':'Boat__c',
            'defaultFieldValues': {
                'BoatType__c':item
            }
        });
        createBoatEvt.fire();        
    }
    ,
    onFormSubmit : function(component, event) {
        var item = component.get("v.btypeSelected");
        var formData = {'boatTypeId':item};
        console.log(formData); 
        console.log("*********");
        var updateEvent = component.getEvent("FormSubmit");
        updateEvent.setParams({ "formData": formData });
        updateEvent.fire();  
    }
})