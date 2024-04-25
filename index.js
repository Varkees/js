var jack="varkees";
var lio=jack.split("");
let even=[];
let odd =[];
 for (let i=0;i<jack.length;i=i+1){
    if(i%2==0){
        even.push(lio[i]);
    }else{
        odd.push(jack[i]);
    }
 }
 let one=even;
 let two =odd;
 let output=one+','+two;
  console.log(output.split(',').join(""));