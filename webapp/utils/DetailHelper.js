sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "com/bootcamp/sapui5/smartapp/utils/DetailService",
  ], function (JSONModel, DetailService) {
    "use strict";
  
    return {
      init: function (oModel) {
        this._oModel = oModel;
      },
      getProductsBySupplier: async  function (supplierID) {
        const aProducts = await DetailService.readProducts(this._oModel);
        return aProducts.filter(p => p.Supplier === supplierID);
      },
      setProductsModel: function (oController, aProducts) {
        let oListModel = oController.getOwnerComponent().getModel("ProductsModel");
        if (!oListModel) {
            const oModel = new JSONModel([]);
            oModel.setSizeLimit(1000000);
            oController.getOwnerComponent().setModel(oModel, "ProductsModel");
            oListModel = oController.getOwnerComponent().getModel("ProductsModel");
        }
        oListModel.setData(aProducts);
      },
    };
  });