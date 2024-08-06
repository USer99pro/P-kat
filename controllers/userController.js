// exports.allstudent = (req,res,next)=>{
//     res.send('kat tong gift oh')
// }

const STUDENT = require('../models/students');

exports.allstudent = async(req,res,next)=>{
    const std = await STUDENT.find();
    res.status(200).json({data:std});
       
}
exports.kat = (req,res,next)=>{
    res.status(200).json({
        data:[
            {id:2,name:"kat"},
        ]

    })
}

exports.tongs = (req,res,next)=>{
    res.status(200).json({
        data:[
            {id:3,name:"tongs"},
        ]

    })
}

exports.gifts = (req,res,next)=>{
    res.status(200).json({
        data:[
            {id:4,name:"gifts"},  
        ]

    })
}
//ตอบกลับด้วย json

exports.findStdById = async (req , res , next)=> {

try {
    const { id } = req.params;

    const std = await STUDENT.find(id)

    if(!std){
        throw new Error('ไม่พบนักศึกษารหัสนี้')
    }

    res.status(200).json({
        data: std
    })
} catch (error){
    res.status(400).json({
        error:'เกิดข้อผิดพลาด:'+ error.message
    })
}

}