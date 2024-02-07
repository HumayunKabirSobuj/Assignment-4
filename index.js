
//first problem

function calculateMoney(ticketSale){
    
    if(typeof ticketSale !== 'number'){
        return 'Provide Number value'
    }
    else if(ticketSale <0){
        return "Invalid Number"
    }
    else{
        return (ticketSale*120 -(500+(8*50)));
    }
}



//second problem

function checkName(name){

    const inputName=name.toLowerCase();
    const indicator=['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    const lastCharacter=inputName.charAt(inputName.length-1);
    if(indicator.includes(lastCharacter)){
        return "Good Name"
    }
    else{
        return "Bad Name"
    }
}





//third problem

function deleteInvalids(array){
    if(Array.isArray(array) !== true){
        return "Invalid Array"
    }
    let finalArray=[];
    for(const item of array){
        if(typeof item === 'number' && !isNaN(item)){
            finalArray.push(item);
        }
    }
    return finalArray;
}



//fifth

