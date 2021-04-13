({
    onFormSubmit : function(component, event, helper) {
        var formData = event.getParam("formData");
        var bId = formData.boatTypeId;
        var child = component.find("boatSearchResultIdx");
        var result = child.search(bId);
    }
})