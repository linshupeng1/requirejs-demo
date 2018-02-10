// require.config(
// 	{	
// 		paths: {
// 			'jquery': '../lib/jquery-3.3.1',
// 			'desc': 'desc',
// 			'alertdesc': 'alertdesc'
// 		}
// 	}
// );

// require(['jquery'], function($) {
// 	$(document).on('click','#contentBtn',function(){
// 		$('#messagebox').html('You have access Jquery by using require()');

// 		// 按需请求
// 		// require(['desc'],function(desc){
// 		// 	console.log(JSON.stringify(desc));
// 		// });

// 		// 有相关依赖
// 		require(['alertdesc'],function(alertdesc){
// 			 alertdesc();
// 		});
// 	});
// });

// config 单独抽出来
require(['config'],function(){
    require(['jquery'],function ($) {
         $(document).on('click','#contentBtn',function(){
            $('#messagebox').html('You have access Jquery by using require()');
            require(['script/alertdesc'],function(alertdesc){
                alertdesc();
            });
         });
    });
});



