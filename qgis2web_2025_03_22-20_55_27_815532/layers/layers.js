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
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: 'ADMINISTRASIDESA_AR_25K',
                interactive: true,
    title: 'ADMINISTRASIDESA_AR_25K<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_0.png" /> 0<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_1.png" /> Ambarketawang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_2.png" /> Argomulyo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_3.png" /> Argosari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_4.png" /> Baciro<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_5.png" /> Balecatur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_6.png" /> Balerante<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_7.png" /> Banguncipto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_8.png" /> Bangunjiwo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_9.png" /> Bangunkerto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_10.png" /> Banguntapan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_11.png" /> Banjararum<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_12.png" /> Banjarharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_13.png" /> Banjarsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_14.png" /> Banyuraden<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_15.png" /> Banyurejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_16.png" /> Baturetno<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_17.png" /> Bawukan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_18.png" /> Bener<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_19.png" /> Bimomartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_20.png" /> Bligo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_21.png" /> Bokoharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_22.png" /> Bugisan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_23.png" /> Candibinangun<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_24.png" /> Caturharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_25.png" /> Caturtunggal<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_26.png" /> Cokrodiningratan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_27.png" /> Condongcatur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_28.png" /> Demangan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_29.png" /> Donoharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_30.png" /> Donokerto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_31.png" /> Gayamharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_32.png" /> Girikerto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_33.png" /> Glagaharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_34.png" /> Hargobinangun<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_35.png" /> Harjobinangun<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_36.png" /> Jatisarono<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_37.png" /> Jogotirto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_38.png" /> Kalitirto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_39.png" /> Kaliurang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_40.png" /> Karangwaru<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_41.png" /> Katekan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_42.png" /> Kebondalem Kidul<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_43.png" /> Kembang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_44.png" /> Kemiren<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_45.png" /> Kepuharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_46.png" /> Kepurun<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_47.png" /> Kerten<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_48.png" /> Klitren<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_49.png" /> Kokosan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_50.png" /> Kotesan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_51.png" /> Kranggan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_52.png" /> Kricak<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_53.png" /> Leses<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_54.png" /> Lumbungrejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_55.png" /> Madurejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_56.png" /> Maguwoharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_57.png" /> Margoagung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_58.png" /> Margodadi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_59.png" /> Margokaton<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_60.png" /> Margoluwih<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_61.png" /> Margomulyo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_62.png" /> Margorejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_63.png" /> Merdikorejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_64.png" /> Minomartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_65.png" /> Mororejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_66.png" /> Mujamuju<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_67.png" /> Ngablak<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_68.png" /> Ngestiharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_69.png" /> Nglumut<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_70.png" /> Ngoro-Oro<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_71.png" /> Nogotirto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_72.png" /> Pakembinangun<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_73.png" /> Pakunden<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_74.png" /> Pandowoharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_75.png" /> Panggang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_76.png" /> Pereng<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_77.png" /> Pondokrejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_78.png" /> Potorono<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_79.png" /> Purwobinangun<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_80.png" /> Purwomartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_81.png" /> Salam<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_82.png" /> Sambirejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_83.png" /> Sardonoharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_84.png" /> Sariharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_85.png" /> Selomartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_86.png" /> Sendangadi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_87.png" /> Sendangagung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_88.png" /> Sendangarum<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_89.png" /> Sendangmulyo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_90.png" /> Sendangrejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_91.png" /> Sendangsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_92.png" /> Sendangtirto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_93.png" /> Sengon<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_94.png" /> Serut<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_95.png" /> Sidoagung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_96.png" /> Sidoarum<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_97.png" /> Sidokarto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_98.png" /> Sidoluhur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_99.png" /> Sidomoyo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_100.png" /> Sidomulyo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_101.png" /> Sidorejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_102.png" /> Sinduadi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_103.png" /> Sinduharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_104.png" /> Sindumartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_105.png" /> Sitimulyo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_106.png" /> Somokaton<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_107.png" /> Srimartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_108.png" /> Srimulyo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_109.png" /> Sudimoro<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_110.png" /> Sukoharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_111.png" /> Sumberadi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_112.png" /> Sumberagung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_113.png" /> Sumberarum<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_114.png" /> Sumberharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_115.png" /> Sumberrahayu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_116.png" /> Sumberrejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_117.png" /> Sumbersari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_118.png" /> Tamanmartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_119.png" /> Tamantirto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_120.png" /> Tambakrejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_121.png" /> Taskombang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_122.png" /> Tegaltirto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_123.png" /> Terban<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_124.png" /> Tirtoadi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_125.png" /> Tirtomartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_126.png" /> Tlogo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_127.png" /> Tlogoadi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_128.png" /> Tridadi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_129.png" /> Trihanggo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_130.png" /> Triharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_131.png" /> Trimulyo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_132.png" /> Umbulharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_133.png" /> Umbulmartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_134.png" /> Wedomartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_135.png" /> Widodomartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_136.png" /> Wijimulyo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_137.png" /> Wonokerto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_138.png" /> Wukirharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_139.png" /> Wukirsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_140.png" /> <br />' });
var format_ADMINISTRASI_LN_25K_2 = new ol.format.GeoJSON();
var features_ADMINISTRASI_LN_25K_2 = format_ADMINISTRASI_LN_25K_2.readFeatures(json_ADMINISTRASI_LN_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_LN_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_LN_25K_2.addFeatures(features_ADMINISTRASI_LN_25K_2);
var lyr_ADMINISTRASI_LN_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASI_LN_25K_2, 
                style: style_ADMINISTRASI_LN_25K_2,
                popuplayertitle: 'ADMINISTRASI_LN_25K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_LN_25K_2.png" /> ADMINISTRASI_LN_25K'
            });
var format_SUNGAI_LN_25K_3 = new ol.format.GeoJSON();
var features_SUNGAI_LN_25K_3 = format_SUNGAI_LN_25K_3.readFeatures(json_SUNGAI_LN_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_25K_3.addFeatures(features_SUNGAI_LN_25K_3);
var lyr_SUNGAI_LN_25K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_25K_3, 
                style: style_SUNGAI_LN_25K_3,
                popuplayertitle: 'SUNGAI_LN_25K',
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_25K_3.png" /> SUNGAI_LN_25K'
            });
var format_JALAN_LN_25K_4 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_4 = format_JALAN_LN_25K_4.readFeatures(json_JALAN_LN_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_25K_4.addFeatures(features_JALAN_LN_25K_4);
var lyr_JALAN_LN_25K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_25K_4, 
                style: style_JALAN_LN_25K_4,
                popuplayertitle: 'JALAN_LN_25K',
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_25K_4.png" /> JALAN_LN_25K'
            });
var format_PEMERINTAHAN_PT_25K_5 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_25K_5 = format_PEMERINTAHAN_PT_25K_5.readFeatures(json_PEMERINTAHAN_PT_25K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHAN_PT_25K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_25K_5.addFeatures(features_PEMERINTAHAN_PT_25K_5);
var lyr_PEMERINTAHAN_PT_25K_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMERINTAHAN_PT_25K_5, 
                style: style_PEMERINTAHAN_PT_25K_5,
                popuplayertitle: 'PEMERINTAHAN_PT_25K',
                interactive: true,
    title: 'PEMERINTAHAN_PT_25K<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_25K_5_0.png" /> Kantor Bupati<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_25K_5_1.png" /> Kantor Camat<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_25K_5_2.png" /> Kantor Kepala Desa<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_25K_5_3.png" /> Kantor Polisi<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_25K_5_4.png" /> <br />' });
var format_PersebaranWisata_6 = new ol.format.GeoJSON();
var features_PersebaranWisata_6 = format_PersebaranWisata_6.readFeatures(json_PersebaranWisata_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PersebaranWisata_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PersebaranWisata_6.addFeatures(features_PersebaranWisata_6);
var lyr_PersebaranWisata_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PersebaranWisata_6, 
                style: style_PersebaranWisata_6,
                popuplayertitle: 'Persebaran Wisata',
                interactive: true,
    title: 'Persebaran Wisata<br />\
    <img src="styles/legend/PersebaranWisata_6_0.png" /> Agrowisata Bhumi Merapi<br />\
    <img src="styles/legend/PersebaranWisata_6_1.png" /> Blue Lagoon<br />\
    <img src="styles/legend/PersebaranWisata_6_2.png" /> Bukit Teletubbies<br />\
    <img src="styles/legend/PersebaranWisata_6_3.png" /> Candi Banyunibo<br />\
    <img src="styles/legend/PersebaranWisata_6_4.png" /> Candi Barong<br />\
    <img src="styles/legend/PersebaranWisata_6_5.png" /> Candi Gebang<br />\
    <img src="styles/legend/PersebaranWisata_6_6.png" /> Candi Ijo<br />\
    <img src="styles/legend/PersebaranWisata_6_7.png" /> Candi Kalasan<br />\
    <img src="styles/legend/PersebaranWisata_6_8.png" /> Candi Prambanan<br />\
    <img src="styles/legend/PersebaranWisata_6_9.png" /> Candi Sambisari<br />\
    <img src="styles/legend/PersebaranWisata_6_10.png" /> Candi Sari<br />\
    <img src="styles/legend/PersebaranWisata_6_11.png" /> Citra Grand Mutiara Waterpark<br />\
    <img src="styles/legend/PersebaranWisata_6_12.png" /> Desa Wisata Bokesan<br />\
    <img src="styles/legend/PersebaranWisata_6_13.png" /> Desa Wisata Brajan<br />\
    <img src="styles/legend/PersebaranWisata_6_14.png" /> Desa Wisata Brayut<br />\
    <img src="styles/legend/PersebaranWisata_6_15.png" /> Desa Wisata Candi Abang<br />\
    <img src="styles/legend/PersebaranWisata_6_16.png" /> Desa Wisata Dukuh<br />\
    <img src="styles/legend/PersebaranWisata_6_17.png" /> Desa Wisata Gabugan (Agro)<br />\
    <img src="styles/legend/PersebaranWisata_6_18.png" /> Desa Wisata Gamplong (termasuk Studio Alam Gamplong)<br />\
    <img src="styles/legend/PersebaranWisata_6_19.png" /> Desa Wisata Garongan (Alam)<br />\
    <img src="styles/legend/PersebaranWisata_6_20.png" /> Desa Wisata Grogol<br />\
    <img src="styles/legend/PersebaranWisata_6_21.png" /> Desa Wisata Jetak<br />\
    <img src="styles/legend/PersebaranWisata_6_22.png" /> Desa Wisata Kadisobo II<br />\
    <img src="styles/legend/PersebaranWisata_6_23.png" /> Desa Wisata Kedung Nganten (Permanently closed)<br />\
    <img src="styles/legend/PersebaranWisata_6_24.png" /> Desa Wisata Kelor (Agro)<br />\
    <img src="styles/legend/PersebaranWisata_6_25.png" /> Desa Wisata Kembangarum<br />\
    <img src="styles/legend/PersebaranWisata_6_26.png" /> Desa Wisata Ketingan<br />\
    <img src="styles/legend/PersebaranWisata_6_27.png" /> Desa Wisata Kinahrejo<br />\
    <img src="styles/legend/PersebaranWisata_6_28.png" /> Desa Wisata Ledok Nongko (Agro)<br />\
    <img src="styles/legend/PersebaranWisata_6_29.png" /> Desa Wisata Malangan<br />\
    <img src="styles/legend/PersebaranWisata_6_30.png" /> Desa Wisata Mlangi<br />\
    <img src="styles/legend/PersebaranWisata_6_31.png" /> Desa Wisata Nawung<br />\
    <img src="styles/legend/PersebaranWisata_6_32.png" /> Desa Wisata Ngaggring (Peternakan)<br />\
    <img src="styles/legend/PersebaranWisata_6_33.png" /> Desa Wisata Pajangan<br />\
    <img src="styles/legend/PersebaranWisata_6_34.png" /> Desa Wisata Pancoh<br />\
    <img src="styles/legend/PersebaranWisata_6_35.png" /> Desa Wisata Pentingsari<br />\
    <img src="styles/legend/PersebaranWisata_6_36.png" /> Desa Wisata Plempoh<br />\
    <img src="styles/legend/PersebaranWisata_6_37.png" /> Desa Wisata Pulesari (Alam)<br />\
    <img src="styles/legend/PersebaranWisata_6_38.png" /> Desa Wisata Pulewulung<br />\
    <img src="styles/legend/PersebaranWisata_6_39.png" /> Desa Wisata Rejosari<br />\
    <img src="styles/legend/PersebaranWisata_6_40.png" /> Desa Wisata Rumah Domes<br />\
    <img src="styles/legend/PersebaranWisata_6_41.png" /> Desa Wisata Sendari<br />\
    <img src="styles/legend/PersebaranWisata_6_42.png" /> Desa Wisata Srowolan<br />\
    <img src="styles/legend/PersebaranWisata_6_43.png" /> Desa Wisata Sukunan<br />\
    <img src="styles/legend/PersebaranWisata_6_44.png" /> Desa Wisata Tanjung<br />\
    <img src="styles/legend/PersebaranWisata_6_45.png" /> Desa Wisata Tlatar Seneng<br />\
    <img src="styles/legend/PersebaranWisata_6_46.png" /> Desa Wisata Trumpon (Agro)<br />\
    <img src="styles/legend/PersebaranWisata_6_47.png" /> Desa Wisata Tunggularum<br />\
    <img src="styles/legend/PersebaranWisata_6_48.png" /> Eksotika Krasak Jolontoro<br />\
    <img src="styles/legend/PersebaranWisata_6_49.png" /> Endapan Gunung Api Purba Candi Ijo<br />\
    <img src="styles/legend/PersebaranWisata_6_50.png" /> Geoheritage Lava Bantal<br />\
    <img src="styles/legend/PersebaranWisata_6_51.png" /> Geoheritage Tebing breksi candi ijo<br />\
    <img src="styles/legend/PersebaranWisata_6_52.png" /> Grojogan Watu Purbo<br />\
    <img src="styles/legend/PersebaranWisata_6_53.png" /> Jalan Kaliurang, Damai, Palagan<br />\
    <img src="styles/legend/PersebaranWisata_6_54.png" /> Jogja Bay Pirates Adventure Waterpark<br />\
    <img src="styles/legend/PersebaranWisata_6_55.png" /> Jogja Mini Zoo Exotarium<br />\
    <img src="styles/legend/PersebaranWisata_6_56.png" /> Kaliadem (Minat Khusus)<br />\
    <img src="styles/legend/PersebaranWisata_6_57.png" /> Kaliurang (Rekreatif)<br />\
    <img src="styles/legend/PersebaranWisata_6_58.png" /> Kawasan Barek<br />\
    <img src="styles/legend/PersebaranWisata_6_59.png" /> Kawasan Jalan Magelang (Belanja dan Rekreatif)<br />\
    <img src="styles/legend/PersebaranWisata_6_60.png" /> Kawasan Kalasan (Ayam Goreng)<br />\
    <img src="styles/legend/PersebaranWisata_6_61.png" /> Kawasan Lapangan Denggung (keluarga)<br />\
    <img src="styles/legend/PersebaranWisata_6_62.png" /> Kawasan Minapolis Berbah<br />\
    <img src="styles/legend/PersebaranWisata_6_63.png" /> Kawasan Minggir<br />\
    <img src="styles/legend/PersebaranWisata_6_64.png" /> Kawasan Minomartani (kuliner Bakpia)<br />\
    <img src="styles/legend/PersebaranWisata_6_65.png" /> Kawasan Moyudan<br />\
    <img src="styles/legend/PersebaranWisata_6_66.png" /> Kawasan Pendukung Monjali<br />\
    <img src="styles/legend/PersebaranWisata_6_67.png" /> Kawasan Pendukung Prambanan dan Situs Boko<br />\
    <img src="styles/legend/PersebaranWisata_6_68.png" /> Kawasan Seturan<br />\
    <img src="styles/legend/PersebaranWisata_6_69.png" /> Kawasan Seyegan dan Godean<br />\
    <img src="styles/legend/PersebaranWisata_6_70.png" /> Kawasan Stadion Maguwoharjo-Candi Gebang-Embung Tambakboyo<br />\
    <img src="styles/legend/PersebaranWisata_6_71.png" /> Kawasan Volcano Tour<br />\
    <img src="styles/legend/PersebaranWisata_6_72.png" /> Kraton Ratu Boko<br />\
    <img src="styles/legend/PersebaranWisata_6_73.png" /> Minapolis Ngemplak (Perikanan)<br />\
    <img src="styles/legend/PersebaranWisata_6_74.png" /> Monumen Jogja Kembali<br />\
    <img src="styles/legend/PersebaranWisata_6_75.png" /> Museum Affandi, Kawasan Ambarrukmo<br />\
    <img src="styles/legend/PersebaranWisata_6_76.png" /> Museum Gempa Prof. Dr. Sarwidi<br />\
    <img src="styles/legend/PersebaranWisata_6_77.png" /> Museum Geoteknologi UPN<br />\
    <img src="styles/legend/PersebaranWisata_6_78.png" /> Museum Gunungapi Merapi (Pendidikan Kegunungapian)<br />\
    <img src="styles/legend/PersebaranWisata_6_79.png" /> Museum Pendidikan Indonesia<br />\
    <img src="styles/legend/PersebaranWisata_6_80.png" /> Museum UGM<br />\
    <img src="styles/legend/PersebaranWisata_6_81.png" /> Museum Ullen Sentalu<br />\
    <img src="styles/legend/PersebaranWisata_6_82.png" /> Saluran Van Der Wijk<br />\
    <img src="styles/legend/PersebaranWisata_6_83.png" /> Sindu Kusuma Edupark<br />\
    <img src="styles/legend/PersebaranWisata_6_84.png" /> Taman Nasional Gunung Merapi<br />\
    <img src="styles/legend/PersebaranWisata_6_85.png" /> Taman Pelangi Jogja<br />\
    <img src="styles/legend/PersebaranWisata_6_86.png" /> Taman Rekreasi Anak Kaliurang<br />\
    <img src="styles/legend/PersebaranWisata_6_87.png" /> The World Landmarks Merapi Park<br />\
    <img src="styles/legend/PersebaranWisata_6_88.png" /> Turgo (Ekowisata)<br />\
    <img src="styles/legend/PersebaranWisata_6_89.png" /> Upside Down World Jogja (Permanently closed)<br />\
    <img src="styles/legend/PersebaranWisata_6_90.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_ADMINISTRASI_LN_25K_2.setVisible(true);lyr_SUNGAI_LN_25K_3.setVisible(true);lyr_JALAN_LN_25K_4.setVisible(true);lyr_PEMERINTAHAN_PT_25K_5.setVisible(true);lyr_PersebaranWisata_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ADMINISTRASIDESA_AR_25K_1,lyr_ADMINISTRASI_LN_25K_2,lyr_SUNGAI_LN_25K_3,lyr_JALAN_LN_25K_4,lyr_PEMERINTAHAN_PT_25K_5,lyr_PersebaranWisata_6];
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASI_LN_25K_2.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SUNGAI_LN_25K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LN_25K_4.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PEMERINTAHAN_PT_25K_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PersebaranWisata_6.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'fcode': 'fcode', 'namobj': 'namobj', 'metadata': 'metadata', 'srs_id': 'srs_id', 'sumber': 'sumber', 'remark': 'remark', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ADMINISTRASI_LN_25K_2.set('fieldImages', {'KARKTR': 'TextEdit', 'STSBTS': 'TextEdit', 'FCODE': 'TextEdit', 'KELAS': 'TextEdit', 'UUPP': 'TextEdit', 'LOKASI': 'TextEdit', 'REMARK': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ADMIN1': 'TextEdit', 'ADMIN2': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'WAKLD1': 'TextEdit', 'WAKLD2': 'TextEdit', 'WADKC1': 'TextEdit', 'WADKC2': 'TextEdit', 'WAKBK1': 'TextEdit', 'WAKBK2': 'TextEdit', 'WAPRO1': 'TextEdit', 'WAPRO2': 'TextEdit', 'TIPTBT': 'TextEdit', 'PJGBTS': 'TextEdit', 'KLBADM': 'TextEdit', 'TIPLOK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_SUNGAI_LN_25K_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JALAN_LN_25K_4.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_PEMERINTAHAN_PT_25K_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FGSGOV': 'TextEdit', 'LUAS': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_PersebaranWisata_6.set('fieldImages', {'ogc_fid': 'Range', 'objectid': 'TextEdit', 'fcode': 'TextEdit', 'namobj': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'sumber': 'TextEdit', 'remark': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'inline label - always visible', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ADMINISTRASI_LN_25K_2.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAI_LN_25K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_LN_25K_4.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_PEMERINTAHAN_PT_25K_5.set('fieldLabels', {'NAMOBJ': 'no label', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label - always visible', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PersebaranWisata_6.set('fieldLabels', {'ogc_fid': 'no label', 'objectid': 'no label', 'fcode': 'no label', 'namobj': 'inline label - always visible', 'metadata': 'no label', 'srs_id': 'no label', 'sumber': 'no label', 'remark': 'no label', });
lyr_PersebaranWisata_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});