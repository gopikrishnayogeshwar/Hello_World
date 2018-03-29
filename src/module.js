
import { ScatterPlotCtrl } from './scatterplot_ctrl';
import { loadPluginCss } from 'app/plugins/sdk';

loadPluginCss({
  dark: 'plugins/grafana-Hello_World/css/scatterplot.dark.css',
  light: 'plugins/grafana-Hello_World/css/scatterplot.light.css',
});

export { ScatterPlotCtrl as PanelCtrl };
