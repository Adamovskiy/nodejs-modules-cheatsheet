// ES module loader does not resolve name or extension.
import EsmLibInplaceFunction, {EsmLibInplaceFunction2} from './esmlib.mjs'

// Aliases might be used
import {default as EsmLibInplaceFunction_2, EsmLibInplaceFunction2 as EsmLibInplaceFunction2_2} from './esmlib.mjs'

// All exported declaration might be imported at once (alias is required)
import * as EsmLib from './esmlib.mjs'
const {default: EsmLibInplaceFunction_3, EsmLibInplaceFunction2: EsmLibInplaceFunction2_3} = EsmLib

// import+export syntax.
// Exported in another module declarations might be re-exported without importing in scope of the current module.
export * from './esmlib.mjs'

// node: protocol imports built-in module without override risk.
import url from 'node:url'
if (true) {
    // There's no __dirname and __filename in ES modules.
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

    // Dynamic import can be used inside code block and with variables.
    // ESM library loading is asynchronous, so Promise is resolved.
    // file: protocol might be used for absolut path to local files.
    const {default: EsmLibInplaceFunction_4, EsmLibInplaceFunction2: EsmLibInplaceFunction2_4} = await import(`file://${__dirname}/esmlib.mjs`)

    // Dynamic import works the same way for CJS modules.
    const {CjsLibInplaceFunction} = await import('./cjslib.js')
}

// Same syntax is used for loading CommonJS module. Extension resolution still doesn't work.
import {CjsLibInplaceFunction} from './cjslib.js'

// CommonJS folder packages still work with ES import.
import {CjsLibFolderFunction} from './cjsfolderlib/index.cjs'

// If path doesn't start from ".", "..", or "/" - searching in "node_modules" directories in different places.
import EsmLib1Function, {EsmLib1Function2} from 'esmlib1/esmlib.js'

// Package's ES main module may be used.
import EsmLib2Function, {EsmLib2Function2} from 'esmlib2'

// Module can exist without a package.
import EsmLib3Function, {EsmLib3Function2} from 'esmlib3/esmlib.mjs'

// Index file name and extension won't be resolved automatically - need to specify as a package's main module.
import EsmLib4Function, {EsmLib4Function2} from 'esmlib4/index.mjs'

// CJS import in ESM uses basically the same logic as in CJS, except for extension resolution.
import {CjsLib1Function} from 'cjslib1/cjslib.js'
import {CjsLib2Function} from 'cjslib2'
import {CjsLib2Function as CjsLib2Function_3} from 'cjslib2/cjslib.js'
import {CjsLib4Function} from 'cjslib4'
import {CjsLib4Function as CjsLib4Function_3} from 'cjslib4/index.js'

// data: urls are supported for javascript, wasm, and json.
import InlineFunction from 'data:text/javascript,export default function() {console.log("In InlineFunction")}';
import dataJson1 from 'data:application/json,{"data1": "value1"}' assert { type: 'json' };

// JSON module import requires type assertion.
import dataJson2 from './data.json' assert { type: 'json' }

// node_modules works for JSON as well.
import dataJson3 from 'jsonlib/data.json' assert { type: 'json' }