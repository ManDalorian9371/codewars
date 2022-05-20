
function dirReduc(arr){
    2
      let arr2 = arr
    3
    arr.forEach((x,i,a)=>{
    4
      if (x=== 'NORTH' && arr[i+1]==='SOUTH'  || x=== 'EAST' && arr[i+1]==='WEST' || x=== 'SOUTH' && arr[i+1]==='NORTH' || x=== 'WEST' && arr[i+1]==='EAST' ){
    5
        arr2.splice(i,2)
    6
      }
    7
    })
    8
      arr2.forEach((x,i,a)=>{
    9
      if (x=== 'NORTH' && arr2[i+1]==='SOUTH'  || x=== 'EAST' && arr2[i+1]==='WEST' || x=== 'SOUTH' && arr2[i+1]==='NORTH' || x=== 'WEST' && arr2[i+1]==='EAST' ){
    10
        arr2.splice(i,2)
    11
      }
    12
    })
    13
        arr2.forEach((x,i,a)=>{
    14
      if (x=== 'NORTH' && arr2[i+1]==='SOUTH'  || x=== 'EAST' && arr2[i+1]==='WEST' || x=== 'SOUTH' && arr2[i+1]==='NORTH' || x=== 'WEST' && arr2[i+1]==='EAST' ){
    15
        arr2.splice(i,2)
    16
      }
    17
    })
    18
    ​
    19
    return arr2
    20
    }
     