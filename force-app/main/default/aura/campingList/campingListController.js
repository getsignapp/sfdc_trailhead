({
    doInit: function(component, event, helper) {
    	var action = component.get("c.getItems");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.items", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    }
	,
    myAction : function(component, event, helper) {
		
	}
    ,
    handleAddItem: function(component, newExpense) {
        var item = event.getParam("item");
        var action = component.get("c.saveItem");
        action.setParams({
            "cm": item
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                var items = component.get("v.items");
                items.push(response.getReturnValue());
                component.set("v.items", items);
            }
        });
        $A.enqueueAction(action);
    }
    ,
    clickCreateItem : function(component, event, helper) {
        var litem = component.get("v.items");
        var lnewItem = component.get("v.newItem");
        
        var validExpense = component.find('expenseform')
        					.reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        
        if(validExpense){
            helper.createItem(component, event);
        }
    }
})