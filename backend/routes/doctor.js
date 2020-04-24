const express = require("express");
const {
  getDoctors,
  getDoctor,
  addDoctor,
  updateDoctor,
  deleteDoctor,

  doctorPhotoUpload,
} = require("../controllers/doctor");

const Doctor = require("../models/Doctor");

const router = express.Router();

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

router.route("/photo").post(protect, doctorPhotoUpload);

router
  .route("/")
  .get(advancedResults(Doctor), getDoctors)
  .post(protect, addDoctor);

router
  .route("/:doctorId")
  .get(protect, getDoctor)
  .put(protect, updateDoctor)
  .delete(protect, deleteDoctor);

module.exports = router;
