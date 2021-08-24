module.exports = function check(str, bracketsConfig) {
  let arrConfig=[];
  let br=[];
  
  for(let i=0;i<bracketsConfig.length;i++){
    br=String(bracketsConfig[i]).split(',');
        
    arrConfig.push(`${br[0]}${br[1]}`);
  }


  //console.log('str=', str, ' bracketsConfig=',bracketsConfig,' arr=',arrConfig);
  let len=str.length;
  for (let s=0; s<len;s++){
  for (let j=0; j<arrConfig.length;j++){
   
     str=str.replace(arrConfig[j],'');
     
  }
  }
  
//console.log('answ=',str);
 return str.length===0;
}
