let speed
let speedLimit
typeof speed=== 'number'
typeof speedLimit==='number'
const points =[1,2,3,4,5,6,7,8,9,10,11,12]
let speedOverPoints
function calculatePoints(speed,speedOverPoints){
  speedOverPoints =((speed-70)%5)
  if (speedOverPoints===5){
    console.log(` ${points[0]} demerit point`)
  }
  if (speedOverPoints===10){
    console.log(` ${points[1]} demerit point`)
  }
  if (speedOverPoints===15){
    console.log(` ${points[2]} demerit point`)
  }
  if (speedOverPoints===20){
    console.log(` ${points[3]} demerit point`)
  }
  if (speedOverPoints===25){
    console.log(` ${points[4]} demerit point`)
  }
  if (speedOverPoints===30){
    console.log(` ${points[5]} demerit point`)
  }
  if (speedOverPoints===35){
    console.log(` ${points[6]} demerit point`)
  }
  if (speedOverPoints===40){
    console.log(` ${points[7]} demerit point`)
  }
  if (speedOverPoints===45){
    console.log (` ${points[8]} demerit point`)
  }
  if (speedOverPoints===50){
    console.log(` ${points[9]} demerit point`)
  }
  if (speedOverPoints===55){
    console.log(` ${points[10]} demerit point`)
  }
  if (speedOverPoints===60){
    console.log (` ${points[11]} demerit point`)
  }
  if(speedOverPoints=== >60){
    console.log('License suspended')
  }
}
function input(speed){
  if(speed=== =<70){
    console.log( 'OK')
  }
  if(speed=== >70){
    for (index of points){
        calculatePoints(speed,points)
    }
  }
}
input ()