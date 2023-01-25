/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import supertest from "supertest";
import env from "dotenv";

env.config();
const request = supertest(process.env.REQRES_URL);

const createUser = (body: any) => request.post(`/users`)
  .send(body);

const reqresEndPo = {
  createUser,
};

export default reqresEndPo;
