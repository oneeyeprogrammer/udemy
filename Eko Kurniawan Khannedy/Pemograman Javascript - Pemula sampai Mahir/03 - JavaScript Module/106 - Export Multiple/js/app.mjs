import {
    company,
    Company
} from "./module/module.mjs";

const nameCompany = company

const oneEyeCompany = new Company(nameCompany, `ReactJs Developer`, 1)
console.log(oneEyeCompany)