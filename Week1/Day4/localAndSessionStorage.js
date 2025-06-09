/* SessionStorage:

SessionStorage is used for storing data on the client side.
Maximum limit of data saving in SessionStorage is about 5 MB.
Data in the SessionStorage exist till the current tab is open if we close the current tab then our data will also erase automatically from the SessionStorage.

Note: If after closing the current tab we press ctrl+shift+T for restoring that tab,
 then ideally in SessionStorage data should not be there but we can see that SessionStorage is maintained in the chrome, 
 firefox but not in the safari browser while restoring the tab.
 It is the browser dependent feature while restoring the tab.


 LocalStorage:

Like SessionStorage, LocalStorage also used for storing the data on the client side.
Maximum limit of data saving is about 5 MB in LocalStorage also.
LocalStorage has no expiration time, Data in the LocalStorage persist till the user manually delete it. This is the only difference between LocalStorage and SessionStorage


Here it can be seen that till we are inserting data in the form of string or number, we are able to get data correcrly! In the second last attempt we are going to inserting a plain object into key geek and when we get that item it return [object, object]
 */
LocalStorage.setItem("geek", {
"key":"value"
})
undefined
LocalStorage.getItem("geek")
"[object Object]"
// If we want to store object or something else except string/number then it must be in the form of string that is what we have done in the last attempt.

LocalStorage.setItem("geeks", JSON.stringify({
// "key":"value"
}))
undefined
LocalStorage.getItem("geeks")
// "{"key":"value"}"
// In this attempt we use JSON.stringify() method to convert an object into string.
/* 
Common methods in LocalStorage and SessionStorage:

For storing data in web storage:
LocalStorage.setItem("key", "value");  //key and value both should be string or number;
SessionStorage.setItem("key", "value");  //key and value both should be string or number;


For getting data from web storage:
LocalStorage.getItem("key");
SessionStorage.getItem("key");

Here we will pass the key and it will return value. */


// For deleting a particular key-value pair:


// LocalStorage.removeItem("key");
// SessionStorage.removeItem("key");

// when we pass key in method,
// it will erase the complete data related to that key.


// For clearing complete storage:


// LocalStorage.clear();
// SessionStorage.clear();