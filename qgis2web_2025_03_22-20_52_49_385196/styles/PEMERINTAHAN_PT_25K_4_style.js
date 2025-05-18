var size = 0;
var placement = 'point';
function categories_PEMERINTAHAN_PT_25K_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Kantor Bupati':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [579.997, 579.997],
                  scale: 0.05172440547106279,
                  anchor: [289.9985, 289.9985],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/city_building.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kantor Camat':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [579.997, 579.997],
                  scale: 0.05172440547106279,
                  anchor: [289.9985, 289.9985],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/city_building_1.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kantor Kepala Desa':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [579.997, 579.997],
                  scale: 0.05172440547106279,
                  anchor: [289.9985, 289.9985],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/city_building_2.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kantor Polisi':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [579.997, 579.997],
                  scale: 0.05172440547106279,
                  anchor: [289.9985, 289.9985],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/city_building_3.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [579.997, 579.997],
                  scale: 0.05172440547106279,
                  anchor: [289.9985, 289.9985],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/city_building_4.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_PEMERINTAHAN_PT_25K_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("REMARK");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_PEMERINTAHAN_PT_25K_4(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
