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

import com.revature.beans.Item;
import com.revature.utils.HibernateUtil;
import com.revature.utils.LogUtil;

@Component
public class ItemHibernate implements ItemDAO{
	@Autowired
	private HibernateUtil hu;
	
	@Override
	public Integer addItem(Item i) {
		Session s = hu.getSession();
		Transaction t = null;
		Integer id = 0;
		try {
			t = s.beginTransaction();
			id = (Integer) s.save(i);
			t.commit();
		} catch(HibernateException e) {
			if(t != null)
				t.rollback();
			LogUtil.logException(e, ItemHibernate.class);
		} finally {
			s.close();
		}
		return id;
	}
	
	@Override
	public Item getItemById(Integer id) {
		Session s = hu.getSession();
		Item i = s.get(Item.class, id);
		s.close();
		return i;
	}
	
	@Override
	public Set<Item> getItemsByRarity(String rarity) {
		Session s = hu.getSession();
	
		//Creating search criteria
		CriteriaBuilder critBuilder = s.getCriteriaBuilder();
		CriteriaQuery<Item> query = critBuilder.createQuery(Item.class);
		Root<Item> root = query.from(Item.class);
		query.select(root).where(critBuilder.equal(root.get("rarity"), rarity));
		
		//Execute query and return item set
		Query<Item> q = s.createQuery(query);
		List<Item> itemList = q.getResultList();
		Set<Item> itemSet = new HashSet<Item>();
		itemSet.addAll(itemList);
		s.close();
		return itemSet;
	}
	
	@Override
	public Set<Item> getAllItems() {
		Session s = hu.getSession();
		String query = "FROM Item";
		Query<Item> q = s.createQuery(query, Item.class);
		List<Item> itemList = q.getResultList();
		Set<Item> itemSet = new HashSet<Item>();
		itemSet.addAll(itemList);
		s.close();
		return itemSet;
	}
}
