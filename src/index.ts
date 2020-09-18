//Array
//last
//makeArr: 2 generics, return, overwrite inference, default value
//addFullName: extends
//interfaces
//pops
//useState
//jsx generic

//type numArray = Array<number>
const last = <T>(arr: Array<T>): T => {
  return arr[arr.length - 1]; //return the last element of an array
};

const fruits = ["apple", "orange", "banana"];
const evenNumber = [2, 4, 6, 8, 10];
const booleanArray = [true, false, false, true, false];

/*console.log(last(fruits));
console.log(last(evenNumber));
console.log(last(booleanArray));*/

const lastFruit = last(fruits);
const lastEvenNo = last<Number>(evenNumber);
const lastBoolValue = last(booleanArray);

const makeArray = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y]; //returning tuple
};

const v = makeArray(5, 6);
const v1 = makeArray<string, number>("Hello", 6);
const v2 = makeArray(5, "Hello World");
const v3 = makeArray<string | null, string>("Type", "Script");

// have to be at least 'firstName and lastName'
const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`,
  };
};

/*interface user {
  firstName: string;
  lastName: string;
}*/

const userOne = {
  firstName: "Htun",
  lastName: "Aung Kyaw",
  age: 23,
};

const value4 = makeFullName(userOne);
console.log(value4);

// -----------------interface and generic -----------------
//any
/*interface Tab {
  id: string;
  position: number;
  data: any;
}*/

//generic
interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

//the following code is  =>
//type numberTab = Tab<number>;
//equivalent to the following =>
type numberTab = {
  id: String;
  position: number;
  data: number;
};
type stringTab = Tab<string>;
type booleanTab = Tab<boolean>;
