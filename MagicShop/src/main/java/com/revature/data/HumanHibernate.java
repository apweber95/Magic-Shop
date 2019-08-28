package com.revature.data;

import org.apache.catalina.Session;

import com.revature.beans.Human;
import com.revature.beans.Transaction;

public class HumanHibernate implements HumanDAO{

	//private HibernateUtil hu = HibernateUtil.getInstance();
	
	@Override
	public Human getHumanByID(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Human getHumanByLogin(String username, String password) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void createHuman(Human h) {
//		Session s = hu.getSession();
//		Transaction t = null;
//		Integer id = 0;
//		try {
//			t = s.beginTransaction();
//			id = (Integer) s.save(a);
//			t.commit();
//		} catch (HibernateException e) {
//			if(t!=null)
//				t.rollback();
//			LogUtil.logException(e, AuthorHibernate.class);
//		} finally {
//			s.close();
//		}
//		return id;
	}

	@Override
	public void updateHumanRole(Human h) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void updateHumanGold(Human h) {
		// TODO Auto-generated method stub
		
	}

}
