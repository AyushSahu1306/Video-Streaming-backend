import multer from "multer";

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./public/temp")
    },
    filename:function(req,file,cb){
        // const uniqueSuffix = date.now()+'-'+ Math.round(math.random()*1E9);
        // cb(null,file.fieldname = '-' + uniqueSuffix);//file.originalname can also be used
        cb(null,file.originalname);
    },
})

export const upload = multer({
    storage,
})