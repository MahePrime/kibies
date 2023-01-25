import reqresCreateData from "../data/create-user";
import reqresEndPo from "../endpoint/reqres-endpoint";
import expectCondition from "../expect/common-expect";

describe("Kibitalk Test", () => {
  it("POST - Create user", async () => {
    const body = reqresCreateData.createUser;
    const response = await reqresEndPo.createUser(body);
    expectCondition.expectStatusCode(response, 201);
  });
});
