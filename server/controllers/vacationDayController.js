import VocationDay from '../models/VacationDay';

export const create=async (req,res,next)=>{
  const{day}=req.body;
  let vocationDay;
  try{
    vocationDay=await VocationDay.create({day});
  }catch ({message}) {
    console.log(message);
    next({
      status: 400,
      message
    });
  }
  res.json(vocationDay);
};

export const getAll=async (req,res,next)=>{

  let vocationDays;
  try{
    vocationDays=await VocationDay.find({});
  }catch ({message}) {
    console.log(message);
    next({
      status: 400,
      message
    });
  }
  res.json(vocationDays);
};