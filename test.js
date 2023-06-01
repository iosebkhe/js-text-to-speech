// დავაიმპორტოთ კლასი
import MyClass from "./index.js";

// მომხმარებლის მონაცემები ეიპიაისთან დასაკავშირებლად.
const credentials = {
  Email: "levan.lashauri1@gmail.com",
  Password: "Demo_1234",
};

// შექმენით კლასის ახალი ნაწილი
const myClassInstance = new MyClass(credentials);

// შეიყვანეთ ტექსტი რომელზეც უნდა დამუშავდეს
myClassInstance.text =
  "გამარჯობა, მე მქვია იოსები. როგორ ხართ? ხომ ხართ კარგად? მადლობა, ნახვამდის. მომავალ შეხვედრამდე";

// გამოიტანეთ შედეგი კონსოლში
myClassInstance.onresult = function (result) {
  var MyResult = result.AudioFilePath;
  console.log(MyResult);
};

// დაიწყეთ ტექსტის დამუშავება
myClassInstance.start();