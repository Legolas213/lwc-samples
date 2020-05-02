public with sharing class LWC_TrainingController {
    public LWC_TrainingController() {

    }

    @AuraEnabled(cacheable = true)
    public static List<Case>  getAllCases(){
        return [SELECT Id,Subject,Description FROM Case];
    }

    @AuraEnabled(cacheable=true)
    public static List<Case> getCasesByName(String subject){
        String searchString = '%' + subject + '%';
        return [SELECT ID,Subject,Description FROM Case WHERE Subject LIKE :searchString];
    }
}
