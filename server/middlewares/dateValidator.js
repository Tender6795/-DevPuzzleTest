import moment from 'moment';


export default async(req,res,next)=>{
  const{day}=req.body;
  if(!day){
    return next({
      status:403,
      message:"Date is required"
    })
  }
  if(!moment(day).isValid()){
    return next({
      status:403,
      message:"Date is not valid"
    })
  }
  if((moment(day).isBefore(new Date()))){
    return next({
      status:403,
      message:"Date in the pass"
    })
  }


  next();
}