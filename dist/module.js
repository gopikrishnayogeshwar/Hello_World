'use strict';

System.register(['./scatterplot_ctrl', 'app/plugins/sdk'], function (_export, _context) {
  "use strict";

  var ScatterPlotCtrl, loadPluginCss;
  return {
    setters: [function (_scatterplot_ctrl) {
      ScatterPlotCtrl = _scatterplot_ctrl.ScatterPlotCtrl;
    }, function (_appPluginsSdk) {
      loadPluginCss = _appPluginsSdk.loadPluginCss;
    }],
    execute: function () {

      loadPluginCss({
        dark: 'plugins/grafana-scatterplot-panel/css/scatterplot.dark.css',
        light: 'plugins/grafana-scatterplot-panel/css/scatterplot.light.css'
      });

      _export('PanelCtrl', ScatterPlotCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map
