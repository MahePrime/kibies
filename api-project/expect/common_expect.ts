/* eslint-disable @typescript-eslint/no-explicit-any */
import { expect, use } from "chai";
import chaiJsonSchema from "chai-json-schema";

use(chaiJsonSchema);

function expectStatusCode(response: { status: any; }, expectedStatus: any) {
  expect(response.status).to.equal(expectedStatus);
}

function expectSchema(response: { body: any; }, expectedSchema: any) {
  expect(response.body).to.be.jsonSchema(expectedSchema);
}

function expectValue(response: any, expectedValue: any) {
  expect(response).to.equal(expectedValue);
}

function expectDataPaymentMethod(response: any, expectedData: any) {
  expect(response.body.data[0].payment_method.name).to.equal(expectedData);
}

const expectedResponse = {
  expectStatusCode,
  expectSchema,
  expectValue,
  expectDataPaymentMethod
};

export default expectedResponse;
