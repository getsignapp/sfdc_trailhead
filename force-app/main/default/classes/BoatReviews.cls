public class BoatReviews {
    public BoatReviews() {  }

    @AuraEnabled
    public static List<BoatReview__c> getAll(Id boatId ){
        System.debug('>>>>' + boatId);
        return [select Id,Name,Comment__c,Rating__c,
                LastModifiedDate,CreatedDate,CreatedBy.Name,CreatedBy.Id,
                CreatedBy.SmallPhotoUrl,CreatedBy.CompanyName   
            from BoatReview__c where Boat__c =: boatId];
        
    }
}