({
	packItem : function(component, event, helper) {
		var litem = component.get("v.item");
        litem.Packed__c = true;
        component.set("v.item", litem);
        component.set("v.disabled", true);
	}
    
})