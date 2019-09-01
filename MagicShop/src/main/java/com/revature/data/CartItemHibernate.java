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

import com.revature.beans.CartItem;
import com.revature.beans.Human;
import com.revature.utils.HibernateUtil;
import com.revature.utils.LogUtil;

@Component
public class CartItemHibernate implements CartItemDAO {
	
	@Autowired
	private HibernateUtil hibernateUtil;

	@Override
	public Integer addCartItem(CartItem cartItem) {
		Session session = hibernateUtil.getSession();
		Transaction transaction = null;
		Integer cartItemId = 0;
		try {
			transaction = session.beginTransaction();
			cartItemId = (Integer) session.save(cartItem);
			transaction.commit();
		} catch(HibernateException e) {
			if(transaction != null)
				transaction.rollback();
			LogUtil.logException(e, CartItemHibernate.class);
		} finally {
			session.close();
		}
		return cartItemId;
	}
	
	@Override
	public CartItem getCartItem(Integer cartItemId) {
		Session session = hibernateUtil.getSession();
		CartItem cartItem = session.get(CartItem.class, cartItemId);
		session.close();
		return cartItem;
	}
	
	@Override
	public Set<CartItem> getCart(Human human) {
		Session session = hibernateUtil.getSession();
		
		//Creating search criteria
		CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
		CriteriaQuery<CartItem> query = criteriaBuilder.createQuery(CartItem.class);
		Root<CartItem> root = query.from(CartItem.class);
		query.select(root).where(criteriaBuilder.equal(root.get("ownerId"), human));
		
		//Execute query and return item set
		Query<CartItem> q = session.createQuery(query);
		List<CartItem> cartItemList = q.getResultList();
		Set<CartItem> cartItemSet = new HashSet<CartItem>();
		cartItemSet.addAll(cartItemList);
		session.close();
		return cartItemSet;
	}

	@Override
	public void udateCartItem(CartItem cartItem) {
		Session session = hibernateUtil.getSession();
		Transaction transaction = null;
		try{
			transaction = session.beginTransaction();
			session.update(cartItem.getCartItemID());
			transaction.commit();
		} catch(Exception e) {
			if(transaction != null)
				transaction.rollback();
			LogUtil.logException(e, CartItemHibernate.class);
		} finally {
			session.close();
		}
	}

	@Override
	public void deleteCartItem(CartItem cartItem) {
		Session session = hibernateUtil.getSession();
		Transaction transaction = null;
		try{
			transaction = session.beginTransaction();
			session.delete(cartItem.getCartItemID());
			transaction.commit();
		} catch(Exception e) {
			if(transaction != null)
				transaction.rollback();
			LogUtil.logException(e, CartItemHibernate.class);
		} finally {
			session.close();
		}
	}

}
