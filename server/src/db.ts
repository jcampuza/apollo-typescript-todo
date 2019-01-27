import * as Knex from "knex";
const config = require("../knexfile");
const env = process.env.NODE_ENV || "development";

export const knex = Knex(config[env]);
