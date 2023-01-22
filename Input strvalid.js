var _pj;

function _pj_snippets(container) {
  function in_es6(left, right) {
    if (right instanceof Array || typeof right === "string") {
      return right.indexOf(left) > -1;
    } else {
      if (right instanceof Map || right instanceof Set || right instanceof WeakMap || right instanceof WeakSet) {
        return right.has(left);
      } else {
        return left in right;
      }
    }
  }

  container["in_es6"] = in_es6;
  return container;
}

_pj = {};

_pj_snippets(_pj);

class Solution {
  isValid(s) {
    var boo, popped_element, stack;
    stack = [];
    boo = true;

    for (var ch, _pj_c = 0, _pj_a = s, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
      ch = _pj_a[_pj_c];

      if (_pj.in_es6(ch, "([{")) {
        stack.append(ch);
      } else {
        if (_pj.in_es6(ch, ")]}")) {
          try {
            popped_element = stack.pop();
          } catch (e) {
            boo = false;
            break;
          }

          if (popped_element === "(" && ch === ")") {} else {
            if (popped_element === "{" && ch === "}") {} else {
              if (popped_element === "[" && ch === "]") {} else {
                boo = false;
                break;
              }
            }
          }
        }
      }
    }

    if (stack.length === 0) {
      return boo;
    } else {
      return false;
    }
  }

}
