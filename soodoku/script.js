let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const randomNum = (min, max) => {
  let num = Math.round(Math.random() * (max - min) + min);
  return num;
};
const generation1 = () => {
  const line_1 = [];
  for (let i = numbers1.length - 1; i >= 0; --i) {
    let num = randomNum(i, 0);
    line_1.push(numbers1.splice(num, 1)[0]);
  }
  numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return line_1;
};
let line_1 = generation1();
// console.log(line_1);

const generation2 = () => {
  const line_2 = [];
  const newNumbwers1 = numbers2.filter(
    (item) => item != line_1[0] && item != line_1[1] && item != line_1[2]
  );
  // console.log(newNumbwers1)
  for (let i = newNumbwers1.length - 1; i >= 3; --i) {
    let num = randomNum(i, 0);
    line_2.push(newNumbwers1.splice(num, 1)[0]);
  }
  const newNumbwers2 = numbers2.filter(
    (item) =>
      item != line_1[3] &&
      item != line_1[4] &&
      item != line_1[5] &&
      item != line_2[0] &&
      item != line_2[1] &&
      item != line_2[2]
  );
  // console.log(newNumbwers2)
  if (newNumbwers2.length === 6) {
    const newNumbwers2 = [line_1[0], line_1[1], line_1[2]];
    const newNumbwers3 = [line_1[6], line_1[7], line_1[8]];
    // console.log(newNumbwers2)
    // console.log(newNumbwers3)
    for (let i = newNumbwers3.length - 1; i >= 0; --i) {
      let num = randomNum(i, 0);
      line_2.push(newNumbwers3.splice(num, 1)[0]);
    }
    for (let i = newNumbwers2.length - 1; i >= 0; --i) {
      let num = randomNum(i, 0);
      line_2.push(newNumbwers2.splice(num, 1)[0]);
    }
    // console.log(newNumbwers2)
  } else if (newNumbwers2.length === 3) {
    const newNumbwers2 = [line_1[0], line_1[1], line_1[2]];
    const newNumbwers3 = [line_1[3], line_1[4], line_1[5]];
    // console.log(newNumbwers2)
    // console.log(newNumbwers3)
    for (let i = newNumbwers2.length - 1; i >= 0; --i) {
      let num = randomNum(i, 0);
      line_2.push(newNumbwers2.splice(num, 1)[0]);
    }
    for (let i = newNumbwers3.length - 1; i >= 0; --i) {
      let num = randomNum(i, 0);
      line_2.push(newNumbwers3.splice(num, 1)[0]);
    }
    // console.log(newNumbwers2)
  } else if (newNumbwers2.length === 5) {
    const newNumbwers1 = [line_1[6], line_1[7], line_1[8]].filter(
      (item) =>
        item != line_2[0] &&
        item != line_2[1] &&
        item != line_2[2] &&
        item != line_1[3] &&
        item != line_1[4] &&
        item != line_1[5]
    );
    // console.log(newNumbwers1)
    const newNumbwers2 = [line_1[0], line_1[1], line_1[2]];
    // console.log(newNumbwers2)
    for (let i = newNumbwers2.length - 1; i >= 2; --i) {
      let num = randomNum(i, 0);
      newNumbwers1.push(newNumbwers2[num]);
      // console.log(newNumbwers2[num])
    }
    // console.log(newNumbwers1)
    for (let i = newNumbwers1.length - 1; i >= 0; --i) {
      let num = randomNum(i, 0);
      line_2.push(newNumbwers1.splice(num, 1)[0]);
    }
    const newNumbwers3 = numbers2.filter(
      (item) =>
        item != line_2[0] &&
        item != line_2[1] &&
        item != line_2[2] &&
        item != line_2[3] &&
        item != line_2[4] &&
        item != line_2[5]
    );

    // console.log(newNumbwers3)
    for (let i = newNumbwers3.length - 1; i >= 0; --i) {
      let num = randomNum(i, 0);
      line_2.push(newNumbwers3.splice(num, 1)[0]);
    }
  } else if (newNumbwers2.length === 4) {
    const newNumbwers1 = [line_1[6], line_1[7], line_1[8]].filter(
      (item) => item != line_2[0] && item != line_2[1] && item != line_2[2]
    );
    // console.log(newNumbwers1)
    const newNumbwers2 = [line_1[0], line_1[1], line_1[2]];
    // console.log(newNumbwers2)
    for (let i = newNumbwers2.length - 1; i >= 1; --i) {
      let num = randomNum(i, 0);
      newNumbwers1.push(newNumbwers2.splice(num, 1)[0]);
    }
    // console.log(newNumbwers1)
    for (let i = newNumbwers1.length - 1; i >= 0; --i) {
      let num = randomNum(i, 0);
      line_2.push(newNumbwers1.splice(num, 1)[0]);
    }
    const newNumbwers3 = numbers2.filter(
      (item) =>
        item != line_2[0] &&
        item != line_2[1] &&
        item != line_2[2] &&
        item != line_2[3] &&
        item != line_2[4] &&
        item != line_2[5]
    );

    // console.log(newNumbwers3)
    for (let i = newNumbwers3.length - 1; i >= 0; --i) {
      let num = randomNum(i, 0);
      line_2.push(newNumbwers3.splice(num, 1)[0]);
    }
  }
  return line_2;
};
let line_2 = generation2();
// console.log(line_2);
const generation3 = () => {
  const line_3 = [];
  const newNumbwers1 = line_1.filter(
    (item) =>
      item != line_1[0] &&
      item != line_1[1] &&
      item != line_1[2] &&
      item != line_2[0] &&
      item != line_2[1] &&
      item != line_2[2]
  );
  const newNumbwers2 = line_1.filter(
    (item) =>
      item != line_1[3] &&
      item != line_1[4] &&
      item != line_1[5] &&
      item != line_2[3] &&
      item != line_2[4] &&
      item != line_2[5]
  );
  const newNumbwers3 = line_1.filter(
    (item) =>
      item != line_1[6] &&
      item != line_1[7] &&
      item != line_1[8] &&
      item != line_2[6] &&
      item != line_2[7] &&
      item != line_2[8]
  );
  // console.log(newNumbwers1)
  // console.log(newNumbwers2)
  // console.log(newNumbwers3)
  for (let i = newNumbwers1.length - 1; i >= 0; --i) {
    let num = randomNum(i, 0);
    line_3.push(newNumbwers1.splice(num, 1)[0]);
  }
  for (let i = newNumbwers2.length - 1; i >= 0; --i) {
    let num = randomNum(i, 0);
    line_3.push(newNumbwers2.splice(num, 1)[0]);
  }
  for (let i = newNumbwers3.length - 1; i >= 0; --i) {
    let num = randomNum(i, 0);
    line_3.push(newNumbwers3.splice(num, 1)[0]);
  }
  return line_3;
};
let line_3 = generation3();
// console.log(line_3);
const generation4 = () => {
  const line_4 = [];
  let count_1 = numbers2.filter(
    (item) => item != line_1[0] && item != line_2[0] && item != line_3[0]
  );
  // console.log(count_1)
  count_1 = count_1[randomNum(count_1.length - 1, 0)];
  // console.log(count_1)
  let count_2 = numbers2.filter(
    (item) =>
      item != line_1[1] &&
      item != line_2[1] &&
      item != line_3[1] &&
      item != count_1
  );
  // console.log(count_2)
  count_2 = count_2[randomNum(count_2.length - 1, 0)];
  // console.log(count_2)
  let count_3 = numbers2.filter(
    (item) =>
      item != line_1[2] &&
      item != line_2[2] &&
      item != line_3[2] &&
      item != count_1 &&
      item != count_2
  );
  // console.log(count_3)
  count_3 = count_3[randomNum(count_3.length - 1, 0)];
  // console.log(count_3)
  let count_4 = numbers2.filter(
    (item) =>
      item != line_1[3] &&
      (item != line_2[3]) & (item != line_3[3]) &&
      item != count_1 &&
      item != count_2 &&
      item != count_3
  );
  // console.log(count_4)
  count_4 = count_4[randomNum(count_4.length - 1, 0)];
  // console.log(count_4)
  let count_5 = numbers2.filter(
    (item) =>
      item != line_1[4] &&
      (item != line_2[4]) & (item != line_3[4]) &&
      item != count_1 &&
      item != count_2 &&
      item != count_3 &&
      item != count_4
  );
  // console.log(count_5)
  count_5 = count_5[randomNum(count_5.length - 1, 0)];
  // console.log(count_5)
  let count_6 = numbers2.filter(
    (item) =>
      item != line_1[5] &&
      (item != line_2[5]) & (item != line_3[5]) &&
      item != count_1 &&
      item != count_2 &&
      item != count_3 &&
      item != count_4 &&
      item != count_5
  );
  // console.log(count_6)
  count_6 = count_6[randomNum(count_6.length - 1, 0)];
  // console.log(count_6)
  let count_7 = numbers2.filter(
    (item) =>
      item != line_1[6] &&
      (item != line_2[6]) & (item != line_3[6]) &&
      item != count_1 &&
      item != count_2 &&
      item != count_3 &&
      item != count_4 &&
      item != count_5 &&
      item != count_6
  );
  // console.log(count_7)
  count_7 = count_7[randomNum(count_7.length - 1, 0)];
  // console.log(count_7)

  let count_8 = numbers2.filter(
    (item) =>
      item != line_1[7] &&
      (item != line_2[7]) & (item != line_3[7]) &&
      item != count_1 &&
      item != count_2 &&
      item != count_3 &&
      item != count_4 &&
      item != count_5 &&
      item != count_6 &&
      item != count_7
  );
  // console.log(count_8)
  count_8 = count_8[randomNum(count_8.length - 1, 0)];
  // console.log(count_8)

  let count_9 = numbers2.filter(
    (item) =>
      item != line_1[8] &&
      (item != line_2[8]) & (item != line_3[8]) &&
      item != count_1 &&
      item != count_2 &&
      item != count_3 &&
      item != count_4 &&
      item != count_5 &&
      item != count_6 &&
      item != count_7 &&
      item != count_8
  );
  // console.log(count_9)
  count_9 = count_9[randomNum(count_9.length - 1, 0)];
  // console.log(count_9)
  line_4.push(
    count_1,
    count_2,
    count_3,
    count_4,
    count_5,
    count_6,
    count_7,
    count_8,
    count_9
  );

  return line_4;
};
let line_4 = generation4();
while (line_4.includes(undefined)) {
  line_4 = generation4();
}
// console.log(line_4);

const generation5 = () => {
  const line_5 = [];
  let count1 = numbers2.filter(
    (item) =>
      item != line_4[0] &&
      item != line_4[1] &&
      item != line_4[2] &&
      item != line_1[0] &&
      item != line_2[0] &&
      item != line_3[0]
  );
  // console.log(count1)
  count1 = count1[randomNum(count1.length - 1, 0)];
  // console.log(count1)

  let count2 = numbers2.filter(
    (item) =>
      item != line_4[0] &&
      item != line_4[1] &&
      item != line_4[2] &&
      item != line_1[1] &&
      item != line_2[1] &&
      item != line_3[1] &&
      item != count1
  );
  // console.log(count2)
  count2 = count2[randomNum(count2.length - 1, 0)];
  // console.log(count2)

  let count3 = numbers2.filter(
    (item) =>
      item != line_4[0] &&
      item != line_4[1] &&
      item != line_4[2] &&
      item != line_1[2] &&
      item != line_2[2] &&
      item != line_3[2] &&
      item != count1 &&
      item != count2
  );
  // console.log(count3)
  count3 = count3[randomNum(count3.length - 1, 0)];
  // console.log(count3)

  let count4 = numbers2.filter(
    (item) =>
      item != line_4[3] &&
      item != line_4[4] &&
      item != line_4[5] &&
      item != line_1[3] &&
      item != line_2[3] &&
      item != line_3[3] &&
      item != count1 &&
      item != count2 &&
      item != count3
  );
  // console.log(count4)
  count4 = count4[randomNum(count4.length - 1, 0)];
  // console.log(count4)

  let count5 = numbers2.filter(
    (item) =>
      item != line_4[3] &&
      item != line_4[4] &&
      item != line_4[5] &&
      item != line_1[4] &&
      item != line_2[4] &&
      item != line_3[4] &&
      item != count1 &&
      item != count2 &&
      item != count3 &&
      item != count4
  );
  // console.log(count5)
  count5 = count5[randomNum(count5.length - 1, 0)];
  // console.log(count5)

  let count6 = numbers2.filter(
    (item) =>
      item != line_4[3] &&
      item != line_4[4] &&
      item != line_4[5] &&
      item != line_1[5] &&
      item != line_2[5] &&
      item != line_3[5] &&
      item != count1 &&
      item != count2 &&
      item != count3 &&
      item != count4 &&
      item != count5
  );
  // console.log(count6)
  count6 = count6[randomNum(count6.length - 1, 0)];
  // console.log(count6)

  let count7 = numbers2.filter(
    (item) =>
      item != line_4[6] &&
      item != line_4[7] &&
      item != line_4[8] &&
      item != line_1[6] &&
      item != line_2[6] &&
      item != line_3[6] &&
      item != count1 &&
      item != count2 &&
      item != count3 &&
      item != count4 &&
      item != count5 &&
      item != count6
  );
  // console.log(count7)
  count7 = count7[randomNum(count7.length - 1, 0)];
  // console.log(count7)

  let count8 = numbers2.filter(
    (item) =>
      item != line_4[6] &&
      item != line_4[7] &&
      item != line_4[8] &&
      item != line_1[7] &&
      item != line_2[7] &&
      item != line_3[7] &&
      item != count1 &&
      item != count2 &&
      item != count3 &&
      item != count4 &&
      item != count5 &&
      item != count6 &&
      item != count7
  );
  // console.log(count8)
  count8 = count8[randomNum(count8.length - 1, 0)];
  // console.log(count8)

  let count9 = numbers2.filter(
    (item) =>
      item != line_4[6] &&
      item != line_4[7] &&
      item != line_4[8] &&
      item != line_1[8] &&
      item != line_2[8] &&
      item != line_3[8] &&
      item != count1 &&
      item != count2 &&
      item != count3 &&
      item != count4 &&
      item != count5 &&
      item != count6 &&
      item != count7 &&
      item != count8
  );
  // console.log(count9)
  count9 = count9[randomNum(count9.length - 1, 0)];
  // console.log(count9)
  line_5.push(
    count1,
    count2,
    count3,
    count4,
    count5,
    count6,
    count7,
    count8,
    count9
  );
  return line_5;
};
generation5();
let line_5 = generation5();
while (line_5.includes(undefined)) {
  line_5 = generation5();
}
// console.log(line_5);

const generation6 = () => {
  const line_6 = [];
  let newNumbwers1 = numbers2.filter(
    (item) =>
      item != line_4[0] &&
      item != line_4[1] &&
      item != line_4[2] &&
      item != line_5[0] &&
      item != line_5[1] &&
      item != line_5[2]
  );
  // console.log(newNumbwers1)
  let num1_count1 = newNumbwers1.filter(
    (item) => item != line_1[0] && item != line_2[0] && item != line_3[0]
  );
  let num1_count2 = newNumbwers1.filter(
    (item) => item != line_1[1] && item != line_2[1] && item != line_3[1]
  );
  let num1_count3 = newNumbwers1.filter(
    (item) => item != line_1[2] && item != line_2[2] && item != line_3[2]
  );
  let arrCount = [num1_count1, num1_count2, num1_count3];
  // console.log(arrCount)

  for (let i = 0; i < arrCount.length; i++) {
    if (arrCount[i].length === 1) {
      // console.log(true, i)
      line_6[i] = arrCount[i][0];
      newNumbwers1 = newNumbwers1.filter((item) => item != arrCount[i][0]);
      // console.log(newNumbwers1)
      if (i === 0) {
        for (let i = newNumbwers1.length - 1; i >= 0; --i) {
          let num = randomNum(i, 0);
          line_6.push(newNumbwers1.splice(num, 1)[0]);
        }
      } else if (i === 1) {
        // for (let i = newNumbwers1.length - 1; i >= 0; --i) {
        line_6[0] = newNumbwers1[randomNum(0, 1)];
        // }
        newNumbwers1 = newNumbwers1.filter((item) => item != line_6[0]);
        line_6.push(newNumbwers1[0]);
        // console.log(newNumbwers1)
      } else if (i === 2) {
        line_6[0] = newNumbwers1[randomNum(0, 1)];
        newNumbwers1 = newNumbwers1.filter((item) => item != line_6[0]);
        line_6[1] = newNumbwers1[0];
      }
    } else if (
      arrCount[0].length === 2 &&
      arrCount[1].length === 2 &&
      arrCount[2].length === 2
    ) {
      // console.log(num1_count1,num1_count2,num1_count3)
      // console.log(newNumbwers1)
      for (let i = num1_count1.length - 1; i >= 1; --i) {
        let num = randomNum(i, 0);
        line_6.push(num1_count1.splice(num, 1)[0]);
        if (num1_count2.includes(line_6[0])) {
          line_6[1] = num1_count2.filter((item) => item != line_6[0])[0];
          line_6[2] = num1_count3.filter((item) => item != line_6[1])[0];
        }
        if (num1_count3.includes(line_6[0])) {
          line_6[2] = num1_count3.filter((item) => item != line_6[0])[0];
          line_6[1] = num1_count2.filter((item) => item != line_6[2])[0];
        }
      }
    }
  }

  let newNumbwers2 = numbers2.filter(
    (item) =>
      item != line_4[3] &&
      item != line_4[4] &&
      item != line_4[5] &&
      item != line_5[3] &&
      item != line_5[4] &&
      item != line_5[5]
  );
  // console.log(newNumbwers2);
  let num2_count1 = newNumbwers2.filter(
    (item) => item != line_1[3] && item != line_2[3] && item != line_3[3]
  );
  let num2_count2 = newNumbwers2.filter(
    (item) => item != line_1[4] && item != line_2[4] && item != line_3[4]
  );
  let num2_count3 = newNumbwers2.filter(
    (item) => item != line_1[5] && item != line_2[5] && item != line_3[5]
  );

  let arrCount2 = [num2_count1, num2_count2, num2_count3];
  // console.log(num2_count1, num2_count2, num2_count3);

  for (let i = 0; i < arrCount2.length; i++) {
    if (arrCount2[i].length === 1) {
      // console.log(i);
      line_6[i + 3] = arrCount2[i][0];
      newNumbwers2 = newNumbwers2.filter((item) => item != arrCount2[i][0]);
      // console.log(newNumbwers2);
      if (i === 0) {
        for (let i = newNumbwers2.length - 1; i >= 0; --i) {
          let num = randomNum(i, 0);
          line_6.push(newNumbwers2.splice(num, 1)[0]);
        }
      } else if (i === 1) {
        // for (let i = newNumbwers1.length - 1; i >= 0; --i) {
        line_6[3] = newNumbwers2[randomNum(0, 1)];
        // }
        newNumbwers2 = newNumbwers2.filter((item) => item != line_6[3]);
        line_6.push(newNumbwers2[0]);
        // console.log(newNumbwers1)
      } else if (i === 2) {
        line_6[3] = newNumbwers2[randomNum(0, 1)];
        newNumbwers2 = newNumbwers2.filter((item) => item != line_6[3]);
        line_6[4] = newNumbwers2[0];
      }
    } else if (
      arrCount2[0].length === 2 &&
      arrCount2[1].length === 2 &&
      arrCount2[2].length === 2
    ) {
      // console.log(num2_count1,num2_count2,num2_count3)
      // console.log(newNumbwers2)
      for (let i = num2_count1.length - 1; i >= 1; --i) {
        let num = randomNum(i, 0);
        line_6.push(num2_count1.splice(num, 1)[0]);
        if (num2_count2.includes(line_6[3])) {
          line_6[4] = num2_count2.filter((item) => item != line_6[3])[0];
          line_6[5] = num2_count3.filter((item) => item != line_6[4])[0];
        }
        if (num2_count3.includes(line_6[3])) {
          line_6[5] = num2_count3.filter((item) => item != line_6[3])[0];
          line_6[4] = num2_count2.filter((item) => item != line_6[5])[0];
        }
      }
    }
  }

  let newNumbwers3 = numbers2.filter(
    (item) =>
      item != line_4[6] &&
      item != line_4[7] &&
      item != line_4[8] &&
      item != line_5[6] &&
      item != line_5[7] &&
      item != line_5[8]
  );
  let num3_count1 = newNumbwers3.filter(
    (item) => item != line_1[6] && item != line_2[6] && item != line_3[6]
  );
  let num3_count2 = newNumbwers3.filter(
    (item) => item != line_1[7] && item != line_2[7] && item != line_3[7]
  );
  let num3_count3 = newNumbwers3.filter(
    (item) => item != line_1[8] && item != line_2[8] && item != line_3[8]
  );

  let arrCount3 = [num3_count1, num3_count2, num3_count3];
  // console.log(num3_count1, num3_count2, num3_count3);
  for (let i = 0; i < arrCount3.length; i++) {
    if (arrCount3[i].length === 1) {
      // console.log(i);
      line_6[i + 6] = arrCount3[i][0];
      newNumbwers3 = newNumbwers3.filter((item) => item != arrCount3[i][0]);
      // console.log(newNumbwers3);
      if (i === 0) {
        for (let i = newNumbwers3.length - 1; i >= 0; --i) {
          let num = randomNum(i, 0);
          line_6.push(newNumbwers3.splice(num, 1)[0]);
        }
      } else if (i === 1) {
        line_6[6] = newNumbwers3[randomNum(0, 1)];
        newNumbwers3 = newNumbwers3.filter((item) => item != line_6[6]);
        line_6.push(newNumbwers3[0]);
        // console.log(newNumbwers3)
      } else if (i === 2) {
        line_6[6] = newNumbwers3[randomNum(0, 1)];
        newNumbwers3 = newNumbwers3.filter((item) => item != line_6[6]);
        line_6[7] = newNumbwers3[0];
      }
    } else if (
      arrCount3[0].length === 2 &&
      arrCount3[1].length === 2 &&
      arrCount3[2].length === 2
    ) {
      // console.log(num3_count1, num3_count2, num3_count3);
      // console.log(newNumbwers3)
      for (let i = num3_count1.length - 1; i >= 1; --i) {
        let num = randomNum(i, 0);
        line_6.push(num3_count1.splice(num, 1)[0]);
        if (num3_count2.includes(line_6[6])) {
          line_6[7] = num3_count2.filter((item) => item != line_6[6])[0];
          line_6[8] = num3_count3.filter((item) => item != line_6[7])[0];
        }
        if (num3_count3.includes(line_6[6])) {
          line_6[8] = num3_count3.filter((item) => item != line_6[6])[0];
          line_6[7] = num3_count2.filter((item) => item != line_6[8])[0];
        }
      }
    }
  }
  // console.log(newNumbwers3);
  return line_6;
};
let line_6 = generation6();
// console.log(line_6);

const validation = (result) =>{
  let res;
  for(let i = 0; i < result.length; i++){
    // console.log(!result[i].includes(undefined) && result[i].length === 9)
    console.log(result[i])
    if(!result[i].includes(undefined) && result[i].length === 9){
      res = true;
    }else{
      res = false;
      break;
    }

  }
  return res;
}


const init = () => {
  const result = [];
  result.push(
    (line_1 = generation1()),
    (line_2 = generation2()),
    (line_3 = generation3()),
    (line_4 = generation4()),
    (line_5 = generation5()),
    (line_6 = generation6())
    );

    if(validation(result) === true){
      return result
    }else{
      return init()
    }

  };
  let resultArr = init()
  console.log(resultArr)
  
  const draw = ()=>{
    const section = document.querySelectorAll('.section')
    for(let i = 0; i<section.length; i++){
      console.log(section[i].children)
      for(let y = 0; y<9; y++){
        section[i].children[y].innerHTML =`
        <p>${resultArr[i][y]}</p>`
      }
    }
  }
  draw()