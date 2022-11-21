module.exports = {
up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      productName: 'Adidas Test',
      price: 120,
        description: 'This is a simple test description',
        img: 'default.jpg',
        category: 'Man',
        color: 'Red',
        brand: 'Adidas',
        size: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};