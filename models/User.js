const {
  Schema,
  model
} = require('mongoose');
const thoughtsSchema = require('./Thought');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    thoughts: {
      type: String,
      required: true,
      max_length: 50,
    },
    thoughts: [thoughtsSchema],
  },
  // friends: }
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;