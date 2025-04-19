var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KLMapwithsubzone_1 = new ol.format.GeoJSON();
var features_KLMapwithsubzone_1 = format_KLMapwithsubzone_1.readFeatures(json_KLMapwithsubzone_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KLMapwithsubzone_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KLMapwithsubzone_1.addFeatures(features_KLMapwithsubzone_1);
var lyr_KLMapwithsubzone_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KLMapwithsubzone_1, 
                style: style_KLMapwithsubzone_1,
                popuplayertitle: 'KLMap(with subzone)',
                interactive: false,
                title: '<img src="styles/legend/KLMapwithsubzone_1.png" /> KLMap(with subzone)'
            });
var lyr_2024Traineddata_2 = new ol.layer.Image({
        opacity: 1,
        
    title: '2024 Trained data<br />\
    <img src="styles/legend/2024Traineddata_2_0.png" /> 0 - Unclassified<br />\
    <img src="styles/legend/2024Traineddata_2_1.png" /> 2 - Managed Vegetation<br />\
    <img src="styles/legend/2024Traineddata_2_2.png" /> 3 - Water Body<br />\
    <img src="styles/legend/2024Traineddata_2_3.png" /> 4 - Impervious Surfaces<br />\
    <img src="styles/legend/2024Traineddata_2_4.png" /> 8 - Shadow<br />\
    <img src="styles/legend/2024Traineddata_2_5.png" /> 5 - Built-up 1 (low-rise)<br />\
    <img src="styles/legend/2024Traineddata_2_6.png" /> 6 - Built-up 2 (high-rise)<br />\
    <img src="styles/legend/2024Traineddata_2_7.png" /> 7 - Bare Land<br />\
    <img src="styles/legend/2024Traineddata_2_8.png" /> 1 - Natural Vegetation<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2024Traineddata_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11311720.092880, 337848.804469, 11327712.554078, 361375.056129]
        })
    });
var lyr_2023Traineddata_3 = new ol.layer.Image({
        opacity: 1,
        
    title: '2023 Trained data<br />\
    <img src="styles/legend/2023Traineddata_3_0.png" /> 0 - Unclassified<br />\
    <img src="styles/legend/2023Traineddata_3_1.png" /> 1 - Natural Vegetation<br />\
    <img src="styles/legend/2023Traineddata_3_2.png" /> 2 - Managed Vegetation<br />\
    <img src="styles/legend/2023Traineddata_3_3.png" /> 3 - Water body<br />\
    <img src="styles/legend/2023Traineddata_3_4.png" /> 4 - Impervious Surfaces<br />\
    <img src="styles/legend/2023Traineddata_3_5.png" /> 5 - Built-up 1(low-rise)<br />\
    <img src="styles/legend/2023Traineddata_3_6.png" /> 7 - Barren Land<br />\
    <img src="styles/legend/2023Traineddata_3_7.png" /> 6 - Built-up 2(high-rise)<br />\
    <img src="styles/legend/2023Traineddata_3_8.png" /> 8 - Shadow<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2023Traineddata_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11311720.092880, 337848.804469, 11327712.554078, 361375.056129]
        })
    });
var lyr_2022Traineddata_4 = new ol.layer.Image({
        opacity: 1,
        
    title: '2022 Trained data<br />\
    <img src="styles/legend/2022Traineddata_4_0.png" /> 0 - Unclassified<br />\
    <img src="styles/legend/2022Traineddata_4_1.png" /> 1 - Natural Vegetation<br />\
    <img src="styles/legend/2022Traineddata_4_2.png" /> 2 - Managed Vegetation<br />\
    <img src="styles/legend/2022Traineddata_4_3.png" /> 3 - Water Body<br />\
    <img src="styles/legend/2022Traineddata_4_4.png" /> 4 - Impervious Surfaces<br />\
    <img src="styles/legend/2022Traineddata_4_5.png" /> 5 - Built-up 1 (low-rise)<br />\
    <img src="styles/legend/2022Traineddata_4_6.png" /> 6 - Built-up 2 (high-rise)<br />\
    <img src="styles/legend/2022Traineddata_4_7.png" /> 7 - Barren Land<br />\
    <img src="styles/legend/2022Traineddata_4_8.png" /> 8 - Shadows<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2022Traineddata_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11311720.092880, 337848.804469, 11327712.554078, 361375.056129]
        })
    });
var lyr_2021Traineddata_5 = new ol.layer.Image({
        opacity: 1,
        
    title: '2021 Trained data<br />\
    <img src="styles/legend/2021Traineddata_5_0.png" /> 0 - Unclassified<br />\
    <img src="styles/legend/2021Traineddata_5_1.png" /> 1 - Natural Vegetation<br />\
    <img src="styles/legend/2021Traineddata_5_2.png" /> 2 - Managed Vegetation<br />\
    <img src="styles/legend/2021Traineddata_5_3.png" /> 3 - Water Body<br />\
    <img src="styles/legend/2021Traineddata_5_4.png" /> 8 - Shadow<br />\
    <img src="styles/legend/2021Traineddata_5_5.png" /> 4 - Impervious Surfaces<br />\
    <img src="styles/legend/2021Traineddata_5_6.png" /> 5 - Built-up 1 (low-rise)<br />\
    <img src="styles/legend/2021Traineddata_5_7.png" /> 6 - Built-up 2 (high-rise)<br />\
    <img src="styles/legend/2021Traineddata_5_8.png" /> 7 - Barren Land<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2021Traineddata_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11311720.092880, 337848.804469, 11327712.554078, 361375.056129]
        })
    });
var lyr_2020Traineddata_6 = new ol.layer.Image({
        opacity: 1,
        
    title: '2020 Trained data<br />\
    <img src="styles/legend/2020Traineddata_6_0.png" /> 0 - Unclassified<br />\
    <img src="styles/legend/2020Traineddata_6_1.png" /> 1 - Natural Vegetation<br />\
    <img src="styles/legend/2020Traineddata_6_2.png" /> 2 - Managed Vegetation<br />\
    <img src="styles/legend/2020Traineddata_6_3.png" /> 3 - Water Body<br />\
    <img src="styles/legend/2020Traineddata_6_4.png" /> 4 - Impervious Surfaces<br />\
    <img src="styles/legend/2020Traineddata_6_5.png" /> 5 - Built-up 1 (low-rise)<br />\
    <img src="styles/legend/2020Traineddata_6_6.png" /> 6 - Built-up 2 (high-rise)<br />\
    <img src="styles/legend/2020Traineddata_6_7.png" /> 7 - Barren Land<br />\
    <img src="styles/legend/2020Traineddata_6_8.png" /> 8 - Shadow<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2020Traineddata_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11311720.092880, 337848.804469, 11327712.554078, 361375.056129]
        })
    });
var lyr_20240227FCC_7 = new ol.layer.Image({
        opacity: 1,
        
    title: '2024-0227-FCC<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/20240227FCC_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11311720.092880, 337848.804469, 11327712.554078, 361375.056129]
        })
    });
var lyr_20240227TCI_8 = new ol.layer.Image({
        opacity: 1,
        
    title: '2024-0227-TCI<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/20240227TCI_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11311720.092880, 337848.804469, 11327712.554078, 361375.056129]
        })
    });
var lyr_202303090314FCC_9 = new ol.layer.Image({
        opacity: 1,
        
    title: '2023-0309-0314-FCC<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/202303090314FCC_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11311720.092880, 337848.804469, 11327712.554078, 361375.056129]
        })
    });
var lyr_202303090314TCI_10 = new ol.layer.Image({
        opacity: 1,
        
    title: '2023-0309-0314-TCI<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/202303090314TCI_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11311720.092880, 337848.804469, 11327712.554078, 361375.056129]
        })
    });
var lyr_20220113FCC_11 = new ol.layer.Image({
        opacity: 1,
        
    title: '2022-0113-FCC<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/20220113FCC_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11311720.092880, 337848.804469, 11327712.554078, 361375.056129]
        })
    });
var lyr_20220113TCI_12 = new ol.layer.Image({
        opacity: 1,
        
    title: '2022-0113-TCI<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/20220113TCI_12.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11311720.092880, 337848.804469, 11327712.554078, 361375.056129]
        })
    });
var lyr_20210207FCC_13 = new ol.layer.Image({
        opacity: 1,
        
    title: '2021-0207-FCC<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/20210207FCC_13.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11311720.092880, 337848.804469, 11327712.554078, 361375.056129]
        })
    });
var lyr_20210207TCI_14 = new ol.layer.Image({
        opacity: 1,
        
    title: '2021-0207-TCI<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/20210207TCI_14.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11311720.092880, 337848.804469, 11327712.554078, 361375.056129]
        })
    });
var lyr_20200228FCC_15 = new ol.layer.Image({
        opacity: 1,
        
    title: '2020-0228-FCC<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/20200228FCC_15.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11311720.092880, 337848.804469, 11327712.554078, 361375.056129]
        })
    });
var lyr_20200228TCI_16 = new ol.layer.Image({
        opacity: 1,
        
    title: '2020-0228-TCI<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/20200228TCI_16.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11311720.092880, 337848.804469, 11327712.554078, 361375.056129]
        })
    });

lyr_OpenStreetMap_0.setVisible(true);lyr_KLMapwithsubzone_1.setVisible(true);lyr_2024Traineddata_2.setVisible(false);lyr_2023Traineddata_3.setVisible(false);lyr_2022Traineddata_4.setVisible(false);lyr_2021Traineddata_5.setVisible(false);lyr_2020Traineddata_6.setVisible(false);lyr_20240227FCC_7.setVisible(false);lyr_20240227TCI_8.setVisible(false);lyr_202303090314FCC_9.setVisible(false);lyr_202303090314TCI_10.setVisible(false);lyr_20220113FCC_11.setVisible(false);lyr_20220113TCI_12.setVisible(false);lyr_20210207FCC_13.setVisible(false);lyr_20210207TCI_14.setVisible(false);lyr_20200228FCC_15.setVisible(false);lyr_20200228TCI_16.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_KLMapwithsubzone_1,lyr_2024Traineddata_2,lyr_2023Traineddata_3,lyr_2022Traineddata_4,lyr_2021Traineddata_5,lyr_2020Traineddata_6,lyr_20240227FCC_7,lyr_20240227TCI_8,lyr_202303090314FCC_9,lyr_202303090314TCI_10,lyr_20220113FCC_11,lyr_20220113TCI_12,lyr_20210207FCC_13,lyr_20210207TCI_14,lyr_20200228FCC_15,lyr_20200228TCI_16];
lyr_KLMapwithsubzone_1.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', 'Area': 'Area', });
lyr_KLMapwithsubzone_1.set('fieldImages', {'shapeName': '', 'shapeISO': '', 'shapeID': '', 'shapeGroup': '', 'shapeType': '', 'Area': '', });
lyr_KLMapwithsubzone_1.set('fieldLabels', {'shapeName': 'no label', 'shapeISO': 'no label', 'shapeID': 'no label', 'shapeGroup': 'no label', 'shapeType': 'no label', 'Area': 'no label', });
lyr_KLMapwithsubzone_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});