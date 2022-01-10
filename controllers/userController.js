const { User, Thought } = require('../models');

// Aggregate function to get the number of users overall
const headCount = async () =>
  User.aggregate()
    .count('userCount')
    .then((numberOfUsers) => numberOfUsers);

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then(async (users) => {
        const userObj = {
          users,
          headCount: await headCount(),
        };
        return res.json(userObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v').populate('thoughts').populate('friends')
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json({
            user
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // Delete a user 
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No such user exists' })
          : res.json({user, message: 'User successfully deleted' }))
          //BONUS
          // : Thought.findOneAndUpdate(
          //     { user: req.params.userId },
          //     { $pull: { thoughts: req.params.thoughtId } },
          //     { new: true }
          //   )
      // ) thought.deleteMany
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  updateUser(req, res) {
    User.findOneAndUpdate({_id: req.params.userId}, {username: req.body.username, email: req.body.email}, {new:true})
     .select('-__v')
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json({
            user, message: 'The user has been updated!'
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });

  },
  addFriend(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, {$addToSet: {friends: req.params.friendId}}, {new:true, runValidators:true}, )
      .select('-__v')
      .then((user) =>{
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json({user, message: 'Friend sucessfully added 🎉'})})
        .catch((err) => {
         console.log(err);
         return res.status(500).json(err);
        })
  },
  deleteFriend(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, {$pull: {friends: req.params.friendId}}, {new:true, runValidators:true}, )
      .select('-__v')
      .then((user) =>{
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json({user, message: 'Friend sucessfully deleted 🎉'})})
        .catch((err) => {
         console.log(err);
         return res.status(500).json(err);
        })
  },
}

  // Add an assignment to a student
//   addAssignment(req, res) {
//     console.log('You are adding an assignment');
//     console.log(req.body);
//     Student.findOneAndUpdate(
//       { _id: req.params.studentId },
//       { $addToSet: { assignments: req.body } },
//       { runValidators: true, new: true }
//     )
//       .then((student) =>
//         !student
//           ? res
//               .status(404)
//               .json({ message: 'No student found with that ID :(' })
//           : res.json(student)
//       )
//       .catch((err) => res.status(500).json(err));
//   },
//   // Remove assignment from a student
//   removeAssignment(req, res) {
//     Student.findOneAndUpdate(
//       { _id: req.params.studentId },
//       { $pull: { assignment: { assignmentId: req.params.assignmentId } } },
//       { runValidators: true, new: true }
//     )
//       .then((student) =>
//         !student
//           ? res
//               .status(404)
//               .json({ message: 'No student found with that ID :(' })
//           : res.json(student)
//       )
//       .catch((err) => res.status(500).json(err));
//   },
// };
