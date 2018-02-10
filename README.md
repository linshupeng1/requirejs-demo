# requirejs-demo
>requirejs可以实现

* 异步“加载”
* 按需加载
* 更加方便的模块依赖管理
* 更加高效的版本管理

这里实现<b>按需请求</b>、<b>相关依赖</b>、把config 单独抽出来。

main.js是主程序代码：

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
  
      
