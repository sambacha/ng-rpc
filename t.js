//import * as fs from "fs";
const fs = require("fs");
//const Dereferencer = require("json-refs").Dereferencer;
const Dereferencer = require("@json-schema-tools/dereferencer")

  const s = fs.readFileSync("./schema.json", "utf8");
  let schema = false;
  try {
    schema = JSON.parse(s);

    const deref = new Dereferencer(schema);
    const dereffed =  deref.resolve();
    console.log(dereffed.properties.methods.items.oneOf[0].properties.result.oneOf[0].properties.schema.title).toBe("JSONSchema");
    console.log(dereffed.properties.methods.items.oneOf[0].properties.result.oneOf[1].title).toBe("referenceObject");
    console.log(s);
    }
   catch (e) {
    console.error(`Cannot parse meta-schema. Recieved: ${s}`);
  }

 async () => {
    expect.assertions(4);
    const deref = new Dereferencer(schema);
    const dereffed = await deref.resolve();
    console.log(dereffed).toBeTruthy();
    console.log(dereffed.definitions).not.toBeDefined();
    console.log(dereffed.properties.methods.items.oneOf[0].properties.result.oneOf[0].properties.schema.title).toBe("JSONSchema");
    console.log(dereffed.properties.methods.items.oneOf[0].properties.result.oneOf[1].title).toBe("referenceObject");
  };;
