if (Meteor.isServer) {
  var Documents = new Mongo.Collection('documents');
  
  Meteor.publish('documents', function() {
    return Documents.find();
  });
}
