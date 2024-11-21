let ax:string="jinal";
ax="hina";


//typescript types - any which disabled type checking and effectively allows all types.

let u=true;
// u="hello";
let ad:any=true;
ad="string";
Math.round(ad);


//unknown is similar but safer alternative to any.
let w:unknown=1;
w="string";
w={
    runANonExistentMethod:() =>{
        console.log("I think there for i am");
    }
}  as {runANonExistentMethod:()=> void}

if(typeof w=== 'object' && w!== null){
    (w as {runANonExistentMethod:Function}).runANonExistentMethod();
}

// let a:never=true; never is rarely used, especially by itself,
// undefined and null

let y:undefined=undefined;
let ak:null=null;

//typescript arrays
const names:string[]=["hello",'jinal','dixit'];
names.push('ekta');
console.log(names);

const nz:readonly string[]=['hello']
// nz.push("jack")

let ourTuple:[number,boolean,string];
ourTuple=[5,false,'hello'];

ourTuple.push("something new");
console.log(ourTuple);

const car6:{type:string,model:string,year:number}={
    type:"toyoto",
    model:"hello",
    year:2009
};


const car9={
    type:"toyoto",
};
car9.type="ford";




  interface IXyz {
    
    name:string,
    roll:number
  }

//   interface IAbc{

//   }


 const xyz:IXyz={
    info: {
      name:"jinal",
      roll:26
    }
  };
  
  console.log(xyz)
