// Rudimentary environment configuration
module.exports = {
  url: process.env.SITE_URL || "https://testing.sendgrid.com/login",
  user: process.env.SITE_USER || "nlvx_automated_test_user_paid_26",
  pass: process.env.SITE_PASSWORD || "T3stPasS"
};
