queue()
    .defer(d3.csv, "data/oec.csv")
    .await(makeGraphs);
    
function makeGraphs(error, salaryData) {
    var ndx = crossfilter(salaryData);
    
    discoveryYear(ndx);
    discoveryMethod(ndx);
    show_planetSelecor(ndx);
   
   
    
    dc.renderAll(); 
         
    
}

function discoveryYear(ndx) {
    var dim = ndx.dimension(dc.pluck('DiscoveryYear'));
    var group = dim.group();
    
    dc.barChart("#discoveryYear")
        .width(1000)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(false)
        .xAxisLabel("DiscoveryYear")
        .yAxis().ticks(20);
}


function discoveryMethod(ndx) {
    var dim = ndx.dimension(dc.pluck('DiscoveryMethod'));
    var group = dim.group();
    
    dc.pieChart("#discoveryMethod")
    .width(500)
    .radius (150)
    .transitionDuration(500)
    .dimension(dim)
    .group(group)
    .legend(dc.legend())
    
};

function show_planetSelecor(ndx) {
    dim = ndx.dimension(dc.pluck('PlanetIdentifier'));
    group = dim.group()

    dc.selectMenu("#planetSelector")
        .dimension(dim)
        .group(group);


}



