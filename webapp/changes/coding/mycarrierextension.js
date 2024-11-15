sap.ui.define(
  [
    "sap/ui/core/mvc/ControllerExtension",
    "sap/ui/core/mvc/OverrideExecution",
    "sap/m/MessageBox",
  ],
  function (ControllerExtension, OverrideExecution, MessageBox) {
    "use strict";
    return ControllerExtension.extend(
      "customer.zux410app10adaptationproject.mycarrierextension",
      {
        metadata: {
          methods: {
            onShowCarrierData: {
              public: true,
              final: false,
              overrideExecution: OverrideExecution.Instead,
            },
          },
        },

        override: {
          onShowCarrierData: function (oEvent) {
            MessageBox.show(
              "You are currently viewing the data of carrier " +
                this.getView().getBindingContext().getProperty("Carrname"),
              {
                icon: MessageBox.Icon.Information,
                title: "Carrier data",
              }
            );
          },
        },
      }
    );
  }
);
