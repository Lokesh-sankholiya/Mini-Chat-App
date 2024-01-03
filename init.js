const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("Connation Successful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://localhost:27017/Insta");
}

let allChats = [
  {
    from: "tony",
    to: "hulk",
    msg: "finish thor",
    created_at: new Date(),
  },
  {
    from: "natasha",
    to: "hulk",
    msg: "love you bruces",
    created_at: new Date(),
  },
  {
    from: "tony",
    to: "steve",
    msg: "this shiled is not yours",
    created_at: new Date(),
  },
  {
    from: "tony",
    to: "peter",
    msg: "ohhh dekho to 64km/h ki speedd se car ko rok diya",
    created_at: new Date(),
  },
  {
    from: "thor",
    to: "black",
    msg: "bring me thonse",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
