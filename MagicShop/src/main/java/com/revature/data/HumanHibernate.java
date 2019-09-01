package com.revature.data;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.Human;
import com.revature.utils.HibernateUtil;
import com.revature.utils.LogUtil;

@Component
public class HumanHibernate implements HumanDAO{
	
	@Autowired
	private HibernateUtil hu;
	
	@Override
	public Human getHumanByID(int id) {
		Session s = hu.getSession();
		Human ret = s.get(Human.class, id);
		s.close();
		return ret;
	}

	@Override
	public Human getHumanByLogin(String username, String password) {
		Session s = hu.getSession();
		String query = "from User u where u.username=:username and u.password=:password";
		Query<Human> q = s.createQuery(query, Human.class);
		q.setParameter("username", username);
		q.setParameter("password", password);
		Human h = q.uniqueResult();
		s.close();
		return h;
	}

	@Override
	public int createHuman(Human h) {
		Session s = hu.getSession();
		Transaction t = null;
		Integer id = 0;
		try {
			t = s.beginTransaction();
			id = (Integer) s.save(h);
			t.commit();
		} catch(HibernateException e) {
			if(t != null)
				t.rollback();
			LogUtil.logException(e, HumanHibernate.class);
		} finally {
			s.close();
		}
		return id;
	}

	@Override
	public Human updateHuman(Human h) {
		Session s = hu.getSession();
		Transaction t = null;
		try{
			t = s.beginTransaction();
			s.update(h);
			t.commit();
		} catch(Exception e) {
			if(t != null)
				t.rollback();
			LogUtil.logException(e, HumanHibernate.class);
		} finally {
			s.close();
		}
		return h;
		
	}


}
