package com.thinking.machines.servlets;
import java.util.*;
public  class CategoryBean implements java.io.Serializable
{
public List<Category> categories;
public CategoryBean()
{
categories=new LinkedList<>();
}
}