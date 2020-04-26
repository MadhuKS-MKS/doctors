const mongoose = require("mongoose");

const DoctorsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      maxlength: [50, "Name can not be more than 50 characters"],
    },

    image: {
      type: String,
      required: [true, "Please add a image"],
    },
    duration: {
      type: String,
      required: [true, "Please add a image"],
    },
    phone: {
      type: String,
      maxlength: [20, "Phone number can not be longer than 20 characters"],
    },
    email: {
      type: String,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    experience: {
      type: String,
      required: [true, "Please add Address"],
    },
    fees: {
      type: String,
      required: [true, "Please add Date of Birth"],
    },
    specialization: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
      required: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// // Cascade delete order when a public is deleted
// PublicSchema.pre("remove", async function (next) {
//   console.log(`Order being removed from list ${this._id}`);
//   await this.model("Order").deleteMany({ public: this._id });
//   next();
// });

// Reverse populate with virtuals
// PublicSchema.virtual("order", {
//   ref: "Orderlist",
//   localField: "_id",
//   foreignField: "public",
//   justOne: false,
// });

module.exports = mongoose.model("Doctor", DoctorsSchema);
