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
    priceLabel: {
      type: String,
    },
    weightPerUnit: {
      type: Number,
    },

    // minQuantity: {
    //   type: Number,
    //   default: 1,
    // },
    minimumQuantity: {
      type: Number,
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

    // unit: {
    //   type: String,
    // },
    unit: {
      type: String,
      default: "kg",
      enum: [
        "kg",
        "g",
        "ibs",
        "tonnes",
        "bottle",
        "sachet",
        "pack",
        "carton",
        "container",
        "dose",
        "tablet",
        "milligram",
      ],
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
    productType: {
      type: String,
      default: "single-product",
      enum: [
        "single-product",
        "multiple-but-same-product",
        "multiple-but-different-products",
      ],
    },
    stockStatus: {
      type: String,
      default: "in-stock",
      enum: ["in-stock", "out-of-stock", "sold-out"],
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
    testimonials: {
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
      enum: ["retail", "wholesale", "deal"],
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
      default: "food supplement",
      enum: [
        "beverages",
        "food supplement",
        "capsules",
        "soak",
        "lotion",
        "tonic",
        "others",
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
    marketPricingCondition: {
      type: String,
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
    sku: {
      type: String,
    },
    barcode: {
      type: String,
    },
    deliverability: {
      type: String,
    },
    pickupInfo: {
      type: String,
    },

    allowPriceFreezing: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    allowFreezedPriceLowBound: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    freezedPriceLowBound: {
      type: Number,
      default: 0,
    },
    chargesPerWeekOnFreezedPriceServiceWithoutPriceLowBound: {
      type: Number,
      default: 0,
    },
    chargesPerWeekOnFreezedPriceServiceWithPriceLowBound: {
      type: Number,
      default: 0,
    },
    freezedPriceMaximumDurationInWeeks: {
      type: Number,
      default: 0,
    },
    minimumFreezableQuantity: {
      type: Number,
    },
    datePriceWasSet: {
      type: Date,
    },
    requiredMaximumNumberOfCommunityMembers: {
      type: Number,
      default: 0,
    },
    communityTotalPurchaseableUnit: {
      type: Number,
      default: 0,
    },

    communityDeliveryPeriod: {
      type: String,
    },
    communityDeliveryType: {
      type: String,
      default: "same-location",
      enum: ["same-locatiion", "diverse-location", "hybrid"],
    },
    communityInstruction: {
      type: String,
    },
    dealCode: {
      type: String,
      default: null,
    },
    dealExpiryDate: {
      type: String,
      default: null,
    },
    dealType: {
      type: String,
      default: "public",
      enum: ["public", "private"],
    },
    showDealPricePerUnit: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    allowDealQuantityChange: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    dealStatus: {
      type: String,
      default: "inactive",
      enum: ["inactive", "active"],
    },
    dealComment: {
      type: String,
      default: null,
    },
    dealDeliveryMode: {
      type: String,
      default: "centralized-at-no-cost",
      enum: [
        "centralized-at-no-cost",
        "centralized-at-agreed-cost",
        "decentralized-at-no-cost",
        "decentralized-at-agreed-cost",
        "managed-by-each-beneficiary",
      ],
    },
    dealCentralizedDeliveryLocation: {
      type: String,
      default: null,
    },
    dealCentralizedAgreedDeliveryCost: {
      type: Number,
      default: 0,
    },
    dealDecentralizedDeliveryLocation: [
      {
        type: String,
        default: null,
      },
    ],
    dealDecentralizedAgreedDeliveryCost: {
      type: Number,
      default: 0,
    },
    showDealDeliveryCost: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    dealPaymentPreference: {
      type: String,
      default: "each-beneficiary-make-own-payment",
      enum: [
        "each-beneficiary-make-own-payment",
        "beneficiaries-make-collective-payment",
        "payment-settled-by-an-entity",
        "no-payment-is-required",
      ],
    },
    showDealPaymentDetails: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    requestDealRedemptionCode: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    isAContributoryDeal: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },

    dealOwnerEntity: {
      type: mongoose.Schema.ObjectId,
      ref: "State",
    },

    dealOwner: {
      type: mongoose.Schema.ObjectId,
      ref: "Community",
    },

    dealInitialPercentageContribution: {
      type: Number,
      default: 0,
    },
    dealMaximumInstallmentAllowed: {
      type: Number,
      default: 1,
    },
    includeGatewayChargesInPrice: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    gatewayFixedCharge: {
      type: Number,
      default: 0,
    },
    gatewayRateCharge: {
      type: Number,
      default: 0,
    },
    isACreditDeal: {
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
productSchema.pre(/^find/, function (next) {
  this.populate({
    path: "category",
  });

  next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
