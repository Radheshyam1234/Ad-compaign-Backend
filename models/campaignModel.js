const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    budget: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    radius: {
      type: Number,
    },
    platform: {
      type: String,
      required: true,
    },
    clicks: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Campaign = mongoose.model("Campaign", CampaignSchema);

module.exports = Campaign;
