package com.revature.data;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.revature.data.TransactionDAO;

import oracle.net.aso.q;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.StoredProcedureQuery;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;

import com.revature.beans.Human;
//import com.revature.beans.Transaction;
import com.revature.data.TransactionDAO;
import com.revature.utils.HibernateUtil;
import com.revature.utils.LogUtil;

public class TransactionHibernate implements TransactionDAO{
	
	@Autowired
	private HibernateUtil hu;

	@Override
	public Set<Transaction> getUserTransaction() {
		// TODO Auto-generated method stub
		Session s = hu.getSession();
		String query = "FROM Transactions";
		Query<Transaction> q = s.createQuery(query, Transaction.class);
		List<Transaction> transactionList = q.getResultList();
		Set<Transaction> transactionSet = new HashSet<Transaction>();
		transactionSet.addAll(transactionList);
		s.close();
		return transactionSet;
	}

	

}
