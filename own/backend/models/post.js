const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Post = new Schema({
    post_date: {
        type: String
    },
    post_author: {
        type: String
    },
    post_title: {
        type: String
    },
    post_content: {
        type: String
    },
    post_pic_link: {
        type: String
    }
    
});

module.exports = mongoose.model('Post', Post);