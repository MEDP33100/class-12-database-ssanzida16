const mongoose = require('mongoose');
const Comment = require('./models/Comment');

mongoose.connect('mongodb+srv://ssanzida16:nipu11218@cluster0.bqunyuo.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB');
    return Comment.insertMany([
      {
        name: "Jasmine Lee",
        email: "jasmine@makeuplover.com",
        product: "GlowySkin Foundation",
        text: "This foundation blends so easily and lasts all day!",
        date: new Date("2023-06-15")
      },
      {
        name: "Carlos Rivera",
        email: "carlos@beautyhub.com",
        product: "Lip Luxe Matte",
        text: "Perfect matte lip without drying. Color stays vibrant!",
        date: new Date("2023-07-10")
      },
      {
        name: "Aisha Patel",
        email: "aisha@beautyjunkie.com",
        product: "Bold Brow Gel",
        text: "Keeps my brows in place all day. Total game changer!",
        date: new Date("2023-08-01")
      }
    ]);
  })
  .then(() => {
    console.log("🌸 Makeup comments inserted!");
    mongoose.connection.close();
  })
  .catch(err => {
    console.error("Error seeding database:", err);
  });
