define(function(){function a(a){return void 0===a?k+n:k+n+"/"+a}function b(a){return void 0===a?k+m:k+m+"/"+a}function c(a){return b(a)}function d(a,c){return""+b(a)+"/cubes/"+c}function e(a){return b(a)}function f(a){return b(a)}function g(a,c){var d=b(a);return d=void 0===c?d+"/extend_area":d+"/extend_area/"+c}function h(a,b,c){var e=d(a,b);return e=void 0===c?e+"/dim_groups":e+"/dim_groups/"+c}function i(a){return b(a)}function j(a){return b(a)}var k,l={},m="reports",n="datasources";return l.getWebRoot=function(){return k},l.setWebRoot=function(a){k=""===a?a:a+"/"},l.loadDataSourcesList=function(){return a()},l.deleteDataSources=function(b){return a(b)},l.getCurrentDataSourceInfo=function(b){return a(b)},l.submitDataSourceInfoAdd=function(){return a()},l.submitDataSourceInfoUpdate=function(b){return a(b)},l.loadTables=function(b){return a(b)+"/tables"},l.loadReportList=function(){return b()},l.showReport=function(a){return b(a)+"/preview_info"},l.deleteReport=function(a){return b(a)},l.addReport=function(){return b()},l.copyReport=function(a){return b(a)+"/duplicate"},l.getDimSetList=function(a){return b(a)+"/dim_config"},l.getDimDateRelationTableList=function(a,c){return""+b(a)+"/tables/"+c},l.submitDimSetInfo=function(a){return b(a)+"/dim_config"},l.loadSelectedDataSources=function(a){return b(a)+"/ds_id"},l.loadReportFactTableList=function(a){return b(a)+"/cube_tables"},l.submitCubeSetInfo=function(a){return b(a)+"/star_models"},l.getRuntimeId=function(a){return b(a)+"/runtime_model"},l.loadCubeList=function(a){return b(a)+"/cubes"},l.loadIndList=function(a,b){return d(a,b)+"/inds"},l.loadDimList=function(a,b){return d(a,b)+"/dims"},l.initJson=function(a){return b(a)+"/json"},l.initVm=function(a){return b(a)+"/vm"},l.addComp=function(a){return b(a)+"/extend_area"},l.deleteComp=function(a,b){return g(a,b)},l.saveReport=function(a){return b(a)},l.saveJsonVm=function(a){return b(a)+"/json_vm"},l.publishReport=function(a){return b(a)+"/publish"},l.previewReport=function(a){return b(a)+"/preview"},l.getPublishInfo=function(a){return b(a)+"/publish_info"},l.getCompAxis=function(a,b){return g(a,b)},l.addCompAxis=function(a,b){return g(a,b)+"/item"},l.deleteCompAxis=function(a,b,c,d){return""+g(a,b)+"/item/"+c+"/type/"+d},l.changeCompItemChartType=function(a,b,c,d){return""+g(a,b)+"/item/"+c+"/chart/"+d},l.sortingCompDataItem=function(a,b){return""+g(a,b)+"/item_sorting"},l.indDimSwitch=function(a,b,c,e,f){return""+d(a,b)+"/"+c+"-to-"+e+"/"+f},l.dimToGroup=function(a,b,c){return h(a,b,c)+"/dims"},l.sortSubDim=function(a,b,c){return""+h(a,b,c)+"/dim_sorting"},l.loadShowData=function(a,b){return d(a,b)+"show-config"},l.submitSowData=function(a,b){return d(a,b)+"show-config"},l.putAggregator=function(a,b,c){return""+d(a,b)+"/inds/"+c},l.putName=function(a,b,c,e){return""+d(a,b)+"/"+c+"s/"+e},l.deleteSubDim=function(a,b,c,d){return""+h(a,b,c)+"/level/"+d},l.deleteDimGroup=function(a,b,c){return h(a,b,c)},l.createDimGroup=function(a,b){return h(a,b)},l.submitDeriveIndsInfo=function(a,b){return d(a,b)+"/extend_measures"},l.deleteInd=function(a,b,c){return d(a,b)+"/extend_measures"+"/"+c},l.getDataFormatList=function(a,b){return g(a,b)+"/dataformat"},l.getTopnList=function(a,b){return g(a,b)+"/topn"},l.getIndColorList=function(a,b){return g(a,b)+"/colorformat"},l.getNormInfoDepict=function(a,b){return g(a,b)+"/tooltips"},l.getFilterBlankLine=function(a,b){return g(a,b)+"/othersetting"},l.getParameterDim=function(a){return f(a)+"/params"},l.getParameterDimData=function(a){return e(a)+"/params"},l.getSkinType=function(a,b){return c(a)+"/theme/"+b},l.editReportName=function(a){return i(a)+"/name/"},l.saveEditReportName=function(a,b){return j(a)+"/name/"+b},l});