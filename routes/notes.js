const noteRoutes = require('./noteRoutes');
const router = require('express').Router();

router.use(noteRoutes);
module.exports = router;