
const pi=3.1415
const math={}
function suma(x1,x2){
    return x1+x2
}
function resta(x1,x2){
    return x1-x2
}
function multiply(x1,x2){
    return x1*x2
}
function divide(x1,x2){
    return x1/x2
}

math.add=suma
math.substract=resta
math.multiply=multiply
math.divide=divide
math.wi=pi

module.exports=math