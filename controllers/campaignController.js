const Campaign = require("../models/campaignModel");

const getAllCampaignList = async (req, res) => {
  try {
    console.log("finding");
    const campaignList = await Campaign.find({});
    res.status(200).json({
      response: campaignList,
    });
  } catch (error) {
    res.status(500).json({
      message: "Request failed please check errorMessage key for more details",
      errorMessage: error.message,
    });
  }
};

const createNewCampaign = async (req, res) => {
  try {
    const newCampaign = new Campaign({
      ...req.body,
      clicks: Math.floor(Math.random() * 100),
    });
    await newCampaign.save();
    res.status(200).json({ response: newCampaign });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Request failed please check errorMessage key for more details",
      errorMessage: error.message,
    });
  }
};

const deleteCampaign = async (req, res) => {
  try {
    let campaign = await Campaign.findOne({ _id: req.body._id });
    await campaign.remove();
    res.status(200).json({ response: campaign });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Request failed please check errorMessage key for more details",
      errorMessage: error.message,
    });
  }
};

module.exports = {
  getAllCampaignList,
  createNewCampaign,
  deleteCampaign,
};
