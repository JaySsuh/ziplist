const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

function ziplist(first, second) {
  const List = [];
  for (let i = 0; i < first.length; i++) {
    List.push(first[i], second[i]);
  }
  return List;
}
console.log(ziplist(list1, list2));

const ziplistunder = (first, second) => _.zip(first, second);
console.log(ziplistunder(list1, list2));
