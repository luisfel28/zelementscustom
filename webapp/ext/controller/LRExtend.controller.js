sap.ui.define([
    "sap/ui/core/mvc/ControllerExtension", 
    "sap/ui/model/Filter",    
    "sap/m/MessageBox"
], 
    function(ControllerExtension, Filter, MessageBox) {
    "use strict";
    return ControllerExtension.extend("zteste01.com.zteste01.ext.controller.LRExtend", {

        onPress: function(evt) {
            debugger;
            MessageBox.confirm("Viu??");
        },   

        override: {

            onInit: function () {
                debugger;
                 let smartTable = this.getView().byId("listReport");
                
                if (smartTable && smartTable.getMetadata().getName() === 'sap.ui.comp.smarttable.SmartTable') {
                    
                } 

            },            

            onExport: function(evt) {
                debugger;
                MessageBox.confirm("Viu??");
            },                 

            templateBaseExtension: {	
                addFilters: function(fnAddFilter, sControlId){							
                    //debugger;
                      }
                               
            },            

            onListNavigationExtension: function (oEvent, oBindingContext, bReplaceInHistory) {
                debugger;
            }, 

            onViewNeedsRefresh: function(mParameters) {
                debugger;
                var oFilterInfo = mParameters.filterConditions;
                if (oFilterInfo) {
                    var duplicateFilterInfo = Object.assign({}, oFilterInfo);
                    if (
                        duplicateFilterInfo.Region &&
                        duplicateFilterInfo.Region.map(item => item.values).findIndex(i => i.includes("Bavaria")) !== -1
                    ) {
                        delete duplicateFilterInfo.Region;
                    }
                    var oTable = this.getView().byId("BusinessPartners::BusinessPartnersList--fe::CustomTab::tab2--customViewWithTable"),
                        oBinding = oTable.getBinding("items"),
                        oConvertedFilter = this.base.getExtensionAPI().createFiltersFromFilterConditions(duplicateFilterInfo);
                    oTable.setShowOverlay(false);
                    var oFilter = new Filter({ filters: oConvertedFilter.filters, and: true });
                    oBinding.filter(oFilter);
                    oBinding.changeParameters({$search: oConvertedFilter.search});
                }
            },
            onPendingFilters: function() {
                debugger;
                var oTable = this.getView().byId("BusinessPartners::BusinessPartnersList--fe::CustomTab::tab2--customViewWithTable");
                if (oTable) {
                    oTable.setShowOverlay(true);
                }
            }            
        }
    });
});