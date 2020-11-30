class CategoryService 
{
getAll()
{
return fetch('/my-groceries/service/CategoryMaster/getAll');
}
addCategory(category)
{

return fetch('/my-groceries/service/CategoryMaster/addCategory',{ 
method: "POST", 
body: JSON.stringify(category), 
   
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