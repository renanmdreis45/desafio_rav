const Movement = require('../models/Movement');

exports.getMovements = async (req, res) => {
  try {
    const movements = await Movement.find();

    return res.status(200).json({
      success: true,
      count: movements.length,
      data: movements
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}

exports.addMovement = async (req, res) => {
  try {
    const { valor, data, obs, tipo } = req.body;

    const movement = await Movement.create(req.body);
  
    return res.status(201).json({
      success: true,
      data: movement
    }); 
  } catch (err) {
    if(err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
}


exports.deleteMovement = async (req, res) => {
  const id = req.params.id
  
  const movement = await Movement.findOne({ _id: id })
  try {
    if(!movement) {
      return res.status(404).json({
        success: false,
        error: 'No transaction found'
      });
    }

    await Movement.deleteOne({_id: id});

    return res.status(200).json({
      success: true,
      data: {}
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}