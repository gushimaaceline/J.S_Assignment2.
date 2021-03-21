var fruit= {
    name:"avocados",
    quantity:2,
    price:30
}
console.log(fruit.quantity + " " + fruit.name + " for KES " + fruit.price*fruit.quantity);


// A function refers to a set of statements(block of cde) that return values when the function is called outside the block.

// Example of a funcrtion:

function add(x,y) {
    return x+y //returning parameters x and y
}
console.log(add(15,20))     //function callback to console the output within the given arguments of the function .

// An object collection of properties, a property is an association between a keyword(name)and value.
// A method is a function that are called or that can return value when it is associated with an object.
// Example of a object and method


const rectangle= {
    width:12,
    height:6, 
    area: function(width,height){       // This is a method function called area and consist of width and height as arguments
    return rectangle.width*rectangle.height //or
    return this.width*this.height       // this simply is a referrence, means I am refering to the object rectangle.
     
    }

    }  
    console.log(rectangle.area());  // 72. I get value of property of object by console and call the method function area.
