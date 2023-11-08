const mongoose = require("mongoose");
const validator = require("validator");

const inventorySchema = new mongoose.Schema(
  {
    product: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
      },
    ],
    onboardProduct: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "OnboardProduct",
      },
    ],
    location: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Location",
      },
    ],
    batchNumber: {
      type: String,
    },
    totalQuantity: {
      type: Number,
    },
    remainingQuantity: {
      type: Number,
    },
    unit: {
      type: String,
    },
    totalCost: {
      type: Number,
    },
    sku: {
      type: String,
    },
    barcode: {
      type: String,
    },
    costPerItem: {
      type: Number,
    },
    deliveryCost: {
      type: Number,
    },
    source: {
      type: mongoose.Schema.ObjectId,
      ref: "Location",
    },

    hasVariant: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    hasSizeVariant: { type: Boolean, default: false, enum: [false, true] },
    hasColourVariant: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    hasMaterialVariant: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    hasStyleVariant: { type: Boolean, default: false, enum: [false, true] },

    variant: {
      size: { type: String | null },
      colour: { type: String | null },
      material: { type: String | null },
      style: { type: String | null },
    },

    dateOnBoarded: {
      type: Date,
    },
    dateCreated: {
      type: Date,
      default: Date.now,
    },
    createdBy: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObjects: { virtuals: true },
  }
);

//QUERY MIDDLEWARE
inventorySchema.pre(/^find/, function (next) {
  this.populate({
    path: "onboardProduct",
  });
  this.populate({
    path: "location",
  });
  //   this.populate({
  //     path: "onboardProduct",
  //   });
  next();
});

const Inventory = mongoose.model("Inventory", inventorySchema);
module.exports = Inventory;
