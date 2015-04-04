var mongoose =           require('mongoose')
    , userRoles = require('../../client/js/routingConfig').userRoles;



// module.exports = {
//     Users: mongoose.Schema;
// };

var Schema = mongoose.Schema;
var Config = {};
var UserSchema = {
                    linkedinId:   String,
                    profile:    { type: Schema.Types.Mixed },
                    username:   { type: String },
                    password:   { type: String },
                    role:       { title: String, bitMask: Number }
                  }
var userSchema = new Schema(UserSchema, {});

Config.User = mongoose.model('User', userSchema);

module.exports = Config;
