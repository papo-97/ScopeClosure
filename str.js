function redundant() {
    return function (str) {
        if( typeof str===String){
            return str ;
        }
        else{
            return "no string"
        }
    };
  }
  const temp = redundant("apple");
  const temp1 = redundant("pear");
  const temp2 = redundant("");