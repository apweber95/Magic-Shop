package com.revature.data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.BackpackItem;
import com.revature.utils.HibernateUtil;
import com.revature.utils.LogUtil;

@Component
public class BackpackItemHibernate implements BackpackItemDAO {
	@Autowired
	private HibernateUtil hu;
	
	@Override
	public BackpackItem addBackpackItem(BackpackItem b) {
		Session s = hu.getSession();
		Transaction t = null;
		BackpackItem bp = new BackpackItem();
		try {
			t = s.beginTransaction();
			bp = (BackpackItem) s.save(b);
			t.commit();
		}
		catch(HibernateException e) {
			if(t != null) {
				t.rollback();
			}
			LogUtil.logException(e, BackpackItemHibernate.class);
		}
		finally {
			s.close();
		}
		return bp;
	}

	@Override
	public BackpackItem getBackpackItemByID(int id) {
		Session s = hu.getSession();
		BackpackItem bp = s.get(BackpackItem.class, id);
		s.close();
		return bp;
	}

	@Override
	public Set<BackpackItem> getBackpackItemsByOwnerID(int id) {
		Session s = hu.getSession();
		
		//Creating search criteria
		CriteriaBuilder critBuilder = s.getCriteriaBuilder();
		CriteriaQuery<BackpackItem> query = critBuilder.createQuery(BackpackItem.class);
		Root<BackpackItem> root = query.from(BackpackItem.class);
		query.select(root).where(critBuilder.equal(root.get("ownerID"), id));
		
		//Execute query and return item set
		Query<BackpackItem> q = s.createQuery(query);
		List<BackpackItem> bpItemList = q.getResultList();
		Set<BackpackItem> bpItemSet = new HashSet<BackpackItem>();
		bpItemSet.addAll(bpItemList);
		s.close();
		
		return bpItemSet;
	}

	@Override
	public void updateBackpackItem(BackpackItem b) {
		Session s = hu.getSession();
		Transaction t = null;
		try {
			t = s.beginTransaction();
			s.update(b);
			t.commit();
		}
		catch(HibernateException e) {
			if(t != null) {
				t.rollback();
			}
			LogUtil.logException(e, BackpackItemHibernate.class);
		}
		finally {
			s.close();
		}
	}

}
