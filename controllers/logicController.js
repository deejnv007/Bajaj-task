exports.postLogic = (req, res, next) => {
    console.log("Request:", req.body);
    
    var str = JSON.stringify(req.body);

       var alphaArray = [];
       var numArray = [];

       var finalArray=[];

       str.map((alphaNum) => {
        finalArray.push(String(alphaNum));
         })

        console.log(finalArray);

       var splitResult = finalArray.split(separator);

       var D = 0;
        
       for (; D < splitResult.length; D++) {
       if(isNaN(splitResult[D]) && typeof splitResult[D] === 'string') {
        alphaArray.push(splitResult[D]);

      } else if (Number(splitResult[D])) {
        numArray.push(splitResult[D]);
      }
    
        res.send({
            "is_success": true,
            "user_id": "Deepansu_Gupta_09081999",
            "email": "dkgupta8691@gmail.com",
            "roll_number": "0101CS191041",
            "numbers": numArray,
            "alphabets": alphaArray
        })
       }
   
}