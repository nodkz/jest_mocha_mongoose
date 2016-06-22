# Jest problem with mongoose (Object.create)

It seems, that **`Object.create`** some-how not fixed properly (https://github.com/facebook/jest/issues/933)  
Mongoose internally use `Object.create` for creating instances. Used following versions `npm@3.8.9, node@v6.2.0 jest-cli@12.1.1 mongoose@4.5.1`

**Broken jest** test: 
```
npm run test
```

Same success **mocha test**: 
```
npm run test-mocha
```

```
jest › it should create mongoose model
  - TypeError: Object prototype may only be an Object or null: undefined
        at Object.<anonymous> (node_modules/mongoose/lib/browserDocument.js:96:29)
        at Runtime._execModule (node_modules/jest-cli/src/Runtime/Runtime.js:261:17)
        at Object.<anonymous> (node_modules/mongoose/lib/document_provider.js:9:23)
        at Object.<anonymous> (node_modules/mongoose/lib/types/embedded.js:7:16)
        at Object.<anonymous> (node_modules/mongoose/lib/types/array.js:5:24)
        at Object.<anonymous> (node_modules/mongoose/lib/types/index.js:6:17)
        at Object.<anonymous> (node_modules/mongoose/lib/schema/buffer.js:8:22)
        at Object.<anonymous> (node_modules/mongoose/lib/schema/array.js:13:11)
        at Object.<anonymous> (node_modules/mongoose/lib/schema/documentarray.js:7:17)
        at Object.<anonymous> (node_modules/mongoose/lib/schema/index.js:12:25)
        at Object.<anonymous> (node_modules/mongoose/lib/schema.js:1504:32)
        at Object.<anonymous> (node_modules/mongoose/lib/document.js:8:14)
        at exports.isMongooseObject (node_modules/mongoose/lib/utils.js:508:27)
        at Object.clone (node_modules/mongoose/lib/utils.js:248:7)
        at Schema.path (node_modules/mongoose/lib/schema.js:507:24)
        at Schema.add (node_modules/mongoose/lib/schema.js:393:12)
        at new Schema (node_modules/mongoose/lib/schema.js:96:10)
        at Object.eval (jest-test.js:8:18)
        at Object.<anonymous> (node_modules/jest-jasmine2/src/jasmine-pit.js:35:32)
        at jasmine2 (node_modules/jest-jasmine2/src/index.js:253:7)
```
