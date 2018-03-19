import { ScatterPlotCtrl } from './scatterplot_ctrl';
import { loadPluginCss } from 'app/plugins/sdk';

loadPluginCss({
  dark: 'plugins/grafana-scatterplot-panel/css/scatterplot.dark.css',
  light: 'plugins/grafana-scatterplot-panel/css/scatterplot.light.css',
});

export { ScatterPlotCtrl as PanelCtrl };