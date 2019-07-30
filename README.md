# CSS-Validator

1. Syntax Validation
2. In browser computed style validation
3. Accessibility validation

validaotr/index.js contains the code for syntax validation 

By running jindex.js the output would be: 

***csstree myast output:

{ type: 'StyleSheet',
  loc: null,
  children:
   List {
     cursor: null,
     head: { prev: null, next: [Object], data: [Object] },
     tail: { prev: [Object], next: null, data: [Object] } } }

***Generating CSS from myast:

.p_class{font-size:64px;color:43}h1{padding-left:50%;font-size:blue}

***traverse myast

StyleSheet
Rule
SelectorList
Selector
ClassSelector
Block
Declaration
Value
Dimension
Declaration
Value
Number
Rule
SelectorList
Selector
TypeSelector
Block
Declaration
Value
Percentage
Declaration
Value
Identifier
