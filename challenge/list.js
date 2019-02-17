import { l, cons, head, tail, isEmpty, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

// BEGIN (write your solution here)
export const has = (list, n) => {
  if (isEmpty(list) === true) {
    return false;
  } else if (n === head(list)) {
    return true;
  }
  return has(tail(list), n);
};


export const reverse = (list) => {
  let res = l();
  while(isEmpty(list) !== true) {
    res = cons(head(list), res);
    list = tail(list);
  }
  return res;
}

// export const has = (l, k) => {return isEmpty(l) != true ? head(l) == k ? true : has(tail(l), k): false}
// END


// let tempList = l(head(tail(tail(list))), head(tail(list)), head(list));
