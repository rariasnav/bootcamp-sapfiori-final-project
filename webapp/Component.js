/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "com/bootcamp/sapui5/smartapp/model/models",
        "com/bootcamp/sapui5/smartapp/utils/HomeHelper",
    ],
    function (UIComponent, models, HomeHelper) {
        "use strict";

        return UIComponent.extend("com.bootcamp.sapui5.smartapp.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
                
                // Initialize models
                HomeHelper.init(this.getModel());
                HomeHelper.setLocalModel(this);

                // just a comment to send changes
            }
        });
    }
);