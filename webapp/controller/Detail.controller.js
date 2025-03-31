sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/bootcamp/sapui5/smartapp/utils/DetailHelper",
    "com/bootcamp/sapui5/smartapp/utils/formatter",
], (Controller, DetailHelper, formatter) => {
    "use strict";

    return Controller.extend("com.bootcamp.sapui5.smartapp.controller.Detail", {
        formatter: formatter,

        onInit() {
            this.getOwnerComponent().getRouter().getRoute("RouteDetail").attachPatternMatched(this._onObjectMatched, this);
            DetailHelper.init(this.getOwnerComponent().getModel());
        },

        _onObjectMatched: async function (oEvent) {
            const sSupplierID = oEvent.getParameter("arguments").supplierID;
            this._sSupplierID = sSupplierID;

            this.getView().bindElement({
                path: "/SEPMRA_C_PD_Supplier('" + sSupplierID + "')",
                parameters: {
                    expand: "to_Address"
                }
            });

            const aFilteredProducts  = await DetailHelper.getProductsBySupplier(sSupplierID);
            DetailHelper.setProductsModel(this, aFilteredProducts );

            const oTable = this.byId("productsTableId");
            if (oTable) {
                const iRowCount = Math.min(aFilteredProducts.length, 20);
                oTable.setVisibleRowCount(iRowCount);
            }
        },
    });
});