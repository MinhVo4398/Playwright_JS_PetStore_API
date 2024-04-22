const { test, expect, request } = require("@playwright/test");
const data = require("../../../data/pet/add_pet.json");
import {
  CommonFunctions,
  getRandomNumber,
} from "../../../utils/commonFunction.js";

const base_url = "https://petstore.swagger.io/v2";

test.describe("API pet store", () => {
  test("POST 200 - Create pet successfully", async ({ request }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
      console.log(`${testInfo.title} did not run as expected!`);
    }

    data.id = getRandomNumber();
    data.name = "siba";
    const response = await request.post(`${base_url}/pet`, {
      data: data,
    });
    expect(response.status()).toBe(200);
    console.log(await response.json());
  });

  test("POST 500 - Create invalid pet store", async ({ request }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
      console.log(`${testInfo.title} did not run as expected!`);
    }

    data.id = "aaaaa";
    const response = await request.post(`${base_url}/pet`, {
      data: data,
    });
    expect(response.status()).toBe(500);
    const json = await response.json();
    expect(json.message).toBe("something bad happened");
    console.log(await response.json());
  });

  test("GET 405 - Wrong method create pet store", async ({
    request,
  }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
      console.log(`${testInfo.title} did not run as expected!`);
    }

    data.id = getRandomNumber();
    const response = await request.get(`${base_url}/pet`, {
        data: data,
      });
    expect(response.status()).toBe(405);

  });
});
