({
    onSearch : function(component, event) {
        var action = component.get("c.getBoats");
        action.setParams({
            "boatTypeId": component.get("v.boatTypeId")
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            console.log('*****' + state);
            if (state === "SUCCESS") {
                console.log('*****' + response.getReturnValue());
                console.log(response.getReturnValue());
                component.set("v.boats", response.getReturnValue());
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    }
})