const express = require("express");
const {
  getAllCampaignList,
  createNewCampaign,
  deleteCampaign,
} = require("../controllers/campaignController");

const router = express.Router();

router
  .route("/")
  .get(getAllCampaignList)
  .post(createNewCampaign)
  .delete(deleteCampaign);

module.exports = router;
