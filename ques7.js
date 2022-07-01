class shape {
    
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get width() {
        return this.width;
    }

    get height() {
        return this.height;
    }
    
  }
class rectangle extends shape {
    constructor() {
        
        
        super(width);
        super(height);
    }
     area()
    {
        return (Width*Height);
    }
        
}
class triangle extends  shape{
    constructor() {
        
        
        super(width);
        super(height);
        
    }
    area()
    {
        return ((Width*Height))/2.0;
    }
}
let shapeval=new shapeval(5,6); 
let trianglevalue = new triangle();
let rectanglevalue = new rectangle();
rectanglevalue.area();
trianglevalue.area();