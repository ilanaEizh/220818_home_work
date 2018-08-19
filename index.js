// Ilana Eizhviertina (308272624)

function objectSort() {
    var i = 0;
    console.log("Before:");
    printObject();

    library.forEach(function(item, i, library) {
        var ind=0;
        while(ind<item.length){
            if(item[ind]>item[ind+1]){
                var tmp = item[ind];
                item[ind] = item[ind+1];
                item[ind+1]=tmp;
            }
            ind++;
        }
            
    }); 
      
    while(i<library.length-1){
        var res = compare(library[i], library[i+1])==1;
        if(res==1){
            var tmp = library[i];
            library[i] = library[i+1];
            library[i+1]=tmp;
        }
        i++;
    }
    console.log("After:");
    printObject();
    console.log(library.toString);
}

//Function for print Object
function printObject() {
    library.forEach(function(item, i, library) {
        console.log(i + ": " + item.libraryID +", " + item.author+ ", " + item.title+ ")"); 
      });   
}

//Compere two Objects by libraryID
function compare(a, b) {
    if (a.libraryID>b.libraryID) {
      return -1;
    }
    if (a.libraryID<b.libraryID) {
      return 1;
    }
    return 0;
  }




var library = [ 
    {
        "title":  "The Road Ahead",
        "author": "Bill Gates",
        "libraryID": 1254
    },
    {
        "title": "Walter Isaacson",
        "author": "Steve Jobs",
        "libraryID": 4264
    },
    {
        "title": "Mockingjay: The Final Book of The Hunger Games",
        "author": "Suzanne Collins",
        "libraryID": 3245
    }];

   
    objectSort();