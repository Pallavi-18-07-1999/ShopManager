package com.thinking.machines.servlets;
import com.thinking.machines.annotations.*;
import java.io.*;
import java.util.*;
import com.google.gson.*;
@Path("/CategoryMaster")
public class CategoryMaster
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
@Path("/addCategory") @ResponseType("application/json")
public AJAXResponse addCategory(Category category)
{
try
{
System.out.println("add Category method chali");
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
AJAXResponse ajaxResponse =new AJAXResponse();
ajaxResponse.success=false;
ajaxResponse.response=null;
ajaxResponse.exception="this category cant be added";
return ajaxResponse;
}
i++;
}
cb.categories.add(category);
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
@Path("/getAll") @ResponseType("application/json")
public AJAXResponse getAll()
{
try
{
Thread.sleep(5000);
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
System.out.println(responseString);
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