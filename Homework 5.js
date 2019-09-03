function digits( number ) {

    let result ;
    if ( number.toString() === '0' ) {
        result = '' ;
    } else if ( number.toString() === '1' ) {
        result = 'one' ;
    } else if ( number.toString() === '2' ) {
        result = 'two' ;
    } else if ( number.toString() === '3' ) {
        result = 'three' ;
    } else if ( number.toString() === '4' ) {
        result = 'four' ;
    } else if ( number.toString() === '5' ) {
        result = 'five' ;
    } else if ( number.toString() === '6' ) {
        result = 'six' ;
    } else if ( number.toString() === '7' ) {
        result = 'seven' ;
    } else if ( number.toString() === '8' ) {
        result = 'eight' ;
    } else if ( number.toString() === '9' ) {
        result = 'nine' ;
    }
    return result ;
}

function th10uniqueDigits( number ) {
    let result ;
    if ( number.toString() === '10' ) {
        result = 'ten' ;
    } else if ( number.toString() === '11' ) {
        result = 'eleven' ;
    } else if ( number.toString() === '12' ) {
        result = 'twelve' ;
    } else if ( number.toString() === '13' ) {
        result = 'thirteen' ;
    } else if ( number.toString() === '14' ) {
        result = 'fourteen' ;
    } else if ( number.toString() === '15' ) {
        result = 'fifteen' ;
    } else if ( number.toString() === '16' ) {
        result = 'sixteen' ;
    } else if ( number.toString() === '17' ) {
        result = 'seventeen' ;
    } else if ( number.toString() === '18' ) {
        result = 'eightee' ;
    } else if ( number.toString() === '19' ) {
        result = 'nineteen' ;
    } else if ( number.toString() === '20' ) {
        result = 'twenty' ;
    } else if ( number.toString() === '30' ) {
        result = 'thirty' ;
    } else if ( number.toString() === '40' ) {
        result = 'forty' ;
    } else if ( number.toString() === '50' ) {
        result = 'fifty' ;
    } else if ( number.toString() === '60' ) {
        result = 'sixty' ;
    } else if ( number.toString() === '70' ) {
        result = 'seventy' ;
    } else if ( number.toString() === '80' ) {
        result = 'eighty' ;
    } else if ( number.toString() === '90' ) {
        result = 'ninety' ;
    }
    return result ;
}

function th10iqueDigits ( number ) {
    return `${ th10uniqueDigits( +( number.toString().slice( 0 , 1 ) + '0' ) )} ${ digits( number.toString().slice( 1 , 2 ) ) }` ;
} 

function divideDigits( number ) {
    if ( number.toString().length === 1 ) {
        return digits( number.toString() ) ;
    } 
    if ( number.toString().length === 2 ) {
        if ( number > 21 && number.toString().slice( 1 , 2 ) === '0' || number < 21  ) {
            return th10uniqueDigits( number ) ;
        }
        return th10iqueDigits( number ) ;
    }
    if ( number.toString().length === 3 ) {
        if ( number === 100 ) {
            return 'one hundred' ;
        }
            return `${ divideDigits( +number.toString().slice( 0 , 1) ) } hundred ${ divideDigits( +number.toString().slice( 1 , 3 ) ) } ` ;
    }
    if ( number.toString().length === 4 ) {
        if ( number === 1000 ) {
            return 'one thousand' ;
        }
        return `${ divideDigits( +number.toString().slice( 0 , 1) ) } thousand ${ divideDigits( +number.toString().slice( 1 , 4) ) } ` ;
    }
    if ( number.toString().length === 5 ) {
        if ( number === 10000 ) {
            return 'ten thousand' ;
        }
        return `${ divideDigits( +number.toString().slice( 0 , 2) ) } thousand ${ divideDigits( +number.toString().slice( 2 , 5) ) }` ; 
    }
    if ( number.toString().length === 6 ) {
        if ( number === 100000 ) {
            return 'one hundred one thousand' ;
        }
        return `${ divideDigits( +number.toString().slice( 0 , 3) ) } thousand ${ divideDigits( +number.toString().slice( 3 , 6) ) }` ;
    }
}

console.log( divideDigits( 80000 ) ) ;







//         2







let arr = [ 5 , 9 , 23 , 0 , -2 , -1 ] ;

function divideArr( arr ) {
    let newArr = [] ;
    for ( let i = 0 ; i < arr.length ; i++ ) {
        for ( let j = i + 1 ; j < arr.length ; j++ ) {
            for ( let k = j + 1 ; k < arr.length ; k++ ) {
                newArr.push( [ arr[i] , arr[j] , arr[k] ] ) ;
            }
        }
    }
    return newArr ;
}

console.log( divideArr( arr ) ) ;






//          3




let arrOne = [ 'enlists' , 'google' , 'inlets' , 'banana' ] ;
let arrTwo = [ 'licnep' , 'circular' , 'pupil' , 'nilcpe' , 'leppnec' ] ;
let strOne = 'listen' ;
let strTwo = 'pencil' ;

function repeatArrDigits( str , arr ) {
    let result = [] ;
    let newStrArr = str.split('') ;
    newStrArr.sort() ;
    for ( let value of arr ) {
        let item = value ;
        if ( ( item.split('').sort() ).join() === newStrArr.join() ) {
            result.push( value ) ;
        }
    }
    return result ;
}

console.log( repeatArrDigits( strTwo , arrTwo ) ) ; 





//         4







let arr = [ [2 , -3 , -9 , 0] , [1 , 2] , [-4 , -11 , 0] ] ;
// let arr = [ [3 , 4] , [11 , 0] , [5 , 6 , 7 , 8] ] ;
// let arr = [ 1 , 2 , 3 ] ;

function multipleMaxNegativeArrDigits( arr = [] ) {
    debugger ;
    let realyArr = arr.filter( item => Array.isArray( item ) ) ;
    if ( realyArr.length !== arr.length ) {
        return 'Invalid Argument' ;
    }
    let negativeArr = [] ;
    for ( let value of realyArr ) {
        if ( value.filter( item => item < 0 ).length > 0 ) {
            negativeArr.push( value.filter( item => item < 0 ) ) ;
        }
    }
    if (negativeArr.length === 0) {
        return 'No negatives' ;
    }
    let sum = 1 ;
    for ( let value of negativeArr ) {
        sum *= Math.max.apply( null , value ) ;
    }
    return sum ;
 }

console.log( multipleMaxNegativeArrDigits( arr ) ) ;
