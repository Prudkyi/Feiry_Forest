window.addEventListener('scroll', e => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})




let arrowList_transport = ['BMW', 'Audio', 'Mersedes'],
    arrowList_bikes = ['Yamaha'];


const arr = new Map([
    ['Car', arrowList_transport],
    ['Bikes', arrowList_bikes]
]);

let firstList = document.getElementById("firstList");

firstList.oninput = function() {
    let valueFirstList = this.value;
    for (let mainList of arr.keys()) {
        if (mainList === valueFirstList)
        {
            let newArr = arr.get(valueFirstList);
            for (let i = 0; i < newArr.length; i++)
            {
                console.log(newArr[i])
            }
        }
    }
};
