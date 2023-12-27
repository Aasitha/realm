var test={zigbeeBridgeId : "daliMaster", $uniqueId : "uniqueId"}
var count=0;
var st=""
Object.keys(test).forEach((field)=>{
    st+=`${field} == $${test[field]} AND `
    count+=1;
})
console.log(st)
console.log(...Object.values(test))