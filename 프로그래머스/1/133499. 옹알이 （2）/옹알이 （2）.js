function solution(babbling) {
  const s = ["aya", "ye", "woo", "ma"];

  return babbling.filter((b) => {
    let temp = b;

    for (let n of s) {
      let regex = new RegExp(n + n);
      if (regex.test(temp)) return false;

      temp = temp.replace(new RegExp(n, 'g'), ' ');
    }

    return temp.trim() === "";
  }).length;
}
