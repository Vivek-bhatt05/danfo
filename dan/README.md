 // const df = new dfd.DataFrame(
  //   { pig: [20, 18, 489, 675, 1776], horse: [4, 25, 281, 600, 1900] },
  //   { index: [1990, 1997, 2003, 2009, 2014] }
  // );
  // df.head().print()

  // const s = new dfd.Series([1, 3, 5, undefined, 6, 8])
  // s.print()

  // const tf = dfd.tensorflow
  // let tensor_arr = tf.tensor2d([[12, 34, 2.2, 2], [30, 30, 2.1, 7]])
  //   console.log(tensor_arr)
  //   tensor_arr.print()

  const json_data = [{ A: 0.4612, B: 4.28283, C: -1.509, D: -1.1352 },
    { A: 0.5112, B: -0.22863, C: -3.39059, D: 1.1632 },
    { A: 0.6911, B: -0.82863, C: -1.5059, D: 2.1352 },
    { A: 0.4692, B: -1.28863, C: 4.5059, D: 4.1632 }]

   const df = new dfd.DataFrame(json_data)
  //  df.print()

  // let data = new dfd.dateRange({"start":'1/1/2018',period:5, freq:'M'})
  //       console.log(data);

//   const dfd = require("danfojs")

// let data = {
//     fruits: ['pear', 'mango', "pawpaw", "mango", "bean"],
//     Count: [20, 30, 89, 12, 30],
//     Country: ["NG", "NG", "GH", "RU", "RU"]
// }


// let df = new dfd.DataFrame(data)
// let encode = new dfd.OneHotEncoder()

// encode.fit(df['fruits'])
// console.log(encode);

// let sf_enc = encode.transform(df['fruits'].values)
// console.log(sf_enc)

// let new_sf = encode.transform(["mango", "bean"])
// console.log(new_sf)
const columns = df.columns;