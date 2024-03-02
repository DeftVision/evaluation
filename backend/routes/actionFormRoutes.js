const express = require("express");
const router = express.Router();

const { getActionForms } = require("../controllers/TeamMemberActionFormController") ;

router.get("actionforms", getActionForms);

module.exports = router;