const path = require("path");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
// const geocoder = require("../utils/geocoder");
const Doctor = require("../models/Doctor");

// @desc      Get all doctor
// @route     GET /api/v1/doctor
// @access    doctor
exports.getDoctors = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc      Get single doctor
// @route     GET /api/v1/doctor/:id
// @access    doctor
exports.getDoctor = asyncHandler(async (req, res, next) => {
  const doctor = await Doctor.find({ user: req.user.id });

  if (!doctor) {
    return next(
      new ErrorResponse(
        `doctor not found with id of ${req.params.doctorId}`,
        404
      )
    );
  }
  res.status(200).json({ success: true, data: doctor });
});

// @desc      Create new doctor
// @route     POST /api/v1/doctor
// @access    Private
exports.addDoctor = asyncHandler(async (req, res, next) => {
  // Add user to req,body
  req.body.user = req.user.id;

  // Check for published doctor
  const publicshedDoctor = await Doctor.findOne({ user: req.user.id });

  // If the user is not an admin, they can only add one doctor
  if (publicshedDoctor && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `The user with ID ${req.user.id} has already published a doctor`,
        400
      )
    );
  }
  // req.body.photo = req.body.photo;
  const doctor = await Doctor.create(req.body);
  res.status(200).json({
    success: true,
    data: doctor,
  });
});

// @desc      Update doctor
// @route     PUT /api/v1/doctor/:id
// @access    Private
exports.updateDoctor = asyncHandler(async (req, res, next) => {
  const doctor = await Doctor.findById(req.params.doctorId);

  if (!doctor) {
    return next(
      new ErrorResponse(
        `doctor not found with id of ${req.params.doctorId}`,
        404
      )
    );
  }

  // Make sure user is doctor owner
  if (doctor.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.params.id} is not authorized to update this doctor`,
        401
      )
    );
  }
  if (req.body.photo) {
    req.body.photo = req.body.photo;
  }
  doctors = await Doctor.findByIdAndUpdate(req.params.doctorId, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: doctors });
});

// @desc      Delete doctor
// @route     DELETE /api/v1/doctor/:doctorId
// @access    Private
exports.deleteDoctor = asyncHandler(async (req, res, next) => {
  const doctor = await Doctor.find({ user: req.params.doctorId });

  if (!doctor) {
    return next(
      new ErrorResponse(
        `Vendor not found with id of ${req.params.doctorId}`,
        404
      )
    );
  }

  // Make sure user is doctor owner
  if (doctor.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.params.doctorId} is not authorized to delete this doctor`,
        401
      )
    );
  }

  doctor.remove();

  res.status(200).json({ success: true, data: {} });
});

// @desc      Upload photo for product
// @route     PUT /api/v1/vendors/:vendorsId/products/:productId/photo
// @access    Private
exports.doctorPhotoUpload = asyncHandler(async (req, res, next) => {
  if (!req.files) {
    return next(new ErrorResponse(`Please upload a file`, 400));
  }

  const file = req.files.file;

  // Make sure the image is a photo
  if (!file.mimetype.startsWith("image")) {
    return next(new ErrorResponse(`Please upload an image file`, 400));
  }

  // Check filesize
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`,
        400
      )
    );
  }

  // Create custom filename
  // file.name = `photo_${file}}${path.parse(file.name).ext}`;

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse(`Problem with file upload`, 500));
    }
    const product = `${process.env.FILE_UPLOAD_PATH}/${file.name}`;

    res.status(200).json({
      success: true,
      data: product,
    });
  });
});
