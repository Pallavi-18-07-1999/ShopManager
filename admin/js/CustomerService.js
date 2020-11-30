class CustomerService 
{
getAll()
{
return fetch('/my-groceries/service/CustomerMaster/getAll');
}
addCustomer(customer)
{

return fetch('/my-groceries/service/CustomerMaster/addCustomer',{ 
method: "POST", 
body: JSON.stringify(customer), 
   
});
}
editCategory(category)
{

return fetch('/my-groceries/service/CategoryMaster/editCategory',{ 
 method: "POST", 
 body: JSON.stringify(category), 
   
});
}
deleteCategory(code)
{

return fetch('/my-groceries/service/CategoryMaster/deleteCategory?code='+code);
}
}