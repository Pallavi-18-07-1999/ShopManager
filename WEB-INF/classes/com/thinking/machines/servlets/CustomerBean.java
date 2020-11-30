package com.thinking.machines.servlets;
import java.util.*;
public  class CustomerBean implements java.io.Serializable
{
public List<Customer> customers;
public CustomerBean()
{
customers=new LinkedList<>();
}
}