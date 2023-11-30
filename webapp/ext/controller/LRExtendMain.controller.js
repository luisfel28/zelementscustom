sap.ui.controller("zteste01.com.zteste01.ext.controller.LRExtendMain", {

    onPress: function(evt) {
        debugger;
        var vRef = this.getView().getModel().getProperty("inv_ref_num", evt.getSource().getBindingContext());
        var tab = window.open("https://devre.fidelidademundial.com:44300/sap/opu/odata/SAP/ZRE_GW_FAT_INT_UPLOADS_SRV/ZENT_UPLOADSet('" + vRef + "')/$value","_blank");
    }  
    
});