//requirments 
const csstree = require('css-tree');
const fs = require('fs');
const path = require('path');
const syntax = csstree.lexer;

//note syntax validation code starts on line 36

//code starts here
let cssContents = fs.readFileSync("./style.css");

let myast = csstree.parse(cssContents);

//testing csstree methods starts here
console.log("***csstree myast output:"+'\n')
console.log(myast);

console.log('\n'+"***Generating CSS from myast:"+'\n');
console.log(csstree.generate(myast));

console.log('\n'+"***traverse myast"+'\n')

csstree.walk(myast, function(node){
	console.log(node.type);
});
console.log('\n'+"***printing out all class selectors in the css file"+'\n')
//traverses ast
csstree.walk(myast, {
    enter: function(node) {
        if (node.type === 'ClassSelector') {
            console.log(node.name);
        }
    }
});

//testing csstree api ends here

//syntax error validator start here

var errors = [];
var ast = csstree.parse(cssContents, {
        onParseError: function(error) {
        errors.push(error);
    }
});
	
csstree.walk(ast, {
    visit: 'Declaration',
    enter: function(node) {
        var match = syntax.matchDeclaration(node);
        var error = match.error;

        if (error) {
            var message = error.rawMessage || error.message || error;

            // ignore errors except those which make sense
            if (error.name !== 'SyntaxMatchError' &&
                error.name !== 'SyntaxReferenceError') {
                return;
            }

            if (message === 'Mismatch') {
                message = 'Invalid value for `' + node.property + '`';
            }

            errors.push({
                name: error.name,
                node: node,
                loc: error.loc || node.loc,
                line: error.line || node.loc && node.loc.start && node.loc.start.line,
                column: error.column || node.loc && node.loc.start && node.loc.start.column,
                property: node.property,
                message: message,
                error: error
            });
        }
    }
});

console.log('\n'+"***error logging"+'\n')
console.log(errors);

let output = [];

output.push(
    errors.map(function(entry) {
     return '\t\t<error ' +
            'line="' + (entry.line || 1) + '" ' +
            'column="' + (entry.column || 1) + '" ' +
            'severity="error" ' +
            'message="' + String(entry.message || entry.error).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
    }).join('\n'),
    '\t</file>'
);

output.push('</checkstyle>');
 output.join('\n');

console.log('\n'+"***my output: "+'\n')
console.log(output);


const validateFile = require('csstree-validator').validateFile;
const reporter = require('csstree-validator').reporters.checkstyle;
const csstreeValidator = require('csstree-validator');

let csstree_validator = reporter(validateFile('style.css'));
console.log('\n'+"***csstree-validator api output: "+'\n');
console.log(csstree_validator);







