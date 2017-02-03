function domTraverser(dataIn){
          var currentElem = dataIn.next();
          // console.log($('.ringtone').next($('div'))[0].name);
        for (var i = 0; i<10; i++) {
          // console.log('currentElem name', currentElem[0].name);
          var tag = currentElem[0].name;
          if (tag == 'div') {
            // console.log(currentElem.text());
            i=11;
            return currentElem.html();
          }else{
          currentElem = currentElem.next();

        }//else

      }//for loop
}//domTraverser
module.exports = domTraverser;
