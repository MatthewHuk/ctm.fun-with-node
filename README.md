## Welcome to NodeJs

![alt text](./ctm-blue-logo.jpeg)


### Overview

For this exercise, please use the following dataset of meerkat users.

```javascript
const meerkats=[
    {name: "Aleksandr", age: 30},
    {name: "Auto Sergei", age:77},
    {name: "Maiya", age: 25},
    {name: "Meer Kat", age: 25},
    {name: "Oleg", age: 5},
    {name: "Hannah", age: 20}
];
```

This exercise is split into multiple steps. Each step will require you to add or extract some information from the Meerkats dataset and print it on the console.

### Step 1
Create a variable with a new Meerkat, and add it to the above array of Meerkats.  
Example output:
```
[
  { name: 'Aleksandr', age: 30 },
  { name: 'Auto Sergei', age: 77 },
  { name: 'Maiya', age: 25 },
  { name: 'Meer Kat', age: 25 },
  { name: 'Oleg', age: 5 },
  { name: 'Hannah', age: 20 },
  { name: 'My new meerkat', age: 9 }
]
````

### Step 2
Remove from the list any Meerkat who is under the age of 10.  
Example output:  
```
[
  { name: 'Aleksandr', age: 30 },
  { name: 'Auto Sergei', age: 77 },
  { name: 'Maiya', age: 25 },
  { name: 'Meer Kat', age: 25 },
  { name: 'Hannah', age: 20 }
]
```

### Step 3
Replace the names of all Meerkats to be all lower case letters  
Example output:  
```
[
  { name: 'aleksandr', age: 30 },
  { name: 'auto sergei', age: 77 },
  { name: 'maiya', age: 25 },
  { name: 'meer kat', age: 25 },
  { name: 'hannah', age: 20 }
]
```
### Step 4
Add up the total age of all the meerkats in the list.  
Example output:   
```
177
```

### Step 5
List the name of any Meerkat whose name is a Palindrome.  
Example output:  
```
hannah
```

### Step 6
Arrange the list of Meerkets by age, lowest to highest.  
Example output:  
```
[
  { name: 'hannah', age: 20 },
  { name: 'maiya', age: 25 },
  { name: 'meer kat', age: 25 },
  { name: 'aleksandr', age: 30 },
  { name: 'auto sergei', age: 77 }
]
```

### Step 7
Remove the white space in all the Meerkats names.  
Example output:  
```
[
  { name: 'hannah', age: 20 },
  { name: 'maiya', age: 25 },
  { name: 'meerkat', age: 25 },
  { name: 'aleksandr', age: 30 },
  { name: 'autosergei', age: 77 }
]
```

### Step 8

Find the Factorial of Baby Olegs age.
* For example Oleg is 5.  The factorial of 5 is 120.
* It is calculated by multiplying 5 with 4 and its result with 3 and its result with 2, and its result with 1    
Example output:  
```
120
```

## Tips

* The solution doesn't need to be optimised. Please aim for a working solution first.
* You can 'google' if you need to research or refresh your memory on any JavaScript function you may use.

## Running the included javascript file

```
node meerkat.js 
```
