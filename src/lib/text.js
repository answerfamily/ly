import React from 'react';

const BREAK = { $$BREAK: true };

/**
 * Invokes traverseForStrings for each item in elems.
 * When `BREAK` is received, break traversal immediately.
 *
 * @param {*} elem Array of elements to traverse
 * @param {Function} callback passed to traverseForStrings()
 */
function traverseElems(elems, callback) {
  const result = [];
  for (let i = 0; i < elems.length; i += 1) {
    const returnValue = traverseForStrings(elems[i], callback);
    if (returnValue === BREAK) break;
    result.push(returnValue);
  }

  return result;
}

/**
 * Traverses elem tree for strings, returns callback(string)
 * @param {*} elem
 * @param {Function} callback
 */
function traverseForStrings(elem, callback) {
  switch (true) {
    case typeof elem === 'string':
      return callback(elem);

    case elem instanceof Array:
      return traverseElems(elem, callback);

    case React.isValidElement(elem): {
      const children = React.Children.toArray(elem.props.children);
      const newChildren = traverseElems(children, callback);

      // No need to clone element if new children is identical with the original
      //
      if (
        children.length === newChildren.length &&
        children.every((child, idx) => child === newChildren[idx])
      ) {
        return elem;
      }

      return React.cloneElement(elem, {}, newChildren);
    }
    default:
      return null;
  }
}

function flatternPureStrings(tokens) {
  return tokens.every(token => typeof token === 'string')
    ? tokens.join()
    : tokens;
}

const newLinePattern = '(\r\n|\r|\n)';
// Spaces around new line pattern should be safe to trim, because we are placing <br>
// on the newLinePattern.
const newLineRegExp = RegExp(` *${newLinePattern} *`, 'g');

/**
 * Place <br> for each line break.
 * Automatically trims away leading & trailing line breaks.
 *
 * @param {*} elem React element, string, array of string & react elements
 */
export function nl2br(elem) {
  return traverseForStrings(elem, str => {
    if (!str) return str;

    const tokenized = str
      .split(newLineRegExp)
      .filter(token => token !== '') // Filter out empty strings
      .map((line, idx) =>
        line.match(newLineRegExp) ? <br key={`br${idx}`} /> : line
      );

    // If the tokenized contains only string, join into one single string.
    //
    return flatternPureStrings(tokenized);
  });
}
