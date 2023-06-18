
import { Button, View } from 'react-native';

import {collection, getDocs ,addDoc,Timestamp} from 'firebase/firestore';

import { doc, setDoc ,getDoc} from "firebase/firestore";

import {db} from './firebaseconfig.js';

async function writeData() {
  // await setDoc(doc(db, "bse5Bstudents", "123"), {
  //   name: "Jamil Ahmed",
  //   age: "22"    
  // });
  // try {
  //   const docRef = await addDoc(collection(db, "bse5Bstudents"), {
  //     age: 31,
  //     name: "Qazi Mashood Ahmed",
  //   });
  //   console.log("Document written with ID: ", docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }
  await setDoc(doc(db, "cities", "LA"), {
    name: "Los ANgel",
    state: "USA",
    country: "USA"
  });
 
}

async function readData() {
  
  // const userSnapshot = await getDocs( collection(db, "cities") );
  // const userList = userSnapshot.docs.map(doc => doc.data()); 

  // console.log(userList);
  const docRef = doc(db, "cities", "LA");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
  
}
function mergeData()
{
  const cityRef = doc(db, 'cities', 'BJ');
  setDoc(cityRef, { capital: true }, { merge: false });
}
async function differentdatatypes()
{
  const docData = {
    stringExample: "Hello world!",
    booleanExample: true,
    numberExample: 3.14159265,
    dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
    arrayExample: [5, true, "hello"],
    nullExample: null,
    objectExample: {
        a: 5,
        b: {
            nested: "foo"
        }
    }
};
await setDoc(doc(db, "BJ", "one"), docData);
}
//// working with custom objects
class City {
  constructor (name, state, country,color ) {
      this.name = name;
      this.state = state;
      this.country = country;
      this.color=color;
  }
  toString() {
      return this.name + ', ' + this.state + ', ' + this.country+','+this.color;
  }
}

// Firestore data converter
const cityConverter = {
  toFirestore: (city) => {
      return {
          name: city.name,
          state: city.state,
          country: city.country,
          color:city.color
          };
  },
  fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      return new City(data.name, data.state, data.country,data.color);
  }
};


async function customobj() {
  

  const ref = doc(db, "cities", "LA").withConverter(cityConverter);
  await setDoc(ref, new City("Califonia", "SA", "USA","white"));

}
//reading custom objects
async function readcustomobj()
{
  const ref = doc(db, "cities", "LA").withConverter(cityConverter);
const docSnap = await getDoc(ref);
if (docSnap.exists()) {
  // Convert to City object
  const city = docSnap.data();
  // Use a City instance method
  console.log(city.toString());
} else {
  console.log("No such document!");
}
}
//// Adding new doc with auto generated id
// Add a new document with a generated id.
async function adddocumnets()
{
const docRef = await addDoc(collection(db, "cities"), {
  name: "Tokyo",
  country: "Japan"
});

console.log("Document written with ID: ", docRef.id);
}
const App = () => {   
  return (

<View
style = {{marginTop: 50}}
>   
   <Button   
   title='Write Data'
   onPress={ () => writeData()} 
    />

   <Button
   title='Read Data'
   onPress={ () => readData()} 
    />
    <Button
   title='Merge Data'
   onPress={ () => mergeData()} 
    />
      <Button
   title='Working with differnts data types'
   onPress={ () => differentdatatypes()} 
    />
      <Button
   title='Working with custom objects'
   onPress={ () => customobj()} 
    />
      <Button
   title='Reading custom objects'
   onPress={ () => readcustomobj()} 
    />
      <Button
   title='Create new doc'
   onPress={ () => adddocumnets()} 
    />

   </View>
   );
}

export default App;