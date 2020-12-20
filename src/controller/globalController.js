import Bread from "../model/Bread";

const homeController = (req, res) => {
  res.render("screens/home");
};

const breadController = async (req, res) => {
  const breadList = await Bread.find({}, {});

  console.log(breadList);

  res.render("screens/bread", { breadList });
};

const globalController = {
  homeController,
  breadController,
};

export default globalController;
