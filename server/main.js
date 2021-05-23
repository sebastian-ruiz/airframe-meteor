import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { LinksCollection } from '/imports/api/links';

const SEED_EMAIL = 'admin@admin';
const SEED_PASSWORD = 'admin';

function insertLink({ title, url }) {
  LinksCollection.insert({title, url, createdAt: new Date()});
}

Meteor.startup(() => {
  if (!Accounts.findUserByEmail(SEED_EMAIL)) {
    // create example account
    Accounts.createUser({
      email: SEED_EMAIL,
      password: SEED_PASSWORD,
    });
    // also automatically verify the email address
    defaultAccount = Accounts.findUserByEmail(SEED_EMAIL);
    defaultAccount.emails[0].verified = true;
    Meteor.users.update(defaultAccount._id, {
      $set: {
        emails: defaultAccount.emails
      }
    });
  }

  // If the Links collection is empty, add some data.
  if (LinksCollection.find().count() === 0) {
    insertLink({
      title: 'Do the Tutorial',
      url: 'https://www.meteor.com/tutorials/react/creating-an-app'
    });

    insertLink({
      title: 'Follow the Guide',
      url: 'http://guide.meteor.com'
    });

    insertLink({
      title: 'Read the Docs',
      url: 'https://docs.meteor.com'
    });

    insertLink({
      title: 'Discussions',
      url: 'https://forums.meteor.com'
    });
  }
});
