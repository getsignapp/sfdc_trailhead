({
	createItem : function(component, event) {
		var cm = component.get("v.newItem");
        var action = component.get("c.saveItem");
        action.setParams({
            "cm": cm
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                var items = component.get("v.items");
                items.push(response.getReturnValue());
                component.set("v.items", items);
                
                //cm = {'sobjectType': 'Camping_Item__c', 'Price__c': 0 };
            	//component.set("v.newItem", cm);
            }
        });
        $A.enqueueAction(action);
	}
})