package com.revature.data;

import com.revature.beans.Transaction;
import com.revature.data.TransactionDAO;
import com.revature.data.TransactionHibernate;
import com.revature.beans.Item;

import java.util.Set;

//import com.revature.beans.Backpack;
import com.revature.beans.Human;
import com.revature.beans.Cart;

public interface TransactionDAO {
	
	Set<org.hibernate.Transaction> getUserTransaction();

}
