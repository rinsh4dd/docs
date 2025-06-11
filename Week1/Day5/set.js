// A Set in JavaScript is used to store a unique collection of items, meaning no duplicates are allowed.

// Sets internally use a hash table which makes search, insert and delete operations faster than arrays.
//  Please note that a hash table data structure allows these operations to be performed on average in constant time.
// Set maintains the insertion of items. When we access items, we get them in the same order as inserted.
// Only Unique Keys are allowed, if we insert the same key with a different value, it overwrites the previous one.
// A set can be created either empty or by providing an iterable like array or string.


/* How Set Internally Works in JavaScript
In JavaScript, hash tables are generally used to implement the property of unique values in the Set data structure.
 The core property of a Set is that it stores only unique values, and any duplicate values are automatically ignored.

Process of Storing Data in a Hash Table
Iteration Over Values: The first step involves iterating over all the values passed in an array,
 which is then passed to the Set constructor function. This iterator ensures that each value is processed individually.
Hashing with a Hash Function: A hash function, denoted as H(), is introduced. 
This function takes the value and converts it into a numerical index. 
The hash function’s purpose is to assign each unique value a specific index in the table.
Mapping Values to Hash Table: In this step, the respective indices for each value are mapped onto the hash table.
 For example, if the value 1 produces index 5 from the hash function, the value 1 will be stored at index 5 in memory.
Handling Duplicates: When a duplicate value is attempted to be added to the Set, the hash function produces the same index for that value.
 The algorithm then checks whether that index already contains a value. If the index is already occupied,
 the new value is discarded, and the previous value is retained, ensuring the uniqueness of values in the Set.

 */
// let set = new Set([1,2,3,4,5,6,6])
// // console.log(set)

// let uniqueVal=[...set]
// console.log(uniqueVal)



let set = new Set();
set.add(10)
set.add(20)
set.add(30)
set.add(40)
set.add(50)
set.add(60)
set.add(60)
set.add(60)


console.log(set.values())