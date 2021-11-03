//Main
function area(shape, width, height) {
    var area = 0
  
    if(shape === "triangle"){
      area = width * height / 2
    }else if(shape === "rectangle"){
      area = width * height
    }else if(shape === "circle"){
      area = Math.PI * width * width
    }
  
    return area
}

//Exporter
module.exports = {
    area: area
}
