import reqresCreateData from "../data/createUser";
import reqresEndPo from "../endpoint/reqresEndPo";
import expectCondition from "../expect/common_expect";

describe("Reqres Test", () => {

  it("POST - Create user", async () => {
    const body = reqresCreateData.createUser;
    const response = await reqresEndPo.createUser(body);
    expectCondition.expectStatusCode(response, 201);
  });
});
