module.exports = function(sequelize, DataTypes){
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len: [1]
      }

    },
    customer_name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate:{
        len: [1]
      }

    },
    devoured: { 
      type: DataTypes.BOOLEAN, 
      allowNull: false, 
      defaultValue: false
    }

    
  });
  Burger.associate = function(models){

    Burger.hasOne(models.Customer, {
      foreignKey:{
        allowNull:false
      }
    });
  };
  

  return Burger;
}