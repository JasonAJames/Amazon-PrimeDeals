var express = require('express');
var router = express.Router();

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Amazon Prime Deals',
  CompanyName : "Amazon Prime Deals",
  HeaderLink1 : "Daily Deals",
  HeaderLink2 : "Coupons",
  HeaderLink3 : "Give-Aways",
  HeaderLink4 : "Business Deals",
  welcome : "Welcome to",
  pageheading : "Amazon Prime Deals",
  pagedescription1 : `Did you know Amazon is full of surprises?`,
  pagedescription2 : `We'll show you the hidden, unknown, and undisclosed deals...`,
  pagedescription3 : `So you can get the best out of your Amazon Shopping Experience`,
  prodheading1 : "Shop",
  prodheading2 : "Amazon",
  prodheading3 : "Hidden Deals",
prodheading5 : "Amazon's 'Top Ranked' Daily Deals" });
});
router.get('/coupons', function(req, res, next) {
  res.render('coupons', { title: 'Amazon Coupons',
  CompanyName : "Amazon Prime Deals",
  HeaderLink1 : "Daily Deals",
  HeaderLink2 : "Coupons",
  HeaderLink3 : "Give-Aways",
  HeaderLink4 : "Business Deals",
  welcome : "Welcome to",
  pageheading : "Amazon Prime Deals",
  pagedescription1 : `Did you know Amazon is full of surprises?`,
  pagedescription2 : `We'll show you the hidden, unknown, and undisclosed deals...`,
  pagedescription3 : `So you can get the best out of your Amazon Shopping Experience`,
  prodheading1 : "Shop",
  prodheading2 : "Amazon",
  prodheading3 : "Hidden Deals",
  prodheading4 : "",
  prodheading5 : "Save with Amazon Coupons Today!"
 });
});
router.get('/giveaways', function(req, res, next) {
  res.render('giveaways', { title: 'Amazon Giveaways',
  CompanyName : "Amazon Prime Deals",
  HeaderLink1 : "Daily Deals",
  HeaderLink2 : "Coupons",
  HeaderLink3 : "Give-Aways",
  HeaderLink4 : "Business Deals",
  welcome : "Welcome to",
  pageheading : "Amazon Prime Deals",
  pagedescription1 : `Did you know Amazon is full of surprises?`,
  pagedescription2 : `We'll show you the hidden, unknown, and undisclosed deals...`,
  pagedescription3 : `So you can get the best out of your Amazon Shopping Experience`,
  prodheading1 : "Shop",
  prodheading2 : "Amazon",
  prodheading3 : "Hidden Deals"
 });
});
router.get('/businessdeals', function(req, res, next) {
  res.render('businessdeals', { title: 'Amazon Business Deals',
  CompanyName : "Amazon Prime Deals",
  HeaderLink1 : "Daily Deals",
  HeaderLink2 : "Coupons",
  HeaderLink3 : "Give-Aways",
  HeaderLink4 : "Business Deals",
  welcome : "Welcome to",
  pageheading : "Amazon Prime Deals",
  pagedescription1 : `Did you know Amazon is full of surprises?`,
  pagedescription2 : `We'll show you the hidden, unknown, and undisclosed deals...`,
  pagedescription3 : `So you can get the best out of your Amazon Shopping Experience`,
  prodheading1 : "Shop",
  prodheading2 : "Amazon",
  prodheading3 : "Hidden Deals"
 });
});

module.exports = router;
