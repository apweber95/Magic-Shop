package com.revature.data;

import com.revature.beans.PurchaseTransaction;

import java.util.Set;

import com.revature.beans.Human;


public interface TransactionDAO {
	
	Set<PurchaseTransaction> getUserTransaction(Human human);

}
