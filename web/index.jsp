<html>
<head>
    <div id="chart-container">FusionCharts will load here...</div>
    <button id="set_chart_data"></button>
    <script type="text/javascript" src="js/fusioncharts.js"></script>
    <script type="text/javascript">
        FusionCharts.ready(function () {
            // Create a new instance of FusionCharts for rendering inside an HTML
            // `<div>` element with id `my-chart-container`.
            var myChart = new FusionCharts({
                type: 'column2d',
                renderAt: 'chart-container',

                dataFormat: 'json',
                dataSource: {
                    chart: {
                        caption: "Harry's SuperMart",
                        subCaption: "Top 5 stores in last month by revenue",
                    },
                    data: [{
                        label: "Bakersfield Central",
                        value: "880000"
                    },
                        {
                            label: "Garden Groove harbour",
                            value: "730000"
                        },
                        {
                            label: "Los Angeles Topanga",
                            value: "590000"
                        },
                        {
                            label: "Compton-Rancho Dom",
                            value: "520000"
                        },
                        {
                            label: "Daly City Serramonte",
                            value: "330000"
                        }]
                }
            });
            var mydata = {
                chart: {
                    caption: "Harry's SuperMart",
                    subCaption: "Top 5 stores in last month by revenue",
                },
                data: [{
                    label: "Bakersfield Central",
                    value: "88001"
                },
                    {
                        label: "Garden Groove harbour",
                        value: "7300"
                    },
                    {
                        label: "Los Angeles Topanga",
                        value: "5900"
                    },
                    {
                        label: "Compton-Rancho Dom",
                        value: "520000"
                    },
                    {
                        label: "Daly City Serramonte",
                        value: "330000"
                    }]
            }

            // Render the chart.
            myChart.render();
            function ar() {
                myChart.setChartData(mydata);
            }
            document.getElementById('set_chart_data').addEventListener("click",ar);
        });
    </script>
<body>
</body>
</html>