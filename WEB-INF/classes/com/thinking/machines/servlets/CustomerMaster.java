package com.thinking.machines.servlets;
import com.thinking.machines.annotations.*;
import java.io.*;
import java.util.*;
import com.google.gson.*;
import java.sql.*;
@Path("/CustomerMaster")
public class CustomerMaster
{
@Path("/deleteCategory") @ResponseType("application/json")
public AJAXResponse deleteCategory(@RequestData("code") int code)
{
try
{
System.out.println("editCategory chala");
BufferedReader br=new BufferedReader(new FileReader("c:"+File.separator+"Tomcat9"+File.separator+"webapps"+File.separator+"my-groceries"+File.separator+"jsonFiles"+File.separator+"Category.json"));
StringBuilder sb=new StringBuilder();
while(true)
{
String line=br.readLine();
if(line==null) break;
sb.append(line);
}
String responseString=sb.toString();
Gson gson=new Gson();
CategoryBean cb=new CategoryBean();
cb=gson.fromJson(responseString,CategoryBean.class);
int i=0;
for(Category c:cb.categories)
{
if(c.code==code)
{
cb.categories.remove(i);
break;
}
i++;
}
String jsonString=gson.toJson(cb);
FileWriter fw =new FileWriter("c:"+File.separator+"Tomcat9"+File.separator+"webapps"+File.separator+"my-groceries"+File.separator+"jsonFiles"+File.separator+"Category.json",false);
fw.write(jsonString);
fw.close();
AJAXResponse ajaxResponse=new AJAXResponse();
ajaxResponse.response=null;
ajaxResponse.success=true;
ajaxResponse.exception="";
return ajaxResponse;
}catch(Exception e)
{
e.printStackTrace();
}
return null;
}
@Path("/editCategory") @ResponseType("application/json")
public AJAXResponse editCategory(Category category)
{
try
{
System.out.println("editCategory chala");
BufferedReader br=new BufferedReader(new FileReader("c:"+File.separator+"Tomcat9"+File.separator+"webapps"+File.separator+"my-groceries"+File.separator+"jsonFiles"+File.separator+"Category.json"));
StringBuilder sb=new StringBuilder();
while(true)
{
String line=br.readLine();
if(line==null) break;
sb.append(line);
}
String responseString=sb.toString();
Gson gson=new Gson();
CategoryBean cb=new CategoryBean();
cb=gson.fromJson(responseString,CategoryBean.class);
int i=0;
for(Category c:cb.categories)
{
if(c.code==category.code)
{
cb.categories.get(i).title=category.title;
break;
}
i++;
}
String jsonString=gson.toJson(cb);
FileWriter fw =new FileWriter("c:"+File.separator+"Tomcat9"+File.separator+"webapps"+File.separator+"my-groceries"+File.separator+"jsonFiles"+File.separator+"Category.json",false);
fw.write(jsonString);
fw.close();
AJAXResponse ajaxResponse=new AJAXResponse();
ajaxResponse.response=null;
ajaxResponse.success=true;
ajaxResponse.exception="";
return ajaxResponse;
}catch(Exception e)
{
e.printStackTrace();
}
return null;
}
@Path("/addCustomer") @ResponseType("application/json")
public AJAXResponse addCustomer(Customer customer)
{
try
{
System.out.println("add Customer method chali");
Connection connection =new DAOConnection().getConnection();
String statement="insert into customer(name,username,password,address,mobileNumber) values(?,?,?,?,?)";
PreparedStatement ps=connection.prepareStatement(statement);
ps.setString(1,customer.name);
ps.setString(2,customer.username);
ps.setString(3,customer.password);
ps.setString(4,customer.address);
ps.setString(5,customer.mobileNumber);
ps.executeUpdate();
AJAXResponse ajaxResponse=new AJAXResponse();
ajaxResponse.response=null;
ajaxResponse.success=true;
ajaxResponse.exception="";
return ajaxResponse;
}catch(Exception e)
{
e.printStackTrace();
}
return null;
}
@Path("/getAll") @ResponseType("application/json")
public AJAXResponse getAll()
{
try
{
Thread.sleep(5000);
Connection connection =new DAOConnection().getConnection();
String statement="select * from customer";
PreparedStatement ps=connection.prepareStatement(statement);
ResultSet rs=ps.executeQuery();
List<Customer> list=new LinkedList<>();
while(rs.next())
{
Customer customer=new Customer();
customer.name=rs.getString("name");
customer.username=rs.getString("username");
customer.password=rs.getString("password");
customer.address=rs.getString("address");
customer.mobileNumber=rs.getString("mobileNumber");
list.add(customer);
}
Gson gson=new Gson();
CustomerBean cb=new CustomerBean();
cb.customers=list;
AJAXResponse ajaxResponse=new AJAXResponse();
ajaxResponse.response=cb;
ajaxResponse.success=true;
ajaxResponse.exception="";
return ajaxResponse;
}catch(Exception e)
{
e.printStackTrace();
}
return null;
}
}