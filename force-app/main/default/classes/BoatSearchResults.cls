public class BoatSearchResults {
    public BoatSearchResults() {  }

    @AuraEnabled
    public static List<BoatType__c> getBoatType(){
        return [Select Id,Name from BoatType__c];
    }

    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId ){
        System.debug('>>>>' + boatTypeId);
        if(String.isNotBlank(boatTypeId)){
            return [Select Id,Name, Contact__c,Contact__r.Name,
                    Description__c,Length__c,Picture__c,Price__c,
                    Year_Built__c,BoatType__c,BoatType__r.Name,
                    Geolocation__Latitude__s, Geolocation__Longitude__s   
                        from Boat__c where BoatType__c =: boatTypeId];
        }
        else{
            return [Select Id,Name, Contact__c,Contact__r.Name,
                    Description__c,Length__c,Picture__c,Price__c,
                    Year_Built__c,BoatType__c,BoatType__r.Name,
                    Geolocation__Latitude__s, Geolocation__Longitude__s   
                        from Boat__c];
        }
    }
}