var vg_1 = "symbol_map.vg.json";
vegaEmbed("#symbol_map", vg_1).then(function(result) {
    // Access the Vega view instance
    // (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "choropleth_map.vg.json";
vegaEmbed("#choropleth_map", vg_2).then(function(result) {
    // Access the Vega view instance
    // (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
