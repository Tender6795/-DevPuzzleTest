export default  function (err,req,res,next) {
  console.log(err);
  let {status=500,message="Server Error"}=err;
  return res
    .status(status)
    .json({message});
};