# React-Highcharts

[React] wrapper for [Highcharts] based on the [offical package].

## Improvements

- Uses the new [React Hooks] API.
- Uses [flexbox] to dynamically set the chart container width.
- Lazy loading support out of the box.
- Development server with live reloading for quickly prototyping charts.

## API

| Parameter | Type | Required | Defaults | Description |
| --------- | :----: | :--------: | :--------: | ----------- |
| `chartId` | String | yes | - | Unique identifier for the chart |
| `constructorType` | String | no | `'chart'` | String for [constructor method]. Official constructors: <br>- `'chart'` for Highcharts charts <br>- `'stockChart'` for Highstock charts <br>- `'mapChart'` for Highmaps charts <br>- `'ganttChart'` for Gantt charts|
| `options` | Object | no | `{}` | Highcharts chart configuration object. Please refer to the Highcharts [API documentation]. |
| `allowToUpdate` | Boolean | no | `true` | This option allow to turn off the updating. |
| `chartLoadedCallback` | Function | no | `undefined` | Callback function that is called once the chart is created. |
| `theme` | Object | no | `undefined` | Pre-defined defaults to apply to each chart. |
| `height` | String | no | `600px` | Height of the chart's container. |
| `highcharts` | Object | no | `Highcharts` | Used to pass the Highcharts instance after modules are initialized. |

## Development

The development server files are located under the folder `dev`. The server can be launched using the command

~~~
npm run dev
~~~

It will run on `http://localhost:8080`.

[React]: https://reactjs.org/
[Highcharts]: https://www.highcharts.com/
[offical package]: https://github.com/highcharts/highcharts-react
[React Hooks]: https://reactjs.org/docs/hooks-intro.html
[API documentation]: https://api.highcharts.com/highcharts/
[constructor method]: https://www.highcharts.com/docs/getting-started/your-first-chart
[theme]: https://www.highcharts.com/docs/chart-design-and-style/themes
[flexbox]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout
