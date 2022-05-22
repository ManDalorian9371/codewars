function longest(s1, s2) {
    let ref = 'abcdefghijklmnopqrstuvwxyz'
    ref = ref.split('')
    let input = s1 +s2
    let res = []
    ref.forEach((x,i)=> {
      if (input.indexOf(x) != -1){
        res.push(x)
      }
    })
    
    return res.join('')
  }