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

***printing out all class selectors in the css file

p_class

***error logging

[ { name: 'SyntaxMatchError',
    node:
     { type: 'Declaration',
       loc: null,
       important: false,
       property: 'color',
       value: [Object] },
    loc: { source: '<unknown>', start: null, end: null },
    line: null,
    column: null,
    property: 'color',
    message: 'Invalid value for `color`',
    error:
     { SyntaxMatchError: Mismatch
         at matchSyntax (/Users/haoranwen/My Repos/CSS-Validator/validator/node_modules/css-tree/lib/lexer/Lexer.js:68:17)
         at Lexer.matchProperty (/Users/haoranwen/My Repos/CSS-Validator/validator/node_modules/css-tree/lib/lexer/Lexer.js:209:16)
         at Lexer.matchDeclaration (/Users/haoranwen/My Repos/CSS-Validator/validator/node_modules/css-tree/lib/lexer/Lexer.js:191:21)
         at Object.enter (/Users/haoranwen/My Repos/CSS-Validator/validator/index.js:50:28)
         at Object.<anonymous> (/Users/haoranwen/My Repos/CSS-Validator/validator/node_modules/css-tree/lib/walker/create.js:11:16)
         at List.walkNode (/Users/haoranwen/My Repos/CSS-Validator/validator/node_modules/css-tree/lib/walker/create.js:153:19)
         at List.each (/Users/haoranwen/My Repos/CSS-Validator/validator/node_modules/css-tree/lib/common/List.js:158:12)
         at Object.eval [as Block] (eval at createTypeIterator (/Users/haoranwen/My Repos/CSS-Validator/validator/node_modules/css-tree/lib/walker/create.js:110:12), <anonymous>:5:15)
       name: 'SyntaxMatchError',
       message: 'Mismatch\n  syntax: <color>\n   value: 43\n  --------^',
       rawMessage: 'Mismatch',
       syntax: '<color>',
       css: '43',
       mismatchOffset: 0,
       loc: [Object],
       line: undefined,
       column: undefined,
       offset: undefined } },
  { name: 'SyntaxMatchError',
    node:
     { type: 'Declaration',
       loc: null,
       important: false,
       property: 'font-size',
       value: [Object] },
    loc: { source: '<unknown>', start: null, end: null },
    line: null,
    column: null,
    property: 'font-size',
    message: 'Invalid value for `font-size`',
    error:
     { SyntaxMatchError: Mismatch
         at matchSyntax (/Users/haoranwen/My Repos/CSS-Validator/validator/node_modules/css-tree/lib/lexer/Lexer.js:68:17)
         at Lexer.matchProperty (/Users/haoranwen/My Repos/CSS-Validator/validator/node_modules/css-tree/lib/lexer/Lexer.js:209:16)
         at Lexer.matchDeclaration (/Users/haoranwen/My Repos/CSS-Validator/validator/node_modules/css-tree/lib/lexer/Lexer.js:191:21)
         at Object.enter (/Users/haoranwen/My Repos/CSS-Validator/validator/index.js:50:28)
         at Object.<anonymous> (/Users/haoranwen/My Repos/CSS-Validator/validator/node_modules/css-tree/lib/walker/create.js:11:16)
         at List.walkNode (/Users/haoranwen/My Repos/CSS-Validator/validator/node_modules/css-tree/lib/walker/create.js:153:19)
         at List.each (/Users/haoranwen/My Repos/CSS-Validator/validator/node_modules/css-tree/lib/common/List.js:158:12)
         at Object.eval [as Block] (eval at createTypeIterator (/Users/haoranwen/My Repos/CSS-Validator/validator/node_modules/css-tree/lib/walker/create.js:110:12), <anonymous>:5:15)
       name: 'SyntaxMatchError',
       message:
        'Mismatch\n  syntax: <absolute-size> | <relative-size> | <length-percentage>\n   value: blue\n  --------^',
       rawMessage: 'Mismatch',
       syntax: '<absolute-size> | <relative-size> | <length-percentage>',
       css: 'blue',
       mismatchOffset: 0,
       loc: [Object],
       line: undefined,
       column: undefined,
       offset: undefined } } ]

***my output: 

[ '\t\t<error line="1" column="1" severity="error" message="Invalid value for `color`\n\t\t<error line="1" column="1" severity="error" message="Invalid value for `font-size`',
  '\t</file>',
  '</checkstyle>' ]

***csstree-validator api output: 

<?xml version="1.0" encoding="utf-8"?>
<checkstyle version="4.3">
	<file name="style.css">
		<error line="6" column="9" severity="error" message="Invalid value for `color`" source="csstree-validator"/>
		<error line="11" column="13" severity="error" message="Invalid value for `font-size`" source="csstree-validator"/>
	</file>
</checkstyle>
[Finished in 1.2s]