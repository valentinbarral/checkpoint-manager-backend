// timesyncs-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const { isValidObjectId, ObjectId } = require("mongoose");

module.exports = function (app) {
  const modelName = 'timesyncs';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    ownerEmail: {type: String, required:true},
    ownerId: {type: ObjectId, required:true},
    timestamp : {type:Number, required:true},
    seq : {type:Number, default:0}
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};
