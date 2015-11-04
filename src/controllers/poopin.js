var PoopSvc = require('../services/poop');
var texts = require('../utils/texts');

/**
 * Request Example:
 *   payload:
 *     token=78s8di2HgR3bEBME1OfdZslQ
 *     team_id=T0001
 *     team_domain=example
 *     channel_id=C2147483705
 *     channel_name=test
 *     user_id=U2147483697
 *     user_name=Steve
 *     command=/weather
 *     text=94070
*/
module.exports = function(req, res) {
  var username = req.body.user_name;

  PoopSvc.poopin(username).then(function(user) {
    res.json({
      response_type: 'in_channel',
      text: texts.poopin(user),
    });
  }).catch(function() {
    res.json({ text: 'The server pooped. Try again.', });
  });;
};
