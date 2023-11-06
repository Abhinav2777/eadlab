const mongoose = require("mongoose");
const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/mydb");
  const cric_schema = mongoose.Schema({
    name: String,
    role: String,
    date: { type: Date, default: Date.now },
  });
  const cricket_model = mongoose.model("Cricket", cric_schema);
  const first_cricketer = cricket_model({
    name: "MS Dhoni",
    role: "WK-Batsmen",
  });
  //first_cricketer._id = new mongoose.Types.ObjectId(7);
  await first_cricketer.save();
  console.log("Successfully saved");

  const list_all = await cricket_model.find();
  console.log(list_all);

  const list_selected = await cricket_model.findById(
    "653f9dda9a7ee0a0bb57f97d",
  );
  console.log("Find by id");
  console.log(list_selected);

  const find_update = await cricket_model.findByIdAndUpdate(
    "653f9dda9a7ee0a0bb57f97d",
    { name: "MS Dhoni (c)" },
    { new: true },
  );
  console.log("find by id and update");
  console.log(find_update);

  const find_delete = await cricket_model.findByIdAndDelete(
    "653f9efe32c2581dc3025629",
  );
  console.log(find_delete);
};
main().catch((err) => console.log(err));
