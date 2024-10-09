const express = require('express');
const router = express.Router();
const { faker } = require('@faker-js/faker');

// http://localhost:3001/test/
router.route("/").get(async (req, res) => {

// FYI enerate fake data!
const name = faker.name.fullName();
const email = faker.internet.email();
const city = faker.location.city();

console.log(`Name: ${name}`);
console.log(`Email: ${email}`);
console.log(`City: ${city}`);

  try {
    //your API request code here
    const resp = await fetch(`https://api.clickup.com/api/v2/team`, {
      method: "GET", //POST, PATCH, PUT, DELETE
      headers: {
        Authorization: `pk_54098740_P4VBGGM99KOH9UB3CJ60R7TH99Y2ROQX`,
      },
    });

    const data = await resp.text();
    res.status(200).send(data); // Only send one response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" }); // Handle errors properly
  }
});
  
 
module.exports = router;