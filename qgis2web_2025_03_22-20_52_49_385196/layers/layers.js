var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_JumlahWisatawan_1 = new ol.format.GeoJSON();
var features_JumlahWisatawan_1 = format_JumlahWisatawan_1.readFeatures(json_JumlahWisatawan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JumlahWisatawan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JumlahWisatawan_1.addFeatures(features_JumlahWisatawan_1);
var lyr_JumlahWisatawan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JumlahWisatawan_1, 
                style: style_JumlahWisatawan_1,
                popuplayertitle: 'Jumlah Wisatawan',
                interactive: true,
    title: 'Jumlah Wisatawan<br />\
    <img src="styles/legend/JumlahWisatawan_1_0.png" /> 0<br />\
    <img src="styles/legend/JumlahWisatawan_1_1.png" /> 108,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_2.png" /> 274,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_3.png" /> 410,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_4.png" /> 568,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_5.png" /> 601,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_6.png" /> 989,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_7.png" /> 1200,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_8.png" /> 2113,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_9.png" /> 2795,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_10.png" /> 2888,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_11.png" /> 3114,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_12.png" /> 3910,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_13.png" /> 3996,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_14.png" /> 4050,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_15.png" /> 4324,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_16.png" /> 5443,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_17.png" /> 5458,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_18.png" /> 5986,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_19.png" /> 6174,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_20.png" /> 7916,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_21.png" /> 8764,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_22.png" /> 8805,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_23.png" /> 9215,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_24.png" /> 10086,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_25.png" /> 14297,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_26.png" /> 14968,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_27.png" /> 19329,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_28.png" /> 20513,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_29.png" /> 21756,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_30.png" /> 31183,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_31.png" /> 38348,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_32.png" /> 48257,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_33.png" /> 55361,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_34.png" /> 57048,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_35.png" /> 61813,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_36.png" /> 66729,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_37.png" /> 71741,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_38.png" /> 75825,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_39.png" /> 85650,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_40.png" /> 85782,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_41.png" /> 90903,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_42.png" /> 105867,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_43.png" /> 162611,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_44.png" /> 168047,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_45.png" /> 211272,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_46.png" /> 218970,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_47.png" /> 247237,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_48.png" /> 254767,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_49.png" /> 444725,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_50.png" /> 771377,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_51.png" /> 876482,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_52.png" /> 1285225,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_53.png" /> 2584996,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_54.png" /> <br />' });
var format_SUNGAI_LN_25K_2 = new ol.format.GeoJSON();
var features_SUNGAI_LN_25K_2 = format_SUNGAI_LN_25K_2.readFeatures(json_SUNGAI_LN_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_25K_2.addFeatures(features_SUNGAI_LN_25K_2);
var lyr_SUNGAI_LN_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_25K_2, 
                style: style_SUNGAI_LN_25K_2,
                popuplayertitle: 'SUNGAI_LN_25K',
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_25K_2.png" /> SUNGAI_LN_25K'
            });
var format_JALAN_LN_25K_3 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_3 = format_JALAN_LN_25K_3.readFeatures(json_JALAN_LN_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_25K_3.addFeatures(features_JALAN_LN_25K_3);
var lyr_JALAN_LN_25K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_25K_3, 
                style: style_JALAN_LN_25K_3,
                popuplayertitle: 'JALAN_LN_25K',
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_25K_3.png" /> JALAN_LN_25K'
            });
var format_PEMERINTAHAN_PT_25K_4 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_25K_4 = format_PEMERINTAHAN_PT_25K_4.readFeatures(json_PEMERINTAHAN_PT_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHAN_PT_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_25K_4.addFeatures(features_PEMERINTAHAN_PT_25K_4);
var lyr_PEMERINTAHAN_PT_25K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMERINTAHAN_PT_25K_4, 
                style: style_PEMERINTAHAN_PT_25K_4,
                popuplayertitle: 'PEMERINTAHAN_PT_25K',
                interactive: true,
    title: 'PEMERINTAHAN_PT_25K<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_25K_4_0.png" /> Kantor Bupati<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_25K_4_1.png" /> Kantor Camat<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_25K_4_2.png" /> Kantor Kepala Desa<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_25K_4_3.png" /> Kantor Polisi<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_25K_4_4.png" /> <br />' });
var format_PersebaranWisata_5 = new ol.format.GeoJSON();
var features_PersebaranWisata_5 = format_PersebaranWisata_5.readFeatures(json_PersebaranWisata_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PersebaranWisata_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PersebaranWisata_5.addFeatures(features_PersebaranWisata_5);
var lyr_PersebaranWisata_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PersebaranWisata_5, 
                style: style_PersebaranWisata_5,
                popuplayertitle: 'Persebaran Wisata',
                interactive: true,
    title: 'Persebaran Wisata<br />\
    <img src="styles/legend/PersebaranWisata_5_0.png" /> Agrowisata Bhumi Merapi<br />\
    <img src="styles/legend/PersebaranWisata_5_1.png" /> Blue Lagoon<br />\
    <img src="styles/legend/PersebaranWisata_5_2.png" /> Bukit Teletubbies<br />\
    <img src="styles/legend/PersebaranWisata_5_3.png" /> Candi Banyunibo<br />\
    <img src="styles/legend/PersebaranWisata_5_4.png" /> Candi Barong<br />\
    <img src="styles/legend/PersebaranWisata_5_5.png" /> Candi Gebang<br />\
    <img src="styles/legend/PersebaranWisata_5_6.png" /> Candi Ijo<br />\
    <img src="styles/legend/PersebaranWisata_5_7.png" /> Candi Kalasan<br />\
    <img src="styles/legend/PersebaranWisata_5_8.png" /> Candi Prambanan<br />\
    <img src="styles/legend/PersebaranWisata_5_9.png" /> Candi Sambisari<br />\
    <img src="styles/legend/PersebaranWisata_5_10.png" /> Candi Sari<br />\
    <img src="styles/legend/PersebaranWisata_5_11.png" /> Citra Grand Mutiara Waterpark<br />\
    <img src="styles/legend/PersebaranWisata_5_12.png" /> Desa Wisata Bokesan<br />\
    <img src="styles/legend/PersebaranWisata_5_13.png" /> Desa Wisata Brajan<br />\
    <img src="styles/legend/PersebaranWisata_5_14.png" /> Desa Wisata Brayut<br />\
    <img src="styles/legend/PersebaranWisata_5_15.png" /> Desa Wisata Candi Abang<br />\
    <img src="styles/legend/PersebaranWisata_5_16.png" /> Desa Wisata Dukuh<br />\
    <img src="styles/legend/PersebaranWisata_5_17.png" /> Desa Wisata Gabugan (Agro)<br />\
    <img src="styles/legend/PersebaranWisata_5_18.png" /> Desa Wisata Gamplong (termasuk Studio Alam Gamplong)<br />\
    <img src="styles/legend/PersebaranWisata_5_19.png" /> Desa Wisata Garongan (Alam)<br />\
    <img src="styles/legend/PersebaranWisata_5_20.png" /> Desa Wisata Grogol<br />\
    <img src="styles/legend/PersebaranWisata_5_21.png" /> Desa Wisata Jetak<br />\
    <img src="styles/legend/PersebaranWisata_5_22.png" /> Desa Wisata Kadisobo II<br />\
    <img src="styles/legend/PersebaranWisata_5_23.png" /> Desa Wisata Kedung Nganten (Permanently closed)<br />\
    <img src="styles/legend/PersebaranWisata_5_24.png" /> Desa Wisata Kelor (Agro)<br />\
    <img src="styles/legend/PersebaranWisata_5_25.png" /> Desa Wisata Kembangarum<br />\
    <img src="styles/legend/PersebaranWisata_5_26.png" /> Desa Wisata Ketingan<br />\
    <img src="styles/legend/PersebaranWisata_5_27.png" /> Desa Wisata Kinahrejo<br />\
    <img src="styles/legend/PersebaranWisata_5_28.png" /> Desa Wisata Ledok Nongko (Agro)<br />\
    <img src="styles/legend/PersebaranWisata_5_29.png" /> Desa Wisata Malangan<br />\
    <img src="styles/legend/PersebaranWisata_5_30.png" /> Desa Wisata Mlangi<br />\
    <img src="styles/legend/PersebaranWisata_5_31.png" /> Desa Wisata Nawung<br />\
    <img src="styles/legend/PersebaranWisata_5_32.png" /> Desa Wisata Ngaggring (Peternakan)<br />\
    <img src="styles/legend/PersebaranWisata_5_33.png" /> Desa Wisata Pajangan<br />\
    <img src="styles/legend/PersebaranWisata_5_34.png" /> Desa Wisata Pancoh<br />\
    <img src="styles/legend/PersebaranWisata_5_35.png" /> Desa Wisata Pentingsari<br />\
    <img src="styles/legend/PersebaranWisata_5_36.png" /> Desa Wisata Plempoh<br />\
    <img src="styles/legend/PersebaranWisata_5_37.png" /> Desa Wisata Pulesari (Alam)<br />\
    <img src="styles/legend/PersebaranWisata_5_38.png" /> Desa Wisata Pulewulung<br />\
    <img src="styles/legend/PersebaranWisata_5_39.png" /> Desa Wisata Rejosari<br />\
    <img src="styles/legend/PersebaranWisata_5_40.png" /> Desa Wisata Rumah Domes<br />\
    <img src="styles/legend/PersebaranWisata_5_41.png" /> Desa Wisata Sendari<br />\
    <img src="styles/legend/PersebaranWisata_5_42.png" /> Desa Wisata Srowolan<br />\
    <img src="styles/legend/PersebaranWisata_5_43.png" /> Desa Wisata Sukunan<br />\
    <img src="styles/legend/PersebaranWisata_5_44.png" /> Desa Wisata Tanjung<br />\
    <img src="styles/legend/PersebaranWisata_5_45.png" /> Desa Wisata Tlatar Seneng<br />\
    <img src="styles/legend/PersebaranWisata_5_46.png" /> Desa Wisata Trumpon (Agro)<br />\
    <img src="styles/legend/PersebaranWisata_5_47.png" /> Desa Wisata Tunggularum<br />\
    <img src="styles/legend/PersebaranWisata_5_48.png" /> Eksotika Krasak Jolontoro<br />\
    <img src="styles/legend/PersebaranWisata_5_49.png" /> Endapan Gunung Api Purba Candi Ijo<br />\
    <img src="styles/legend/PersebaranWisata_5_50.png" /> Geoheritage Lava Bantal<br />\
    <img src="styles/legend/PersebaranWisata_5_51.png" /> Geoheritage Tebing breksi candi ijo<br />\
    <img src="styles/legend/PersebaranWisata_5_52.png" /> Grojogan Watu Purbo<br />\
    <img src="styles/legend/PersebaranWisata_5_53.png" /> Jalan Kaliurang, Damai, Palagan<br />\
    <img src="styles/legend/PersebaranWisata_5_54.png" /> Jogja Bay Pirates Adventure Waterpark<br />\
    <img src="styles/legend/PersebaranWisata_5_55.png" /> Jogja Mini Zoo Exotarium<br />\
    <img src="styles/legend/PersebaranWisata_5_56.png" /> Kaliadem (Minat Khusus)<br />\
    <img src="styles/legend/PersebaranWisata_5_57.png" /> Kaliurang (Rekreatif)<br />\
    <img src="styles/legend/PersebaranWisata_5_58.png" /> Kawasan Barek<br />\
    <img src="styles/legend/PersebaranWisata_5_59.png" /> Kawasan Jalan Magelang (Belanja dan Rekreatif)<br />\
    <img src="styles/legend/PersebaranWisata_5_60.png" /> Kawasan Kalasan (Ayam Goreng)<br />\
    <img src="styles/legend/PersebaranWisata_5_61.png" /> Kawasan Lapangan Denggung (keluarga)<br />\
    <img src="styles/legend/PersebaranWisata_5_62.png" /> Kawasan Minapolis Berbah<br />\
    <img src="styles/legend/PersebaranWisata_5_63.png" /> Kawasan Minggir<br />\
    <img src="styles/legend/PersebaranWisata_5_64.png" /> Kawasan Minomartani (kuliner Bakpia)<br />\
    <img src="styles/legend/PersebaranWisata_5_65.png" /> Kawasan Moyudan<br />\
    <img src="styles/legend/PersebaranWisata_5_66.png" /> Kawasan Pendukung Monjali<br />\
    <img src="styles/legend/PersebaranWisata_5_67.png" /> Kawasan Pendukung Prambanan dan Situs Boko<br />\
    <img src="styles/legend/PersebaranWisata_5_68.png" /> Kawasan Seturan<br />\
    <img src="styles/legend/PersebaranWisata_5_69.png" /> Kawasan Seyegan dan Godean<br />\
    <img src="styles/legend/PersebaranWisata_5_70.png" /> Kawasan Stadion Maguwoharjo-Candi Gebang-Embung Tambakboyo<br />\
    <img src="styles/legend/PersebaranWisata_5_71.png" /> Kawasan Volcano Tour<br />\
    <img src="styles/legend/PersebaranWisata_5_72.png" /> Kraton Ratu Boko<br />\
    <img src="styles/legend/PersebaranWisata_5_73.png" /> Minapolis Ngemplak (Perikanan)<br />\
    <img src="styles/legend/PersebaranWisata_5_74.png" /> Monumen Jogja Kembali<br />\
    <img src="styles/legend/PersebaranWisata_5_75.png" /> Museum Affandi, Kawasan Ambarrukmo<br />\
    <img src="styles/legend/PersebaranWisata_5_76.png" /> Museum Gempa Prof. Dr. Sarwidi<br />\
    <img src="styles/legend/PersebaranWisata_5_77.png" /> Museum Geoteknologi UPN<br />\
    <img src="styles/legend/PersebaranWisata_5_78.png" /> Museum Gunungapi Merapi (Pendidikan Kegunungapian)<br />\
    <img src="styles/legend/PersebaranWisata_5_79.png" /> Museum Pendidikan Indonesia<br />\
    <img src="styles/legend/PersebaranWisata_5_80.png" /> Museum UGM<br />\
    <img src="styles/legend/PersebaranWisata_5_81.png" /> Museum Ullen Sentalu<br />\
    <img src="styles/legend/PersebaranWisata_5_82.png" /> Saluran Van Der Wijk<br />\
    <img src="styles/legend/PersebaranWisata_5_83.png" /> Sindu Kusuma Edupark<br />\
    <img src="styles/legend/PersebaranWisata_5_84.png" /> Taman Nasional Gunung Merapi<br />\
    <img src="styles/legend/PersebaranWisata_5_85.png" /> Taman Pelangi Jogja<br />\
    <img src="styles/legend/PersebaranWisata_5_86.png" /> Taman Rekreasi Anak Kaliurang<br />\
    <img src="styles/legend/PersebaranWisata_5_87.png" /> The World Landmarks Merapi Park<br />\
    <img src="styles/legend/PersebaranWisata_5_88.png" /> Turgo (Ekowisata)<br />\
    <img src="styles/legend/PersebaranWisata_5_89.png" /> Upside Down World Jogja (Permanently closed)<br />\
    <img src="styles/legend/PersebaranWisata_5_90.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_JumlahWisatawan_1.setVisible(true);lyr_SUNGAI_LN_25K_2.setVisible(true);lyr_JALAN_LN_25K_3.setVisible(true);lyr_PEMERINTAHAN_PT_25K_4.setVisible(true);lyr_PersebaranWisata_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_JumlahWisatawan_1,lyr_SUNGAI_LN_25K_2,lyr_JALAN_LN_25K_3,lyr_PEMERINTAHAN_PT_25K_4,lyr_PersebaranWisata_5];
lyr_JumlahWisatawan_1.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'namobj': 'namobj', 'srs_id': 'srs_id', 'wadmkc': 'wadmkc', 'wadmkd': 'wadmkd', 'wadmkk': 'wadmkk', 'wadmpr': 'wadmpr', 'remark': 'remark', 'metadata': 'metadata', 'jumlah': 'jumlah', 'fcode': 'fcode', });
lyr_SUNGAI_LN_25K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LN_25K_3.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PEMERINTAHAN_PT_25K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PersebaranWisata_5.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'fcode': 'fcode', 'namobj': 'namobj', 'metadata': 'metadata', 'srs_id': 'srs_id', 'sumber': 'sumber', 'remark': 'remark', });
lyr_JumlahWisatawan_1.set('fieldImages', {'ogc_fid': 'Range', 'objectid': 'TextEdit', 'namobj': 'TextEdit', 'srs_id': 'TextEdit', 'wadmkc': 'TextEdit', 'wadmkd': 'TextEdit', 'wadmkk': 'TextEdit', 'wadmpr': 'TextEdit', 'remark': 'TextEdit', 'metadata': 'TextEdit', 'jumlah': 'TextEdit', 'fcode': 'TextEdit', });
lyr_SUNGAI_LN_25K_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JALAN_LN_25K_3.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_PEMERINTAHAN_PT_25K_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FGSGOV': 'TextEdit', 'LUAS': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_PersebaranWisata_5.set('fieldImages', {'ogc_fid': 'Range', 'objectid': 'TextEdit', 'fcode': 'TextEdit', 'namobj': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'sumber': 'TextEdit', 'remark': 'TextEdit', });
lyr_JumlahWisatawan_1.set('fieldLabels', {'ogc_fid': 'no label', 'objectid': 'no label', 'namobj': 'no label', 'srs_id': 'no label', 'wadmkc': 'no label', 'wadmkd': 'inline label - always visible', 'wadmkk': 'no label', 'wadmpr': 'no label', 'remark': 'no label', 'metadata': 'no label', 'jumlah': 'no label', 'fcode': 'no label', });
lyr_SUNGAI_LN_25K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_LN_25K_3.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_PEMERINTAHAN_PT_25K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label - always visible', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PersebaranWisata_5.set('fieldLabels', {'ogc_fid': 'no label', 'objectid': 'no label', 'fcode': 'no label', 'namobj': 'inline label - always visible', 'metadata': 'no label', 'srs_id': 'no label', 'sumber': 'no label', 'remark': 'no label', });
lyr_PersebaranWisata_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});