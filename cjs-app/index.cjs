// If path is a directory - looking for index file inside.
const {CjsLibFolderFunction} = require('./cjsfolderlib')
const {CjsLibFolderFunction: CjsLibFolderFunction_2} = require('./cjsfolderlib/index.js')

// Relative or absolute path might be used. Resolves file extension.
const {CjsLibInplaceFunction} = require('./cjslib.js')
const {CjsLibInplaceFunction: CjsLibInplaceFunction_2} = require('./cjslib')
const {CjsLibInplaceFunction: CjsLibInplaceFunction_3} = require(`${__dirname}/cjslib.js`)

// ESM library loading is asynchronous, so Promise is resolved.
import('./esmlib.mjs').then(({default: EsmLibInplaceFunction, EsmLibInplaceFunction2}) => {})

// If path doesn't start from ".", "..", or "/" - searching in "node_modules" directories in different places.
// Extension is resolved.
const {CjsLib1Function} = require('cjslib1/cjslib.js')
const {CjsLib1Function: CjsLib1Function_2} = require('cjslib1/cjslib')

// Package's CommonJS main module may be used.
const {CjsLib2Function} = require('cjslib2')
const {CjsLib2Function: CjsLib2Function_2} = require('cjslib2/cjslib')
const {CjsLib2Function: CjsLib2Function_3} = require('cjslib2/cjslib.js')

// Module can exist without a package.
const {CjsLib3Function} = require('cjslib3/cjslib')

// Directory with index file and extension resolution work in node_modules as well.
const {CjsLib4Function} = require('cjslib4')
const {CjsLib4Function: CjsLib4Function_2} = require('cjslib4/index')
const {CjsLib4Function: CjsLib4Function_3} = require('cjslib4/index.js')

// If path doesn't start from ".", "..", or "/" - searching in "node_modules" directories in different places.
import('esmlib1/esmlib.js').then(({default: EsmLib1Function, EsmLib1Function2}) => {})

// Package's ESM main module may be used, but loader does not resolve extension.
import('esmlib2').then(({default: EsmLib2Function, EsmLib2Function2}) => {})
import('esmlib2/esmlib.js').then(({default: EsmLib2Function, EsmLib2Function2}) => {})

// ES module loader does not resolve extension.
import('esmlib3/esmlib.mjs').then(({default: EsmLib3Function, EsmLib3Function2}) => {})

// ES module loader does not resolve index filename and extension.
import('esmlib4/index.mjs').then(({default: EsmLib4Function, EsmLib4Function2}) => {})

// JSON module is imported the same way as a JS one.
const dataJson1 = require('jsonlib/data.json')
const dataJson2 = require('./data.json')
