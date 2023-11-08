const mongoose = require("mongoose");
const validator = require("validator");

const affiliateSchema = new mongoose.Schema(
  {
    affiliateNumber: {
      type: String,
      required: [true, "Please provide the name of a affiliate"],
    },
    refNumber: {
      type: String,
    },
    name: {
      type: String,
      required: [false, "Please provide the name of a affiliate"],
    },
    description: {
      type: String,
      trim: true,
    },
    type: {
      type: String,
      default: "local",
      enum: ["local", "foreign"],
    },
    logo: {
      type: String,
      required: [false, "Please provide the logo of this affiliate"],
    },
    address: {
      type: String,
    },
    country: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Country",
      },
    ],
    state: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "State",
      },
    ],
    city: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "City",
      },
    ],

    contactPerson: {
      type: String,
    },
    contactPhoneNumber: {
      type: String,
    },
    contactPersonEmail: {
      type: String,
    },
  },

  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//QUERY MIDDLEWARE
affiliateSchema.pre(/^find/, function (next) {
  this.populate({
    path: "city",
  });
  //   this.populate({
  //     path: "product",
  //   });

  next();
});

const Affiliate = mongoose.model("Affiliate", affiliateSchema);
module.exports = Affiliate;
