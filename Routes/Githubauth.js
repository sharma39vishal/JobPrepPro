const { default: axios } = require("axios");
const router = require("express").Router();
const path = require("path");

// Declare the callback route
router.get('/github/callback', (req, res) => {

    // The req.query object has the query params that were sent to this route.
    const requestToken = req.query.code
    
    axios({
      method: 'post',
      url: `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_OAUTH_CLIENT_ID}&client_secret=${process.env.GITHUB_OAUTH_CLIENT_SECRET}&code=${requestToken}`,
      // Set the content type header, so that we get the response in JSON
      headers: {
           accept: 'application/json'
      }
    }).then((response) => {
      access_token = response.data.access_token
      res.redirect('/auth/success');
    })
  })
  
  router.get('/success', function(req, res) {
    axios({
      method: 'get',
      url: `https://api.github.com/user`,
      headers: {
        Authorization: 'token ' + access_token
      }
    }).then((response) => {
        console.log(response)
    //   res.render('/',{ userData: response.data });
        // res.redirect("/")
    })
  });

module.exports = router;