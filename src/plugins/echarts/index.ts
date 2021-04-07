import type { App } from 'vue';
import ECharts from 'vue-echarts';
import { use } from 'echarts/core';

// 手动引入 ECharts 各模块来减小打包体积
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart } from 'echarts/charts';
import { GridComponent, TooltipComponent } from 'echarts/components';

use([CanvasRenderer, BarChart, GridComponent, TooltipComponent]);

export function setupEcharts(app: App<Element>) {
  app.component('v-chart', ECharts);
}
