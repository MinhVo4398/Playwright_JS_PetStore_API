const { test, expect, request } = require("@playwright/test");
const data = require("../../../data/pet/add_pet.json");
import {CommonFunctions, getRandomNumber}   from '../../../utils/commonFunction.js'

const base_url = "https://petstore.swagger.io/v2";

test.describe("API pet store", () => {
   
  test("POST 200 - Create pet successfully", async ({ request }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
        console.log(`${testInfo.title} did not run as expected!`);
    }
   
    data.id = getRandomNumber();
    const response = await request.post(`${base_url}/pet`, {
      data: data,
    });
    expect(response.status()).toBe(200);
    console.log(await response.json());
  });
});
