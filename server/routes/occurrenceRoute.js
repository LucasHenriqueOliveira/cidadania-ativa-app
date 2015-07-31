var models = require('../models'),
    express = require('express'),
    router = express.Router();

var occurrenceController = require('../controllers/occurrenceController')(models);

router.route('/')
    .post(occurrenceController.post)
    .get(occurrenceController.get);

router.route('/:occurrence_id')
    .put(occurrenceController.put)
    .delete(occurrenceController.remove)
    .get(occurrenceController.getOccurrence);

module.exports = router;
