const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];
const array = values.filter(tip => {
if(tip>0 || Object ) {
    return tip;
}
})

/////////////////////////////
// delete

filterByLength(["kia", "tesla", "bmw", "mercedes"]);
const filt = array.filter(tip=>{
    if(tip.length<=3){
        delete tip;
    }
    if(tip.length>=3){
        return tip;
    }
}

)
console.log(filt);
