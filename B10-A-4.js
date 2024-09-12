//problem-1

function calculateTax(income,expense){


    if( (income && expense < 0) ||  (income < expense )){

        return"Invalid Input";
    }
    
    else{

        let remain = income - expense;
        let tax = remain * .20;
        
        return tax;
    }

}


//-----------------------------------------------------------------------//


//problem-2

function sendNotification(email){

  let verifly =   email.indexOf('@')

    if(verifly == -1){

        return 'Invalid Email';
    }

    else{

        let emailPart = email.split('@');
        let userName = emailPart[0];
        let domainName = emailPart[1];

        return(`${userName} sent you an email from ${domainName}`);
    }

}



//-----------------------------------------------------------------------//


//problem-3

function checkDigitsInName(name){

    if(typeof name != 'string'){
 
     return "Invalid Input";
    }
    for (let i = 0; i < name.length; i++) {
    
        if(!isNaN(name[i])){
          
           return true;
           
        }
    
    }
    return false;
    
 }
//------------------------------------------------------------------------------------------------------//


//problem-4

function calculateFinalScore(obj){
    
    if(typeof obj !== 'object' || (obj.testScore > 50 || obj.testScore < 0) ||( obj.schoolGrade > 30 || obj.schoolGrade < 0 ) || typeof obj.isFFamily != "boolean"){

        return 'Invalid Input';
    }
  
    else{

                
        if(obj.isFFamily == true){

            let finalScore = obj.testScore + obj.schoolGrade + 20;
            if(finalScore >= 80){

                return true;
            }
            else{
                return false;
            }
        }
        else if(obj.isFFamily == false){

            let finalScore = obj.testScore + obj.schoolGrade;
            if(finalScore >= 80){

                return true;
            }
            else{
                return false;
            }
        }
    }

}



//----------------------------------------------------------------------------------------------//


// problem-5


function waitingTime(waitingTimes , serialNumber) { 

    if( Array.isArray(waitingTimes) !== true || typeof serialNumber !== 'number' || serialNumber < waitingTimes.length){

        return "Invalid Input";
    }

    else{

        let aveg = 0;
        let sum  = 0;
        for(let i = 0; i < waitingTimes.length; i++){

            sum+= waitingTimes[i];

        }
            aveg = Math.round(sum / waitingTimes.length );
        
            serialNumber = serialNumber-1;
            let waitingremain = serialNumber - waitingTimes.length;
            return waitingremain * aveg
    }
}













 