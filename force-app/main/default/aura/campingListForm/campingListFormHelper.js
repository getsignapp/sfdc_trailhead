({
	helperMethod : function() {
		
	}
    ,
    createItem : function(component, event) {
        var updateEvent = component.getEvent("addItem");
        var litem = component.get("v.items");
        var lnewItem = component.get("v.newItem");
        
        var validExpense = component.find('expenseform')
        					.reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        
        if(validExpense){
            updateEvent.setParams({ "item": lnewItem });
        	updateEvent.fire();
            var cm = component.get("v.newItem");
            cm = {'sobjectType': 'Camping_Item__c', 'Price__c': 0 };
            component.set("v.newItem", cm);
        }
    }
})