const PromiseComp = () => {
    const  boolean = true;

const prm = new Promise((resolve, reject) => {
    // boolean ? resolve('Success') : reject('Faild');
    setTimeout(() => {
        resolve('Suceess');
    },2000)
    // reject("Fails");
})

// prm.then(res => {
//     console.log(res);
// }).catch(err => console.log(err));



const demo = async() => {
    try {
        let test = await prm;
        console.log(test);
        callback();
    }
    catch {

    }
}

const callback = () => {
    console.log('callback')
}

demo();

}

export default PromiseComp;