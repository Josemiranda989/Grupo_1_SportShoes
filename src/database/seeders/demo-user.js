module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        id: 1,
        fullName: "Jose Miranda",
        userName: "josemiranda989",
        country: "Argentina",
        address: "Alberdi 334",
        email: "josemiranda989@gmail.com",
        password:
          "$2a$10$XpHGYHJIr8J3Sx8ecx/BC.3IJgB4oJPvOI1kui5jRh8BtSExKM/Ky",
        avatar: "1632328081960-img.jpg",
        admin: 1,
      },
      {
        id: 2,
        fullName: "Test user",
        userName: "userTest",
        country: "Argentina",
        address: "Avenue 1234",
        email: "test@gmail.com",
        password:
          "$2a$10$fuSBl4T7QiuU3mwJejxQb.XdIGpVd9yYYqVJHL./fCpsMdHfHktpS",
        avatar: "1632511484424-img.jpg",
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
