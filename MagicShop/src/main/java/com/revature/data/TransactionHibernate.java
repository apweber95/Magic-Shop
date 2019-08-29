package com.revature.data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;

import com.revature.beans.Human;
import com.revature.beans.PurchaseTransaction;
import com.revature.utils.HibernateUtil;

public class TransactionHibernate implements TransactionDAO{
	
	@Autowired
	private HibernateUtil hu;

	@Override
	public Set<PurchaseTransaction> getUserTransaction(Human human) {
		// TODO Auto-generated method stub
		Session s = hu.getSession();
		String query = "FROM Transactions";
		Query<PurchaseTransaction> q = s.createQuery(query, PurchaseTransaction.class);
		List<PurchaseTransaction> transactionList = q.getResultList();
		Set<PurchaseTransaction> transactionSet = new HashSet<PurchaseTransaction>();
		transactionSet.addAll(transactionList);
		s.close();
		return transactionSet;
	}

	

}
