const multer = require("multer");
const sharp = require("sharp");
const TargetContribution = require("./../models/targetContributionsModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const catchAsync = require("./../utils/catchAsync");
const factory = require("./handlerFactory");

// const multerStorage = multer.memoryStorage();

// //create a multer filter
// const multerFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith("image")) {
//     cb(null, true);
//   } else {
//     cb(
//       new AppError("this file is not an image, Please upload only images", 404),
//       false
//     );
//   }
// };

// //const upload = multer({ dest: "public/images/users" });

// const upload = multer({
//   storage: multerStorage,
//   fileFilter: multerFilter,
// });

// //when uploading a single file
// exports.uploadCategoryImage = upload.single("image");

// exports.resizeCategoryImage = catchAsync(async (req, res, next) => {
//   if (!req.file) return next();

//   //1. start by processing the cover image
//   req.body.image = `${req.body.name.split(" ")[0]}-${
//     req.body.createdBy
//   }-${Date.now()}-cover.jpeg`;

//   await sharp(req.file.buffer)
//     .resize(2000, 1333)
//     .toFormat("jpeg")
//     .jpeg({ quality: 90 })
//     .toFile(`public/images/carts/${req.body.image}`);

//   next();
// });

//the handler for getting all TargetContributions
exports.getAllTargetContributions = factory.getAll(TargetContribution);

//the handler to create TargetContribution
exports.createTargetContribution = factory.createOne(TargetContribution);

//the handler to get one TargetContribution
exports.getTargetContribution = factory.getOne(TargetContribution);

//the handler to update an TargetContribution
exports.updateTargetContribution = factory.updateOne(TargetContribution);

//the handler to delete an TargetContribution
exports.deleteTargetContribution = factory.deleteOne(TargetContribution);
