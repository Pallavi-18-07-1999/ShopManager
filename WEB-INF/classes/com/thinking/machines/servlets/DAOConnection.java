package com.thinking.machines.servlets;
import java.sql.*;

public class DAOConnection
{

public  String database;
public String username;
public String password;
public   String connectionString;
public String Driver;
public static Connection con;
public DAOConnection()
{

}

public Connection getConnection()
{
try
{
System.out.println(Driver);
Class.forName("com.mysql.cj.jdbc.Driver");
con=DriverManager.getConnection("jdbc:mysql://localhost:3306/groceries","root","Pallavi@12");
return con;

}catch(Exception e)
{
e.printStackTrace();
return null;
}
}

}

