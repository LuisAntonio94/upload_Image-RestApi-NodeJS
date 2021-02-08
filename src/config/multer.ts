import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

//Configuracion del DiskStorage
const storage = multer.diskStorage({
    //destination: 'uploads',
    destination: (req, file, cb) => {
        const imageFileTypes = /jpeg|jpg|png|gif/;
        const documentFileTypes = /csv|doc|docx|pdf|ppt|pptx|xls|xlsx/;
        const compressorsFileTypes = /rar|zip|7z/;

        if(imageFileTypes.test(file.mimetype) && imageFileTypes.test(path.extname(file.originalname)))
            return cb(null, path.join('uploads','images'));
        else if(documentFileTypes.test(file.mimetype) && documentFileTypes.test(path.extname(file.originalname)))
            return cb(null, path.join('uploads','documents'));
        else if(compressorsFileTypes.test(file.mimetype) && compressorsFileTypes.test(path.extname(file.originalname)))
            return cb(null, path.join('uploads','compressors'));
    },
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname));
    }
});

//Objeto de opciones dentro de el objeto Multer que se usara
export default multer({
    storage,//storage: storage
    limits: { fileSize : 2000000 },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif|csv|doc|docx|pdf|ppt|pptx|xls|xlsx|rar|zip|7z/;
        const mimeType = fileTypes.test(file.mimetype);
        const extName = fileTypes.test(path.extname(file.originalname));

        if(mimeType && extName)
            return cb(null, true);
        return cb(null, false);
    }
});
