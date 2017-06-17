// The simplest expressions are
//	   a literal value (such as a string or number)
//	   a variable
//	   a built-in value (true, false, null, undefined, NaN, or Infinity)
//	   an invocation expression preceded by new
//	   a refinement expression preceded by delete
//	   an expression wrapped in parentheses
//	   an expression preceded by a prefix operator
//	   an expression followed by:
//	   	   • An infix operator and another expression
//	   	   • The ? ternary operator followed by another expression, then by :, and then by yet another expression
//	   	   • An invocation
//	   	   • A refinement
// The ? ternary operator takes three operands. 
// If the first operand is truthy, it produces the value of the second operand. 
// But if the first operand is falsy, it produces the value of the third operand.


// The operators at the top of the operator precedence list in Table 2-1 have higher precedence.
// They bind the tightest. The operators at the bottom have the lowest precedence.
// Parentheses can be used to alter the normal precedence, so:
// 2 + 3 * 5 === 17
// (2 + 3) * 5 === 25


// Table 2-1. Operator precedence
//	   . [] ( ) Refinement and invocation
//	   delete new typeof + - ! Unary operators
//	   * / % Multiplication, division, modulo
//	   + - Addition/concatenation, subtraction
//	   >= <= > < Inequality
//	   === !== Equality
//	   && Logical and
//	   || Logical or
//	   ?: Ternary

// The values produced by typeof are 'number', 'string', 'boolean', 'undefined', 'function', and 'object'. 
// If the operand is an array or null, then the result is 'object', which is wrong. 

// If the operand of ! is truthy, it produces false. Otherwise, it produces true.

// The + operator adds or concatenates. If youwant it to add, make sure both operands are numbers.

// The / operator can produce a noninteger result even if both operands are integers.

// The && operator produces the value of its first operand if the first operand is falsy.
// Otherwise, it produces the value of the second operand.

// The || operator produces the value of its first operand if the first operand is truthy.
// Otherwise, it produces the value of the second operand.


// Invocation causes the execution of a function value. 
// The invocation operator is a pair of parentheses that follow the function value. 
// The parentheses can contain arguments that will be delivered to the function. 

// A refinement is used to specify a property or element of an object or array.


