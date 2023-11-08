const mongoose = require("mongoose");
const slugify = require("slugify");
const validator = require("validator");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [false, "Every product must have a name"],
    },
    shortDescription: {
      type: String,
      trim: true,
    },
    fullDescription: {
      type: String,
      trim: true,
    },

    refNumber: {
      type: String,
    },
    imageCover: {
      type: String,
      required: [false, "Please provide the image cover"],
    },
    mainImage: {
      type: String,
    },
    images: [
      {
        type: String,
      },
    ],

    totalUnits: {
      type: Number,
      default: 0,

      required: [false, "A product must have quanyity"],
    },
    remainingUnits: {
      type: Number,
      default: 0,

      required: [false, "A product must have quanyity"],
    },

    category: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Category",
      },
    ],
    suppliers: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Supplier",
      },
    ],

    pricePerUnit: {
      type: Number,
    },

    minQuantity: {
      type: Number,
      default: 1,
    },
    isOnPromo: {
      type: String,
      default: "no",
      enum: ["no", "yes"],
    },
    promoPrice: {
      type: Number,
    },
    currency: {
      type: mongoose.Schema.ObjectId,
      ref: "Currency",
    },

    keyword1: {
      type: String,
    },
    keyword2: {
      type: String,
    },
    keyword3: {
      type: String,
    },

    unit: {
      type: String,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      select: false,
    },
    createdBy: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],

    isFeaturedProduct: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },

    configuration: {
      type: String,
    },
    displayOnStore: {
      type: String,
      default: "yes",
      enum: ["yes", "no"],
    },
    expiryDate: {
      type: Date,
    },
    manufacturer: {
      type: String,
    },
    countryOfOrigin: {
      type: String,
    },
    features: {
      type: String,
    },
    benefits: {
      type: String,
    },
    sideEffects: {
      type: String,
    },
    dosage: {
      type: String,
    },
    ingredients: {
      type: String,
    },
    model: {
      type: String,
    },
    yearManufactured: {
      type: String,
    },
    brand: {
      type: String,
    },
    make: {
      type: String,
    },
    source: {
      type: String,
    },
    salesPreference: {
      type: String,
      default: "retail",
      enum: ["retail", "wholesale"],
    },
    requestQuote: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    allowSubscription: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },

    shopsAvailable: {
      type: String,
    },
    slug: {
      type: String,
    },
    type: {
      type: String,
      default: "otc",
      enum: [
        "otc",
        "supplements",
        "supplement for men",
        "supplement for women",
        "supplement for kid",
        "contraceptives",
        "energy drink",
      ],
    },
    howToUse: {
      type: String,
    },
    pricingMechanism: {
      type: String,
      default: "pricing",
      enum: ["pricing", "request-quote", "bidding"],
    },
    weightInKg: {
      type: Number,
    },
    presentWeightUnitIn: {
      type: String,
      default: "g",
      enum: ["g", "kg", "tonnes", "lb"],
    },
    isVatable: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },

    revenueMargin: {
      type: Number,
    },
    revenueMarginShouldPrevail: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },

    origins: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "City",
      },
    ],
    minimumDaysToEffectiveReview: {
      type: Number,
      default: 0,
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
    variant: [
      {
        size: { type: String | null },
        colour: { type: String | null },
        material: { type: String | null },
        style: { type: String | null },
        image: { type: String },
        images: { type: Array },
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//QUERY MIDDLEWARE
productSchema.pre(/^find/, function (next) {
  this.populate({
    path: "category",
  });

  next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
