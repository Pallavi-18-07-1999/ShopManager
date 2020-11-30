package com.thinking.machines.servlets;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import com.thinking.machines.annotations.*;
@Path("/Servlet")
public class LoginService extends HttpServlet
{
@Path("/Authenticate") @ResponseType("text/html")
public void  doGet(HttpServletRequest request,HttpServletResponse response)
{
try
{
String username=request.getParameter("uname");
String password=request.getParameter("pword");
if(username.equals("Pallavi") && password.equals("Pallavi@12"))
{
System.out.println("yess");
RequestDispatcher rd=request.getRequestDispatcher("/admin/homePage.html");
rd.forward(request,response);
return;
}
else
{
response.sendRedirect("/my-groceries/admin/index.html");
}
}catch(Exception e)
{
e.printStackTrace();
}

}
}