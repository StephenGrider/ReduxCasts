export default function(state, action) {
    
    //my data init
    const initData = [
    { title: "Javascript: The Good Parts", pages: 101 },
    { title: "Harry Potter", pages: 39 },
    { title: "The Dark Tower", pages: 85 },
    { title: "Eloquent Ruby", pages: 1 }
  ];
    
    //my action to select in the list
    switch(action.type){
        case "BOOK_SELECTED":
           initData.map(selcbook => {
                selcbook.title === action.payload.title ? selcbook.title+=' --selected--' : '';
               //selcbook.title === action.payload.title ? console.log(selcbook.title) : '';
               
           });
    }
    
  return initData
}
