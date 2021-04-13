({
    doInit: function(component, event, helper) {
        var isEnabled = $A.get("e.force:createRecord");
        component.set("v.displayButton", isEnabled);
    }
    ,   
    onFullDetails : function(component, event, helper) {
        var redirect = $A.get("e.force:navigateToSObject");
        redirect.setParams({"recordId":  component.get("v.boat.Id")});
        redirect.fire();
    }
    
})