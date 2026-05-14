// JavaScript Identifier Rules Examples

// 1. Must start with a letter (a-z, A-Z), underscore (_), or dollar sign ($)
let name = "valid";      // starts with letter
let _name = "valid";     // starts with underscore
let $name = "valid";     // starts with dollar sign
// let 1name = "invalid"; // ERROR: starts with digit

// 2. After first character: letters, digits, underscores, or dollar signs
let name1 = "valid";     // contains digit after first char
let first_name = "valid"; // contains underscore
let name$ = "valid";     // contains dollar sign
// let name@ = "invalid"; // ERROR: @ is not allowed

// 3. Cannot start with a digit
// let 123abc = "invalid"; // ERROR
let abc123 = "valid";    // digit is okay after first position

// 4. Case-sensitive
let myVar = "lowercase m";
let MyVar = "uppercase M"; // different identifier from myVar
let myvar = "all lowercase"; // different from both above

// 5. Cannot use reserved words/keywords
// let let = "invalid";   // ERROR: reserved word
// let const = "invalid"; // ERROR
// let function = "invalid"; // ERROR
let myLet = "valid";     // contains reserved word but not exactly

// 6. No spaces allowed
let firstName = "valid"; // camelCase, no spaces
// let first name = "invalid"; // ERROR: space not allowed

// 7. No special characters except _ and $
// let my-name = "invalid"; // ERROR: hyphen not allowed
// let my@name = "invalid"; // ERROR
let my_name = "valid";   // underscore is allowed
let my$name = "valid";   // dollar sign is allowed

// 8. Unicode letters are allowed
let nação = "valid";     // Portuguese
let 名字 = "valid";      // Chinese
let имя = "valid";       // Russian
let 🚀 = "valid but bad"; // Emoji (avoid!)

// 9. Length is not limited
let thisIsAVeryLongIdentifierNameThatIsTechnicallyValid = "valid";
let a = "valid but short";

// 10. $_ is valid by itself
let _ = "valid";         // single underscore
let $ = "valid";         // single dollar sign
let __ = "valid";        // double underscore (often used for private)
let $$ = "valid";        // double dollar sign
