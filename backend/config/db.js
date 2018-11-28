var mongoose = require('mongoose');

var mongodb = 'mongodb://admin:sachin123@ds235411.mlab.com:35411/traffic_assistant';

mongoose.connect(mongodb);

mongoose.Promise = global.Promise;

var mongoose = require('mongoose');

var Users = mongoose.model('Users',{
    name : {
        type: String,
        default: 'Name'
    },
    email :{
        type : String,
        required : true,
        unique : true
    },
    type : {
        type : String
    },
    city : {
        type: String,
        default : 'City'
    },
    country : {
        type: String,
        default : 'Country'
    },
    company: {
        type: String,
        default : 'Company'
    },
    token: {
        type: String,
    },
    provider: {
        type: String,
        default : 'provider'
    },
    provider_ID: {
        type: String,
        default : 'Provider_ID'
    },
    gender: {
        type: String,
        default : 'Gender'
    },
    about: {
        type: String,
        default : 'About'
    }
});
module.exports = {Users};