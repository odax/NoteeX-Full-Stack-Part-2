const mongoose = require('mongoose');

module.exports = {
  connectTo: function(database = 'sandbox', host = 'localhost') {
    return mongoose.connect(`mongodb://odax:sandmonster22@ds139920.mlab.com:39920/noteex`);
  },
};