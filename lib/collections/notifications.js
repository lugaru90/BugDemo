Notifications = new Mongo.Collection('notifications');

Notifications.allow({
  update: function(userId, doc, fieldNames) {
    return ownsDocument(userId, doc) && 
      fieldNames.length === 1 && fieldNames[0] === 'read';
  }
});

createReplyNotification = function(reply) {
  var entry = Entrys.findOne(reply.entryId);
  if (reply.userId !== entry.userId) {
    Notifications.insert({
      userId: entry.userId,
      postId: entry._id,
      replyId: reply._id,
      replySubmitterName: reply.author,
      read: false
    });
  }
};