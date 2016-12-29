var domTraverser = function(dataIn){
          var currentElem = $('.ringtone').next();
          // console.log($('.ringtone').next($('div'))[0].name);

        for (var i = 0; i<10; i++) {
          console.log('currentElem name', currentElem[0].name);
          var tag = currentElem[0].name;
          if (tag == 'div') {
            console.log(currentElem.text());
            i=11;
          }else{
          currentElem = currentElem.next();

          }
         
        }
}
module.exports domTraverser