/*let promiseOk = Promise.resolve('ok');
let promiseError = Promise.reject('erreur');

promiseOk.then((msg) => {
    console.log('success: ', msg)
  }).catch((msg) => {
    console.log('error: ', msg)
  })
  
  promiseError.then((msg) => {
    console.log('success: ', msg)
  }).catch((msg) => {
    console.log('error: ', msg)
  })
  
  console.log('end')



-------------------------------------------

  Promise.reject('error 1').then(() => {
  console.log(1, 'nop')
}).catch((err) => {
  console.log(2, 'yep', err) // error 1
  return 3
}).then((val) => {
  console.log(3, 'yep', val) // 3
  return Promise.resolve('test')
}).then((val) => {
  console.log(4, 'yep', val) // test
  return Promise.reject('whatever')
}).catch((err) => {
  console.log(5, 'yep', err) // whatever
}).then(() => {
  console.log(6, 'yep')
  throw new Error('error 2')
  console.log(7, 'nop')
}).then(() => {
  console.log(8, 'nop')
}).catch((err) => {
  console.log(9, 'yep', err.message) // error 2
})

--------------------------------
*/

function defer(x, t = 1000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x)
        }, t)
    })
}

const addParallel = async (a, b) => {
    const promiseA = defer(a, 2000)
    const promiseB = defer(b, 3000)

    return await promiseA + await promiseB
}

const addSequencial = async (a, b) => {
    const resultA =  await defer(a, 2000)
    const resultB =  await defer(b, 3000)

    return resultA + resultB
}

const run = () => {
    console.time('parallel time')
    console.time('sequencial time')

    addSequencial(2, 3).then((result) => {
        console.log('Sequencial', result)
        console.timeEnd('sequencial time')
    })

    addParallel(4, 5).then((result) => {
        console.log('Parallel', result)
        console.timeEnd('parallel time')
    })
}

run()
/*
-------------------------------------------
*/

