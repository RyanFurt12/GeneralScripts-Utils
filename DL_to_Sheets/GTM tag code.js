<script>
  (function(){
    function fetchToSheets(e){
      if(!e.event) return;
      var gscriptUrl = '{{gScript URL -- DL to Sheets}}';
      var body = {
        event: e.event,
        data: e
      }
      var fetchOptions = {
        method: 'POST',
        body: JSON.stringify(body)
      }
      
      fetch(gscriptUrl, fetchOptions)
    }

    window.dataLayer = window.dataLayer || [];
    dataLayer.forEach(function(e){ fetchToSheets(e) } )

    var original_push = window.dataLayer.push;
    var new_push = function(){

      if (arguments && typeof(arguments[0]) == 'object' && arguments[0].event){
        fetchToSheets(arguments[0])
      }
      original_push.apply(this, arguments);
    }
    
    window.dataLayer.push = new_push;
    console.log("%cDL to Sheets", "font-size: 24px; font-weight: bold; color: #0b7d28; text-shadow: -1px 1px 3px black", "configuração concluida e já executando");
  })();
</script>