const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide the name of the state"],
    },
    refNumber: {
      type: String,
      required: [false, "Please provide the state code"],
    },
    description: {
      type: String,
      trim: true,
    },
    type: {
      type: String,
      default: "own-shop",
      enum: [
        "own-shop",
        "own-warehouse",
        "affiliate-shop",
        "affiliate-warehouse",
      ],
    },
    address: {
      type: String,
    },
    region: {
      type: String,
      enum: [
        "west",
        "north",
        "south",
        "east",
        "central",
        "south-east",
        "south-west",
        "south-central",
        "south-south",
        "north-east",
        "north-west",
        "north-central",
        "north-north",
      ],
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
    contactPersonEmail: {
      type: String,
    },
    contactPhoneNumber: {
      type: String,
    },
    createdBy: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    dateCreated: {
      type: Date,
      default: Date.now,
    },
    canSellOnLine: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    canSellThroughAffiliate: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//QUERY MIDDLEWARE
locationSchema.pre(/^find/, function (next) {
  //   this.populate({
  //     path: "country",
  //   });
  //   this.populate({
  //     path: "state",
  //   });
  this.populate({
    path: "city",
  });
  this.populate({
    path: "createdBy",
  });
  next();
});

const Location = mongoose.model("Location", locationSchema);
module.exports = Location;
