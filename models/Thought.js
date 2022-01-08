const { Schema, Types } = require('mongoose');
const reactionsSchema = require('./Reaction');

const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      require: true,
      max_length: 280,
      min_length: 1
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionsSchema]
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Thought = model('thought', thoughtsSchema);

module.exports = Thought;
