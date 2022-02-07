export default (paths: string[], middleware: any) => {
    return (req:any ,res:any ,next:any) =>{
        if(paths.includes(req.path)){
            return next();
        }
        else{
            return middleware(req,res,next);
        }

    }
}