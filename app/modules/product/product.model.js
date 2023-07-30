const { Schema, model } = require("mongoose");
const { status } = require("./product.constant");

const productSchema = new Schema(
  {
    image: {
      type: String,
      trim: true,
    },
    productName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "ProCat",
      required: true,
    },
    status: {
      type: String,
      enum: {
        values: status,
        message: "Status can't be {VALUE}. Either In Stock | Out of stock",
      },
      default: "In Stock",
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    keyFeatures: {
      brand: {
        type: String,
        trim: true,
      },
      model: {
        type: String,
        trim: true,
      },
      gen: {
        type: String,
        trim: true,
      },
      specification: {
        type: String,
        trim: true,
      },
      port: {
        type: String,
        trim: true,
      },
      type: {
        type: String,
        trim: true,
      },
      resolution: {
        type: String,
        trim: true,
      },
      voltage: {
        type: String,
        trim: true,
      },
    },
    individualRating: {
      type: Number,
      required: true,
      trim: true,
    },
    averageRating: {
      type: Number,
      required: true,
      trim: true,
    },
    reviews: [
      {
        username: {
          type: String,
          required: true,
          trim: true,
        },
        rating: {
          type: Number,
          required: true,
          trim: true,
        },
        reviewText: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

const Product = model("Product", productSchema);

module.exports = Product;
