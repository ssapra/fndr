var mongoose =           require('mongoose')
    , userRoles = require('../../client/js/routingConfig').userRoles;



// module.exports = {
//     Users: mongoose.Schema;
// };

var Schema = mongoose.Schema;
var Config = {};
var UserSchema = {
                    linkedinId:   { type: String, unique: true}, // make sure that there is no duplicate;
                    displayName: String,
                    profile:    { type: Schema.Types.Mixed },
                    role:       { title: String, bitMask: Number }
                  };

var userSchema = new Schema(UserSchema, {});

Config.User = mongoose.model('User', userSchema);

module.exports = Config;
