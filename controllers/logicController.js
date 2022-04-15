exports.postLogic = (req, res, next) => {
    console.log("Request:", req.body);
    
     const data = req.body;
    if(!data || Array.isArray(data)){
        return res.status(400)
        .send({
            "is_Success": false,
            "user_id": "Deepansu_Gupta_13061998",
            "msg": "An array is required"
        })
    }

    let alphabets = [];
    let numbers = [];
    data.map((ele)=> {
        if(isNaN(ele)){
            alphabets.push(ele);
        } else{numbers.push(ele);}
    })

    res.send({
        "is_success": true,
        "user_id": "Deepansu_Gupta_13061998",
        "email": "dkgupta8691@gmail.com",
        "roll_number": "0101CS191041",
        "numbers": numbers,
        "alphabets": alphabets
    })
}
