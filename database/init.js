const db = require ('../database/index.js');
const stereo_data = require ('../faq_data.js');

const seedDatabase = function (data) {
  data.forEach(function(obj) {
    let { id, deepfryd_id, features, question, answer } = obj;

    let queryString = `INSERT INTO stereos (id, deepfryd_id, features, question, answer) VALUES (${id}, '${deepfryd_id}', '${features}', '${question}', '${answer}')`;
    db.connection.query(queryString, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('good job');
    })
  })
};

seedDatabase(stereo_data.stereo_data);