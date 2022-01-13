const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let productOverviewSchema = mongoose.Schema({
  id:Number,
  campus: String,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
  created_at: Date,
  updated_at: Date
});

let Repo = mongoose.model('productOverview', productOverviewSchema);