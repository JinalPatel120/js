let price: String = "jianl";

console.log(price);

let pr: number;
pr = 21;
console.log(pr);

let sellers: number | string = 21;
console.log(sellers);

let games: string[] = ["hello", "jin a", "kji"];
console.log(games);

let funSpell: [number, string, boolean] = [21, "jinal", true];
console.log(funSpell);

function catSpell(spellId: number | string) {
  return spellId;
}

console.log(catSpell(22));

enum bookCategories {
  history,
  beasts,
  speels,
}

console.log(bookCategories.beasts);

let obj: {
  name: string;
  lname: number;
};

obj = {
  name: "jinal",
  lname: 21,
};

console.log(obj);

let option: [string, number] = ["jinal", 231];
console.log(option);

interface person {
  name: string;
  lname: string;
  age: 21;
}

let p1: person = {
  name: "jinal",
  lname: "lathiya",
  age: 21,
};

console.log(p1);

p1.name = "dixit";
console.log(p1);

interface animals {
  name: string;
}

interface birds extends animals {
  age: number;
}

let b1: birds = {
  name: "dog",
  age: 21,
};

console.log(b1);

interface student {
  name: string;
  city: string;
  age: number;
  pass: boolean;
}

let s1: student = {
  name: "jinal",
  city: "bhavnagar",
  age: 21,
  pass: true,
};
console.log(s1.city);
console.log(s1);

const BookCategories = Object.freeze({
  HISTORY: "history",
  BEASTS: "beasts",
  SPELLS: "spells",
});
BookCategories["hello"] = "jinal";

console.log(BookCategories);

interface Product {
  title: string;
  category: string;
  stocks: number;
  tags: string[];
  brand: string;
  dimensions: dimensions;
  availabilityStatus: string;
  reviews: reviews[];
}

interface dimensions {
  width: number;
  height: number;
  depth: number | undefined;
}

interface reviews {
  rating: number;
  comment: string;
  date: string;
}

const p2: Product = {
  title: "Essence Mascara Lash Princess",
  category: "beauty",
  stocks: 5,
  tags: ["beauty", "mascara"],
  brand: "Essence",

  dimensions: {
    width: 23.17,
    height: 14.43,
    depth: undefined,
  },

  availabilityStatus: "Low Stock",
  reviews: [
    {
      rating: 2,
      comment: "Very unhappy with my purchase!",
      date: "2024-05-23T08:56:21.618Z",
    },
  ],
};


type TodoPreview = Pick<Product, "title" | "category" | "stocks">;
 
const productMeta:TodoPreview ={
    title: "Essence Mascara Lash Princess",
    category: "beauty",
    stocks: 5,
}


function MyArr<T>(arg:T):T{
    return arg;
}

let mf:string=MyArr<string>('jinal lathiya');
console.log(mf)

function MyValue<T>(par:T):T{
    return par;
}

let para:string=MyValue<string>('hello')
let para1:number=MyValue<number>(12)
console.log(para)

function arrayE1<T>(arr:T[]):void{
    for(const x in arr){
        console.log(arr[x]);
    }
}

let ele:number[]=[12,32,54,65,65];
arrayE1(ele);

function createPairs<S,T>(v1:S,v2:T):[S,T]{
    return [v1,v2];
}
console.log(createPairs<string,number>('hello',42));



function mergeArrays<T,U>(arr1:T[],arr2:U[]):(T | U)[]{
    return [...arr1,...arr2];
}

const numbers:number[]=[12,32,54,76,54,32]
const str:string[]=['hello','jinal']

const myarr:(number | string)[]=mergeArrays(numbers,str)
console.log(myarr);


interface sports { 
    name:string
}
interface pagination<T>{
  page:number;
  data:Array<T>
}
const p:sports={
  name:'jianl'
}
console.log(typeof p)
function Paginate<T>(data:T):pagination<T>{
    return {page:10,data:[]};
}

// MySports({name:'jinal'})

let sports1:pagination<dimensions>=Paginate<dimensions>(p)
console.log(sports1.data)
let sp:sports={name:'baseball'};
console.log(sp)



interface veges{
    name:string
}

function Vegetables<T extends veges>(name:T):void{
    console.log(name.name);
}

let k:veges={name:'potato'}
Vegetables(k);


interface product{
    name:string,
    age:number,
    stocks:number[]}

function getProduct<T extends product>(product:T):void{
    console.log(product.age);
}

let sk=[12,32,43,54]
let pro:product={
    name:'jinal',
    age:21,
    stocks:sk
}


getProduct(pro);


function createPairs1<S,T>(v1:S,v2:T):[S,T]{
    return [v1,v2];
}

let k1:string , number=createPairs<string , number>('jinal',21)

interface Car{
  make:string;
  model:string;
  mileage?:number;
}

let myCar : Partial<Car>={
  make:'ford',
  model:'focus'
}

console.log(myCar.make='poorvi')

interface Person{
  name:string;
  age:number;
}

function printPersonProperty(person:Person,property:keyof Person){
  console.log(person);
  console.log(property);  
}

let pe={
  name:'jinal',
  age:21
}


interface sports{
  name:string
}

function MySports1<T extends sports>(sports:T):string{
  return sports.name;
}

let sp1:sports={name:'baseball'};
console.log(sp)

interface sp{
  name:string,
  age:number
}

function sp2<T extends sp>(sports:T):void{
  console.log(sports.name)
}

const k3:sp={
  name:'jinal lathiya',
  age:21
}
sp2(k3)


interface Ipprocessor<T,U>{
  result:T,
  value:U;
}

let key1:Ipprocessor<number,string>={result:21,value:"pass"}
console.log(key1)

interface Person1<T>{
name:string,
age:number,
documents:T;
}

const p3:Person1<string[]>={
  name:'jinal',
  age:21,
  documents:['hello','jinal','hi']
};

console.log(p3)

enum colors{
  red="RED",
  green='GREEN',
  blue='BLUE'
}

interface test{
  color:colors
}

const data:test={
  color:colors.red
}